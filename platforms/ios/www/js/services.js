angular.module('starter.services', [])

.factory('Scenarios', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var scenarios = [
  {
    "id":1,
    "name":"Drugs / Parents / Pregnancy",
    "question":"One of your teammates seems dejected and more withdrawn then usual when she isn’t just angry at the world. You know she smokes pot and that behind her back others call her a slut because she’s slept with at least three guys.  You know she fights with her parents who rarely show up to games. After practice one day you ask what’s wrong and a flood gate opens. She shares that her last boyfriend just used her for sex and broke up with her and she just found out that he has an STD and she hasn’t had her period in over a month."
  },
  {
    "id":2,
    "name":"Suicide / Dieting Pills / Drama Queen",
    "question":"On a Friday afternoon, a friend tells you that she can’t handle her life anymore and is thinking about killing herself. She says she would like to talk and invites you to sleepover since the aunt and uncle she lives with are out of town, but you’ve already made plans. She used to be a really good friend, but this year has seemed to need a boyfriend who she spends all of her time with. You know that she’s been taking dieting pills to lose weight and that she is known to give BJs, but the boys seem to lose interest quickly with the latest jerk breaking up with her the previous weekend. She has a tendency to be dramatic and attention seeking."
  },
  {
    "id":3,
    "name":"Sex / Spirituality / Relationships",
    "question":"A friend was recently confirmed at the church she occasionally attends tells you that her boyfriend from Florida (over 1000 miles away) is planning to visit during the summer and spend time at her house. She’s shares that he loves her and wants to have sex when he visits. She thinks she wants to, but isn’t sure and is fearful that he might break up with her or not visit, if she won’t. Many of your mutual friends say sex is no big deal."
  },
  {
    "id":4,
    "name":"Self-Image / Eating Disorders",
    "question":"A friend you’ve known for years seems down all the time and has no confidence in herself. She has parents that love her, but show it in material ways not affection. They give her money, buy her anything she wants and take her on trips. As a freshman she had never been kissed or had a boyfriend and started asking if she was fat. She is very thin and is skipping meals regularly. You’ve attempted to talk to her once about some of these things, but she said she was ok and could deal with what was going on."
  },
  {
    "id":5,
    "name":"Drugs / Divorce / Weapons",
    "question":"Your closest guy friend has started smoking, doing drugs, and drinking almost every day. His parents were recently divorced and he is living with his father and father’s girlfriend who both do drugs. His personality is changing as he is starting to hang out with a different crowd of people and get into fights. You just stopped by his locker and noticed that he has a switchblade and a couple of pocket knives in there."
  },
  {
    "id":6,
    "name":"Relationships / Dependency",
    "question":"One of your friends is going out with a guy and all she thinks about and talks about is him. Last year she went out with a different guy and felt the same about that guy. After they broke up she was really upset and your afraid that the same thing will happen again."
  },
  {
    "id":7,
    "name":"Home Life / Running Away",
    "question":"Your friend’s mother is very depressed and is constantly going to the hospital which is an hour away. Your friend lives with his brothers and dad who has a horrible temper. Your friend’s dad is not always supportive and has spent time in jail for hitting his mom. Recently, his younger brother was caught smoking pot and he has missed lots of school. The whole family has gone to counseling but these problems just don’t go away and your friend regularly talks about being better off on his own."
  },
  {
    "id":8,
    "name":"Abuse / Relationships / Sex",
    "question":"You overhear an upperclassman talking about how easy it was to “hook up” with younger girls once you said you “loved them” and about how little effort you had to put in to get them to put out. You realize that this is the guy one of your friends is seeing. The next time you talk with her about it she reports that she thinks she loves him, but that he is mistreating her and getting verbally abusive."
  },
  {
    "id":9,
    "name":"Depression / Cutting / Anorexia",
    "question":"Recently, your best friend has gotten irritable, withdrawn and doesn’t want to do anything. She gets good grades and is well liked at school although people are talking about how weird and thin she is getting even though she eats constantly. She lives with her mom—who has extreme mood shifts from happy and energetic to reclusive and mean—her stepdad, older brother and three younger siblings. While dressing out one day you notice little scars on her arms and fresh cuts across her stomach. Obviously, she is cutting on herself and is attempting to hide it."
  },
  {
    "id":10,
    "name":"Abuse / Substance Use",
    "question":"A friend of yours has started smoking and occasionally drinks. She lives with her mom and stepdad while her bio-dad lives in Arizona (1000 miles away). One day when changing for gym class you notice bruises all over her shoulder and arm. She finally tells you that her mom did it, but makes you promise not to tell."
  },
  {
    "id":11,
    "name":"Spirituality / Death / Expectations",
    "question":"A friend asks “what’s the point of living?” He says that his life sucks, that he’s overweight, his parents have too high of expectations of him and how can he know whether God is really there if he can’t see or feel or talk to him. Although he attends a local church youth program he questions God and wonders what makes a person a Christian. Recently, a grandfather that he was close to passed away and he is obviously having a hard time dealing with the existential (big life) questions."
  },
  {
    "id":12,
    "name":"Home Life / Running Away",
    "question":"A friend is having a hard time at home and thinking about running away. Although currently single, his mom has been married a couple of times and he was the product of a fling in between. His older sisters are into drugs and drinking and one has an abusive boyfriend. They are very poor and regularly have financial challenges. His mom denies she has problems and refuses to associate with anyone who has tried to help."
  },
  {
    "id":13,
    "name":"Parents / Sexuality / Running Away",
    "question":"A friend shares that he isn’t as attracted to girls as others guys seems to be and thinks that he might be gay. Recently he tried to have a conversation with his parents who are adamantly opposed to homosexuality. Since then they have treated him differently and practically disowned him. Although only a junior he is thinking about moving out or running away."
  },
  {
    "id":14,
    "name":"Self-Worth / Parental Alcoholism",
    "question":"A friend you know puts himself down, avoids conflict even when somebody is doing him wrong and is constantly trying to please others. His mother is an alcoholic who drinks to deal with her own problems including her divorce. His parents still fight a lot even though they no longer live together. Although he is a Christian and regularly attends church he does not seem to believe he has any self-worth. Recently, he has stopped sharing the things that upset him for fear of losing friends and upsetting others."
  },
  {
    "id":15,
    "name":"Abuse / Relationships",
    "question":"A young woman you know is being mentally, physically, and emotionally abused by her boyfriend. She has broken up with him multiple times, but he always has an excuse for his behavior including that his father is verbally and physically and verbally abusive to him. He also buys her things like earrings and she always takes him back and says that everything is great, but everyone knows it’s not. She is obviously under a lot of stress."
  },
  {
    "id":16,
    "name":"Home Life / Step-Parents / Siblings",
    "question":"A friend’s parents are divorced and her mom got remarried. Her stepdad is okay, but doesn’t ever talk to her. Her older sister is pregnant and commands most of the attention in the house leaving her feeling left out most of the time. She’s wants to know how to make her home life happier."
  },
  {
    "id":17,
    "name":"Parents / Abortion",
    "question":"A friend starts asking your opinion about abortion, is looking up clinics in the area and trying to sell his IPOD. He lives with both his parents who are pretty strict and the whole family attends church regularly. He has been dating a girl that just moved to town, but doesn’t talk about it much."
  },
  {
    "id":18,
    "name":"Drinking / Feeling Out of Control",
    "question":"A friend just started drinking. She’s a varsity athlete and knows that drinking is against the rules, but says that she feels out of control. She has a good family and lot’s of potential."
  },
  {
    "id":19,
    "name":"Rape / Self-Worth / Drinking",
    "question":"One of your friends was raped by a 20 year old family friend who was drunk, but your friend was not drinking. Although she tells you about it she doesn’t want anyone to know because she thinks it was her fault."
  },
  {
    "id":20,
    "name":"Sex / Relationships / Values",
    "question":"You and a good friend (Alex) have talked about the relationships you’re in as long as you can remember and in 8th grade made a commitment to not have sex until you were married. It has been relatively easy with the other’s support until senior year. Alex started dating his girlfriend at homecoming and recently she has been getting more physical. She had sex with her previous boyfriend, but that relationship had ended badly. She enjoyed being treated well and thought Alex a gentleman for not pushing, but thought that since they loved each other that prom night would be a perfect to sleep together. Alex loves her and asks you what he should do."
  }
]


  return {
    all: function() {
      return scenarios;
    },
    get: function(scenarioId) {
      // Simple index lookup
      return scenarios[scenarioId];
    }
  }
})


