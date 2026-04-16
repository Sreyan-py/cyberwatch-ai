def detect_attack(text):
    text = text.lower()

    if "or 1=1" in text or "'" in text:
        return "SQL Injection 🚨"

    if "<script>" in text:
        return "XSS Attack 🚨"

    return "Safe ✅"
