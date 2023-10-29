from flask import Blueprint, request, redirect, url_for
from flask_login import login_user
from app.models import User

auth = Blueprint('auth', __name__)

@auth.route('/login', methods=['POST'])
def login():
    email = request.form.get('email')
    password = request.form.get('password')
    remember = True if request.form.get('remember') else False

    user = User.get_user_by_email(email)

    if not user or not user.check_password(password):
        return redirect(url_for('auth.login'))

    login_user(user, remember=remember)

    return redirect(url_for('main.dashboard'))