.factory('Questions', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var questions = [
  {
    "id":1,
    "title":"1 of 6",
    "question":"Question that you were asked or had. Please include any vital situational information (i.e., if the is “Should I get an abortion?” please include things like age, living situation (mom and stepdad or boyfriend), religious or financial concerns):"
  },
  {
    "id":2,
    "title":"2 of 6",
    "question":"Response that you gave or were given:"
  },
  {
    "id":3,
    "title":"3 of 6",
    "question":"If known, what ended up happening with the concern? What did the person do? What choice or decision did you or they come to?"
  },
  {
    "id":4,
    "title":"4 of 6",
    "question":"What were the consequences of the choice or decision? (i.e., did the problem get worse or did the person deal with it in an effective way?)"
  },
  {
    "id":5,
    "title":"5 of 6",
    "question":"Approximate Age & Grade that question or concern was faced:"
  },
  {
    "id":6,
    "title":"6 of 6",
    "question":"If concern is far enough in the past, what, if anything, might you have done differently?:"
  }
]

  return {
    all: function() {
      return questions;
    },
    get: function(questionId) {
      // Simple index lookup
      return questions[questionId];
    }
  }

})

.factory('Resources', function() {
// Might use a resource here that returns a JSON array

// Some fake testing data
var resources=
    [{id:0,
      name:"Housing",
      state: "homeless",
      desc:"What's your living situation?",
      state:"goToHousing()",
      subdomain: [
{
"id":1,
"name":"Homeless",
"description":"",
"image":1,
"category" : ["Couch Surfing","Living on the Streets"]
},
{
"id":2,
"name":"Runaway",
"description":"",
"image":2
},
{
"id":3,
"name":"Other Situations",
"description":"",
"image":3,
"category" : ["Couch Surfing","Living on the Streets","Independent residence","Residing with natural, adoptive, or foster family","Other family situations (e.g., girlfriend’s family, extended family)", "Semi-independent living (e.g., service coordinator assists but does not live on site)","Supported living (e.g., supervised apartment with a live in mentor or on site support staff at apartment complex)","Group home or boarding home","Restrictive setting (e.g., crisis unit, residential treatment center, detention center)"]
}
]
},
{id:1,
name:"Personal Effectiveness",
 state: "personal_effectiveness/interpersonal",
      desc:"How do you relate to yourself and others?",
      state: "goToPersonal()",
      subdomain: [
{
"id":0,
"name":"Interpersonal Relationships",
"description":"",
"image":"",
"category" : ["Relationship development and maintenance of friendships,Balance of independence and interdependence with family members","Dating skills and development/maintenance of intimate relationships","Maintenance of relationships with mentors and informal key players"]
},
{
"id":1,
"name":"Self-Determination",
"description":"",
"image":"",
"category": ["Social problem solving (e.g., generate alternative options, make informed decisions)","Set goals and develop plans for achieving goals","Evaluate one’s progress in achieving goals","Accept one’s strengths and limitations","Advocate for one’s rights and positions","Develop one’s creativity","Right to fail"]
},
{
"id":2,
"name":"Communication",
"description":"",
"image":"",
"category":["Express one’s ideas and feelings through speaking and listening","Reading and writing skills for learning, fun and communication","Knowledge of information sources (e.g., use of library, authorities, internet communications, and other resources)","Study and learning skills for gaining and applying new information","Cyberspace safety (e.g., revealing personal information, meeting contacts in person, use of credit cards online)"]
},
{
"id":3,
"name":"Parenting",
"description":"",
"image":"",
"category": ["Health of mother for the prenatal fetus (e.g., balanced diet, physical activity, adequate sleep, no smoking)","Recognizing when to see a physician for prenatal and postnatal care","Young adult male supports girlfriend/spouse in promoting the health of the mother and baby","Young adult male and female assuming responsibility for rearing the children (e.g., care and discipline, behavioral parenting practices, providing home setting, finances)"]
}
]
},
{
  id:2,
name:"Health & Safety",
  state: "health_safety",
      desc:"Emotional, Physical Health & Wellbeing",
      state: "goToHealth()",
      subdomain: [
{
"id":"0",
"name":"Emotional & Behavioral Wellbeing",
"description":"",
"image":"",
"category" :["Create reciprocal relationships with others","Expression of care and concern for others","Social skills (e.g., positive feedback to others, acceptance of negative feedback, self-monitoring, self-evaluation)","Assertiveness skills and conflict resolution skills","Coping with stress and the ability to relax","Management of anger and moods","Spiritual wellbeing","Self-management of psychotropic medications and side effects","Manage use of alcohol and drugs","Avoid physical confrontations and criminal activities","Avoid danger to self and others"]
},
{
"id":"1",
"name":"Physical Health & Wellbeing",
"description":"",
"image":"",
"category" :["Healthcare and fitness (e.g., balanced diet, physical activity)","Self-management of over-the-counter and prescription medications and possible side effects","Knowledge of sexual functioning and birth control (e.g., prevention of sexually transmitted diseases and unwanted pregnancies)","Ability to access medical and dental services"]
}
]
},

{
  id:3,
name:"Educational Opportunities",
  state: "educational_opporunities",
      desc:"When do you have enough education?",
      state: "goToEducational()",
      subdomain: [
{
"id":0,
"name":"Degrees",
"description":"",
"image":"",
"cateogry": ["Bachelor’s degree or beyond","Associate’s degree"]
},
{
"id":1,
"name":"Certifications",
"description":"",
"image":"",
"category": ["Vocational or technical certification","High school completion or GED certification"]
},
{
"id":2,
"name":"Other",
"description":"",
"image":""
}
]
},

{
  id:4,
name:"Employment & Career",
  state: "employment",
      desc:"Do you want a job or a career?",
      state: "goToEmployment()",
      subdomain: [
{
"id":0,
"name":"Competative",
"description":"",
"image":"",
"category" : "Work experience, paid or unpaid, at competitive or entrepreneurial worksite (e.g., apprenticeship with employee serving as coworker mentor)"
},
{
"id":1,
"name":"Supported",
"description":"",
"image":""
},
{
"id":2,
"name":"Transitional",
"description":"",
"image":""
}
]
},

{
  id:5,
name:"Community-Life Functioning",
  state: "community",
      desc:"How do citizen's take care of themselves?",
      state: "goToCommunity",
      subdomain: [
{
"id":0,
"name":"Daily Living",
"description":"",
"image":"",
"category" : ["Self-care","Maintenance of living space and personal possessions","Money management","Cooking and nutrition","Maintenance and security of personal and financial documents"]
},
{
"id":1,
"name":"Community Participation",
"description":"",
"image":"",
"category": ["Safety skills (e.g., avoid dangerous situations, prevent victimization","Mobility around the community","Access and use of relevant community agencies and resources","Citizenship responsibilities, knowledge of basic rights and responsibilities","Community social support (e.g., peer groups, community organizations)","Access to legal services","Cultural and spiritual resources"]
}
]
},

{
  id:6,
name:"Leisure Activities",
  state: "leisure",
      desc:"Do you want to party? or maybe volunteer?",
      state: "goToLeisure()",
      subdomain: [
{
"id":0,
"name":"Hobbies",
"description":"",
"image":"",
"category": "Entertaining one’s self"
},
{
"id":1,
"name":"Volunteering",
"description":"",
"image":""
},
{
"id":2,
"name":"Places",
"description":"",
"image":"",
"category" : ["Activities with others", "Creating indoor and outdoor activities of interest and fun"]
},
{
"id":3,
"name":"Healthy",
"description":"",
"image":""
}
]
}
]

return {
all: function() {
return resources;
},
get: function(resourceId) {
// Simple index lookup
return resources[resourceId];
}
}

})

