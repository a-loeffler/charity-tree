from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import User

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
def users():
    users = User.query.all()
    return {"users": [user.to_dict() for user in users]}


@user_routes.route('/update', methods=["POST"])
def update_users():
    print('77777777777777777777777777777777777777', request_json())

# @user_routes.route('/test')
# @login_required
# def users():
#     users = User.query.all()
#     print('*********************************************************', users)
#     return {"users": [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()
