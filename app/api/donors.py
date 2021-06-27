from flask import Blueprint
from app.models import Donor
from app.models.db import db


donors_routes = Blueprint("donors", __name__)


@donors_routes.route("/")
def get_all_donors():
    donors = Donor.query.all()
    return {"donations": [donor.to_dict() for donor in donors]}


@donors_routes.route("/", methods=["POST"])
def add_a_donor():
    print('DONORDONORDONORDATA!!!!!', REQUEST.GET_JSON())
    print('DONORDONORDONORDATA!!!!!', REQUEST.GET_JSON(force=False))

    # data = request.get_json()
    # donor =
