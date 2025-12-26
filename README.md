# 🧩 Sudoku Game (React + Vite)

A clean and interactive **Sudoku web application** built with **React** and **Vite**, featuring real puzzle data fetched from an online API, smart cell highlighting, input validation, and a smooth animated success effect.

This project focuses on **clear logic**, **proper state management**, and **readable component structure**, making it suitable both as a playable game and as a learning / portfolio project.

---

## 🚀 Features

- ✅ Fetches real Sudoku puzzles from an online API  
- 🧠 Distinction between prefilled and editable cells  
- 🎯 Highlights active row, column, and 3×3 box  
- 🟩 Animated green completion effect when solved correctly  
- 🔁 Reset current puzzle  
- 🆕 Load a completely new puzzle  
- ⌨️ Input validation (only digits 1–9 allowed)  
- ⚠️ Error handling for failed API requests  

---

## 🛠️ Tech Stack

- **React** (functional components, hooks)
- **Vite** (development server & bundler)
- **JavaScript (ES6+)**
- **CSS (custom, no UI framework)**
- **Public Sudoku GraphQL API**

---

## 📁 Project Structure

```text
Sudoku Game
├─ components/
│  ├─ Grid.jsx          # Sudoku board rendering & cell logic
│  ├─ Controls.jsx      # Check / Reset / New Puzzle buttons
│
├─ src/
│  ├─ App.jsx           # Main state management & game logic
│  ├─ fetch-puzzle.jsx  # API fetch logic
│  ├─ App.css           # Game styling
│  ├─ index.css         # Global styles
│  ├─ main.jsx          # React entry point
│
├─ public/
├─ package.json
├─ vite.config.js
└─ README.md
```

---

## 🧩 How It Works

### Board Representation

The Sudoku board is stored as a **9×9 array**:

- `null` → editable cell  
- `number` → fixed or user-entered value  

Used consistently for:
- `board` (current user state)
- `puzzle` (initial puzzle)
- `solution` (correct solution)

---

### Fetching the Puzzle

The game fetches puzzle data via a GraphQL query:

```graphql
{ newboard(limit:1) { grids { value solution } } }
```

Steps:
1. Fetch puzzle from API
2. Convert all `0` values to `null`
3. Store puzzle, solution, and board state
4. Handle errors gracefully

---

### Grid Rendering (`Grid.jsx`)

- Dynamic rendering of rows and cells
- Controlled inputs
- Highlights:
  - selected row
  - selected column
  - selected 3×3 box
- Progressive green animation when solved

---

### Controls (`Controls.jsx`)

- **Check** → validates board against solution
- **Reset** → restores original puzzle
- **New Puzzle** → fetches a new board

Logic is centralized in `App.jsx`.

---

### Win Animation

When solved correctly:
- Status updates to *Correct!*
- `greenCount` increases gradually
- Cells turn green one by one

---

## 🎨 Styling

- Thick borders for 3×3 blocks
- Focused cell highlight
- Related cell shading
- Green success animation

All styling is written in **pure CSS**.

---

## ▶️ Run Locally

```bash
npm install
npm run dev
```

Open:

```
http://localhost:5173
```

---

## 📌 Possible Improvements

- ❌ Highlight incorrect values
- ⌨️ Keyboard navigation
- 🧠 Difficulty selector
- ⏱️ Timer & scoring
- 💾 Save progress (localStorage)

---

## 📄 License

Open-source and free for learning and personal projects.
