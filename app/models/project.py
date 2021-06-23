from .db import db


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

    categories = db.relationship("Category", back_populates="projects")
    owner = db.relationship("User", back_populates="projects")
    project_medias = db.relationship("Project_media", back_populates="project")
    donors = db.relationship("Donor", back_populates="project")
    tiers = db.relationship("Tier", back_populates="project")
