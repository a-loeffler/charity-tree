from flask_wtf import FlaskForm
from wtforms import FileField, FileAllowed
from wtforms.validators import ValidationError



class MediaUploadForm(FlaskForm):
    mediaFile = FileField("Upload Image or Video", FileAllowed(["pdf", "png", "jpg", "jpeg", "gif", "avi", "flv", "wmv", "mp4", "mov", "webm"], "Filetype not allowed"))
