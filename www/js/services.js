angular.module('starter.services', [])

.factory('Scenarios', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var scenarios = [
    { id: 0, name: 'Drugs / Parents / Pregnancy' },
    { id: 1, name: 'Suicide / Dieting Pills / Suicide' },
    { id: 2, name: 'Sex / Spirituality / Relationships' },
    { id: 3, name: 'Self Image / Eating Disorders' }
  ];


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


// .factory('Resources', function() {
//   // Might use a resource here that returns a JSON array
//
//   // Some fake testing data
//   var resources = [
// { id: 0, name: 'Housing', desc: 'Whats your living situation?' },
// { id: 1, name: 'Personal Effectiveness', desc:'How do you relate to yourself and others?'},
// { id: 2, name: 'Health & Safety', desc: 'Emotional, Physical Health & Wellbeing' },
// { id: 3, name: 'Educational Opportunities', desc: 'When do you have enough education?' },
// { id: 4, name: 'Employment & Career', desc: 'Do you want a job or a career?' },
// { id: 5, name: 'Community-Life Functioning', desc: 'How do citizens take care of themselves?' },
// { id: 6, name: 'Leisure Activities', desc: 'Do you want to party? or maybe volunteer?' }
// ];
//
//   return {
//     all: function() {
//       return resources;
//     },
//     get: function(resourceId) {
//       // Simple index lookup
//       return resources[resourceId];
//     }
//   }
//
// })

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
