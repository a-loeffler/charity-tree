from .db import db
from datetime import datetime


class Project(db.Model):
    __tablename__ = 'projects'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    description = db.Column(db.Text, nullable=False)
    goal = db.Column(db.Integer, nullable=False)
    goal_reached_date = db.Column(db.DateTime)
    current_amount = db.Column(db.Integer)
    deadline = db.Column(db.DateTime, nullable=False)
    owner_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    category_id = db.Column(db.Integer, db.ForeignKey("categories.id"))
    page_json = db.Column(db.Text)
    created = db.Column(db.DateTime, default=datetime.utcnow())

    categories = db.relationship("Category", back_populates="projects")
    owner = db.relationship("User", back_populates="projects")
    project_medias = db.relationship("Project_media", back_populates="project")
    donors = db.relationship("Donor", back_populates="project")
    tiers = db.relationship("Tier", back_populates="project")

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "goal": self.goal,
            "goal_reached_date": self.goal_reached_date,
            "current_amount": self.current_amount,
            "deadline": self.deadline,
            "owner_id": self.owner_id,
            "category_id": self.category_id,
            "page_json": self.page_json,
        }
