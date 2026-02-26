# 📝 Assignment 2 — E-Commerce Product API

## 🎯 Objective

Build a REST API to manage products data, calculate statistics, and filter records.

---

## 🚀 Features

* Get all Products
* Find products by id
* Find products by categoryName
* Post new products data
* Change products by id
* Change stock of products by id
* Change price of products by id

---

## 🔗 Implemented Routes

### 1️⃣ Get all Products

**GET** `/products`

### 2️⃣ Get products by id

**GET** `/products/:id`

### 3️⃣ Get products by categoryName

**GET** `/products/category/:categoryName`

### 4️⃣ Post new products data

**POST** `/products`

### 5️⃣ Change products by id

**PUT** `/products/:id`

### 6️⃣ Change stock of products by id

**PUT** `/products/:id/stock`

---

## 🧪 Sample API URLs

```id="c1vqah"
http://localhost:3001/products
http://localhost:3001/products/5
http://localhost:3001/products/category/footwear
http://localhost:3001/products
http://localhost:3001/products/4
http://localhost:3001/products/4/stock
http://localhost:3001/products/5/price
```

---

## ⚙️ Steps to Run Assignment 2 Locally

```bash id="6e5bn0"
cd assignment-2
npm install
node index.js
```

Server runs at:

```id="0aaxsa"
http://localhost:3001
```

---





## 🧾 Technologies Used

* Node.js
* Express.js

---

## 👨‍💻 Author

Jonty Patel