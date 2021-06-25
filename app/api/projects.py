from flask import Blueprint, request
from app.aws import (
    upload_file_to_s3, allowed_file, get_unique_filename)
from app.models import Project, Project_media
from app.models.db import db

projects_routes = Blueprint("projects", __name__)


@projects_routes.route("/")
def get_all_projects():
    projects = Project.query.all()
    return {"projects": [project.to_dict() for project in projects]}


@projects_routes.route("/")
def get_all_media():
    project_medias = Project_media.query.selectAll()
    return {"project_medias": [project_medias.to_dicr() for project_media in project_medias]}


@projects_routes.route("/<id>/edit")  # get media
def get_media(id):
    medias = Project_media.query.filter_by(project_id=id)
    return {"medias": [media.to_dict() for media in medias]}


@projects_routes.route("/<id>/edit", methods=["POST"])  # post page_json
def post_page_json(id):
    project = Project.query.get(1)
    project.page_json = request.get_json()
    db.session.commit()
    return {'html': project.page_json}


@projects_routes.route("/create/:id/upload", methods=["POST"])
def upload_media():
    print("in the route")
    if "file" not in request.files:
        return {"errors": "no media uploaded"}, 400

    mediaFile = request.files["file"]

    if not allowed_file(mediaFile.filename):
        return {"errors": "file type not permitted"}, 400

    mediaFile.filename = get_unique_filename(mediaFile.filename)

    upload = upload_file_to_s3(mediaFile)

    if "url" not in upload:
        return upload, 400

    url = upload["url"]

    return {"mediaUrl": url}
