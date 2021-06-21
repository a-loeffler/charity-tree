from .db import db


class Project_media(db.Model):
    __tablename__ = 'project_medias'

    id = db.Column(db.Integer, primary_key=True)
    project_id = db.Column(db.Integer, nullable=False)
    image_url = db.Column(db.String)
    video_url = db.Column(db.String)
