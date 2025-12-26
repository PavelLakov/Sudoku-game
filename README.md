# 🧩 Sudoku Game (React + Vite)



🔗 Live Demo: https://sudoku-interactive-game.netlify.app/


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


---

## 🎮 How to Play

### Objective
Fill the entire **9×9 grid** so that:

- Each **row** contains the numbers **1–9 exactly once**
- Each **column** contains the numbers **1–9 exactly once**
- Each **3×3 subgrid** contains the numbers **1–9 exactly once**

---

### Game Start
- When the application loads, a **new Sudoku puzzle is fetched automatically** from an external API.
- Some cells are **pre-filled** and represent fixed values.
- Empty cells are **editable** by the player.

Pre-filled cells **cannot be modified**.

---

### Selecting a Cell
- Click on any editable cell to select it.
- The game automatically highlights:
  - the selected **row**
  - the selected **column**
  - the corresponding **3×3 subgrid**

This visual feedback helps track valid placements and reduces mistakes.

---

### Entering Numbers
- Only digits **1–9** are accepted.
- Each cell allows **exactly one digit**.
- Invalid input is ignored automatically.
- Clearing a cell is allowed.

All inputs are implemented as **controlled React inputs**, ensuring consistent state synchronization.

---

### Checking the Solution
Click **Check** to validate the current board:

- The board is compared **cell-by-cell** against the solution provided by the API.
- If all values match:
  - A success message is displayed
  - A **green animation** fills the board progressively, cell by cell
- If any value is incorrect:
  - An error message is shown
  - The animation is reset

This guarantees strict correctness.

---

### Resetting the Puzzle
Click **Reset** to:

- Restore the board to the original puzzle state
- Remove all user-entered values
- Clear messages, highlights, and animations

The puzzle itself is **not re-fetched**.

---

### Loading a New Puzzle
Click **New Puzzle** to:

- Fetch a **completely new Sudoku puzzle**
- Reset all application state
- Start a fresh game instantly

No page refresh required.



## 📌 Possible Improvements

- ❌ Highlight incorrect values
- ⌨️ Keyboard navigation
- 🧠 Difficulty selector
- ⏱️ Timer & scoring
- 💾 Save progress (localStorage)

---

## 📄 License

Open-source and free for learning and personal projects.
