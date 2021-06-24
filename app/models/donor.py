from .db import db
from datetime import datetime


class Donor(db.Model):
    __tablename__ = 'donors'

    id = db.Column(db.Integer, primary_key=True)
    project_id = db.Column(db.Integer, db.ForeignKey("projects.id"),
                           nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    amount = db.Column(db.Integer, nullable=False)
    created = db.Column(db.DateTime, default=datetime.utcnow())

    project = db.relationship("Project", back_populates="donors")
    user = db.relationship("User", back_populates="donors")
