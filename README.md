Task Manager – Full Stack Application

A modern, full-stack Task Management system built with Next.js, Express.js, MongoDB, and a Python AI microservice for intelligent task classification.
Designed with clean UI, scalable architecture, and production-ready deployment.

🚀 Features
Core Features

Create, update, and delete tasks

Real-time task filtering by status

Task details with title & description

Status options: Pending, In Progress, Completed

Responsive and clean UI with Tailwind CSS

AI Features

Python microservice automatically classifies tasks based on description

Node backend communicates with Python service using REST API

Frontend (Next.js)

Built using Next.js 16

Server & client components

Clean and modular folder structure

API routes for secure backend interaction

Fully responsive UI

Backend (Node + Express)

RESTful API architecture

Mongoose models for MongoDB

Error handling, validations, async operations

Routes for task CRUD operations

Communicates with Python service for AI classification

Python Microservice

Flask/FastAPI based classifier

Receives task description → returns classification

Runs independently but communicates with Node.js

🛠 Tech Stack
Frontend

Next.js 16

React

Tailwind CSS

Axios/Fetch

Typescript (if used)

Backend

Node.js

Express.js

MongoDB + Mongoose

Python AI Service (Flask/FastAPI)

Deployment

Docker

Docker Compose

GitHub
