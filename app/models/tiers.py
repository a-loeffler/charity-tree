from .db import db


class Tier(db.Model):
    __tablename__ = 'tiers'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    value = db.Column(db.Integer, nullable=False)
    description = db.Column(db.String(5000), nullable=False)
    project_id = db.Column(db.Integer, nullable=False)
