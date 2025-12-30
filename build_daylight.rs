use std::fs;

fn main() {
    // Read the source files
    let html = fs::read_to_string("index.html")
        .expect("Could not read index.html");
    let css = fs::read_to_string("style.css")
        .expect("Could not read style.css");
    let js = fs::read_to_string("script.js")
        .expect("Could not read script.js");

    // Inline CSS
    let html = html.replace(
        r#"<link rel="stylesheet" href="style.css">"#,
        &format!("<style>\n{}\n</style>", css)
    );

    // Inline JS
    let html = html.replace(
        r#"<script src="script.js"></script>"#,
        &format!("<script>\n{}\n</script>", js)
    );

    // Write output
    fs::write("daylight.html", html)
        .expect("Could not write daylight.html");

    println!("Built daylight.html successfully.");
}
