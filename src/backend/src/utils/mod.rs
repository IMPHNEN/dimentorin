use candid::Principal;
use ic_cdk::call;
use std::sync::OnceLock;

static AUTH_CANISTER_ID: OnceLock<Principal> = OnceLock::new();

fn get_auth_canister_id() -> Principal {
    AUTH_CANISTER_ID
        .get_or_init(|| Principal::from_text("auth_canister_id_here").expect("Invalid canister ID"))
        .clone()
}

pub async fn is_authenticated() -> Result<bool, String> {
    let auth_canister_id = get_auth_canister_id();

    let (authenticated,): (bool,) = call(auth_canister_id, "is_authenticated", ())
        .await
        .map_err(|e| format!("Failed to call auth canister: {:?}", e))?;

    Ok(authenticated)
}
