# 🚗 Car Manager App – Full Stack Angular + Ruby on Rails

This is a full-stack CRUD application built with **Angular** (frontend) and **Ruby on Rails** (backend API). It allows users to **create**, **read**, **update**, and **delete** car records in a clean, responsive interface.

---

## 🔍 Project Highlights

- ✅ **Frontend**: Angular 16+ with component-based architecture
- ✅ **Backend**: RESTful Rails 7 API using ActiveRecord & PostgreSQL
- ✅ **Two-Tier Architecture**: Clean separation of frontend and backend (`client_app` & `server_app`)
- ✅ **Modern Dev Practices**: Follows service-based code organization, form validation, and modular design

---

## 🛠️ Tech Stack

| Layer       | Technology           |
|-------------|----------------------|
| Frontend    | Angular 16+, SCSS    |
| Backend     | Ruby on Rails 7      |
| Database    | PostgreSQL           |
| API Style   | REST                 |
| Dev Tools   | Docker, Kamal, Rubocop, Angular CLI |

---

## 📈 Future Improvements

- Refactor Angular frontend to use **Signals API** for enhanced reactivity
- Add JWT-based authentication
- Containerized deployment via Docker Compose

---

## 🚀 Setup Instructions

### ✅ Prerequisites

Make sure the following are installed:

- **Ruby**: v3.2.0
- **Bundler**: `gem install bundler`
- **Node.js**: v18+
- **npm**: v9+
- **Angular CLI**: `npm install -g @angular/cli`

---

### 🔧 Backend (Rails API)

```bash
cd server_app
bundle install
rails db:migrate
rails server
