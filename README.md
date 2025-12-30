# Daylight

Daylight is a minimal, local‑first journaling app built with plain HTML, CSS, and JavaScript. It focuses on simplicity, calm design, and a distraction‑free writing experience. All entries are stored in your browser using `localStorage`, so nothing leaves your device.

## Features

- Clean, minimal interface  
- Sidebar with entry list  
- Create, edit, and delete entries  
- Automatic saving  
- Smooth fade‑in animations  
- Welcome screen when no entry is selected  
- Local‑only storage (no accounts, no servers)

## Why Daylight?

Daylight was created as a lightweight alternative to heavy note‑taking apps. It loads instantly, works offline, and keeps your writing private. The goal is to provide a quiet space for thoughts without extra features getting in the way.

## Tech Stack

- HTML  
- CSS  
- JavaScript  
- `localStorage` for persistence  

No frameworks, no build tools.

## Single‑File Build

Daylight includes a small Rust script that bundles the HTML, CSS, and JavaScript into a single daylight.html file. This file is available in the GitHub Releases section.

To build it yourself:

```bash
rustc build_daylight.rs
./build_daylight
```

This generates a standalone daylight.html that contains all code in one file.
(The app is HTML/CSS/JS, the build script is Rust because why not.)

## License

This project is licensed under the MIT License.
