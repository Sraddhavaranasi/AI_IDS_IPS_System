# backend/services/db_service.py

from pymongo import MongoClient
from config import MONGO_URI, DB_NAME, COLLECTION_NAME
from datetime import datetime

client = MongoClient(MONGO_URI)
db = client[DB_NAME]
collection = db[COLLECTION_NAME]

def log_detection(data: dict, prediction: str, blocked: bool = False):
    log_entry = {
        "timestamp": datetime.now(),
        "data": data,
        "prediction": prediction,
        "blocked": blocked
    }
    collection.insert_one(log_entry)
