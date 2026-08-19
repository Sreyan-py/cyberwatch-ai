# ⚡ CyberWatch AI

CyberWatch AI is a lightweight, real-time cybersecurity monitoring dashboard designed to detect and analyze common web-based threats such as **SQL Injection** and **Cross-Site Scripting (XSS)**.

The application combines a **Flask-based detection backend** with a **React-based security dashboard** to classify suspicious activity, provide threat explanations and mitigation guidance, simulate security logs, and visualize attack activity through live analytics.

> 🛡️ **CyberWatch AI is designed as a cybersecurity learning, demonstration, and lightweight SOC-style monitoring platform.**

---

## 🚀 Features

* 🔍 **SQL Injection Detection**
* 🧪 **Cross-Site Scripting (XSS) Detection**
* ⚡ **Automatic Security Log Simulation**
* 📊 **Live Attack Statistics**
* 📈 **Attack Distribution Visualization**
* 🧠 **AI-Assisted Threat Explanation**
* 🚨 **Severity Classification**
* 🛠️ **Mitigation & Security Recommendations**
* 🔄 **Real-Time Dashboard Updates**
* 🌐 **React + Flask Full-Stack Architecture**
* 🔌 **REST API Communication**

---

## 🧠 How It Works

CyberWatch AI follows a simple security-monitoring pipeline:

```text
Security Input / Simulated Log
            ↓
      Flask REST API
            ↓
     Detection Engine
            ↓
   Attack Classification
      ↓              ↓
 SQL Injection       XSS
      ↓              ↓
        AI Explanation
              ↓
       Severity + Fix
              ↓
       React Dashboard
              ↓
     Live Security Analytics
```

### Detection Flow

1. A suspicious payload is submitted or a simulated security log is generated.
2. The Flask backend receives the input through a REST API.
3. The detection engine analyzes the input for known attack patterns.
4. The activity is classified as **SQL Injection, XSS, or Safe**.
5. The AI agent generates an explanation, severity level, and mitigation recommendation.
6. Detection statistics are updated.
7. The React dashboard displays the result and updates the live attack analytics.

---

## 📊 Security Monitoring

CyberWatch AI provides a lightweight SOC-style view of detected activity.

The dashboard tracks:

| Metric        | Purpose                                      |
| ------------- | -------------------------------------------- |
| SQL Injection | Number of detected SQL Injection attempts    |
| XSS           | Number of detected XSS attempts              |
| Safe          | Number of inputs classified as non-malicious |
| Live Activity | Continuously updated security statistics     |
| Severity      | Indicates the potential risk level           |
| Mitigation    | Provides recommended defensive actions       |

---

## 🏗️ Architecture

CyberWatch AI uses a simple full-stack architecture:

```text
                 ┌──────────────────────┐
                 │    React Dashboard   │
                 │       Frontend       │
                 └──────────┬───────────┘
                            │
                       REST APIs
                            │
                 ┌──────────▼───────────┐
                 │    Flask Backend     │
                 │     API Server       │
                 └──────────┬───────────┘
                            │
             ┌──────────────┴──────────────┐
             │                             │
      Detection Engine              AI Explanation
             │                             │
             └──────────────┬──────────────┘
                            │
                     Security Results
                            │
                 ┌──────────▼───────────┐
                 │    Live Statistics   │
                 │   & Attack Analytics │
                 └──────────────────────┘
```

---

## 🛠️ Tech Stack

### Frontend

* React
* Vite
* JavaScript
* Chart.js
* HTML/CSS

### Backend

* Python
* Flask
* Flask-CORS

### Communication

* REST APIs
* JSON

### Security Detection

* Pattern-based attack detection
* SQL Injection classification
* XSS classification
* Security severity analysis
* Mitigation recommendations

---

## 📁 Project Structure

```text
cyberwatch-ai/
│
├── backend/
│   ├── app.py
│   ├── agent.py
│   ├── model.py
│   ├── ml_model.py
│   └── requirements.txt
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── data/
│
├── run.sh
│
└── README.md
```

---

## ▶️ Run Locally

### 1. Clone the Repository

```bash
git clone https://github.com/Sreyan-py/cyberwatch-ai.git
cd cyberwatch-ai
```

### 2. Start the Backend

```bash
cd backend
```

Create and activate a virtual environment:

```bash
python3 -m venv venv
source venv/bin/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Start Flask:

```bash
python app.py
```

The backend runs on:

```text
http://127.0.0.1:5001
```

---

### 3. Start the Frontend

Open a **new terminal** and navigate to the frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```




---

## 🔌 API Endpoints

| Endpoint   | Method | Purpose                                         |
| ---------- | ------ | ----------------------------------------------- |
| `/`        | GET    | Backend health check                            |
| `/analyze` | POST   | Analyze a submitted security payload            |
| `/auto`    | GET    | Generate and analyze a simulated security event |
| `/stats`   | GET    | Retrieve current attack statistics              |

### Example `/analyze` Request

```json
{
  "text": "' OR 1=1"
}
```

### Example Response

```json
{
  "result": "SQL Injection",
  "agent": {
    "type": "SQL Injection",
    "severity": "HIGH",
    "fix": "Use parameterized queries"
  }
}
```

---

## 🎯 Use Cases

CyberWatch AI can be used for:

* 🛡️ Demonstrating web attack detection
* 🔐 Learning SQL Injection and XSS concepts
* 📊 Understanding security monitoring dashboards
* 🧪 Simulating suspicious security events
* 🎓 Cybersecurity project demonstrations
* 💼 Demonstrating SOC and threat-monitoring concepts
* 🔬 Experimenting with automated threat classification

---

## ⚠️ Project Scope

CyberWatch AI is a **lightweight security monitoring and educational platform**.

The current implementation focuses on simulated security events and known attack patterns. It is **not intended to replace a production SIEM, IDS/IPS, WAF, or enterprise SOC platform**.

---

## 🔮 Future Improvements

* 🤖 Machine-learning-based threat detection
* 📡 Integration with real web/server logs
* 🔐 User authentication and role-based access
* 🚨 Real-time security alerts
* 📧 Email / notification integration
* 🗄️ Persistent security event storage
* 🌐 Production cloud deployment
* 📊 Advanced SOC analytics
* 🔎 Additional attack classifications
* 📈 Historical security reports

---

## 👨‍💻 Author

**Sreyan Swarna**

B.Tech Computer Science | Cybersecurity

GitHub: https://github.com/Sreyan-py

---

## ⭐ Project

If you find CyberWatch AI useful for learning or experimentation, consider giving the repository a ⭐.
