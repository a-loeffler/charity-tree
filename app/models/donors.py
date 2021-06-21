from .db import db


class Donor(db.Model):
    __tablename__ = 'donors'

    id = db.Column(db.Integer, primary_key=True)
    project_id = db.Column(db.Integer, db.ForeignKey("projects.id"),
                           nullable=False)
    user_id = db.Column(db.Integer)
    amount = db.Column(db.Integer, nullable=False)

    projects = db.relationship("Project", back_populates="donors")
    users = db.relationship("User", back_populates="donors")
