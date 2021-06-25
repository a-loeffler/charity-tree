from app.models import db, Category


# Adds a demo category, you can add other categories here if you want
def seed_categories():

    terminal_children = Category(name='Terminally Ill Children')
    cancer = Category(name='Cancer')
    education = Category(name='Education')
    abuse = Category(name='Abuse')
    awareness = Category(name='Awareness')
    feed_the_hungry = Category(name='Feed The Hungry')
    suicide_prevention = Category(name='Suicide Prevention')
    homeless = Category(name='Homeless')
    muscular_dystrophy = Category(name='Muscular Dystrophy')
    animals = Category(name='Animals')
    other = Category(name='Other')


    db.session.add(terminal_children)
    db.session.add(cancer)
    db.session.add(education)
    db.session.add(abuse)
    db.session.add(awareness)
    db.session.add(feed_the_hungry)
    db.session.add(suicide_prevention)
    db.session.add(homeless)
    db.session.add(muscular_dystrophy)
    db.session.add(animals)
    db.session.add(other)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the categories table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_categories():
    db.session.execute('TRUNCATE categories RESTART IDENTITY CASCADE;')
    db.session.commit()
