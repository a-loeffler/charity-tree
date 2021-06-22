from app.models import db, Category


# Adds a demo category, you can add other categories here if you want
def seed_categories():

    terminal_children = Category(name='Terminally Ill Children')

    db.session.add(terminal_children)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the categories table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_categories():
    db.session.execute('TRUNCATE categories RESTART IDENTITY CASCADE;')
    db.session.commit()
