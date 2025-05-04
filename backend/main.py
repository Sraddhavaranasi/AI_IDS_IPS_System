import uvicorn
from fastapi import FastAPI
from routes import detect
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()
# Add CORS middleware to allow requests from frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins (for development purposes)
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods (GET, POST, etc.)
    allow_headers=["*"],  # Allows all headers
)

@app.get("/")
def read_root():
    return {"message": "AI-Powered IDS/IPS API is running"}

# Remove the '/api' prefix here
app.include_router(detect.router)  # No prefix here, so the endpoint will be accessible at '/detect'

# Print the registered routes right after the app is created
print("Registered routes:")
for route in app.routes:
    print(f"{route.path} -> {route.name}")

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000)
