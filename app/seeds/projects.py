from app.models import db, Project


# Adds a demo category, you can add other categories here if you want
def seed_projects():

    demo_project_1 = Project(name='Demo', description='demoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo', goal=500, deadline="2021-12-25", owner_id=1)
    demo_project_2 = Project(name='Make a Wish', description='Tens of thousands of volunteers, donors and supporters advance the Make-A-Wish® vision to grant the wish of every child diagnosed with a critical illness. In the U.S. and its territories, a wish is granted every 34 minutes. A wish can be that spark that helps these children believe that anything is possible and gives them the strength to fight harder against their illnesses. This one belief guides us and inspires us to grant wishes that change the lives of the kids we serve.', goal=5000000, deadline="2021-12-25", owner_id=1)
    demo_project_3 = Project(name='St. Jude', description="The mission of St. Jude Children’s Research Hospital is to advance cures, and means of prevention, for pediatric catastrophic diseases through research and treatment. Consistent with the vision of our founder Danny Thomas, no child is denied treatment based on race, religion or a family's ability to pay.", goal=5000000, deadline="2021-12-25", owner_id=1)
    demo_project_4 = Project(name='Breast Cancer Research Foundation', description="When you give to BCRF, you're funding critical hours in the lab. More time for research means more progress towards ending breast cancer—and longer, healthier lives for the ones we love.", goal=5000000, deadline="2021-12-25", owner_id=1)
    demo_project_5 = Project(name='American Cancer Society', description="Your gift means we can bring hope to cancer patients. Together we are fighting cancer smarter, better and harder than we ever have before. Thank you for your support.", goal=5000000, deadline="2021-12-25", owner_id=1)
    demo_project_6 = Project(name='Scholarship America', description="Scholarship America works directly with students, parents, colleges, businesses and communities to help students fulfill their college dreams. Since it was founded in 1958, Scholarship America has distributed $4.5 billion to more than 2.8 million students…and counting.", goal=5000000, deadline="2021-12-25", owner_id=1)
    demo_project_7 = Project(name='ProLiteracy', description="ProLiteracy advocates for adult literacy initiatives on behalf of our member network. We provide a strong collective voice to increase awareness of adult literacy challenges, influence public policy, and create change. By providing evidence of the challenge faced by adults around the world, ProLiteracy aims to amplify their courageous voices and build a global community dedicated to ending…and supporting positive change for these adults. ", goal=5000000, deadline="2021-12-25", owner_id=1)
    demo_project_8 = Project(name='Quigley House', description="Our Mission is to provide advocacy and empowerment to victims of domestic violence & sexual assault in the Clay County area while providing community education.", goal=5000000, deadline="2021-12-25", owner_id=1)
    demo_project_9 = Project(name='Prevent Child Abuse', description="Prevent Child Abuse America is the nation’s oldest and largest organization committed to  preventing child abuse and neglect before it happens. We promote programs and resources informed by science that enable kids, families, and entire communities to thrive—today, tomorrow, and for generations to come. ​", goal=5000000, deadline="2021-12-25", owner_id=1)
    demo_project_10 = Project(name='Natural High', description="Natural High is a non-profit charity that looks to inspire youth to find their own path in living a substance-free lifestyle. The organization was created in response to the perceived ineffectiveness of the Just Say No program. With programming reaching more than 20,000 classrooms, the organization partners with drug-free celebrity role models who share their stories about growing up and the choices they made to achieve their dreams.  These video interviews are paired with worksheets and discussion guides for educators to spark meaningful conversations with students.", goal=5000000, deadline="2021-12-25", owner_id=1)

    db.session.add(demo_project)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the categories table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_projects():
    db.session.execute('TRUNCATE projects RESTART IDENTITY CASCADE;')
    db.session.commit()
