from flask import Flask, request, jsonify
from flask_cors import CORS
from model import detect_attack
from agent import explain_attack
import random

app = Flask(__name__)
CORS(app)

# 🔥 Global stats
attack_count = {
    "sql": 0,
    "xss": 0,
    "safe": 0
}

# 🔥 Sample logs (auto simulation)
sample_logs = [
    "' OR 1=1",
    "<script>alert(1)</script>",
    "hello world",
    "admin' --",
    "<img src=x onerror=alert(1)>",
    "safe input"
]

@app.route('/')
def home():
    return "CyberWatch AI Backend Running"

# 🔥 Manual scan
@app.route('/analyze', methods=['POST'])
def analyze():
    data = request.json
    text = data.get("text", "")

    result = detect_attack(text)
    agent = explain_attack(text)

    # update stats
    if "SQL" in result:
        attack_count["sql"] += 1
    elif "XSS" in result:
        attack_count["xss"] += 1
    else:
        attack_count["safe"] += 1

    return jsonify({
        "result": result,
        "agent": agent,
        "stats": attack_count
    })

# 🔥 AUTO DETECTION (SIMULATION)
@app.route('/auto', methods=['GET'])
def auto_detect():
    log = random.choice(sample_logs)

    result = detect_attack(log)
    agent = explain_attack(log)

    # update stats
    if "SQL" in result:
        attack_count["sql"] += 1
    elif "XSS" in result:
        attack_count["xss"] += 1
    else:
        attack_count["safe"] += 1

    return jsonify({
        "log": log,
        "result": result,
        "agent": agent,
        "stats": attack_count
    })

# 🔥 FILE UPLOAD (NEW FEATURE 🚀)
@app.route('/upload', methods=['POST'])
def upload_logs():
    file = request.files['file']

    content = file.read().decode("utf-8")
    lines = content.splitlines()

    results = []

    for line in lines:
        result = detect_attack(line)
        agent = explain_attack(line)

        # update stats
        if "SQL" in result:
            attack_count["sql"] += 1
        elif "XSS" in result:
            attack_count["xss"] += 1
        else:
            attack_count["safe"] += 1

        results.append({
            "log": line,
            "result": result,
            "agent": agent
        })

    return jsonify({
        "results": results,
        "stats": attack_count
    })

# 🔥 Stats API
@app.route('/stats', methods=['GET'])
def stats():
    return jsonify(attack_count)

# 🔥 Reset stats (extra pro feature)
@app.route('/reset', methods=['POST'])
def reset():
    attack_count["sql"] = 0
    attack_count["xss"] = 0
    attack_count["safe"] = 0
    return jsonify({"message": "Stats reset"})

if __name__ == '__main__':
    app.run(debug=True, port=5001)