.factory('Subdomains', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var subdomains = [
  {resource_id:0,id:0,name:'Homeless',desc:'',image:1,category : ['Couch Surfing','Living on the Streets']},
  {resource_id:0,id:1,name:'Runaway',desc:'',image:2},
  {resource_id:0,id:2,name:'Other Situations',desc:'',image:3,category : ['Couch Surfing','Living on the Streets','Independent residence','Residing with natural, adoptive, or foster family','Other family situations (e.g., girlfriend’s family, extended family)', 'Semi-independent living (e.g., service coordinator assists but does not live on site)','Supported living (e.g., supervised apartment with a live in mentor or on site support staff at apartment complex)','Group home or boarding home','Restrictive setting (e.g., crisis unit, residential treatment center, detention center)']},
  {resource_id:1,id:3,name:'Interpersonal Relationships',desc:'',image:'',category : ['Relationship development and maintenance of friendships,Balance of independence and interdependence with family members','Dating skills and development/maintenance of intimate relationships','Maintenance of relationships with mentors and informal key players']},
  {resource_id:1,id:4,name:'Self-Determination',desc:'',image:'',category: ['Social problem solving (e.g., generate alternative options, make informed decisions)','Set goals and develop plans for achieving goals','Evaluate one’s progress in achieving goals','Accept one’s strengths and limitations','Advocate for one’s rights and positions','Develop one’s creativity','Right to fail']},
  {resource_id:1,id:5,name:'Communication',desc:'',image:'',category:['Express one’s ideas and feelings through speaking and listening','Reading and writing skills for learning, fun and communication','Knowledge of information sources (e.g., use of library, authorities, internet communications, and other resources)','Study and learning skills for gaining and applying new information','Cyberspace safety (e.g., revealing personal information, meeting contacts in person, use of credit cards online)']},
  {resource_id:1,id:6,name:'Parenting',desc:'',image:'',category: ['Health of mother for the prenatal fetus (e.g., balanced diet, physical activity, adequate sleep, no smoking)','Recognizing when to see a physician for prenatal and postnatal care','Young adult male supports girlfriend/spouse in promoting the health of the mother and baby','Young adult male and female assuming responsibility for rearing the children (e.g., care and discipline, behavioral parenting practices, providing home setting, finances)']},
  {resource_id:2,id:7,name:'Emotional & Behavioral Wellbeing',desc:'',image:'',category :['Create reciprocal relationships with others','Expression of care and concern for others','Social skills (e.g., positive feedback to others, acceptance of negative feedback, self-monitoring, self-evaluation)','Assertiveness skills and conflict resolution skills','Coping with stress and the ability to relax','Management of anger and moods','Spiritual wellbeing','Self-management of psychotropic medications and side effects','Manage use of alcohol and drugs','Avoid physical confrontations and criminal activities','Avoid danger to self and others']},
  {resource_id:2,id:8,name:'Physical Health & Wellbeing',desc:'',image:'',category :['Healthcare and fitness (e.g., balanced diet, physical activity)','Self-management of over-the-counter and prescription medications and possible side effects','Knowledge of sexual functioning and birth control (e.g., prevention of sexually transmitted diseases and unwanted pregnancies)','Ability to access medical and dental services']},
  {resource_id:3,id:9,name:'Degrees',desc:'',image:'','cateogry': ['Bachelor’s degree or beyond','Associate’s degree']},
  {resource_id:3,id:10,name:'Certifications',desc:'',image:'',category: ['Vocational or technical certification','High school completion or GED certification']},
  {resource_id:3,id:11,name:'Other',desc:'',image:''},
  {resource_id:4,id:12,name:'Competative',desc:'',image:'',category : 'Work experience, paid or unpaid, at competitive or entrepreneurial worksite (e.g., apprenticeship with employee serving as coworker mentor)'},
  {resource_id:4,id:13,name:'Supported',desc:'',image:''},
  {resource_id:4,id:14,name:'Transitional',desc:'',image:''},
  {resource_id:5,id:15,name:'Daily Living',desc:'',image:'',category : ['Self-care','Maintenance of living space and personal possessions','Money management','Cooking and nutrition','Maintenance and security of personal and financial documents']},
  {resource_id:5,id:16,name:'Community Participation',desc:'',image:'',category: ['Safety skills (e.g., avoid dangerous situations, prevent victimization','Mobility around the community','Access and use of relevant community agencies and resources','Citizenship responsibilities, knowledge of basic rights and responsibilities','Community social support (e.g., peer groups, community organizations)','Access to legal services','Cultural and spiritual resources']},
  {resource_id:6,id:17,name:'Hobbies',desc:'',image:'',category: 'Entertaining one’s self'},
  {resource_id:6,id:18,name:'Volunteering',desc:'',image:''},
  {resource_id:6,id:19,name:'Places',desc:'',image:'',category : ['Activities with others', 'Creating indoor and outdoor activities of interest and fun']},
  {resource_id:6,id:20,name:'Healthy',desc:'',image:''}
  ];


  return {
    all: function() {
      return subdomains;
    },
    get: function(subdomainId) {
      // Simple index lookup
      return subdomains[subdomainId];
    }
  }
})

