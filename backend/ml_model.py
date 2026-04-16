from sklearn.ensemble import IsolationForest
import numpy as np

data = np.array([[10], [20], [30], [1000]])

model = IsolationForest()
model.fit(data)

def detect_anomaly(value):
    pred = model.predict([[value]])
    return "Anomaly 🚨" if pred[0] == -1 else "Normal"
