from flask import Blueprint
from app.models import Category
from app.models.db import db

categories_routes = Blueprint("categories", __name__)


@categories_routes.route("/")
def get_all_categories():
    categories = Category.query.all()
    print(categories)
    return {"categories": [category.to_dict() for category in categories]}
