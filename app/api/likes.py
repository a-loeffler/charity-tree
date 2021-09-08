from flask import Blueprint
from app.models import Like
from app.models.db import db

likes_routes = Blueprint("likes", __name__)


@likes_routes.route("/")
def get_user_likes():
    likes = Like.query.all()
    return {"likes": [like.to_dict() for like in likes]}
