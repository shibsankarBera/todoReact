# 📝 Todo App (React)

A simple and clean **Todo App built with React** that allows users to add, edit, delete, and mark tasks as completed. The app is styled with custom CSS and is fully responsive for mobile devices.

---

## 🚀 Features

- ➕ Add new todo
- 📝 Edit existing todo
- ❌ Delete todo
- ✅ Mark todo as completed / undo
- 🎨 Stylish UI with CSS


---

## 🛠️ Tech Stack

- React (useState)
- JavaScript (ES6)
- CSS3

---

## 📂 Project Structure

```
src/
│
├── componants/
│   ├── Header.jsx
│   ├── ToDoList.jsx
│   └── ToDoItem.jsx
│
├── App.jsx
├── App.css
└── main.jsx
```

---

## ⚙️ Installation & Setup

1. Clone the repository

```
git clonehttps://github.com/shibsankarBera/todoReact.git
```

2. Navigate to project folder

```
cd todoReact
```

3. Install dependencies

```
npm install
```

4. Run the app

```
npm run dev
```

---

## 🧠 How It Works

- Todos are stored in **state using useState**
- Each todo has:
  - `id`
  - `text`
  - `completed`
- Components:
  - **Header** → handles input & adding todos
  - **ToDoList** → renders list
  - **ToDoItem** → handles edit, delete, toggle

---

## 🎨 UI Highlights

- Color-coded buttons
- Line-through effect on completed tasks
