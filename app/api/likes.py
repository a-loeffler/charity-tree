from flask import Blueprint
from app.models import Like
from app.models.db import db

likes_routes = Blueprint("likes", __name__)


@likes_routes.route("/<int:id>")
def get_user_likes(id):
    likes = Like.query.filter(Like.user_id == id).all()
    print('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&7', likes)
    return {"likes": [like.to_dict() for like in likes]}
