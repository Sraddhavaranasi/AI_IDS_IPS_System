from fastapi import APIRouter
from pydantic import BaseModel
from services.ml_service import predict
from services.db_service import log_detection
from services.mail_service import send_alert_email
from typing import Optional
import subprocess

router = APIRouter()

class DetectionRequest(BaseModel):
    protocol: str
    port: int
    bytes_sent: int
    bytes_received: int
    source_ip: Optional[str] = None
    destination_ip: Optional[str] = None

@router.post("/detect")
async def detect_threat(data: DetectionRequest):
    prediction = predict(data.dict())

    threat_detected = False
    blocked_ip = None
    blocked = False

    if prediction != "Normal":
        threat_detected = True
        send_alert_email(data.dict(), prediction)

        if data.source_ip:
            command = f'netsh advfirewall firewall add rule name="Blocked {data.source_ip}" dir=in action=block remoteip={data.source_ip}'
            subprocess.run(command, shell=True)
            blocked_ip = data.source_ip
            blocked = True
            print(f"[IPS] Blocked IP {data.source_ip} using Windows Firewall.")

    # Log with blocked flag
    log_detection(data.dict(), prediction, blocked)

    return {
        "prediction": prediction,
        "threat_detected": threat_detected,
        "blocked_ip": blocked_ip
    }
