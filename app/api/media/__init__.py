from flask import Blueprint, request

from app.aws import (
    upload_file_to_s3, allowed_file, get_unique_filename)


media_routes = Blueprint("media", __name__)


@media_routes.route("/upload", methods=["POST"])
def upload_media():
    if "file" not in request.files:
        return {"errors": "no media uploaded"}, 400

    mediaFile = request.files["file"]

    if not allowed_file(file.filename):
        return {"errors": "file type not permitted"}, 400

    image.filename = get_unique_filename(file.filename)

    upload = upload_file_to_s3(file)

    if "url" not in upload:
        return upload, 400

    url = upload["url"]

    return {"mediaUrl": url}
