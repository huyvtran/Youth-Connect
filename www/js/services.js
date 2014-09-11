angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [
    { id: 0, name: 'Scruff McGruff' },
    { id: 1, name: 'G.I. Joe' },
    { id: 2, name: 'Miss Frizzle' },
    { id: 3, name: 'Ash Ketchum' }
  ];


  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }
})

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


.factory('Resources', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var resources = [
  {
    "id":1,
    "name":"Housing",
    "domainId":0,
    "managerName":"",
    "subdomainId":0,
    "subdomainName":"",
    "domainItem":"TRUE",
    "subdomainItem":"FALSE",
    "categoryItem":"FALSE"
  },
  {
    "id":2,
    "name":"Health & Safety",
    "domainId":0,
    "managerName":"",
    "subdomainId":0,
    "subdomainName":"",
    "domainItem":"TRUE",
    "subdomainItem":"FALSE",
    "categoryItem":"FALSE"
  },
  {
    "id":3,
    "name":"Personal Effectiveness",
    "domainId":0,
    "managerName":"",
    "subdomainId":0,
    "subdomainName":"",
    "domainItem":"TRUE",
    "subdomainItem":"FALSE",
    "categoryItem":"FALSE"
  },
  {
    "id":4,
    "name":"Educational Opportunities",
    "domainId":0,
    "managerName":"",
    "subdomainId":0,
    "subdomainName":"",
    "domainItem":"TRUE",
    "subdomainItem":"FALSE",
    "categoryItem":"FALSE"
  },
  {
    "id":5,
    "name":"Employment & Career",
    "domainId":0,
    "managerName":"",
    "subdomainId":0,
    "subdomainName":"",
    "domainItem":"TRUE",
    "subdomainItem":"FALSE",
    "categoryItem":"FALSE"
  },
  {
    "id":6,
    "name":"Community-Life Functioning",
    "domainId":0,
    "managerName":"",
    "subdomainId":0,
    "subdomainName":"",
    "domainItem":"TRUE",
    "subdomainItem":"FALSE",
    "categoryItem":"FALSE"
  },
  {
    "id":7,
    "name":"Leisure Activities",
    "domainId":0,
    "managerName":"",
    "subdomainId":0,
    "subdomainName":"",
    "domainItem":"TRUE",
    "subdomainItem":"FALSE",
    "categoryItem":"FALSE"
  },
  {
    "id":8,
    "name":"Homeless",
    "domainId":1,
    "managerName":"Housing",
    "subdomainId":1,
    "subdomainName":"",
    "domainItem":"FALSE",
    "subdomainItem":"TRUE",
    "categoryItem":"FALSE"
  },
  {
    "id":9,
    "name":"Runaway",
    "domainId":1,
    "managerName":"Housing",
    "subdomainId":2,
    "subdomainName":"",
    "domainItem":"FALSE",
    "subdomainItem":"TRUE",
    "categoryItem":"FALSE"
  },
  {
    "id":10,
    "name":"Other Situations",
    "domainId":1,
    "managerName":"Housing",
    "subdomainId":3,
    "subdomainName":"",
    "domainItem":"FALSE",
    "subdomainItem":"TRUE",
    "categoryItem":"FALSE"
  },
  {
    "id":11,
    "name":"Interpersonal Relationships",
    "domainId":2,
    "managerName":"Health & Safety",
    "subdomainId":4,
    "subdomainName":"",
    "domainItem":"FALSE",
    "subdomainItem":"TRUE",
    "categoryItem":"FALSE"
  },
  {
    "id":12,
    "name":"Self-Determination",
    "domainId":2,
    "managerName":"Health & Safety",
    "subdomainId":5,
    "subdomainName":"",
    "domainItem":"FALSE",
    "subdomainItem":"TRUE",
    "categoryItem":"FALSE"
  },
  {
    "id":13,
    "name":"Communication",
    "domainId":2,
    "managerName":"Health & Safety",
    "subdomainId":6,
    "subdomainName":"",
    "domainItem":"FALSE",
    "subdomainItem":"TRUE",
    "categoryItem":"FALSE"
  },
  {
    "id":14,
    "name":"Parenting",
    "domainId":2,
    "managerName":"Health & Safety",
    "subdomainId":7,
    "subdomainName":"",
    "domainItem":"FALSE",
    "subdomainItem":"TRUE",
    "categoryItem":"FALSE"
  },
  {
    "id":15,
    "name":"Emotional & Behavioral Wellbeing",
    "domainId":3,
    "managerName":"Personal Effectiveness",
    "subdomainId":8,
    "subdomainName":"",
    "domainItem":"FALSE",
    "subdomainItem":"TRUE",
    "categoryItem":"FALSE"
  },
  {
    "id":16,
    "name":"Physical Health & Wellbeing",
    "domainId":3,
    "managerName":"Personal Effectiveness",
    "subdomainId":9,
    "subdomainName":"",
    "domainItem":"FALSE",
    "subdomainItem":"TRUE",
    "categoryItem":"FALSE"
  },
  {
    "id":17,
    "name":"Degrees",
    "domainId":4,
    "managerName":"Educational Opportunities",
    "subdomainId":10,
    "subdomainName":"",
    "domainItem":"FALSE",
    "subdomainItem":"TRUE",
    "categoryItem":"FALSE"
  },
  {
    "id":18,
    "name":"Certifications",
    "domainId":4,
    "managerName":"Educational Opportunities",
    "subdomainId":11,
    "subdomainName":"",
    "domainItem":"FALSE",
    "subdomainItem":"TRUE",
    "categoryItem":"FALSE"
  },
  {
    "id":19,
    "name":"Competative",
    "domainId":5,
    "managerName":"Employment & Career",
    "subdomainId":12,
    "subdomainName":"",
    "domainItem":"FALSE",
    "subdomainItem":"TRUE",
    "categoryItem":"FALSE"
  },
  {
    "id":20,
    "name":"Supported",
    "domainId":5,
    "managerName":"Employment & Career",
    "subdomainId":13,
    "subdomainName":"",
    "domainItem":"FALSE",
    "subdomainItem":"TRUE",
    "categoryItem":"FALSE"
  },
  {
    "id":21,
    "name":"Transitional",
    "domainId":5,
    "managerName":"Employment & Career",
    "subdomainId":14,
    "subdomainName":"",
    "domainItem":"FALSE",
    "subdomainItem":"TRUE",
    "categoryItem":"FALSE"
  },
  {
    "id":22,
    "name":"Daily Living",
    "domainId":6,
    "managerName":"Community-Life Functioning",
    "subdomainId":15,
    "subdomainName":"",
    "domainItem":"FALSE",
    "subdomainItem":"TRUE",
    "categoryItem":"FALSE"
  },
  {
    "id":23,
    "name":"Community Participation",
    "domainId":6,
    "managerName":"Community-Life Functioning",
    "subdomainId":16,
    "subdomainName":"",
    "domainItem":"FALSE",
    "subdomainItem":"TRUE",
    "categoryItem":"FALSE"
  },
  {
    "id":24,
    "name":"Hobbies",
    "domainId":7,
    "managerName":"Leisure Activities",
    "subdomainId":17,
    "subdomainName":"",
    "domainItem":"FALSE",
    "subdomainItem":"TRUE",
    "categoryItem":"FALSE"
  },
  {
    "id":25,
    "name":"Volunteering",
    "domainId":7,
    "managerName":"Leisure Activities",
    "subdomainId":18,
    "subdomainName":"",
    "domainItem":"FALSE",
    "subdomainItem":"TRUE",
    "categoryItem":"FALSE"
  },
  {
    "id":26,
    "name":"Places",
    "domainId":7,
    "managerName":"Leisure Activities",
    "subdomainId":19,
    "subdomainName":"",
    "domainItem":"FALSE",
    "subdomainItem":"TRUE",
    "categoryItem":"FALSE"
  },
  {
    "id":27,
    "name":"Healthy",
    "domainId":7,
    "managerName":"Leisure Activities",
    "subdomainId":20,
    "subdomainName":"",
    "domainItem":"FALSE",
    "subdomainItem":"TRUE",
    "categoryItem":"FALSE"
  },
  {
    "id":28,
    "name":"Couch Surfing",
    "domainId":1,
    "managerName":"Housing",
    "subdomainId":1,
    "subdomainName":"Homeless",
    "domainItem":"FALSE",
    "subdomainItem":"FALSE",
    "categoryItem":"TRUE"
  },
  {
    "id":29,
    "name":"Living on the Streets",
    "domainId":1,
    "managerName":"Housing",
    "subdomainId":1,
    "subdomainName":"Homeless",
    "domainItem":"FALSE",
    "subdomainItem":"FALSE",
    "categoryItem":"TRUE"
  },
  {
    "id":30,
    "name":"Independent residence",
    "domainId":1,
    "managerName":"Housing",
    "subdomainId":3,
    "subdomainName":"Other Situations",
    "domainItem":"FALSE",
    "subdomainItem":"FALSE",
    "categoryItem":"TRUE"
  },
  {
    "id":31,
    "name":"Residing with natural, adoptive, or foster family",
    "domainId":1,
    "managerName":"Housing",
    "subdomainId":3,
    "subdomainName":"Other Situations",
    "domainItem":"FALSE",
    "subdomainItem":"FALSE",
    "categoryItem":"TRUE"
  },
  {
    "id":32,
    "name":"Other family situations (e.g., girlfriend’s family, extended family)",
    "domainId":1,
    "managerName":"Housing",
    "subdomainId":3,
    "subdomainName":"Other Situations",
    "domainItem":"FALSE",
    "subdomainItem":"FALSE",
    "categoryItem":"TRUE"
  },
  {
    "id":33,
    "name":"Semi-independent living (e.g., service coordinator assists but does not live on site)",
    "domainId":1,
    "managerName":"Housing",
    "subdomainId":3,
    "subdomainName":"Other Situations",
    "domainItem":"FALSE",
    "subdomainItem":"FALSE",
    "categoryItem":"TRUE"
  },
  {
    "id":34,
    "name":"Supported living (e.g., supervised apartment with a live in mentor or on site support staff at apartment complex)",
    "domainId":1,
    "managerName":"Housing",
    "subdomainId":3,
    "subdomainName":"Other Situations",
    "domainItem":"FALSE",
    "subdomainItem":"FALSE",
    "categoryItem":"TRUE"
  },
  {
    "id":35,
    "name":"Group home or boarding home",
    "domainId":1,
    "managerName":"Housing",
    "subdomainId":3,
    "subdomainName":"Other Situations",
    "domainItem":"FALSE",
    "subdomainItem":"FALSE",
    "categoryItem":"TRUE"
  },
  {
    "id":36,
    "name":"Restrictive setting (e.g., crisis unit, residential treatment center, detention center)",
    "domainId":1,
    "managerName":"Housing",
    "subdomainId":3,
    "subdomainName":"Other Situations",
    "domainItem":"FALSE",
    "subdomainItem":"FALSE",
    "categoryItem":"TRUE"
  },
  {
    "id":37,
    "name":"Relationship development and maintenance of friendships",
    "domainId":2,
    "managerName":"Health & Safety",
    "subdomainId":4,
    "subdomainName":"Interpersonal Relationships",
    "domainItem":"FALSE",
    "subdomainItem":"FALSE",
    "categoryItem":"TRUE"
  },
  {
    "id":38,
    "name":"Balance of independence and interdependence with family members",
    "domainId":2,
    "managerName":"Health & Safety",
    "subdomainId":4,
    "subdomainName":"Interpersonal Relationships",
    "domainItem":"FALSE",
    "subdomainItem":"FALSE",
    "categoryItem":"TRUE"
  },
  {
    "id":39,
    "name":"Dating skills and development/maintenance of intimate relationships",
    "domainId":2,
    "managerName":"Health & Safety",
    "subdomainId":4,
    "subdomainName":"Interpersonal Relationships",
    "domainItem":"FALSE",
    "subdomainItem":"FALSE",
    "categoryItem":"TRUE"
  },
  {
    "id":40,
    "name":"Maintenance of relationships with mentors and informal key players",
    "domainId":2,
    "managerName":"Health & Safety",
    "subdomainId":4,
    "subdomainName":"Interpersonal Relationships",
    "domainItem":"FALSE",
    "subdomainItem":"FALSE",
    "categoryItem":"TRUE"
  },
  {
    "id":41,
    "name":"Social problem solving (e.g., generate alternative options, make informed decisions)",
    "domainId":2,
    "managerName":"Health & Safety",
    "subdomainId":5,
    "subdomainName":"Self-Determination",
    "domainItem":"FALSE",
    "subdomainItem":"FALSE",
    "categoryItem":"TRUE"
  },
  {
    "id":42,
    "name":"Set goals and develop plans for achieving goals",
    "domainId":2,
    "managerName":"Health & Safety",
    "subdomainId":5,
    "subdomainName":"Self-Determination",
    "domainItem":"FALSE",
    "subdomainItem":"FALSE",
    "categoryItem":"TRUE"
  },
  {
    "id":43,
    "name":"Evaluate one’s progress in achieving goals",
    "domainId":2,
    "managerName":"Health & Safety",
    "subdomainId":5,
    "subdomainName":"Self-Determination",
    "domainItem":"FALSE",
    "subdomainItem":"FALSE",
    "categoryItem":"TRUE"
  },
  {
    "id":44,
    "name":"Accept one’s strengths and limitations",
    "domainId":2,
    "managerName":"Health & Safety",
    "subdomainId":5,
    "subdomainName":"Self-Determination",
    "domainItem":"FALSE",
    "subdomainItem":"FALSE",
    "categoryItem":"TRUE"
  },
  {
    "id":45,
    "name":"Advocate for one’s rights and positions",
    "domainId":2,
    "managerName":"Health & Safety",
    "subdomainId":5,
    "subdomainName":"Self-Determination",
    "domainItem":"FALSE",
    "subdomainItem":"FALSE",
    "categoryItem":"TRUE"
  },
  {
    "id":46,
    "name":"Develop one’s creativity",
    "domainId":2,
    "managerName":"Health & Safety",
    "subdomainId":5,
    "subdomainName":"Self-Determination",
    "domainItem":"FALSE",
    "subdomainItem":"FALSE",
    "categoryItem":"TRUE"
  },
  {
    "id":47,
    "name":"Right to fail",
    "domainId":2,
    "managerName":"Health & Safety",
    "subdomainId":5,
    "subdomainName":"Self-Determination",
    "domainItem":"FALSE",
    "subdomainItem":"FALSE",
    "categoryItem":"TRUE"
  },
  {
    "id":48,
    "name":"Express one’s ideas and feelings through speaking and listening",
    "domainId":2,
    "managerName":"Health & Safety",
    "subdomainId":6,
    "subdomainName":"Communication",
    "domainItem":"FALSE",
    "subdomainItem":"FALSE",
    "categoryItem":"TRUE"
  },
  {
    "id":49,
    "name":"Reading and writing skills for learning, fun and communication",
    "domainId":2,
    "managerName":"Health & Safety",
    "subdomainId":6,
    "subdomainName":"Communication",
    "domainItem":"FALSE",
    "subdomainItem":"FALSE",
    "categoryItem":"TRUE"
  },
  {
    "id":50,
    "name":"Knowledge of information sources (e.g., use of library, authorities, internet communications, and other resources)",
    "domainId":2,
    "managerName":"Health & Safety",
    "subdomainId":6,
    "subdomainName":"Communication",
    "domainItem":"FALSE",
    "subdomainItem":"FALSE",
    "categoryItem":"TRUE"
  },
  {
    "id":51,
    "name":"Study and learning skills for gaining and applying new information",
    "domainId":2,
    "managerName":"Health & Safety",
    "subdomainId":6,
    "subdomainName":"Communication",
    "domainItem":"FALSE",
    "subdomainItem":"FALSE",
    "categoryItem":"TRUE"
  },
  {
    "id":52,
    "name":"Cyberspace safety (e.g., revealing personal information, meeting contacts in person, use of credit cards online)",
    "domainId":2,
    "managerName":"Health & Safety",
    "subdomainId":6,
    "subdomainName":"Communication",
    "domainItem":"FALSE",
    "subdomainItem":"FALSE",
    "categoryItem":"TRUE"
  },
  {
    "id":53,
    "name":"Health of mother for the prenatal fetus (e.g., balanced diet, physical activity, adequate sleep, no smoking)",
    "domainId":2,
    "managerName":"Health & Safety",
    "subdomainId":7,
    "subdomainName":"Parenting",
    "domainItem":"FALSE",
    "subdomainItem":"FALSE",
    "categoryItem":"TRUE"
  },
  {
    "id":54,
    "name":"Recognizing when to see a physician for prenatal and postnatal care",
    "domainId":2,
    "managerName":"Health & Safety",
    "subdomainId":7,
    "subdomainName":"Parenting",
    "domainItem":"FALSE",
    "subdomainItem":"FALSE",
    "categoryItem":"TRUE"
  },
  {
    "id":55,
    "name":"Young adult male supports girlfriend/spouse in promoting the health of the mother and baby",
    "domainId":2,
    "managerName":"Health & Safety",
    "subdomainId":7,
    "subdomainName":"Parenting",
    "domainItem":"FALSE",
    "subdomainItem":"FALSE",
    "categoryItem":"TRUE"
  },
  {
    "id":56,
    "name":"Young adult male and female assuming responsibility for rearing the children (e.g., care and discipline, behavioral parenting practices, providing home setting, finances)",
    "domainId":2,
    "managerName":"Health & Safety",
    "subdomainId":7,
    "subdomainName":"Parenting",
    "domainItem":"FALSE",
    "subdomainItem":"FALSE",
    "categoryItem":"TRUE"
  },
  {
    "id":57,
    "name":"Create reciprocal relationships with others",
    "domainId":3,
    "managerName":"Personal Effectiveness",
    "subdomainId":8,
    "subdomainName":"Emotional & Behavioral Wellbeing",
    "domainItem":"FALSE",
    "subdomainItem":"FALSE",
    "categoryItem":"TRUE"
  },
  {
    "id":58,
    "name":"Expression of care and concern for others",
    "domainId":3,
    "managerName":"Personal Effectiveness",
    "subdomainId":8,
    "subdomainName":"Emotional & Behavioral Wellbeing",
    "domainItem":"FALSE",
    "subdomainItem":"FALSE",
    "categoryItem":"TRUE"
  },
  {
    "id":59,
    "name":"Social skills (e.g., positive feedback to others, acceptance of negative feedback, self-monitoring, self-evaluation)",
    "domainId":3,
    "managerName":"Personal Effectiveness",
    "subdomainId":8,
    "subdomainName":"Emotional & Behavioral Wellbeing",
    "domainItem":"FALSE",
    "subdomainItem":"FALSE",
    "categoryItem":"TRUE"
  },
  {
    "id":60,
    "name":"Assertiveness skills and conflict resolution skills",
    "domainId":3,
    "managerName":"Personal Effectiveness",
    "subdomainId":8,
    "subdomainName":"Emotional & Behavioral Wellbeing",
    "domainItem":"FALSE",
    "subdomainItem":"FALSE",
    "categoryItem":"TRUE"
  },
  {
    "id":61,
    "name":"Coping with stress and the ability to relax",
    "domainId":3,
    "managerName":"Personal Effectiveness",
    "subdomainId":8,
    "subdomainName":"Emotional & Behavioral Wellbeing",
    "domainItem":"FALSE",
    "subdomainItem":"FALSE",
    "categoryItem":"TRUE"
  },
  {
    "id":62,
    "name":"Management of anger and moods",
    "domainId":3,
    "managerName":"Personal Effectiveness",
    "subdomainId":8,
    "subdomainName":"Emotional & Behavioral Wellbeing",
    "domainItem":"FALSE",
    "subdomainItem":"FALSE",
    "categoryItem":"TRUE"
  },
  {
    "id":63,
    "name":"Spiritual wellbeing",
    "domainId":3,
    "managerName":"Personal Effectiveness",
    "subdomainId":8,
    "subdomainName":"Emotional & Behavioral Wellbeing",
    "domainItem":"FALSE",
    "subdomainItem":"FALSE",
    "categoryItem":"TRUE"
  },
  {
    "id":64,
    "name":"Self-management of psychotropic medications and side effects",
    "domainId":3,
    "managerName":"Personal Effectiveness",
    "subdomainId":8,
    "subdomainName":"Emotional & Behavioral Wellbeing",
    "domainItem":"FALSE",
    "subdomainItem":"FALSE",
    "categoryItem":"TRUE"
  },
  {
    "id":65,
    "name":"Manage use of alcohol and drugs",
    "domainId":3,
    "managerName":"Personal Effectiveness",
    "subdomainId":8,
    "subdomainName":"Emotional & Behavioral Wellbeing",
    "domainItem":"FALSE",
    "subdomainItem":"FALSE",
    "categoryItem":"TRUE"
  },
  {
    "id":66,
    "name":"Avoid physical confrontations and criminal activities",
    "domainId":3,
    "managerName":"Personal Effectiveness",
    "subdomainId":8,
    "subdomainName":"Emotional & Behavioral Wellbeing",
    "domainItem":"FALSE",
    "subdomainItem":"FALSE",
    "categoryItem":"TRUE"
  },
  {
    "id":67,
    "name":"Avoid danger to self and others",
    "domainId":3,
    "managerName":"Personal Effectiveness",
    "subdomainId":8,
    "subdomainName":"Emotional & Behavioral Wellbeing",
    "domainItem":"FALSE",
    "subdomainItem":"FALSE",
    "categoryItem":"TRUE"
  },
  {
    "id":68,
    "name":"Healthcare and fitness (e.g., balanced diet, physical activity)",
    "domainId":3,
    "managerName":"Personal Effectiveness",
    "subdomainId":9,
    "subdomainName":"Physical Health & Wellbeing",
    "domainItem":"FALSE",
    "subdomainItem":"FALSE",
    "categoryItem":"TRUE"
  },
  {
    "id":69,
    "name":"Self-management of over-the-counter and prescription medications and possible side effects",
    "domainId":3,
    "managerName":"Personal Effectiveness",
    "subdomainId":9,
    "subdomainName":"Physical Health & Wellbeing",
    "domainItem":"FALSE",
    "subdomainItem":"FALSE",
    "categoryItem":"TRUE"
  },
  {
    "id":70,
    "name":"Knowledge of sexual functioning and birth control (e.g., prevention of sexually transmitted diseases and unwanted pregnancies)",
    "domainId":3,
    "managerName":"Personal Effectiveness",
    "subdomainId":9,
    "subdomainName":"Physical Health & Wellbeing",
    "domainItem":"FALSE",
    "subdomainItem":"FALSE",
    "categoryItem":"TRUE"
  },
  {
    "id":71,
    "name":"Ability to access medical and dental services",
    "domainId":3,
    "managerName":"Personal Effectiveness",
    "subdomainId":9,
    "subdomainName":"Physical Health & Wellbeing",
    "domainItem":"FALSE",
    "subdomainItem":"FALSE",
    "categoryItem":"TRUE"
  },
  {
    "id":72,
    "name":"Bachelor’s degree or beyond",
    "domainId":4,
    "managerName":"Educational Opportunities",
    "subdomainId":10,
    "subdomainName":"Degrees",
    "domainItem":"FALSE",
    "subdomainItem":"FALSE",
    "categoryItem":"TRUE"
  },
  {
    "id":73,
    "name":"Associate’s degree",
    "domainId":4,
    "managerName":"Educational Opportunities",
    "subdomainId":10,
    "subdomainName":"Degrees",
    "domainItem":"FALSE",
    "subdomainItem":"FALSE",
    "categoryItem":"TRUE"
  },
  {
    "id":74,
    "name":"Vocational or technical certification",
    "domainId":4,
    "managerName":"Educational Opportunities",
    "subdomainId":11,
    "subdomainName":"Certifications",
    "domainItem":"FALSE",
    "subdomainItem":"FALSE",
    "categoryItem":"TRUE"
  },
  {
    "id":75,
    "name":"High school completion or GED certification",
    "domainId":4,
    "managerName":"Educational Opportunities",
    "subdomainId":11,
    "subdomainName":"Certifications",
    "domainItem":"FALSE",
    "subdomainItem":"FALSE",
    "categoryItem":"TRUE"
  },
  {
    "id":76,
    "name":"Work experience, paid or unpaid, at competitive or entrepreneurial worksite (e.g., apprenticeship with employee serving as coworker mentor)",
    "domainId":5,
    "managerName":"Employment & Career",
    "subdomainId":12,
    "subdomainName":"Competative",
    "domainItem":"FALSE",
    "subdomainItem":"FALSE",
    "categoryItem":"TRUE"
  },
  {
    "id":77,
    "name":"Self-care",
    "domainId":6,
    "managerName":"Community-Life Functioning",
    "subdomainId":15,
    "subdomainName":"Daily Living",
    "domainItem":"FALSE",
    "subdomainItem":"FALSE",
    "categoryItem":"TRUE"
  },
  {
    "id":78,
    "name":"Maintenance of living space and personal possessions",
    "domainId":6,
    "managerName":"Community-Life Functioning",
    "subdomainId":15,
    "subdomainName":"Daily Living",
    "domainItem":"FALSE",
    "subdomainItem":"FALSE",
    "categoryItem":"TRUE"
  },
  {
    "id":79,
    "name":"Money management",
    "domainId":6,
    "managerName":"Community-Life Functioning",
    "subdomainId":15,
    "subdomainName":"Daily Living",
    "domainItem":"FALSE",
    "subdomainItem":"FALSE",
    "categoryItem":"TRUE"
  },
  {
    "id":80,
    "name":"Cooking and nutrition",
    "domainId":6,
    "managerName":"Community-Life Functioning",
    "subdomainId":15,
    "subdomainName":"Daily Living",
    "domainItem":"FALSE",
    "subdomainItem":"FALSE",
    "categoryItem":"TRUE"
  },
  {
    "id":81,
    "name":"Maintenance and security of personal and financial documents",
    "domainId":6,
    "managerName":"Community-Life Functioning",
    "subdomainId":15,
    "subdomainName":"Daily Living",
    "domainItem":"FALSE",
    "subdomainItem":"FALSE",
    "categoryItem":"TRUE"
  },
  {
    "id":82,
    "name":"Safety skills (e.g., avoid dangerous situations, prevent victimization",
    "domainId":6,
    "managerName":"Community-Life Functioning",
    "subdomainId":15,
    "subdomainName":"Daily Living",
    "domainItem":"FALSE",
    "subdomainItem":"FALSE",
    "categoryItem":"TRUE"
  },
  {
    "id":83,
    "name":"Mobility around the community",
    "domainId":6,
    "managerName":"Community-Life Functioning",
    "subdomainId":16,
    "subdomainName":"Community Participation",
    "domainItem":"FALSE",
    "subdomainItem":"FALSE",
    "categoryItem":"TRUE"
  },
  {
    "id":84,
    "name":"Access and use of relevant community agencies and resources",
    "domainId":6,
    "managerName":"Community-Life Functioning",
    "subdomainId":16,
    "subdomainName":"Community Participation",
    "domainItem":"FALSE",
    "subdomainItem":"FALSE",
    "categoryItem":"TRUE"
  },
  {
    "id":85,
    "name":"Citizenship responsibilities, knowledge of basic rights and responsibilities",
    "domainId":6,
    "managerName":"Community-Life Functioning",
    "subdomainId":16,
    "subdomainName":"Community Participation",
    "domainItem":"FALSE",
    "subdomainItem":"FALSE",
    "categoryItem":"TRUE"
  },
  {
    "id":86,
    "name":"Community social support (e.g., peer groups, community organizations)",
    "domainId":6,
    "managerName":"Community-Life Functioning",
    "subdomainId":16,
    "subdomainName":"Community Participation",
    "domainItem":"FALSE",
    "subdomainItem":"FALSE",
    "categoryItem":"TRUE"
  },
  {
    "id":87,
    "name":"Access to legal services",
    "domainId":6,
    "managerName":"Community-Life Functioning",
    "subdomainId":16,
    "subdomainName":"Community Participation",
    "domainItem":"FALSE",
    "subdomainItem":"FALSE",
    "categoryItem":"TRUE"
  },
  {
    "id":88,
    "name":"Cultural and spiritual resources",
    "domainId":6,
    "managerName":"Community-Life Functioning",
    "subdomainId":16,
    "subdomainName":"Community Participation",
    "domainItem":"FALSE",
    "subdomainItem":"FALSE",
    "categoryItem":"TRUE"
  },
  {
    "id":89,
    "name":"Entertaining one’s self",
    "domainId":7,
    "managerName":"Leisure Activities",
    "subdomainId":17,
    "subdomainName":"Hobbies",
    "domainItem":"FALSE",
    "subdomainItem":"FALSE",
    "categoryItem":"TRUE"
  },
  {
    "id":90,
    "name":"Activities with others",
    "domainId":7,
    "managerName":"Leisure Activities",
    "subdomainId":19,
    "subdomainName":"Places",
    "domainItem":"FALSE",
    "subdomainItem":"FALSE",
    "categoryItem":"TRUE"
  },
  {
    "id":91,
    "name":"Creating indoor and outdoor activities of interest and fun",
    "domainId":7,
    "managerName":"Leisure Activities",
    "subdomainId":19,
    "subdomainName":"Places",
    "domainItem":"FALSE",
    "subdomainItem":"FALSE",
    "categoryItem":"TRUE"
  }
];

  return {
    all: function() {
      return resources;
    },
    get: function(resourceId) {
      // Simple index lookup
      return resources[resourceId];
    }
  }

});
