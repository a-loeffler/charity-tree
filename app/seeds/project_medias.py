from app.models import db, Project_media


# Adds a demo project_media, you can add other project_medias here if you want
def seed_project_medias():

    project_media_1 = Project_media(project_id=1, media_url="https://th.bing.com/th/id/OIP._jt9zAneTFLbYSCVoKW16AHaE8?pid=ImgDet&rs=1")
    project_media_2 = Project_media(project_id=1, media_url="https://media.istockphoto.com/photos/sick-child-asleep-in-hospital-bed-with-gown-and-canula-picture-id467796216")
    project_media_3 = Project_media(project_id=1, media_url="https://thumbs.dreamstime.com/b/children-patient-hospital-bed-closing-his-face-38625529.jpg")
    project_media_4 = Project_media(project_id=1, media_url="https://i.pinimg.com/originals/0f/c4/55/0fc455dca5836a5876f759b72f422270.jpg")

    db.session.add(project_media_1)
    db.session.add(project_media_2)
    db.session.add(project_media_3)
    db.session.add(project_media_4)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the project_medias table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_project_medias():
    db.session.execute('TRUNCATE project_medias RESTART IDENTITY CASCADE;')
    db.session.commit()
