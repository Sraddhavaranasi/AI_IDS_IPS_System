# backend/routes/auth.py

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

router = APIRouter()

class Login(BaseModel):
    username: str
    password: str

@router.post("/login")
def login(credentials: Login):
    if credentials.username == "employee" and credentials.password == "password123":
        return {"message": "Login successful"}
    raise HTTPException(status_code=401, detail="Invalid credentials")
