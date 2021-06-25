from flask import Blueprint
from app.models import Tier
from app.models.db import db

tiers_routes = Blueprint("tiers", __name__)


@tiers_routes.route("/")
def get_all_tiers():
    tiers = Tier.query.all()
    return {"tiers": [tier.to_dict() for tier in tiers]}
