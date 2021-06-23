from .db import db


class Project_media(db.Model):
    __tablename__ = 'project_medias'

    id = db.Column(db.Integer, primary_key=True)
    project_id = db.Column(db.Integer, db.ForeignKey("projects.id"),
                           nullable=False)
    media_url = db.Column(db.String)

    project = db.relationship("Project", back_populates="project_medias")

    def to_dict(self):
        return {
            "project_id": self.project_id,
            "media_url": self.media_url,
        }
