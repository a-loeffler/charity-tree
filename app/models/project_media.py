from .db import db
from datetime import datetime


class Project_media(db.Model):
    __tablename__ = 'project_medias'

    id = db.Column(db.Integer, primary_key=True)
    project_id = db.Column(db.Integer, db.ForeignKey("projects.id"),
                           nullable=False)
    media_url = db.Column(db.String)
    created = db.Column(db.DateTime, default=datetime.utcnow())

    project = db.relationship("Project", back_populates="project_medias")

    def to_dict(self):
        return {
            "project_id": self.project_id,
            "media_url": self.media_url,
        }
