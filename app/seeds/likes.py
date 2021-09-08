from app.models import db, Like


# Adds a demo like, you can add other likes here if you want
def seed_likes():
    demo1 = Like(
        user_id=1,
        project_id=2)

    demo2 = Like(
        user_id=2,
        project_id=1)

    db.session.add(demo1)
    db.session.add(demo2)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the likes table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_likes():
    db.session.execute('TRUNCATE likes RESTART IDENTITY CASCADE;')
    db.session.commit()
