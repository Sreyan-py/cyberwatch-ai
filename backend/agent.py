def explain_attack(text):
    text = text.lower()

    if "or 1=1" in text or "'" in text:
        return {
            "type": "SQL Injection",
            "severity": "HIGH",
            "fix": "Use parameterized queries"
        }

    if "<script>" in text:
        return {
            "type": "XSS",
            "severity": "HIGH",
            "fix": "Sanitize inputs"
        }

    return {
        "type": "Safe",
        "severity": "LOW",
        "fix": "No action needed"
    }