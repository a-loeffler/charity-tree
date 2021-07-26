from flask import Blueprint, request
from app.models import Project, Project_media
from app.models.db import db

search_routes = Blueprint("search", __name__)


@search_routes.route("/<query>")
def get_search_results(query):
    wordList = """is i i'll we'd we'll i'd we've i've we've does doesn't
    did am was were been isn't aren't weren't won't
    hasn't can't couldn't wouldn't i'm there's he's
    she's it's its haven't shouldn't be the and to a
    of you it in have that we they not do he this for on
    but know go so with say get think I there will at as what
    about she like just one if or well all from people would can
    out because up when who now some right see very come thing more
    make time want by no really then year good mean take here other
    which look work could way how talk lot where back much yes use
    into something over give pause call any than day kind first
    unclear tell down need also try put only actually should last
    even let find little sort why new today many still after thank
    through start point question most happen off feel big before
    too week problem hear part ask long issue yeah different change
    again same another great might number man show never around bit
    next place money end play interest help life may fact keep live
    home state sure world leave always write course report every probably
    woman own meet case move run anything pay job seem bring old both
    believe late maybe quite read house kid whether high family speak
    between bad important few group away turn though understand okay
    able ago become area name idea term remember whole begin against
    hard early love side plan far enough word set ever real close guy
    since hope student else pretty person while second reason everything
    under spend lose open young public stuff each together care sit
    certainly support such win nice news percent hold hand friend
    send already watch once morning somebody stop sense couple join
    city small stay nothing concern continue exactly yet guess
    someone community head past break until must top matter information
    record expect without level force lead learn include whatever
    answer process large party stand cause clear agree listen mind
    almost moment policy during everybody situation wait game
    grow walk less experience true cut sound across decide either
    face order service involve parent sometimes allow obviously
    decision absolutely view along study suppose pick basically
    sell wrong rather within perhaps fall"""
    split_word_list = wordList.split()
    split_query = query.split("+")

    def filterFunction(word):
        if word in split_word_list:
            return False
        else:
            return True

    filtered_search = list(filter(filterFunction, split_query))
    print(filtered_search, "---------------------------------------")

    # tag = request.form["tag"]
    # search = "%{}%".format(tag)
    # posts = Post.query.filter(Post.tags.like(search)).all()

    # def mapFunction(word):
    #     test = Project.query.all()
    #     print({"test": [project.to_dict()['name'] for project in test]}, "+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
    #     projects = Project.query.filter(Project.name.like(word)).all()
    #     return projects

    projects = []

    for word in filtered_search:
        print(word, 'WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW')
        chicken = Project.query.filter(Project.name.like(f"%{word}%") | Project.description.like(f"%{word}%")).all()
        print(chicken, "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
        for project in chicken:
            projects.append(project)


    print(projects, '____________________________________________________')
    return {"projects": [project.to_dict() for project in projects]}
