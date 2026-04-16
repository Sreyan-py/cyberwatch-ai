# ⚡ CyberWatch AI

CyberWatch AI is a real-time cybersecurity monitoring dashboard that detects common web-based attacks such as SQL Injection and Cross-Site Scripting (XSS). It provides live analytics, attack classification, and security recommendations through an interactive web interface.

---

## 🚀 Features

- 🔍 Detects SQL Injection and XSS attacks
- 📊 Live attack dashboard with real-time updates
- ⚡ Automatic log simulation and monitoring
- 🛠️ Provides severity level and mitigation steps
- 🌐 Full-stack application (Flask + React)
- 📈 Visual attack distribution using charts

---
## 🧠 How It Works

1. User inputs a payload or system generates logs automatically  
2. Backend (Flask) analyzes input using detection logic  
3. Attack is classified (SQL / XSS / Safe)  
4. AI agent provides explanation and fix suggestions  
5. Frontend (React) displays results and updates dashboard in real-time  

---

## 🛠️ Tech Stack

- Frontend: React (Vite), Chart.js  
- Backend: Flask (Python)  
- Communication: REST APIs  
- Visualization: Chart.js  

---

## 📦 Project Structure
cyberwatch-ai-pro/
├── backend/
├── frontend/
├── data/
└── run.sh


---
## ▶️ How to Run Locally

### Backend

cd backend
source venv/bin/activate
python3 app.py

### Frontend

cd frontend
npm install
npm run dev


Open: http://localhost:5173

---

## 🎯 Use Case

This project simulates a lightweight Security Operations Center (SOC) tool for:

- Monitoring web attacks  
- Learning cybersecurity concepts  
- Demonstrating real-time threat detection systems  

---

## 🔥 Future Improvements

- Integration with real server logs  
- Machine Learning-based detection  
- User authentication & alerts  
- Cloud deployment with scalability  

---

## 👨‍💻 Author

Sreyan Swarna
