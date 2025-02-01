use candid::{CandidType, Principal};
use ic_cdk::api::{caller, time};
use ic_cdk_macros::{query, update};
use serde::Deserialize;
use std::cell::RefCell;
use std::collections::HashMap;

const THIRTY_DAYS_IN_NANOS: u64 = 30 * 24 * 60 * 60 * 1_000_000_000;

#[derive(CandidType, Deserialize, Clone)]
pub struct Roadmap {
    id: u64,
    title: String,
    description: String,
    user: Principal,
    status: String,
    start_at: u64,
    end_at: u64,
    created_at: u64,
    updated_at: u64,
}

#[derive(CandidType, Deserialize, Clone)]
pub struct RoadmapItem {
    id: u64,
    roadmap_id: u64,
    title: String,
    description: String,
    status: String,
    day: u64,
    article_id: Option<u64>,
    result: Option<String>,
    user: Principal,
    created_at: u64,
    updated_at: u64,
}

thread_local! {
    static ROADMAP_ID: RefCell<u64> = RefCell::new(1);
    static ROADMAP_ITEM_ID: RefCell<u64> = RefCell::new(1);
    static ROADMAPS: RefCell<HashMap<u64, Roadmap>> = RefCell::new(HashMap::new());
    static ROADMAP_ITEMS: RefCell<HashMap<u64, RoadmapItem>> = RefCell::new(HashMap::new());
}

#[query]
fn get_roadmaps() -> Vec<Roadmap> {
    ROADMAPS.with(|roadmaps| {
        roadmaps
            .borrow()
            .values()
            .filter(|roadmap| roadmap.user == caller())
            .cloned()
            .collect()
    })
}

#[query]
fn get_roadmap(id: u64) -> Option<Roadmap> {
    ROADMAPS.with(|roadmaps| {
        roadmaps.borrow().get(&id).and_then(|roadmap| {
            if roadmap.user == caller() {
                Some(roadmap.clone())
            } else {
                None
            }
        })
    })
}

#[query]
fn get_roadmap_item(roadmap_id: u64) -> Vec<RoadmapItem> {
    ROADMAP_ITEMS.with(|roadmap_items| {
        roadmap_items
            .borrow()
            .values()
            .filter(|item| item.user == caller() && item.roadmap_id == roadmap_id)
            .cloned()
            .collect()
    })
}

#[update]
fn create_roadmap(title: String, description: String) -> Result<Roadmap, String> {
    if caller() == Principal::anonymous() {
        return Err("Anonymous user not allowed to create roadmap.".to_string());
    }

    if title.is_empty() || description.is_empty() {
        return Err("Invalid input".to_string());
    }

    let id = ROADMAP_ID.with(|id_counter| {
        let current_id = *id_counter.borrow();
        *id_counter.borrow_mut() += 1;
        current_id
    });

    let now = time();
    let roadmap = Roadmap {
        id,
        title,
        description,
        user: caller(),
        status: "progress".to_string(),
        start_at: now,
        end_at: now + THIRTY_DAYS_IN_NANOS,
        created_at: now,
        updated_at: now,
    };

    ROADMAPS.with(|roadmaps| roadmaps.borrow_mut().insert(id, roadmap.clone()));
    Ok(roadmap)
}

#[update]
fn create_roadmap_item(
    roadmap_id: u64,
    title: String,
    description: String,
    day: u64,
) -> Result<RoadmapItem, String> {
    if caller() == Principal::anonymous() {
        return Err("Anonymous user not allowed to create roadmap item.".to_string());
    }

    if title.is_empty() || description.is_empty() || day == 0 {
        return Err("Invalid input".to_string());
    }

    let roadmap_exists = ROADMAPS.with(|roadmaps| roadmaps.borrow().contains_key(&roadmap_id));
    if !roadmap_exists {
        return Err("Roadmap not found".to_string());
    }

    let id = ROADMAP_ITEM_ID.with(|id_counter| {
        let current_id = *id_counter.borrow();
        *id_counter.borrow_mut() += 1;
        current_id
    });

    let now = time();
    let roadmap_item = RoadmapItem {
        id,
        roadmap_id,
        title,
        description,
        status: "progress".to_string(),
        day,
        article_id: None,
        result: None,
        user: caller(),
        created_at: now,
        updated_at: now,
    };

    ROADMAP_ITEMS.with(|items| items.borrow_mut().insert(id, roadmap_item.clone()));
    Ok(roadmap_item)
}

#[update]
fn update_roadmap_item(
    roadmap_item_id: u64,
    status: String,
    result: Option<String>,
) -> Result<RoadmapItem, String> {
    if caller() == Principal::anonymous() {
        return Err("Anonymous user not allowed to update roadmap item.".to_string());
    }

    if status != "progress" && status != "completed" {
        return Err("Invalid status".to_string());
    }

    ROADMAP_ITEMS.with(|items| {
        let mut items = items.borrow_mut();
        if let Some(item) = items.get_mut(&roadmap_item_id) {
            if item.user != caller() {
                return Err("You are not allowed to update this roadmap item.".to_string());
            }

            item.status = status;
            item.result = result;
            item.updated_at = time();

            Ok(item.clone())
        } else {
            Err("Roadmap item not found".to_string())
        }
    })
}

#[update]
fn update_roadmap_item_article(
    caller_id: Principal,
    roadmap_item_id: u64,
    article_id: u64,
) -> Result<RoadmapItem, String> {
    if article_id == 0 {
        return Err("Invalid article id".to_string());
    }

    ROADMAP_ITEMS.with(|items| {
        let mut items = items.borrow_mut();
        if let Some(item) = items.get_mut(&roadmap_item_id) {
            if item.user != caller_id {
                return Err("You are not allowed to update this roadmap item.".to_string());
            }

            item.status = "completed".to_string();
            item.article_id = Some(article_id);
            item.updated_at = time();

            Ok(item.clone())
        } else {
            Err("Roadmap item not found".to_string())
        }
    })
}
