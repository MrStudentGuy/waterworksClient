// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
use tauri::*;

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

fn min (window: &Window) {
    window.minimize();
}

fn main() {
    let quit = CustomMenuItem::new("quit".to_string(), "Quit").accelerator("CmdOrCtrl+Q");
    let close = CustomMenuItem::new("hide".to_string(), "Hide").accelerator("CmdOrCtrl+W");

    let emStop = CustomMenuItem::new("emStop".to_string(), "Emergency Stop").accelerator("CmdOrCtrl+Shift+P");
    let restart = CustomMenuItem::new("restart".to_string(), "Restart").accelerator("CmdOrCtrl+Shift+R");

    let submenu = Submenu::new("Menu", Menu::new().add_item(quit).add_item(close).add_item(emStop).add_item(restart));

    let menu = Menu::new()
        .add_native_item(MenuItem::Copy)
        .add_item(CustomMenuItem::new("hide", "Hide"))
        .add_submenu(submenu);


    let window = tauri::Builder::default()
        .menu(menu)
        .on_menu_event(|event| {
            match event.menu_item_id() {
                "quit" => {
                    std::process::exit(0);
                }
                "hide" => {
                    let win = event.window();
                    min(win);
                }
                "emStop" => {
                    println!("Emergency Stop");
                }
                "restart" => {
                    println!("Restart");
                }
                _ => {}
            }
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
