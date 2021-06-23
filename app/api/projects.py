from flask import Blueprint, request
from app.aws import (
    upload_file_to_s3, allowed_file, get_unique_filename)
from app.models import Project_media, Project

projects_routes = Blueprint("projects", __name__)


@projects_routes.route("/<id>/edit")  # get media
def get_media(id):
    medias = Project_media.query.filter_by(project_id=id)
    return {"medias": [media.to_dict() for media in medias]}


@projects_routes.route("/<id>/edit", methods=["POST"])  # post description
def post_description(id):
    print('+++++++++++', id)
    # print('qwoepirupwqoeirupowqeirupowqierupoweiqru', Project)
    project = Project.query.get(1)
    print('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&', project)
    return


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
