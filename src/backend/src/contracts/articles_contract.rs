use candid::{CandidType, Principal};
use ic_cdk::api::{caller, time};
use ic_cdk_macros::{query, update};
use serde::Deserialize;
use std::cell::RefCell;
use std::collections::HashMap;

#[derive(CandidType, Deserialize, Clone, PartialEq, Eq)]
pub enum Status {
    Published,
    Draft,
}

#[derive(CandidType, Deserialize, Clone)]
pub struct Article {
    id: u64,
    roadmap_item_id: u64,
    title: String,
    content: String,
    like_count: u64,
    likes: Vec<Principal>,
    author: Principal,
    day: u64,
    status: Status,
    created_at: u64,
    updated_at: u64,
}

thread_local! {
    static ARTICLE_ID: RefCell<u64> = RefCell::new(1);
    static ARTICLES: RefCell<HashMap<u64, Article>> = RefCell::new(HashMap::new());
}

#[query]
fn get_articles() -> Vec<Article> {
    ARTICLES.with(|articles| {
        articles
            .borrow()
            .values()
            .filter(|article| article.status == Status::Published)
            .cloned()
            .collect()
    })
}

#[query]
fn get_article(id: u64) -> Option<Article> {
    ARTICLES.with(|articles| {
        articles.borrow().get(&id).and_then(|article| {
            if article.status == Status::Draft && article.author != caller() {
                None
            } else {
                Some(article.clone())
            }
        })
    })
}

#[update]
fn create_article(
    roadmap_item_id: u64,
    title: String,
    content: String,
    day: u64,
    status: Status,
) -> Result<Article, String> {
    if caller() == Principal::anonymous() {
        return Err("Anonymous user not allowed to create article.".to_string());
    }

    if title.is_empty() || content.is_empty() || day == 0 {
        return Err("Invalid input".to_string());
    }

    let id = ARTICLE_ID.with(|id_counter| {
        let current_id = *id_counter.borrow();
        *id_counter.borrow_mut() += 1;
        current_id
    });

    let article = Article {
        id,
        roadmap_item_id,
        title,
        content,
        like_count: 0,
        likes: Vec::new(),
        author: caller(),
        day,
        status,
        created_at: time() / 1_000_000,
        updated_at: time() / 1_000_000,
    };

    ARTICLES.with(|articles| articles.borrow_mut().insert(id, article.clone()));

    ic_cdk::println!(
        "Roadmap item {} updated for article {}",
        roadmap_item_id,
        id
    );

    Ok(article)
}

#[update]
fn like_article(id: u64) -> bool {
    ARTICLES.with(|articles| {
        let mut articles = articles.borrow_mut();
        if let Some(article) = articles.get_mut(&id) {
            if article.author == caller() {
                return false;
            }

            if article.likes.contains(&caller()) {
                return false;
            }

            article.like_count += 1;
            article.likes.push(caller());
            article.updated_at = time() / 1_000_000;

            true
        } else {
            false
        }
    })
}

#[update]
fn update_article(
    id: u64,
    roadmap_item_id: Option<u64>,
    title: Option<String>,
    content: Option<String>,
    day: Option<u64>,
    status: Option<Status>,
) -> Result<Article, String> {
    ARTICLES.with(|articles| {
        let mut articles = articles.borrow_mut();
        if let Some(article) = articles.get_mut(&id) {
            if article.author != caller() {
                return Err("Unauthorized to update this article".to_string());
            }

            if let Some(new_title) = title {
                if new_title.is_empty() {
                    return Err("Title cannot be empty".to_string());
                }
                article.title = new_title;
            }

            if let Some(new_content) = content {
                if new_content.is_empty() {
                    return Err("Content cannot be empty".to_string());
                }
                article.content = new_content;
            }

            if let Some(new_day) = day {
                if new_day == 0 {
                    return Err("Invalid day value".to_string());
                }
                article.day = new_day;
            }

            if let Some(new_status) = status {
                article.status = new_status;
            }

            if let Some(new_roadmap_item_id) = roadmap_item_id {
                article.roadmap_item_id = new_roadmap_item_id;
            }

            article.updated_at = time() / 1_000_000;

            Ok(article.clone())
        } else {
            Err("Article not found".to_string())
        }
    })
}

#[update]
fn delete_article(id: u64) -> Result<bool, String> {
    ARTICLES.with(|articles| {
        let mut articles = articles.borrow_mut();
        if let Some(article) = articles.get(&id) {
            if article.author != caller() {
                return Err("Unauthorized to delete this article".to_string());
            }

            articles.remove(&id);
            Ok(true)
        } else {
            Err("Article not found".to_string())
        }
    })
}
