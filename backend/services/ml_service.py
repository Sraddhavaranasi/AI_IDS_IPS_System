import joblib
import numpy as np

# Load models once at startup
rf_model = joblib.load("models/rf_model.pkl")
iso_model = joblib.load("models/iso_final.pkl")
encoder = joblib.load("models/protocol_encoder.pkl")

def predict_attack_rf(features: np.array) -> str:
    """ Predict attack using Random Forest model """
    pred = rf_model.predict([features])
    return "attack" if pred[0] == 1 else "normal"

def predict_attack_iso(features: np.array) -> str:
    """ Predict attack using Isolation Forest model """
    pred = iso_model.predict([features])
    return "anomaly" if pred[0] == -1 else "normal"

def predict(data: dict) -> str:
    """ Main prediction function, chooses model based on features """
    # Encode protocol safely
    encoded_protocol = encoder.transform([[data["protocol"]]]).flatten()[0]

    # Example feature conversion (adjust according to your model training)
    features = [
        data["port"],
        data["bytes_sent"],
        data["bytes_received"],
        encoded_protocol
    ]
    
    # Predict using both models
    rf_prediction = predict_attack_rf(features)
    iso_prediction = predict_attack_iso(features)
    
    # Combine predictions logically
    if rf_prediction == "attack":
        return "attack"
    elif iso_prediction == "anomaly":
        return "anomaly"
    else:
        return "normal"
