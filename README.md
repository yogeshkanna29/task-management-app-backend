# Task Manager API

A RESTful Task Management Backend API built using **Node.js, Express.js, MongoDB, and Mongoose**.

This project includes JWT-based authentication and CRUD operations for managing user tasks.

---

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcrypt Password Hashing
* Swagger API Documentation

---

## Features

### Authentication

* User Registration
* User Login
* JWT Token Generation
* Protected Routes
* Password Encryption using bcrypt

### Task Management

Authenticated users can:

* Create a task
* Get all tasks
* Get a single task by ID
* Update a task
* Delete a task

---

## API Endpoints

### Authentication

| Method | Endpoint             | Description      |
| ------ | -------------------- | ---------------- |
| POST   | `/api/auth/register` | Register user    |
| POST   | `/api/auth/login`    | Login user       |
| GET    | `/api/auth/profile`  | Get user profile |

---

### Tasks

| Method | Endpoint         | Description    |
| ------ | ---------------- | -------------- |
| POST   | `/api/tasks`     | Create task    |
| GET    | `/api/tasks`     | Get all tasks  |
| GET    | `/api/tasks/:id` | Get task by ID |
| PUT    | `/api/tasks/:id` | Update task    |
| DELETE | `/api/tasks/:id` | Delete task    |

---

## Project Structure

```
src
│
├── config
│   └── db.js
│
├── controllers
│   ├── auth.controller.js
│   └── task.controller.js
│
├── middleware
│   └── auth.middleware.js
│
├── models
│   ├── User.js
│   └── Task.js
│
├── routes
│   ├── auth.routes.js
│   └── task.routes.js
│
├── services
│   ├── auth.service.js
│   └── task.service.js
│
├── swagger
│   └── swagger.js
│
├── utils
│   └── generateToken.js
│
├── app.js
└── server.js
```

---

## Environment Variables

Create a `.env` file:

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

JWT_EXPIRES_IN=7d
```

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Server runs on:

```
http://localhost:5000
```

---

## Swagger Documentation

API documentation is available at:

```
http://localhost:5000/api-docs
```

Swagger provides API details and allows testing endpoints with JWT authorization.

---

## Authentication

Protected APIs require JWT token:

```
Authorization: Bearer <token>
```

---

## Author

Yogesh Kanna

Node.js Backend Developer
