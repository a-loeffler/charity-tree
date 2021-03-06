from flask import Blueprint, request
from app.aws import (
    upload_file_to_s3, allowed_file, get_unique_filename)
from app.models import Project, Project_media, Tier
from app.models.db import db

media_routes = Blueprint("media", __name__)


@media_routes.route("/temp_upload", methods=["POST"])
def post_media_to_aws():
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
