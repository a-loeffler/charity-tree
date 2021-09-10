from flask.cli import AppGroup
from .users import seed_users, undo_users
from .categories import seed_categories, undo_categories
from .projects import seed_projects, undo_projects
from .project_medias import seed_project_medias, undo_project_medias
from .tiers import seed_tiers, undo_tiers
from .donors import seed_donors, undo_donors
from .likes import seed_likes, undo_likes

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_categories()
    seed_projects()
    seed_project_medias()
    seed_tiers()
    seed_donors()
    seed_likes()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_donors()
    undo_tiers()
    undo_project_medias()
    undo_projects()
    undo_categories()
    undo_users()
    undo_likes()
    # Add other undo functions here
