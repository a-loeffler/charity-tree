from flask import Blueprint, request
from app.models import Like
from app.models.db import db

likes_routes = Blueprint("likes", __name__)


@likes_routes.route("/<int:id>")
def get_user_likes(id):
    likes = Like.query.filter(Like.user_id == id).all()
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

    return newLike.to_dict()


@likes_routes.route("/<int:id>/remove", methods=["DELETE"])
def delete_like(id):
    data = request.get_json()

    like = Like.query.filter(
                             Like.user_id == id,
                             Like.project_id == data
                            ).first()

    db.session.delete(like)
    db.session.commit()

    return get_user_likes(id)
