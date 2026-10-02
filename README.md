# Movie App – MERN Stack

## Project Description
Movie App is a full-stack web application where users can build their
own personal movie collection. Users can add movies through a form,
and the information is saved in a MongoDB database. All saved movies
can then be viewed in a list. The home page welcomes the user and
features a "Movie of the Day".

The project is divided into two parts:
- **Frontend:** built with React, it shows the pages and sends the form data.
- **Backend:** built with Node.js and Express, it receives the data and
  saves it in MongoDB.

This project was developed as Assignment 1 of the Full Stack Software
Development program at Canadian Business College (CBC).

## Technologies
- JavaScript
- React 19
- Vite
- React Router
- Node.js
- Express
- MongoDB (MongoDB Atlas)
- CORS
- CSS

## How to Run
You need two terminals: one for the backend and one for the frontend.

1. Clone the repository:
   ```bash
   git clone https://github.com/hanpal16-ux/movie-app-mern.git
   cd movie-app-mern
   ```
2. Set up the backend:
   ```bash
   cd Backend
   npm install
   ```
3. Open `Backend/app.js` and replace the MongoDB connection string
   (`uri`) with your own MongoDB Atlas connection string.
4. Start the backend server (it runs on port 8000):
   ```bash
   node app.js
   ```
5. In a second terminal, set up and start the frontend:
   ```bash
   cd my-project-frontend
   npm install
   npm run dev
   ```
6. Open the link shown in the terminal (usually http://localhost:5173/)
   in your web browser.

## Features
- Home page with a welcome message and a "Movie of the Day" card
- Form to add a new movie (title, director, genre, year, and rating)
- Saves each movie in a MongoDB database
- Movie list page that shows all saved movies
- Navigation between pages without reloading (React Router)
- "Page not found" message for unknown URLs
- Reusable layout components (container, rows, and columns)

| Page       | URL         | Backend endpoint   |
|------------|-------------|--------------------|
| Home       | `/`         | –                  |
| Add Movie  | `/userinfo` | `POST /movies`     |
| Movie List | `/userlist` | `GET /movies`      |

## Author
Hanner Palacios
