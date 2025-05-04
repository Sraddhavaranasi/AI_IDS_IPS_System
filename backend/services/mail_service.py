# backend/services/mail_service.py

import smtplib
from email.message import EmailMessage
from config import MAILTRAP

def send_alert_email(log_id: str, prediction: str):
    msg = EmailMessage()
    msg["Subject"] = f"IDS Alert: {prediction.upper()} detected!"
    msg["From"] = MAILTRAP["FROM_EMAIL"]
    msg["To"] = MAILTRAP["TO_EMAIL"]
    msg.set_content(f"Log ID: {log_id} was detected as {prediction.upper()}.")

    with smtplib.SMTP(MAILTRAP["HOST"], MAILTRAP["PORT"]) as server:
        server.login(MAILTRAP["USERNAME"], MAILTRAP["PASSWORD"])
        server.send_message(msg)
