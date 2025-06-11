# 🌌 Space Tourism Website

A modern frontend project built with **React**, inspired by the Space Tourism design challenge. This responsive multi-page website mimics a futuristic space travel experience with elegant UI transitions, fixed sidebar navigation, and clean design.

**🌐 Live Site**: [space-tourism-jonathan.vercel.app](https://space-tourism-jonathan.vercel.app/)

---

## 🚀 Tech Stack

![React](https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=black)
![CSS3](https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3)
![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![VSCode](https://img.shields.io/badge/-VSCode-007ACC?style=flat-square&logo=visual-studio-code)
![Vercel](https://img.shields.io/badge/-Vercel-000000?style=flat-square&logo=vercel)

---

## 🎯 Features

- ✅ Responsive fixed sidebar with navigation highlights
- ✅ Explore button with hover glow animation
- ✅ Fully implemented page routing (Destination, Crew, Technology)
- ✅ Mobile-friendly layouts and stacked content views
- ✅ Google Fonts: Barlow, Barlow Condensed, Bellefair
- ✅ Frosted-glass backdrop effect with dark mode aesthetic
- ✅ Vercel Deployment: [Live Preview](https://space-tourism-jonathan.vercel.app/)

---

## 📸 Preview

| Homepage | Destination | Crew | Technology |
|----------|-------------|------|------------|
| ![Homepage](https://github.com/user-attachments/assets/9f045489-62c3-4b8c-943d-e04e56706de0) | ![Destination](https://github.com/user-attachments/assets/1b7439e6-6485-4b32-b83e-82b4af0a528f) | ![Crew](https://github.com/user-attachments/assets/4f69fa4d-5c1a-4037-8449-5c49524b0ab0) | ![Technology](https://github.com/user-attachments/assets/a809c19d-617a-4aa0-8b92-2a6a5a6bbf71) |


---

## 💡 Challenges Faced

### 1. **White Space / Overflow Issues**
- 🔍 Problem: Right-side white space on some pages.
- 🛠 Fix: Used `overflow-x: hidden` on `body` and fixed `flex` misalignment with `max-width`, `margin: auto`, and layout re-balancing.

### 2. **Responsive Layouts**
- 🔍 Problem: Layouts would break on smaller screens or when switching tabs.
- 🛠 Fix: Added media queries and adjusted `flex-direction` and `gap` values for mobile-first styling.

### 3. **Text Alignment & Typography Matching**
- 🔍 Problem: Matching Figma spacing, shadows, and text casing was tricky.
- 🛠 Fix: Used `Barlow Condensed` with exact `letter-spacing`, and added manual margins based on Figma references.

---

## 📂 Folder Structure

```bash
space-tourism-site/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── data/
│   └── assets/
├── .gitignore
├── package.json
└── README.md
```
---

## 🛠 Installation & Development

```bash
git clone https://github.com/jonathanprogram2/space-tourism-site.git
cd space-tourism-site
npm install
npm start
```

---

## 🙌 Credits

Design Challenge: Frontend Mentor – Space Tourism (https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3)

Fonts by Google: Bellefair, Barlow, Barlow Condensed

---

## 📄 License

This project is for **educational and portfolio purposes** only. Not for commercial use.
