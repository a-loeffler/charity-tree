from app.models import db, Category


# Adds a demo category, you can add other categories here if you want
def seed_categories():

    terminal_children = Category(name='Terminally Ill Children')
    cancer = Category(name='Cancer')
    education = Category(name='Education')
    abuse = Category(name='abuse')
    awareness = Category(name='awareness')
    general_fund_raiser = Category(name='General Fund Raiser')
    feed_the_hungry = Category(name='Feed The Hungry')
    homeless = Category(name='Homeless')
    muscular_distrophy = Category(name='Muscular Distrophy')
    insomnia = Category(name='Insomnia')

    db.session.add(terminal_children)
    db.session.add(cancer)
    db.session.add(education)
    db.session.add(abuse)
    db.session.add(awareness)
    db.session.add(general_fund_raiser)
    db.session.add(feed_the_hungry)
    db.session.add(homeless)
    db.session.add(muscular_distrophy)
    db.session.add(insomnia)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the categories table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_categories():
    db.session.execute('TRUNCATE categories RESTART IDENTITY CASCADE;')
    db.session.commit()
