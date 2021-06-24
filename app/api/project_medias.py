from flask import Blueprint
from app.models import Project_media
from app.models.db import db

project_medias_routes = Blueprint("project_medias", __name__)


@project_medias_routes.route("/")
def get_all_media():
    project_medias = Project_media.query.all()
    return {"project_medias": [project_media.to_dict() for project_media in project_medias]}
