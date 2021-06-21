from .db import db


class Project_media(db.Model):
    __tablename__ = 'project_medias'
    project_id = db.Column(db.Integer, nullable=False)
    image_url = db.Column(db.String)
    video_url = db.Column(db.String)
