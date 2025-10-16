# 🌟 HNG Profile Card

This project is a simple, responsive **Profile Card** built for the **HNG Internship Program**.  
It showcases basic front-end skills, including HTML semantics, CSS responsiveness, and JavaScript functionality.

---

## 🧩 Features

- Displays a user profile with:
  - **Name** (`data-testid="test-user-name"`)
  - **Short bio** (`data-testid="test-user-bio"`)
  - **Avatar image** (`data-testid="test-user-avatar"`)
  - **Current time (milliseconds)** (`data-testid="test-user-time"`)
  - **Social links** (`data-testid="test-user-social-links"`)
  - **Hobbies list** (`data-testid="test-user-hobbies"`)
  - **Dislikes list** (`data-testid="test-user-dislikes"`)
- Responsive design (mobile, tablet, desktop)
- Uses semantic HTML elements (`<article>`, `<header>`, `<nav>`, `<section>`, `<ul>`, etc.)
- Social links open in a new tab with `target="_blank"` and `rel="noopener noreferrer"`
- Dynamic time display using `Date.now()`

---

## 🧱 Tech Stack

- **HTML5** – Semantic structure  
- **CSS3** – Flexbox and responsive design  
- **JavaScript (ES6)** – Dynamic time rendering  

---

## 📁 Project Structure

├── index.html
  ├── assets
      ├── style.css
      ├── script.js
      ├── img
          ├── PFP2.png
└── README.md


---

## ⚙️ How It Works

1. The `index.html` file contains the main markup and all required `data-testid` attributes.
2. The `style.css` file handles all responsive and visual styling.
3. The `script.js` file dynamically displays the **current time in milliseconds** using `Date.now()`.


