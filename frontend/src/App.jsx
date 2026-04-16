import { useState, useEffect } from "react";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement);

export default function App() {
  const [data, setData] = useState(null);
  const [stats, setStats] = useState(null);
  const [logs, setLogs] = useState([]);
  const [fileResults, setFileResults] = useState([]);

  const uploadFile = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("http://127.0.0.1:5001/upload", {
      method: "POST",
      body: formData
    });

    const data = await res.json();

    setFileResults(data.results);
    setStats(data.stats); // update dashboard
  };

  useEffect(() => {
    const interval = setInterval(async () => {
      const res = await fetch("http://127.0.0.1:5001/auto");
      const result = await res.json();

      setData(result);
      setStats(result.stats);
      setLogs(prev => [result, ...prev.slice(0, 6)]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const chartData = stats && {
    labels: ["SQL", "XSS", "Safe"],
    datasets: [
      {
        label: "Threats",
        data: [stats.sql, stats.xss, stats.safe],
        backgroundColor: ["#ef4444", "#f59e0b", "#22c55e"]
      }
    ]
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>CyberWatch AI</h1>
      <p style={styles.subtitle}>Security Operations Dashboard</p>

      {/* 🟢 SUMMARY CARDS */}
      {stats && (
        <div style={styles.summaryGrid}>
          <div style={styles.summaryCard}>
            <h4>Total SQL</h4>
            <p style={styles.red}>{stats.sql}</p>
          </div>
          <div style={styles.summaryCard}>
            <h4>Total XSS</h4>
            <p style={styles.orange}>{stats.xss}</p>
          </div>
          <div style={styles.summaryCard}>
            <h4>Safe Traffic</h4>
            <p style={styles.green}>{stats.safe}</p>
          </div>
        </div>
      )}

      {/* ⚡ LATEST DETECTION */}
      {data && (
        <div style={styles.card}>
          <h3>Latest Detection</h3>
          <p><b>{data.result}</b></p>
          <p>Type: {data.agent.type}</p>
          <p>Severity: {data.agent.severity}</p>
          <p>Fix: {data.agent.fix}</p>
        </div>
      )}

      {/* 📊 CHART */}
      {stats && (
        <div style={styles.card}>
          <h3>Attack Distribution</h3>
          <Bar data={chartData} />
        </div>
      )}

      {/* 🔴 LIVE TRAFFIC */}
      <div style={styles.card}>
        <h3>Live Traffic Feed</h3>
        {logs.map((l, i) => (
          <p key={i} style={styles.log}>
            {l.log} → <span>{l.result}</span>
          </p>
        ))}
      </div>

      {/* 🧠 SYSTEM STATUS */}
      <div style={styles.card}>
        <h3>System Status</h3>
        <p>Backend: <span style={styles.green}>Running</span></p>
        <p>Detection Engine: <span style={styles.green}>Active</span></p>
        <p>Auto Monitor: <span style={styles.green}>Enabled</span></p>
      </div>

      {/* 📁 FILE UPLOAD */}
      <div style={styles.card}>
        <h3>Upload Log File</h3>

        <input type="file" onChange={uploadFile} />

        {fileResults.length > 0 && (
          <div style={{ marginTop: "10px" }}>
            {fileResults.map((item, i) => (
              <p key={i}>
                {item.log} → {item.result}
              </p>
            ))}
          </div>
        )}
      </div>

      {/* 🛡️ SECURITY INSIGHT */}
      {data && (
        <div style={styles.card}>
          <h3>Security Insight</h3>
          <p>
            {data.agent.severity === "HIGH"
              ? "⚠️ Immediate action required!"
              : "System is stable"}
          </p>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    background: "#020617",
    color: "#e5e7eb",
    minHeight: "100vh",
    padding: "40px",
    fontFamily: "Inter, sans-serif"
  },
  title: {
    fontSize: "32px"
  },
  subtitle: {
    color: "#94a3b8",
    marginBottom: "30px"
  },
  summaryGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "15px",
    marginBottom: "20px"
  },
  summaryCard: {
    background: "#0f172a",
    padding: "15px",
    borderRadius: "10px",
    textAlign: "center"
  },
  card: {
    background: "#0f172a",
    border: "1px solid #1e293b",
    borderRadius: "12px",
    padding: "20px",
    marginTop: "20px"
  },
  red: { color: "#ef4444" },
  orange: { color: "#f59e0b" },
  green: { color: "#22c55e" },
  log: {
    fontSize: "14px",
    marginTop: "5px",
    color: "#cbd5f5"

  }
};