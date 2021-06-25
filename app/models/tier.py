from .db import db


class Tier(db.Model):
    __tablename__ = 'tiers'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    value = db.Column(db.Integer, nullable=False)
    description = db.Column(db.Text, nullable=False)
    project_id = db.Column(db.Integer, db.ForeignKey("projects.id"),
                           nullable=False)
    project = db.relationship("Project", back_populates="tiers")

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "value": self.value,
            "description": self.description,
            "project_id": self.project_id
        }
