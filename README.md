## 🌐 MEAN Stack Social Feed App

A clean and functional **Social Feed** web application built using the **MEAN stack** (MongoDB, Express, Angular, Node.js). Users can register, log in, create posts, like and delete them, and comment on others’ posts.

---

### 🛠️ Tech Stack

| Layer     | Technology             |
| --------- | ---------------------- |
| Frontend  | Angular                |
| Backend   | Node.js, Express       |
| Database  | MongoDB                |
| Styling   | Bootstrap + Custom CSS |
| API Calls | HttpClient (Angular)   |

---

### 📸 Features

* 🔐 **User Authentication** (Register / Login)
* 📝 Create and view posts instantly
* ❤️ Like & delete posts
* 💬 Add comments to any post
* 🔄 Realtime UI updates
* 📱 Responsive layout

---

### 🗂️ Project Structure

```
/project-root
├── /frontend/                # Angular app
│   ├── /src/app/components/  # PostForm, PostList, PostItem, Login, Register
│   ├── /src/app/services/    # post.service.ts, auth.service.ts
│   └── main.ts, styles.css, etc.
│
├── /backend/                 # Express server
│   ├── /config/              # DB connection
│   ├── /controllers/         # Logic handlers (posts, users)
│   ├── /models/              # Mongoose schemas (Post, User)
│   ├── /routes/              # Route definitions
│   └── server.js             # Entry point
│
└── README.md
```

---

### 📦 Installation

#### 1. Clone the repository

```bash
git clone https://github.com/nourinawadd/mean-social-feed-app.git
cd mean-social-feed-app
```

---

### ⚙️ Backend Setup (Node.js + Express)

1. Navigate to backend directory:

```bash
cd server
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file:

```bash
touch .env
```

Add this:

```
MONGO_URI=mongodb://localhost:27017/social-feed
PORT=3000
JWT_SECRET=yourSecretKeyHere
```

> Replace with your MongoDB URI and preferred secret key.

4. Run the server:

```bash
node server.js
```

> Server running on `http://localhost:3000`

---

### 🖼️ Frontend Setup (Angular)

1. Open new terminal, go to frontend directory:

```bash
cd client
```

2. Install dependencies:

```bash
npm install
```

3. Start the Angular dev server:

```bash
ng serve
```

> App will run on `http://localhost:4200`

---

### 🔐 Authentication Flow

* Users can **register** with their email, username, and password
* Registered users can **log in** and access the full social feed functionality
* JWT tokens are used to secure authenticated API calls

---

### 🔗 API Endpoints

| Method | Endpoint                  | Function             |
| ------ | ------------------------- | -------------------- |
| POST   | `/api/users/register`     | Register a new user  |
| POST   | `/api/users/login`        | Log in existing user |
| GET    | `/api/posts`              | Get all posts        |
| POST   | `/api/posts`              | Add a new post       |
| POST   | `/api/posts/:id/like`     | Like a post          |
| DELETE | `/api/posts/:id`          | Delete a post        |
| POST   | `/api/posts/:id/comments` | Add comment to post  |

---

### 📋 Sample Post Object

```json
{
  "_id": "abc123",
  "content": "Hello world!",
  "likes": 3,
  "comments": [
    { "id": "1", "text": "Nice!" }
  ]
}
```

---

### ✨ UI Preview

* 📝 Post form aligned with modern styling
* 💬 Post cards display content, likes, comments
* 👍 Like and delete buttons are styled
* 📱 Responsive across screen sizes

---

### 🚧 Future Additions

* Associate posts with logged-in users
* Display the username above each post
* Restrict delete/edit permissions to post owners
* Add profile pages for users
* Add pagination or infinite scroll

---

### 👤 Author

Developed by **Nourin Awad**,
Connect on [LinkedIn](https://www.linkedin.com/in/nourinawad/) or check more on [GitHub](https://github.com/nourinawadd)

---

### 📃 License

This project is licensed under the MIT License.
