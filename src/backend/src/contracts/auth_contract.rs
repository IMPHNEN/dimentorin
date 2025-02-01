use candid::{CandidType, Principal};
use ic_cdk::api::{caller, time};
use ic_cdk_macros::{query, update};
use serde::Deserialize;
use std::cell::RefCell;
use std::collections::HashMap;

#[derive(CandidType, Deserialize, Clone)]
pub struct User {
    username: String,
    password_hash: String,
    created_at: u64,
    last_login: Option<u64>,
    logged_in: bool,
}

thread_local! {
    static USERS: RefCell<HashMap<Principal, User>> = RefCell::new(HashMap::new());
}

fn hash_password(password: &str) -> String {
    format!("{:x}", md5::compute(password))
}

#[update]
fn register_user(username: String, password: String) -> Result<String, String> {
    if username.is_empty() || password.is_empty() {
        return Err("Username and password cannot be empty.".to_string());
    }

    USERS.with(|users| {
        let mut users = users.borrow_mut();

        if users.contains_key(&caller()) {
            return Err("User already registered.".to_string());
        }

        let new_user = User {
            username,
            password_hash: hash_password(&password),
            created_at: time(),
            last_login: None,
            logged_in: false,
        };

        users.insert(caller(), new_user);
        Ok("Registration successful.".to_string())
    })
}

#[update]
fn login_user(password: String) -> Result<String, String> {
    USERS.with(|users| {
        let mut users = users.borrow_mut();

        if let Some(user) = users.get_mut(&caller()) {
            if user.password_hash == hash_password(&password) {
                user.last_login = Some(time());
                user.logged_in = true;
                Ok("Login successful.".to_string())
            } else {
                Err("Invalid password.".to_string())
            }
        } else {
            Err("User not found.".to_string())
        }
    })
}

#[update]
fn logout_user() -> Result<String, String> {
    USERS.with(|users| {
        let mut users = users.borrow_mut();

        if let Some(user) = users.get_mut(&caller()) {
            if user.logged_in {
                user.logged_in = false;
                Ok("Logout successful.".to_string())
            } else {
                Err("User is not logged in.".to_string())
            }
        } else {
            Err("User not found.".to_string())
        }
    })
}

#[query]
fn is_authenticated() -> bool {
    USERS.with(|users| {
        if let Some(user) = users.borrow().get(&caller()) {
            user.logged_in
        } else {
            false
        }
    })
}

#[query]
fn get_user_info() -> Option<User> {
    USERS.with(|users| users.borrow().get(&caller()).cloned())
}
