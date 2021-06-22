from app.models import db, Donor


# Adds a demo donor, you can add other donors here if you want
def seed_donors():

    donor_1 = Donor(project_id=1, user_id=1, amount=500)

    db.session.add(donor_1)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the donors table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_donors():
    db.session.execute('TRUNCATE donors RESTART IDENTITY CASCADE;')
    db.session.commit()
