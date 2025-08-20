# Otweet

Otweet is a full-stack social media application inspired by Twitter/X.com, built with a Java Spring Boot backend and a modern React frontend. The project aims to provide a clean, user-friendly experience similar to the classic Twitter app, but with Otweet branding.

## Features

- User registration and authentication
- Responsive, X.com-style UI (dark theme, sidebar navigation, centered feed)
- Post composer for creating tweets
- Main feed displaying posts
- Profile, notifications, and explore pages
- Right sidebar for trends/suggestions (on large screens)
- Modular, scalable codebase

## Tech Stack

- **Backend:** Java 17+, Spring Boot, Spring Security, Spring Data JPA, MySQL
- **Frontend:** React, CSS Modules
- **Build Tools:** Maven (backend), npm (frontend)

## Project Structure

```
Otweet/
├── frontend/         # React app (UI)
│   ├── src/
│   │   ├── components/   # Reusable UI components (Sidebar, Navbar, Feed, etc.)
│   │   ├── pages/        # Main pages (Home, Profile, Login, etc.)
│   │   └── ...
│   └── ...
├── src/main/java/   # Spring Boot backend
│   └── com/otweet/  # Java packages (models, controllers, services, etc.)
├── pom.xml          # Maven config
└── ...
```

## How to Run

### Backend
1. Configure your MySQL database in `src/main/resources/application.properties`.
2. Build and run the backend:
	```
	mvn spring-boot:run
	```
	The backend will start on `http://localhost:8081`.

### Frontend
1. Go to the `frontend` folder:
	```
	cd frontend
	```
2. Install dependencies:
	```
	npm install
	```
3. Start the React app:
	```
	npm start
	```
	The frontend will run on `http://localhost:3000`.

## Customization
- The UI is styled to match the old Twitter/X.com look, but you can easily update colors, layout, or branding in the React components and CSS files.
- Add more features (likes, comments, following, etc.) by extending the backend and frontend code.

## License
This project is for educational/demo purposes. You are free to use and modify it as you wish.
# Otweet

Otweet is a Java-based social media application inspired by Twitter. This project uses Spring Boot, Spring Security, and MySQL. It features user authentication, profiles, post management, interactions, feed/timeline, search, notifications, and a follow system.

## Features

- User signup/login/logout
- Profile creation and editing
- Secure password encryption
- Post (tweet) creation, editing, deletion
- Like, comment, share/retweet
- Feed/timeline with pagination
- Search users/posts/hashtags
- Notifications for interactions
- Follow/unfollow users

## Tech Stack

- Java 17+
- Spring Boot
- Spring Security
- Spring Data JPA
- MySQL

## Getting Started

1. Configure your MySQL database in `src/main/resources/application.properties`.
2. Build and run the project using your preferred IDE or Maven/Gradle.
3. Use the REST API endpoints to interact with the backend.

## Project Structure

- `controller/` - REST API controllers
- `service/` - Business logic
- `repository/` - Data access
- `model/` - Entity models
- `security/` - Security configuration

---

Replace placeholders and add more details as you implement features.
