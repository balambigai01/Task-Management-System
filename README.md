Task Management System

A full-stack task management system built with:

Frontend: Next.js, TypeScript, Axios

Backend: Node.js, Express.js, MongoDB

Python Microservice: Flask (Task Classification using Text Classification Model)

This project was built as part of an assignment.

🚀 Features

Create, update, delete tasks

Fetch all tasks and task by ID

AI-powered task classification (Python microservice)

MongoDB database

Fully responsive UI

Optional hosted live demo

📂 Project Structure
task_management_system/
│── frontend/
│── backend/
│── python-ai/
└── README.md

🛠️ 1. Frontend Setup (Next.js)
📌 Requirements

Node.js (>= 18)

npm or yarn

📥 Install Dependencies
cd frontend
npm install

⚙️ Configure Environment Variables

Create .env.local inside the frontend folder:

NEXT_PUBLIC_API_URL=http://localhost:8000


Example:

NEXT_PUBLIC_API_URL=https://taskmanagement-seven-alpha.vercel.app

▶️ Run Frontend
npm run dev


App runs at:
👉 http://localhost:3000

🔧 2. Backend Setup (Node.js + Express)
📌 Requirements

Node.js

MongoDB Atlas / Local MongoDB

📥 Install Dependencies
cd backend
npm install

⚙️ Add Environment Variables

Create a .env file:

MONGODB_URL=mongodb+srv://username:password@cluster.mongodb.net
PORT=8000


▶️ Run Backend
npm start


Backend runs at:
👉 http://localhost:8000

🧠 3. Python Microservice Setup (Flask)
📌 Requirements

Python 3.9+

pip

📥 Install Dependencies
cd python-ai
pip install -r requirements.txt

▶️ Run Python Microservice
python app.py


Python API runs at:
👉 http://127.0.0.1:5000

🔗 4. Connecting Services

Frontend → Backend → Python Microservice

Frontend calls backend:
/tasks

Backend forwards classification requests to Python:
/classify

Ensure:

Frontend NEXT_PUBLIC_API_URL is the backend URL

Backend has Python microservice URL in .env like:

PYTHON_API_URL=http://127.0.0.1:5000

🎥 5. Demo Video

A 5-minute demo video is included showing:

Project overview

Features

Flow between services

Task creation & classification

🌐 6. Optional Hosted Demo

Live demo:
👉 https://task-management-system-w2ye.vercel.app

Backend Hosted:
👉 https://taskmanagement-seven-alpha.vercel.app

Python Hosted:
👉 https://task-management-system-bpyc.onrender.com

GitHub Repository:
👉 https://github.com/balambigai01/task_management_system

✔️ 7. How to Run the Entire System Locally

1️⃣ Start backend:

cd backend && npm start


2️⃣ Start python microservice:

cd python-ai && python app.py


3️⃣ Start frontend:

cd frontend && npm run dev

🙌 8. Author

Balambigai M