from flask_login import UserMixin
import bcrypt

class User(UserMixin):
    def __init__(self, db, id, email, password, rank_grade):
        self.db = db
        self.id = id
        self.email = email
        self.password = password
        self.rank_grade = rank_grade

    @staticmethod
    def get_user_by_id(db, id):
        user_data = db.users.find_one({"_id": id})
        if user_data:
            return User(db, user_data["_id"], user_data["email"], user_data["password"])
        return None

    @staticmethod
    def get_user_by_email(db, email):
        user_data = db.users.find_one({"email": email})
        if user_data:
            return User(db, user_data["_id"], user_data["email"], user_data["password"])
        return None

    def save_to_db(self):
        self.db.users.insert_one({
            "_id": self.id,
            "email": self.email,
            "password": self.password, 
            "rank_grade": self.rank_grade
        })

    def set_password(self, password):
        hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
        self.password = hashed_password

    def check_password(self, password):
        return bcrypt.checkpw(password.encode('utf-8'), self.password)
    
    def increase_grade(self, grade):
        self.grade += grade