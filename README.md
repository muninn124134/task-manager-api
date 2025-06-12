# 💰 Task Manager API (Personal Finance)

A RESTful API to manage financial transactions (income and expenses), with user authentication, balance control, and protected routes using JWT.

---

## 🛠️ Technologies Used

- Node.js
- Express
- MongoDB (Mongoose)
- JWT (jsonwebtoken)
- bcrypt
- dotenv
- express-validator
- morgan
- cors

---

## 🚀 How to Run Locally

1. **Clone the repository**  
   ```bash
   git clone https://github.com/your-username/task-manager-api.git
   cd task-manager-api
   ```

2. **Install dependencies**  
   ```bash
   npm install
   ```

3. **Create a `.env` file in the root directory with the following variables:**

   ```env
   MONGODB_URI=<your_mongodb_atlas_uri>
   JWT_SECRET=<your_secret_key>
   NODE_ENV=development
   PORT=5000
   ```

4. **Start the server**
   ```bash
   npm run dev
   ```

---

## 📂 Folder Structure

```
src/
│
├── controllers/         # Core route functions
├── middlewares/         # Custom middlewares (auth, error handler)
├── models/              # Mongoose schemas
├── routes/              # Route files
└── utils/               # Helper functions (optional)
```

---

## 🔐 Authentication

All transaction routes require a JWT token in the header:

```
Authorization: Bearer <token>
```

---

## 📌 API Routes

### 📁 Auth (`/api/v1/auth`)

- **POST** `/register`  
  Registers a new user.  
  Body:
  ```json
  {
    "name": "John",
    "email": "john@email.com",
    "password": "123456"
  }
  ```

- **POST** `/login`  
  Returns a token + user data.  
  Body:
  ```json
  {
    "email": "john@email.com",
    "password": "123456"
  }
  ```

- **GET** `/me`  
  Returns data of the authenticated user.

---

### 💸 Transactions (`/api/v1/transactions`)

**All require authentication**

- **GET** `/`  
  Lists all transactions of the logged-in user

- **POST** `/`  
  Creates a new transaction  
  Body:
  ```json
  {
    "title": "Salary",
    "amount": 2500,
    "type": "income"
  }
  ```

- **PUT** `/:id`  
  Updates a transaction by ID

- **DELETE** `/:id`  
  Deletes a transaction by ID

---

## ✅ Testing

You can test the routes using **Postman**, **Insomnia**, or any HTTP client.

Example for protected routes:
1. Send `POST /login` and copy the token
2. For protected routes, add to **headers**:
   ```
   Authorization: Bearer <token>
   ```

---

## 📌 Future Improvements

- Date filtering for transactions
- Dashboard with total income/expenses
- Password reset
- Upload of receipts (image/pdf)

---

## 🧑‍💻 Author

Made with 💻 by Pedro Alencar

---

## 📜 License

This project is under the MIT license.
