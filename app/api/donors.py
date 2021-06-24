from flask import Blueprint
from app.models import Donor
from app.models.db import db


donors_routes = Blueprint("donors", __name__)


@donors_routes.route("/")
def get_all_donors():
    donors = Donor.query.all()
    return {"donors": [donor.to_dict() for donor in donors]}