.factory('Categories', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var categories = [
  {'id':1,'resource_id':0,'subdomain_id':0,'name':'Couch Surfing','desc':'','image':1},
  {'id':2,'resource_id':0,'subdomain_id':0,'name':'Living on the Streets','desc':'','image':2},
  {'id':3,'resource_id':0,'subdomain_id':2,'name':'Independent residence','desc':' (e.g., living in an apartment w/ a room mate)','image':3},
  {'id':4,'resource_id':0,'subdomain_id':2,'name':'Residing with natural, adoptive, or foster family','desc':'','image':4},
  {'id':5,'resource_id':0,'subdomain_id':2,'name':'Other family situations (e.g., girlfriend’s family, extended family)','desc':'','image':5},
  {'id':6,'resource_id':0,'subdomain_id':2,'name':'Semi-independent living (e.g., service coordinator assists but does not live on site)','desc':'','image':1},
  {'id':7,'resource_id':0,'subdomain_id':2,'name':'Supported living (e.g., supervised apartment with a live in mentor or on site support staff at apartment complex)','desc':'','image':2},
  {'id':8,'resource_id':0,'subdomain_id':2,'name':'Group home or boarding home','desc':'','image':3},
  {'id':9,'resource_id':0,'subdomain_id':2,'name':'Restrictive setting (e.g., crisis unit, residential treatment center, detention center)','desc':'','image':4},
  {'id':10,'resource_id':1,'subdomain_id':3,'name':'Relationship development and maintenance of friendships','desc':'','image':5},
  {'id':11,'resource_id':1,'subdomain_id':3,'name':'Balance of independence and interdependence with family members','desc':'','image':1},
  {'id':12,'resource_id':1,'subdomain_id':3,'name':'Dating skills and development/maintenance of intimate relationships','desc':'','image':2},
  {'id':13,'resource_id':1,'subdomain_id':3,'name':'Maintenance of relationships with mentors and informal key players','desc':'','image':3},
  {'id':14,'resource_id':1,'subdomain_id':4,'name':'Social problem solving (e.g., generate alternative options, make informed decisions)','desc':'','image':4},
  {'id':15,'resource_id':1,'subdomain_id':4,'name':'Set goals and develop plans for achieving goals','desc':'','image':5},
  {'id':16,'resource_id':1,'subdomain_id':4,'name':'Evaluate one’s progress in achieving goals','desc':'','image':1},
  {'id':17,'resource_id':1,'subdomain_id':4,'name':'Accept one’s strengths and limitations','desc':'','image':2},
  {'id':18,'resource_id':1,'subdomain_id':4,'name':'Advocate for one’s rights and positions','desc':'','image':3},
  {'id':19,'resource_id':1,'subdomain_id':4,'name':'Develop one’s creativity','desc':'','image':4},
  {'id':20,'resource_id':1,'subdomain_id':4,'name':'Right to fail','desc':'','image':5},
  {'id':21,'resource_id':1,'subdomain_id':5,'name':'Express one’s ideas and feelings through speaking and listening','desc':'','image':1},
  {'id':22,'resource_id':1,'subdomain_id':5,'name':'Reading and writing skills for learning, fun and communication','desc':'','image':2},
  {'id':23,'resource_id':1,'subdomain_id':5,'name':'Knowledge of information sources (e.g., use of library, authorities, internet communications, and other resources)','desc':'','image':3},
  {'id':24,'resource_id':1,'subdomain_id':5,'name':'Study and learning skills for gaining and applying new information','desc':'','image':4},
  {'id':25,'resource_id':1,'subdomain_id':5,'name':'Cyberspace safety (e.g., revealing personal information, meeting contacts in person, use of credit cards online)','desc':'','image':5},
  {'id':26,'resource_id':1,'subdomain_id':6,'name':'Health of mother for the prenatal fetus (e.g., balanced diet, physical activity, adequate sleep, no smoking)','desc':'','image':1},
  {'id':27,'resource_id':1,'subdomain_id':6,'name':'Recognizing when to see a physician for prenatal and postnatal care','desc':'','image':2},
  {'id':28,'resource_id':1,'subdomain_id':6,'name':'Young adult male supports girlfriend/spouse in promoting the health of the mother and baby','desc':'','image':3},
  {'id':29,'resource_id':1,'subdomain_id':6,'name':'Young adult male and female assuming responsibility for rearing the children (e.g., care and discipline, behavioral parenting practices, providing home setting, finances)','desc':'','image':4},
  {'id':30,'resource_id':2,'subdomain_id':7,'name':'Create reciprocal relationships with others','desc':'','image':5},
  {'id':31,'resource_id':2,'subdomain_id':7,'name':'Expression of care and concern for others','desc':'','image':1},
  {'id':32,'resource_id':2,'subdomain_id':7,'name':'Social skills (e.g., positive feedback to others, acceptance of negative feedback, self-monitoring, self-evaluation)','desc':'','image':2},
  {'id':33,'resource_id':2,'subdomain_id':7,'name':'Assertiveness skills and conflict resolution skills','desc':'','image':3},
  {'id':34,'resource_id':2,'subdomain_id':7,'name':'Coping with stress and the ability to relax','desc':'','image':4},
  {'id':35,'resource_id':2,'subdomain_id':7,'name':'Management of anger and moods','desc':'','image':5},
  {'id':36,'resource_id':2,'subdomain_id':7,'name':'Spiritual wellbeing','desc':'','image':1},
  {'id':37,'resource_id':2,'subdomain_id':7,'name':'Self-management of psychotropic medications and side effects','desc':'','image':2},
  {'id':38,'resource_id':2,'subdomain_id':7,'name':'Manage use of alcohol and drugs','desc':'','image':3},
  {'id':39,'resource_id':2,'subdomain_id':7,'name':'Avoid physical confrontations and criminal activities','desc':'','image':4},
  {'id':40,'resource_id':2,'subdomain_id':7,'name':'Avoid danger to self and others','desc':'','image':5},
  {'id':41,'resource_id':2,'subdomain_id':8,'name':'Healthcare and fitness (e.g., balanced diet, physical activity)','desc':'','image':1},
  {'id':42,'resource_id':2,'subdomain_id':8,'name':'Self-management of over-the-counter and prescription medications and possible side effects','desc':'','image':2},
  {'id':43,'resource_id':2,'subdomain_id':8,'name':'Knowledge of sexual functioning and birth control (e.g., prevention of sexually transmitted diseases and unwanted pregnancies)','desc':'','image':3},
  {'id':44,'resource_id':2,'subdomain_id':8,'name':'Ability to access medical and dental services','desc':'','image':4},
 {'id':45,'resource_id':3,'subdomain_id':9,'name':'Bachelor’s degree or beyond','desc':'','image':5},
  {'id':46,'resource_id':3,'subdomain_id':9,'name':'Associate’s degree','desc':'','image':1},
  {'id':47,'resource_id':3,'subdomain_id':10,'name':'Vocational or technical certification','desc':'','image':2},
  {'id':48,'resource_id':3,'subdomain_id':10,'name':'High school completion or GED certification','desc':'','image':3},
  {'id':49,'resource_id':4,'subdomain_id':11,'name':'Work experience, paid or unpaid, at competitive or entrepreneurial worksite (e.g., apprenticeship with employee serving as coworker mentor)','desc':'','image':4},
  {'id':50,'resource_id':5,'subdomain_id':14,'name':'Self-care','desc':'','image':5},
  {'id':51,'resource_id':5,'subdomain_id':14,'name':'Maintenance of living space and personal possessions','desc':'','image':1},
  {'id':60,'resource_id':5,'subdomain_id':14,'name':'Money management','desc':'','image':2},
  {'id':61,'resource_id':5,'subdomain_id':14,'name':'Cooking and nutrition','desc':'','image':3},
  {'id':62,'resource_id':5,'subdomain_id':14,'name':'Maintenance and security of personal and financial documents','desc':'','image':4},
  {'id':63,'resource_id':5,'subdomain_id':14,'name':'Safety skills (e.g., avoid dangerous situations, prevent victimization','desc':'','image':5},
  {'id':64,'resource_id':5,'subdomain_id':15,'name':'Mobility around the community','desc':'','image':1},
  {'id':65,'resource_id':5,'subdomain_id':15,'name':'Access and use of relevant community agencies and resources','desc':'','image':2},
  {'id':66,'resource_id':5,'subdomain_id':15,'name':'Citizenship responsibilities, knowledge of basic rights and responsibilities','desc':'','image':3},
  {'id':67,'resource_id':5,'subdomain_id':15,'name':'Community social support (e.g., peer groups, community organizations)','desc':'','image':4},
  {'id':68,'resource_id':5,'subdomain_id':15,'name':'Access to legal services','desc':'','image':5},
  {'id':69,'resource_id':5,'subdomain_id':15,'name':'Cultural and spiritual resources','desc':'','image':1},
  {'id':70,'resource_id':6,'subdomain_id':16,'name':'Entertaining one’s self','desc':'','image':2},
  {'id':71,'resource_id':6,'subdomain_id':18,'name':'Activities with others','desc':'','image':3},
  {'id':72,'resource_id':6,'subdomain_id':18,'name':'Creating indoor and outdoor activities of interest and fun','desc':'','image':4
  }
]


  return {
    all: function() {
      return categories;
 },
    get: function(categoryId) {
      // Simple index lookup
      return categories[categoryId];
    }
  }
});
