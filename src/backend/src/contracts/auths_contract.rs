use candid::{CandidType, Principal};
use ic_cdk::api::{caller, time, trap};
use ic_cdk_macros::{query, update};
use serde::{Deserialize, Serialize};
use std::cell::RefCell;
use std::collections::HashMap;

#[derive(CandidType, Deserialize, Serialize, Clone)]
pub struct Wallet {
    author: Principal,
    balance: u64,
    is_premium: bool,
}

#[derive(CandidType, Deserialize, Serialize, Clone)]
pub struct User {
    principal: Principal,
    wallet: Wallet,
    name: String,
    email: String,
    is_premium: bool,
    registration_date: u64,
}

const MAX_SUPPLY: u64 = 1_000_000_000;

thread_local! {
    static TOKEN_SUPPLY: RefCell<u64> = RefCell::new(0);
    static OWNER: RefCell<Option<Principal>> = RefCell::new(None);
    static ADMINS: RefCell<Vec<Principal>> = RefCell::new(vec![]);
    static INITIALIZED: RefCell<bool> = RefCell::new(false);
    static WALLETS: RefCell<HashMap<Principal, Wallet>> = RefCell::new(HashMap::new());
    static USERS: RefCell<HashMap<Principal, User>> = RefCell::new(HashMap::new());
}

#[update]
async fn init() -> bool {
    let already_initialized = INITIALIZED.with(|initialized| *initialized.borrow());

    if already_initialized {
        trap("Contract has already been initialized!");
    }

    OWNER.with(|owner| *owner.borrow_mut() = Some(caller()));

    let _ = register(caller(), "owner".to_string(), "owner@mail.com".to_string()).await;

    INITIALIZED.with(|initialized| *initialized.borrow_mut() = true);

    true
}

#[update]
async fn register(principal: Principal, name: String, email: String) -> Option<User> {
    USERS.with(|users| {
        if users.borrow().contains_key(&principal) {
            trap("User already registered!");
        }

        let new_wallet = Wallet {
            author: principal,
            balance: 0,
            is_premium: false,
        };

        let new_user = User {
            principal,
            wallet: new_wallet.clone(),
            name,
            email,
            is_premium: false,
            registration_date: time(),
        };

        users.borrow_mut().insert(principal, new_user.clone());
        WALLETS.with(|wallets| wallets.borrow_mut().insert(principal, new_wallet));
        Some(new_user)
    })
}

#[update]
async fn create_new_token(amount: u64) -> u64 {
    if !is_admin(caller()).await {
        trap("Only an admin can distribute new tokens!");
    }

    let current_supply = TOKEN_SUPPLY.with(|supply| *supply.borrow());

    if current_supply + amount > MAX_SUPPLY {
        trap("Amount exceeds maximum token supply!");
    }

    WALLETS.with(|wallets| {
        let mut wallets = wallets.borrow_mut();
        let wallet = wallets.entry(caller()).or_insert(Wallet {
            author: caller(),
            balance: 0,
            is_premium: true,
        });
        wallet.balance += amount;
    });

    TOKEN_SUPPLY.with(|supply| *supply.borrow_mut() += amount);

    TOKEN_SUPPLY.with(|supply| *supply.borrow())
}

#[update]
async fn transfer(to: Principal, amount: u64) -> bool {
    WALLETS.with(|wallets| {
        let mut wallets = wallets.borrow_mut();

        let sender_wallet_balance = wallets
            .get(&caller())
            .map(|wallet| wallet.balance)
            .unwrap_or_else(|| trap("Sender wallet not found!"));

        if sender_wallet_balance < amount {
            trap("Insufficient balance!");
        }

        let _recipient_wallet_balance = wallets
            .entry(to)
            .or_insert(Wallet {
                author: to,
                balance: 0,
                is_premium: false,
            })
            .balance;

        let sender_wallet = wallets.get_mut(&caller()).unwrap();
        sender_wallet.balance -= amount;

        let recipient_wallet = wallets.get_mut(&to).unwrap();
        recipient_wallet.balance += amount;

        true
    })
}

#[query]
fn get_balance(target: Principal) -> u64 {
    WALLETS.with(|wallets| {
        wallets
            .borrow()
            .get(&target)
            .map_or(0, |wallet| wallet.balance)
    })
}

#[query]
fn get_total_supply() -> u64 {
    TOKEN_SUPPLY.with(|supply| *supply.borrow())
}

#[query]
fn get_users() -> Vec<User> {
    USERS.with(|users| users.borrow().values().cloned().collect())
}

#[query]
fn get_user_info(user_principal: Principal) -> Option<User> {
    USERS.with(|users| users.borrow().get(&user_principal).cloned())
}

#[query]
async fn is_admin(user: Principal) -> bool {
    ADMINS.with(|admins| admins.borrow().contains(&user))
}

#[update]
async fn add_admin(new_admin: Principal) -> bool {
    if !is_admin(caller()).await {
        trap("Only an admin can add another admin!");
    }
    ADMINS.with(|admins| admins.borrow_mut().push(new_admin));
    true
}
