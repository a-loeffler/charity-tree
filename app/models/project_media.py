from .db import db


class Project_media(db.Model):
    __tablename__ = 'project_medias'

    id = db.Column(db.Integer, primary_key=True)
    project_id = db.Column(db.Integer, db.ForeignKey("projects.id"),
                           nullable=False)
    image_url = db.Column(db.String)
    video_url = db.Column(db.String)

    projects = db.relationship("Project", back_populates="project_medias")
