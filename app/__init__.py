from flask import Flask
from flask_login import LoginManager
from config import AppConfig
from .routes import auth_blueprint
from .routes import questions_blueprint
from pymongo import MongoClient
from flask_cors import CORS

def create_app():
    app = Flask(__name__)
    CORS(app, resources={r"/*": {"origins": "*"}})
    app.config.from_object(AppConfig)
    
    # Initialize Flask-Login
    login_manager = LoginManager()
    login_manager.init_app(app)
    
    # Initialize MongoClient
    with app.app_context():
        app.mongo = MongoClient(app.config["MONGO_URI"])
    
    # Import and register blueprints
    app.register_blueprint(auth_blueprint)
    app.register_blueprint(questions_blueprint)

    return app
    