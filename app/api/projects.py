from flask import Blueprint, request
from app.aws import (
    upload_file_to_s3, allowed_file, get_unique_filename)
from app.models import Project, Project_media, Tier
from app.models.db import db

projects_routes = Blueprint("projects", __name__)


@projects_routes.route("/")
def get_all_projects():
    projects = Project.query.all()
    return {"projects": [project.to_dict() for project in projects]}


@projects_routes.route("/", methods=["POST"])
def post_new_project():
    print('line 18', request.get_json(force=False))
    # print(request.data)
    data = request.get_json()

    project = data['project']

    # print(data['project']['name'])

    newProject = Project(
        name=project["name"],
        description=project["description"],
        goal=project["goal"],
        deadline=project["deadline"],
        owner_id=project["owner_id"],
        category_id=project["category_id"],
    )

    db.session.add(newProject)

    db.session.commit()

    owner_id = newProject.to_dict()["id"]

    # To-do: if tiers, add each tier
    tiers = data['tiers']

    if len(tiers) > 0:
        for tier in tiers:
            newTier = Tier(
                name=tier["name"],
                value=tier["value"],
                description=tier["description"],
                project_id=owner_id,
            )
            db.session.add(newTier)

    db.session.commit()
    # newProject = data['project']['name']

    # return {'project': project}
    return {"project": newProject.to_dict()}


@projects_routes.route("/")
def get_all_media():
    project_medias = Project_media.query.selectAll()
    return {"project_medias": [project_medias.to_dict() for project_media in project_medias]}


@projects_routes.route("/<id>/edit")  # get media
def get_media(id):
    medias = Project_media.query.filter_by(project_id=id)
    return {"medias": [media.to_dict() for media in medias]}


@projects_routes.route("/<id>/edit", methods=["POST"])  # post page_html
def post_page_html(id):
    project = Project.query.get(id)
    project.page_html = request.get_json()
    db.session.commit()
    return {'html': project.page_html}


@projects_routes.route("/<id>/edit/name", methods=["PATCH"])
def patch_name(id):
    project = Project.query.get(id)
    project.name = request.get_json()
    db.session.commit()
    return 'OK'


@projects_routes.route("/<id>/edit/description", methods=["PATCH"])
def patch_description(id):
    project = Project.query.get(id)
    project.description = request.get_json()
    db.session.commit()
    return 'OK'


@projects_routes.route("/<id>/edit/goal", methods=["PATCH"])
def patch_goal(id):
    project = Project.query.get(id)
    project.goal = request.get_json()
    db.session.commit()
    return 'OK'


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
