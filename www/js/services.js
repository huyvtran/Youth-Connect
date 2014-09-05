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
    { id: 0, name: 'Living Situation and Skills',
    sub: [
      {name:'Housing',
        agencies:[
          {name:"agency1", phone:"agency1number", address:"agency1address", link:'agency1link'},
          {name:"agency1-1", phone:"agency1-1number", address:"agency1-1address", link:'agency1-1link'}
        ]},
      {name:'Daily Life',
        agencies:[
          {name:"agency2", phone:"agency2number", address:"agency2address", link:'agency2link'}
        ]},
      {name:'Community Participation',
        agencies:[
          {name:"agency1", phone:"agency1number", address:"agency1address", link:'agency1link'}
      ]}
    ]},
    { id: 1, name: 'Personal Effectiveness',
    sub: [
      {name:'1',
        agencies:[
          {name:"agency1", phone:"agency1number", address:"agency1address", link:'agency1link'}
        ]},
      {name:'2',
        agencies:[
          {name:"agency2", phone:"agency2number", address:"agency2address", link:'agency2link'}
        ]},
      {name:'3',
        agencies:[
          {name:"agency1", phone:"agency1number", address:"agency1address", link:'agency1link'}
      ]},
      {name:'4',
        agencies:[
          {name:"agency1", phone:"agency1number", address:"agency1address", link:'agency1link'}
      ]}
    ]},
    { id: 2, name: 'Health & Safety',
    sub: [
      {name:'1',
        agencies:[
          {name:"agency1", phone:"agency1number", address:"agency1address", link:'agency1link'}
        ]},
      {name:'2',
        agencies:[
          {name:"agency2", phone:"agency2number", address:"agency2address", link:'agency2link'}
      ]}
    ]},
    { id: 3, name: 'Educational Opportunities',
    sub: [
      {name:'1',
        agencies:[
          {name:"agency1", phone:"agency1number", address:"agency1address", link:'agency1link'}
        ]},
      {name:'2',
        agencies:[
          {name:"agency2", phone:"agency2number", address:"agency2address", link:'agency2link'}
        ]},
      {name:'3',
        agencies:[
          {name:"agency1", phone:"agency1number", address:"agency1address", link:'agency1link'}
      ]},
      {name:'4',
        agencies:[
          {name:"agency1", phone:"agency1number", address:"agency1address", link:'agency1link'}
      ]}
    ]},
    { id: 4, name: 'Employment & Career',
    sub: [
      {name:'1',
        agencies:[
          {name:"agency1", phone:"agency1number", address:"agency1address", link:'agency1link'}
        ]},
      {name:'2',
        agencies:[
          {name:"agency2", phone:"agency2number", address:"agency2address", link:'agency2link'}
        ]},
      {name:'3',
        agencies:[
          {name:"agency1", phone:"agency1number", address:"agency1address", link:'agency1link'}
      ]},
      {name:'4',
        agencies:[
          {name:"agency1", phone:"agency1number", address:"agency1address", link:'agency1link'}
      ]}
    ]},
    { id: 5, name: 'Leisure Activities',
    sub: [
      {name:'1',
        agencies:[
          {name:"agency1", phone:"agency1number", address:"agency1address", link:'agency1link'}
        ]},
      {name:'2',
        agencies:[
          {name:"agency2", phone:"agency2number", address:"agency2address", link:'agency2link'}
        ]},
      {name:'3',
        agencies:[
          {name:"agency2", phone:"agency2number", address:"agency2address", link:'agency2link'}
        ]},
      {name:'4',
        agencies:[
          {name:"agency2", phone:"agency2number", address:"agency2address", link:'agency2link'}
        ]},
      {name:'5',
        agencies:[
          {name:"agency1", phone:"agency1number", address:"agency1address", link:'agency1link'}
      ]}
    ]},
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
