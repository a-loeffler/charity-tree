from flask import Blueprint, request
from app.models import Like
from app.models.db import db

likes_routes = Blueprint("likes", __name__)


@likes_routes.route("/<int:id>")
def get_user_likes(id):
    likes = Like.query.filter(Like.user_id == id).all()
    print('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&7', likes)
    return {"likes": [like.to_dict() for like in likes]}


@likes_routes.route("/<int:id>/add", methods=["POST"])
def add_new_like(id):
    data = request.get_json()

    newLike = Like(
        user_id=id,
        project_id=data
    )
    db.session.add(newLike)
    db.session.commit()

    print('44444444444444444444', newLike.to_dict())
    return newLike.to_dict()
