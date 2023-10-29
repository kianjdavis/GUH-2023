from dotenv import load_dotenv
import os

load_dotenv()

class AppConfig:
    SECRET_KEY = os.environ["SECRET_KEY"]
    
    MONGO_USER = os.environ["MONGO_USER"]
    MONGO_PASSWORD = os.environ["MONGO_PASSWORD"]
    MONGO_URI = f"mongodb+srv://{MONGO_USER}:{MONGO_PASSWORD}@cluster0.sobmgyj.mongodb.net/"