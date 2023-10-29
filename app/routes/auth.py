from flask import Blueprint, make_response, request, jsonify
from flask_login import login_user
from app.models import User

auth = Blueprint('auth', __name__)

@auth.route('/login', methods=['OPTIONS','POST'])
def login():
    # Handle OPTIONS request
    if request.method == 'OPTIONS':
        response = make_response()
        response.headers.add("Access-Control-Allow-Methods", "POST")
        response.headers.add("Access-Control-Allow-Headers", "Content-Type")
        return response

    data = request.get_json()
    print(data)
    username = data['username']
    password = data['password']
    remember = True
    user = User.get_user_by_username(username)
    if not user or not user.check_password(password):
        return jsonify({'error': 'Invalid username or password'}), 401
    
    login_user(user)
    return jsonify({'message': 'Login successful'}), 200