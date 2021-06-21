from .db import db


class Donor(db.Model):
    __tablename__ = 'donors'

    id = db.Column(db.Integer, primary_key=True)
    project_id = db.Column(db.Integer, nullable=False)
    user_id = db.Column(db.Integer)
    amount = db.Column(db.Integer, nullable=False)
