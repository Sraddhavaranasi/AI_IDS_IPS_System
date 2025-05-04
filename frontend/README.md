
---

### ✅ `D:\AI_IDS_IPS_PROJECT\frontend\README.md` (Frontend README)

```markdown
# IDS/IPS Dashboard – Frontend

This is the React-based frontend for the AI-powered Intrusion Detection and Prevention System (IDS/IPS) developed for **Vijaya Enterprises**, a telecom and IT services company.

## 🌐 Features

- 🔐 **Login Page**  
  Secure login interface with show/hide password toggle.

- 📊 **Dashboard Page**  
  - Input fields for network traffic data: protocol, port, bytes sent/received, source/destination IP.
  - Button to send data to backend for threat detection.
  - Displays response including:
    - Whether a threat was detected.
    - If a threat is detected, shows a message like:
      - "🚨 Threat Detected! Blocking IP..."
      - "✅ Blocked IP: 192.168.1.123"
  - Real-time logging pulled from MongoDB.

- 🚪 **Sign-Out**  
  Sign out button in the top-right corner that redirects back to the login page.

## ⚙️ Tech Stack

- **React.js**
- **Tailwind CSS** (for styling)
- **Axios** (for HTTP requests)
- **React Router** (for page routing)

## 📁 Project Structure
frontend/
├── public/
├── src/
│ ├── components/ # Login, Dashboard, Alert UI
│ ├── pages/ # Main pages (Login, Dashboard)
│ ├── App.jsx # Routes and layout
│ ├── index.js
│ └── styles/ # Tailwind and CSS settings
└── README.md

## 📝 Notes

- Frontend interacts with the FastAPI backend at `http://127.0.0.1:8000/api/detect`.
- Axios is configured to send data as JSON and display results from the backend.
- Make sure the backend is running before interacting with the dashboard.

## 💡 Upcoming

I plan to containerize the frontend along with the backend using Docker and deploy using Kubernetes, managed via Jenkins CI/CD.

---

📁 [Main Repository](https://github.com/Sraddhavaranasi/AI_IDS_IPS_System)

