# 🍬 Sweet Shop Management System

A simple and elegant Sweet Shop Management System that allows you to add, delete, search, purchase, and restock sweets. Built using **HTML, CSS, and JavaScript** following **Test-Driven Development (TDD)** with **Jest**.

---

## 🚀 Deployment

The project is live at: [Sweet Shop Management](https://sweetshopmangement.vercel.app/)

---

## 🔗 Test Report

[Drive Link](https://drive.google.com/file/d/1BFGbhpMTK0nA2DOocjPSwwNiTQKSVOZj/view?usp=sharing)

---


## 🚀 Features

- ✅ Add, view, and delete sweets
- 🛒 Purchase sweets (with stock validation)
- ♻️ Restock sweets
- 🔍 Search sweets by name, category, and price range
- 🧪 Unit testing with Jest (TDD)
- 🎨 Beautiful UI

---

## 🧪 Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Testing**: Jest
- **Version Control**: Git & GitHub

---

## 📁 Folder Structure

```
sweetshopmanagement/
│
|
|── index.html              # Web interface
|── script.js               # DOM interaction logic
│
├── src/
│   └── sweetShop.js        # Core logic (Sweet, SweetShop classes)
│
├── tests/
│   └── sweetShop.test.js   # Unit tests using Jest
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

---

## 🛠️ Setup Instructions

### Prerequisites

- Node.js and npm installed

### Steps to Run Locally

1. Clone the repository:

```bash
git clone https://github.com/nirav8408/sweetshopmangement
cd sweetshopmanagement
```

2. Install dependencies:

```bash
npm install
```

3. Run tests with Jest:

```bash
npm test
```

4. Open the frontend in your browser:

```bash
# Simply open this file in browser or use VSCode Live Server:
index.html
```

---

## ✅ Test Cases Covered

- Add sweet to the shop
- Delete sweet by ID
- Purchase sweet and update stock
- Throw error if stock is insufficient
- Restock sweets
- Throw error if sweet not found during restock

