# Count Number — Minimal Counter App

A clean, elegant counter app built with vanilla HTML, CSS, and JavaScript. Designed with a warm neutral aesthetic and refined typographic details.

![Counter App](https://img.shields.io/badge/HTML-CSS-JS-vanilla-C9B59C?style=flat)

---

## ✨ Features

- **Increment & Decrement** — Simple +/- controls to update the count
- **Elegant UI** — Warm neutral palette with Playfair Display & Raleway typography
- **Smooth interactions** — Hover and active states on buttons with subtle transitions
- **Fully responsive** — Centered card layout that works on all screen sizes
- **Zero dependencies** — Pure HTML, CSS, and JavaScript. No frameworks, no libraries.

---

## 🗂 Project Structure

```
counter-app/
├── index.html   # Markup and layout
├── style.css    # All styling and animations
└── script.js    # Counter logic
```

---

## 🚀 Getting Started

1. **Clone or download** the repository
2. Open `index.html` in any modern browser

That's it — no build step, no install required.

---

## 🎨 Design Details

| Element        | Value                                  |
|----------------|----------------------------------------|
| Primary font   | Playfair Display (number display)      |
| UI font        | Raleway (label, controls)              |
| Background     | `#F9F8F6` with subtle radial gradients |
| Card color     | `#EFE9E3`                              |
| Accent color   | `#C9B59C`                              |
| Number color   | `#8B6E5A`                              |

---

## 🛠 How It Works

```js
let count = 0;

document.getElementById('plus').addEventListener('click', () => {
  count++;
  number.textContent = count;
});

document.getElementById('minus').addEventListener('click', () => {
  count--;
  number.textContent = count;
});
```

The counter state is held in a single `count` variable. Button clicks update the variable and re-render the display element.

---

## 📄 License

MIT — free to use and modify.
