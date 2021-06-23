from app.models import db, Project


# Adds a demo category, you can add other categories here if you want
def seed_projects():

    demo_project_1 = Project(name='Demo', description='demoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo', goal=500, deadline="2021-12-25", owner_id=1)
    demo_project_2 = Project(name='Demo', description='demoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo', goal=500, deadline="2021-12-25", owner_id=1)
    demo_project_3 = Project(name='Demo', description='demoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo', goal=500, deadline="2021-12-25", owner_id=1)
    demo_project_4 = Project(name='Demo', description='demoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo', goal=500, deadline="2021-12-25", owner_id=1)
    demo_project_5 = Project(name='Demo', description='demoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo', goal=500, deadline="2021-12-25", owner_id=1)
    demo_project_6 = Project(name='Demo', description='demoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo', goal=500, deadline="2021-12-25", owner_id=1)
    demo_project_7 = Project(name='Demo', description='demoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo', goal=500, deadline="2021-12-25", owner_id=1)
    demo_project_8 = Project(name='Demo', description='demoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo', goal=500, deadline="2021-12-25", owner_id=1)
    demo_project_9 = Project(name='Demo', description='demoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo', goal=500, deadline="2021-12-25", owner_id=1)
    demo_project_10 = Project(name='Demo', description='demoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo', goal=500, deadline="2021-12-25", owner_id=1)

    db.session.add(demo_project)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the categories table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_projects():
    db.session.execute('TRUNCATE projects RESTART IDENTITY CASCADE;')
    db.session.commit()
