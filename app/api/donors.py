from flask import Blueprint, request
from app.models import Donor
from app.models.db import db


donors_routes = Blueprint("donors", __name__)


@donors_routes.route("/")
def get_all_donors():
    donors = Donor.query.all()
    return {"donations": [donor.to_dict() for donor in donors]}


@donors_routes.route("/", methods=["POST"])
def add_a_donor():
    print(request)
    print('DONORDONORDONORDATA!!!!!', request.get_json())
    print('DONORDONORDONORDATA!!!!!', request.get_json(force=False))

    data = request.get_json()

    newDonor = Donor(
        project_id=data["project_id"],
        user_id=data["user_id"],
        amount=data["amount"]
    )
    # donor = a

    db.session.add(newDonor)
    db.session.commit()
    return {"donor": newDonor.to_dict()}
