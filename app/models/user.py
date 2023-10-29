from flask import current_app as app
from flask_login import UserMixin
from werkzeug.security import generate_password_hash, check_password_hash

class User(UserMixin):
    def __init__(self, db, id, username, rank_grade):
        self.db = db
        self.id = id
        self.username = username
        self.rank_grade = rank_grade

    @staticmethod
    def get_user_by_id(id):
        db = app.mongo['greatunihack']
        collection = db['username']
        user_data = collection.find_one({"_id": id})
        
        if user_data:
            new_user = User(db, user_data["_id"], user_data["username"])
            new_user.set_password(user_data["password"])
            return new_user
        return None

    @staticmethod
    def get_user_by_username(username):
        db = app.mongo['greatunihack']
        collection = db['username']
        user_data = collection.find_one({"username": username})
        
        if user_data:
            new_user = User(db, user_data["_id"], user_data["username"], user_data["rank"])
            new_user.set_password(user_data["password"])
            return new_user
        return None

    def save_to_db(self):
        self.db.users.insert_one({ # MODIFY
            "_id": self.id,
            "email": self.email,
            "password": self.password
        })

    def set_password(self, password):
        hashed_password = generate_password_hash(password, method='pbkdf2:sha256')
        self.password = hashed_password

    def check_password(self, password):
        return check_password_hash(password.encode('utf-8'), self.password)