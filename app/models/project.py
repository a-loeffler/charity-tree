from .db import db


class Project(db.Model):
    __tablename__ = 'projects'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    description = db.Column(db.String(5000), nullable=False)
    goal = db.Column(db.Integer, nullable=False)
    goal_reached_date = db.Column(db.DateTime)
    current_amount = db.Column(db.Integer)
    deadline = db.Column(db.DateTime, nullable=False)
    owner = db.Column(db.String, nullable=False)
    category_id = db.Column(db.Integer, nullable=False)
