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
    demo_project_11 = Project(name='Awareness Foundation', description="Empowering people of faith to embrace diversity and build peaceful and harmonious communities. We want to equip Christians everywhere to form an effective counter force to the intolerance and mistrust that now prevail in so many communities, and to build understanding between the faiths.", goal=5000000, deadline="2021-12-25", owner_id=1)
    demo_project_12 = Project(name='World Central Kitchen', description="With your help, we have shown that there is no place too far or disaster too great for our chefs to be there with a hot plate of food when it’s needed most. I hope you’ll dream with us as we envision a world where there is always a hot meal, an encouraging word, and a helping hand in hard times. Thank you for taking this journey with us. Wherever there’s a fight so hungry people may eat, we will be there – we must be there.", goal=5000000, deadline="2021-12-25", owner_id=1)
    demo_project_13 = Project(name='Action Against Hunger', description="As the world’s hunger specialist, our primary goal is to create a better way to deal with hunger. For more than 40 years, we have led the global movement that aims to end life-threatening hunger for good within our lifetimes. Our teams have been on the front lines, treating and preventing malnutrition across more than 45 countries. We save the lives of children and their families. We are there for them before and after disaster strikes. We enable people to provide for themselves, see their children grow up strong, and for whole communities to prosper. We constantly search for more effective solutions, while sharing our knowledge and expertise with the world. We push for long-term change.", goal=5000000, deadline="2021-12-25", owner_id=1)
    demo_project_14 = Project(name='The Trevor Project', description="Founded in 1998 by the creators of the Academy Award®-winning short film TREVOR, The Trevor Project is the leading national organization providing crisis intervention and suicide prevention services to lesbian, gay, bisexual, transgender, queer & questioning (LGBTQ) young people under 25.", goal=5000000, deadline="2021-12-25", owner_id=1)
    demo_project_15 = Project(name='American Foundation for Suicide Prevention', description="Established in 1987, the American Foundation for Suicide Prevention (AFSP) is a voluntary health organization that gives those affected by suicide a nationwide community empowered by research, education and advocacy to take action against this leading cause of death.", goal=5000000, deadline="2021-12-25", owner_id=1)
    demo_project_16 = Project(name='The National Alliance To End Homelessness', description="The National Alliance to End Homelessness is a nonpartisan, nonprofit organization whose sole purpose is to end homelessness in the United States. We use research and data to find solutions to homelessness; we work with federal and local partners to create a solid base of policy and resources that support those solutions; and then we help communities implement them.", goal=5000000, deadline="2021-12-25", owner_id=1)
    demo_project_17 = Project(name='Community Housing Partnership', description="Community Housing Partnership is an outcomes-focused nonprofit that fulfills its mission by developing and managing high quality supportive housing and providing services to individuals, seniors and families experiencing homelessness to help them rebuild their lives and break the cycle of homelessness.", goal=5000000, deadline="2021-12-25", owner_id=1)
    demo_project_18 = Project(name='Muscular Dystrophy Association', description="MDA is committed to transforming the lives of people affected by muscular dystrophy, ALS and related neuromuscular diseases through innovations in science and innovations in care. Your tax-deductible gift drives groundbreaking research and provides access to quality care for people with neuromuscular disease. Thank you.", goal=5000000, deadline="2021-12-25", owner_id=1)
    demo_project_19 = Project(name='Muscular Dystrophy Family Foundation', description="Since 1958, our Indiana non-profit organization has been providing a helping hand to men, women, and children living with ALS, muscular dystrophy, and other neuromuscular diseases.", goal=5000000, deadline="2021-12-25", owner_id=1)
    demo_project_20 = Project(name='American Humane', description='For more than a hundred years American Humane has been first in promoting the welfare and safety of animals and strengthening the bond between animals and people. We are first to serve, wherever animals are in need of rescue, shelter, protection or security. Through our innovative leadership initiatives – from our “No Animals Were Harmed®” program in Hollywood to broad-based farm and conservation animal welfare certifications, to rapid response rescue and care across the country – American Humane sets the gold standard as the most visionary and effective animal welfare organization in the nation.', goal=5000000, deadline="2021-12-25", owner_id=1)
    demo_project_21 = Project(name='The American Society For The Prevention Of Cruelty To Animals', description="The ASPCA is a national leader in animal rescue and protection, working tirelessly to put an end to animal abuse and neglect. As an ASPCA Guardian, you can fight cruelty and give animals nationwide a second chance at life. Your monthly gift is an easy way to make a difference for animals all year long.", goal=5000000, deadline="2021-12-25", owner_id=1)

    db.session.add(demo_project_1)
    db.session.add(demo_project_2)
    db.session.add(demo_project_3)
    db.session.add(demo_project_4)
    db.session.add(demo_project_5)
    db.session.add(demo_project_6)
    db.session.add(demo_project_7)
    db.session.add(demo_project_8)
    db.session.add(demo_project_9)
    db.session.add(demo_project_10)
    db.session.add(demo_project_11)
    db.session.add(demo_project_12)
    db.session.add(demo_project_13)
    db.session.add(demo_project_14)
    db.session.add(demo_project_15)
    db.session.add(demo_project_16)
    db.session.add(demo_project_17)
    db.session.add(demo_project_18)
    db.session.add(demo_project_19)
    db.session.add(demo_project_20)
    db.session.add(demo_project_21)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the categories table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_projects():
    db.session.execute('TRUNCATE projects RESTART IDENTITY CASCADE;')
    db.session.commit()
