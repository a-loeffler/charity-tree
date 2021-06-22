from app.models import db, Tier


# Adds a demo tier, you can add other tiers here if you want
def seed_tiers():

    demo_tier_1 = Tier(name='Silver', value=100, description="Donate $100 and get a free t-shirt saying I saved a life today.", project_id=1)
    demo_tier_2 = Tier(name='Gold', value=250, description="Donate $250 and get a personalized thank you card from the child that you helped with their medical bills.", project_id=1)
    demo_tier_3 = Tier(name='Platinum', value=500, description="Donate $500 and get to come visit the child that you helped save for a day, complete with videogames and/or movies, plus a dinner of your choice.", project_id=1)

    db.session.add(demo_tier_1)
    db.session.add(demo_tier_2)
    db.session.add(demo_tier_3)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the tiers table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_tiers():
    db.session.execute('TRUNCATE tiers RESTART IDENTITY CASCADE;')
    db.session.commit()
