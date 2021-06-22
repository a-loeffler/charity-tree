from flask import Blueprint, request
# from app.models import MediaUploadForm

from app.aws import (
    upload_file_to_s3, allowed_file, get_unique_filename)
from app.models import Project_media

media_routes = Blueprint("media", __name__)



# @media_routes.route("/upload", methods=["GET"])
# def get_upload_form():
#     form = MediaUploadForm()


@media_routes.route("/")
def get_media():
    print("got the media")
    media = Project_media.query.all()
    return media


@media_routes.route("/upload", methods=["POST"])
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
