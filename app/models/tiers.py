from .db import db


class Tier(db.Model):
    __tablename__ = 'tiers'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    value = db.Column(db.Integer, nullable=False)
    description = db.Column(db.Text, nullable=False)
    project_id = db.Column(db.Integer, db.ForeignKey("projects.id"),
                           nullable=False)
    projects = db.relationship("Project", back_populates="tiers")
