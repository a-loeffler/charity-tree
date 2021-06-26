from werkzeug.security import generate_password_hash
from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():

    demo = User(username='Demo', email='demo@aa.io', password='password')
    Nherud = User(username='Nherud', email='charity1@tree.com', password='charitytree123')
    Nazad = User(username='Nazad', email='charity2@tree.com', password='charitytree123')
    Vii  = User(username='Vii', email='charity3@tree.com', password='charitytree123')
    Franklin = User(username='Franklin', email='charity4@tree.com', password='charitytree123')
    Wladimir = User(username='Wladimir', email='charity5@tree.com', password='charitytree123')
    Zakary = User(username='Zakary', email='charity6@tree.com', password='charitytree123')
    Markey = User(username='Markey', email='charity7@tree.com', password='charitytree123')
    Maynard = User(username='Maynard', email='charity8@tree.com', password='charitytree123')
    Kelvin = User(username='Kelvin', email='charity9@tree.com', password='charitytree123')
    Ourson = User(username='Ourson', email='charity10@tree.com', password='charitytree123')
    Ludovicus = User(username='Ludovicus', email='charity11@tree.com', password='charitytree123')
    Goliath = User(username='Goliath', email='charity12@tree.com', password='charitytree123')
    Achim = User(username='Achim', email='charity13@tree.com', password='charitytree123')
    Archard = User(username='Archard', email='charity14@tree.com', password='charitytree123')
    Newmie = User(username='Newmie', email='charity15@tree.com', password='charitytree123')
    Cordell = User(username='Cordell', email='charity16@tree.com', password='charitytree123')
    Edvard = User(username='Edvard', email='charity17@tree.com', password='charitytree123')
    Harmen = User(username='Harmen', email='charity18@tree.com', password='charitytree123')
    Tarek = User(username='Tarek', email='charity19@tree.com', password='charitytree123')


    db.session.add(demo)
    db.session.add(Nherud)
    db.session.add(Nazad)
    db.session.add(Vii)
    db.session.add(Franklin)
    db.session.add(Wladimir)
    db.session.add(Zakary)
    db.session.add(Markey)
    db.session.add(Maynard)
    db.session.add(Kelvin)
    db.session.add(Ourson)
    db.session.add(Ludovicus)
    db.session.add(Goliath)
    db.session.add(Achim)
    db.session.add(Archard)
    db.session.add(Newmie)
    db.session.add(Cordell)
    db.session.add(Edvard)
    db.session.add(Harmen)
    db.session.add(Tarek)


    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
