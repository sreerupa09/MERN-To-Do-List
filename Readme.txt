Todo Application Documentation
Overview
This is a basic todo application built using React and JSON Server. It allows users to add, edit, mark as completed, and delete todo items. The data is persisted using a JSON Server REST API.

Features
Add new todos
Edit existing todos
Mark todos as completed
Delete todos
Persist data using JSON Server REST API
Tech Stack
React - Frontend framework
JSON Server - Backend REST API
React Bootstrap - Styling
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── components
│   │   ├── AddTodo.js
│   │   ├── EditTodo.js
│   │   └── Todos.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── reportWebVitals.js
│   └── setupTests.js
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
Components
App - Root component handling overall app state and layout
Todos - Displays the todo items
AddTodo - Form to add new todos
EditTodo - Form to edit existing todos
APIs
The backend uses a JSON Server REST API hosted at http://localhost:5000

The endpoints are:

GET /todos - Get all todos
POST /todos - Create a new todo
PATCH /todos/:id - Update an existing todo
DELETE /todos/:id - Delete a todo
Starting the App
Backend:
npm install
npx json-server --watch data/db.json --port 5000
Frontend:
npm install
npm start
The app will be served at http://localhost:3000

