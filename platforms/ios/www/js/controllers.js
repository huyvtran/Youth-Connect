angular.module('starter.controllers', [])

.controller('NavCtrl', function($scope, auth, $state,$ionicSideMenuDelegate, $ionicSlideBoxDelegate) {
  $scope.auth = auth;
  $scope.logout = function() {
    auth.signout();
    $state.go('login');
  }
  $scope.showMenu = function () {
     $ionicSideMenuDelegate.toggleLeft();
   };
   $scope.showRightMenu = function () {
     $ionicSideMenuDelegate.toggleRight();
   };
$scope.nextSlide = function() {
    $ionicSlideBoxDelegate.next();
  };
  $scope.previousSlide = function() {
    $ionicSlideBoxDelegate.previous();
  }
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})


.controller('DashCtrl', function($scope, auth, $state) {
  $scope.auth = auth;
  $scope.goToResources = function() {
    $state.go('resources');
  };
  $scope.goToProfile = function() {
    $state.go('profile');
  };
  $scope.goToEguru = function() {
    $state.go('eguru');
  };
  $scope.goToAddResource = function() {
    $state.go('resources');
  };

})

.controller('ProfileCtrl', function($scope, auth, $state) {
})

.controller('EguruCtrl', function($scope, auth, $state) {
})

.controller('QuestionsCtrl', function($scope, auth, $state, Questions) {
  $scope.questions = Questions.all();
})

.controller('QuestionsDetailCtrl', function($scope, $stateParams, Questions, $location, $state) {
  $scope.question = Questions.get($stateParams.questionId-1);

  $scope.goToNextQuestion = function(currentQuestion) {
  var questionId = currentQuestion +1;
  console.log(currentQuestion)
    if (currentQuestion <= 5) {
    $location.path('/question/' + questionId)
    }
    else {
      $state.go('eguru');
    }
  }
})

.controller('ScenariosCtrl', function($scope, auth, $state, Scenarios) {
  $scope.scenarios = Scenarios.all();
})
.controller('ScenarioDetailCtrl', function($scope, $stateParams, Scenarios, $location, $state) {
  $scope.scenario = Scenarios.get($stateParams.scenarioId-1);

  $scope.goToNextQuestion = function(currentScenario) {
    if (currentScenario <= 19) {
    $location.path('/scenario/' + (currentScenario+1))
    }
    else {
      $state.go('eguru');
    }
  }
})

.controller('ResourcesCtrl', function($scope, $state, Resources,$location) {

  $scope.goToHousing = function() {
    $state.go('housing-tab.homeless');
  };
  $scope.goToPersonal = function() {
    $state.go('personal-tab.interpersonal');
  };
  $scope.goToHealth = function() {
    $state.go('health-tab.emotional');
  };

  $scope.goToEducational = function() {
    $state.go('educational-tab.degrees');
  };
  $scope.goToEmployment = function() {
    $state.go('employment-tab.competitive');
  };
  $scope.goToCommunity = function() {
    $state.go('community-tab.daily');
  };
  $scope.goToLeisure = function() {
    $state.go('leisure-tab.hobbies');
  };
  $scope.resources = Resources.all();

})

.controller('HousingCtrl', function($scope, $ionicSlideBoxDelegate,$ionicModal) {

    $scope.currentSlide = 0;

    $scope.slideChanged = function(currSlide) {
        $scope.currentSlide = currSlide;
        $scope.totalSlides = $ionicSlideBoxDelegate.slidesCount()


    }
    $scope.homeless = [
    { title: 'Couch Surfing', desc: '', image: '1' },
    { title: 'Living on the Streets', desc: '',image: '2' }
  ];
      $scope.runaway = [
    { title: 'No information provided', desc: '', image: '3' }
  ];
      $scope.other = [
        { title: 'Independent residence', desc: '', image: '4' },
        { title: 'Residing with natural, adoptive, or foster family', desc: '',image: '5' },
        { title: 'Other family situations (e.g., girlfriend’s family, extended family)', desc: '',image: '6' },
        { title: 'Semi-independent living (e.g., service coordinator assists but does not live on site)', desc: '',image: '7' },
        { title: 'Supported living (e.g., supervised apartment with a live in mentor or on site support staff at apartment complex)', desc: '',image: '8' },
        { title: 'Group home or boarding home', desc: '',image: '9' },
        { title: 'Restrictive setting (e.g., crisis unit, residential treatment center, detention center)', desc: '',image: '10'}
  ];
  $ionicModal.fromTemplateUrl('templates/resources/map_modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.showMap = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });

})

.controller('PersonalEffectivenessCtrl', function($scope, $ionicSlideBoxDelegate,$ionicModal) {


    $scope.slideChanged = function(currSlide) {
        $scope.currentSlide = currSlide;
        $scope.totalSlides = $ionicSlideBoxDelegate.slidesCount()


    }

    $scope.interpersonal_relationships = [
      {title:'Relationship development and maintenance of friendships',desc:'', image:1},
      {title:'Balance of independence and interdependence with family members',desc:'', image:2},
      {title:'Dating skills and development/maintenance of intimate relationships',desc:'', image:3},
      {title:'Maintenance of relationships with mentors and informal key players',desc:'', image:4}
    ];

      $scope.self_determination = [
        {title:'Social problem solving (e.g., generate alternative options, make informed decisions)',desc:'', image:5},
        {title:'Set goals and develop plans for achieving goals',desc:'', image:6},
        {title:'Evaluate one’s progress in achieving goals',desc:'', image:7},
        {title:'Accept one’s strengths and limitations',desc:'', image:8},
        {title:'Advocate for one’s rights and positions',desc:'', image : 17},
        {title:'Develop one’s creativity',desc:'', image : 18},
        {title:'Right to fail',desc:'', image : 19}
    ];
      $scope.communication = [
        {title:'Express ones ideas and feelings through speaking and listening',desc:'', image:9},
        {title:'Reading and writing skills for learning, fun and communication',desc:'', image:10},
        {title:'Knowledge of information sources (e.g., use of library, authorities, internet communications, and other resources)',desc:'', image:11},
        {title:'Study and learning skills for gaining and applying new information',desc:'', image:12},
        {title:'Cyberspace safety (e.g., revealing personal information, meeting contacts in person, use of credit cards online)',desc:''}
      ];
  $scope.parenting = [
    {title:'Health of mother for the prenatal fetus (e.g., balanced diet, physical activity, adequate sleep, no smoking)',desc:'', image:13},
    {title:'Recognizing when to see a physician for prenatal and postnatal care',desc:'', image:14},
    {title:'Young adult male supports girlfriend/spouse in promoting the health of the mother and baby',desc:'', image:15},
    {title:'Young adult male and female assuming responsibility for rearing the children (e.g., care and discipline, behavioral parenting practices, providing home setting, finances)',desc:'', image:16}
    ];
    $ionicModal.fromTemplateUrl('templates/resources/map_modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    });
    $scope.showMap = function() {
      $scope.modal.show();
    };
    $scope.closeModal = function() {
      $scope.modal.hide();
    };
    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
      $scope.modal.remove();
    });
    // Execute action on hide modal
    $scope.$on('modal.hidden', function() {
      // Execute action
    });
    // Execute action on remove modal
    $scope.$on('modal.removed', function() {
      // Execute action
    });

})

.controller('HealthCtrl', function($scope, $ionicSlideBoxDelegate,$ionicModal) {

    $scope.currentSlide = 0;

    $scope.slideChanged = function(currSlide) {
        $scope.currentSlide = currSlide;
        $scope.totalSlides = $ionicSlideBoxDelegate.slidesCount()
    }
    $scope.emotional =[
    {title:"Create reciprocal relationships with others", desc:'', image: 1},
    {title:"Expression of care and concern for others", desc:'', image:10},
    {title:"Social skills (e.g., positive feedback to others, acceptance of negative feedback, self-monitoring, self-evaluation)", desc:'', image:2},
    {title:"Assertiveness skills and conflict resolution skills", desc: '', image:3},
    {title:"Coping with stress and the ability to relax", desc:'', image:11},
    {title:"Management of anger and moods", desc: '', image:4},
    {title:"Spiritual wellbeing", desc: '', image:5},
    {title:"Self-management of psychotropic medications and side effects", desc: '', image:6},
    {title:"Manage use of alcohol and drugs",  desc: '', image:7},
    {title:"Avoid physical confrontations and criminal activities", desc:'', image:8},
    {title:"Avoid danger to self and others",desc:'', image:9}
    ];

    $scope.physical= [
    {title:"Create reciprocal relationships with others", desc:'', image: 1},
    {title:"Expression of care and concern for others", desc:'', image:10},
    {title:"Social skills (e.g., positive feedback to others, acceptance of negative feedback, self-monitoring, self-evaluation)", desc:'', image:2},
    {title:"Assertiveness skills and conflict resolution skills", desc: '', image:3},
    {title:"Coping with stress and the ability to relax", desc:'', image:11},
    {title:"Management of anger and moods", desc: '', image:4},
    {title:"Spiritual wellbeing", desc: '', image:5},
    {title:"Self-management of psychotropic medications and side effects", desc: '', image:6},
    {title:"Manage use of alcohol and drugs",  desc: '', image:7},
    {title:"Avoid physical confrontations and criminal activities", desc:'', image:8},
    {title:"Avoid danger to self and others",desc:'', image:9}
    ];
    $ionicModal.fromTemplateUrl('templates/resources/map_modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    });
    $scope.showMap = function() {
      $scope.modal.show();
    };
    $scope.closeModal = function() {
      $scope.modal.hide();
    };
    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
      $scope.modal.remove();
    });
    // Execute action on hide modal
    $scope.$on('modal.hidden', function() {
      // Execute action
    });
    // Execute action on remove modal
    $scope.$on('modal.removed', function() {
      // Execute action
    });

})

.controller('EducationalCtrl', function($scope, $ionicSlideBoxDelegate,$ionicModal) {

    $scope.currentSlide = 0;

    $scope.slideChanged = function(currSlide) {
        $scope.currentSlide = currSlide;
        $scope.totalSlides = $ionicSlideBoxDelegate.slidesCount()
    }
    //not the correct data
    $scope.degrees = [
    {title:"Create reciprocal relationships with others", desc:'', image: 1},
    {title:"Expression of care and concern for others", desc:'', image:10},
    {title:"Social skills (e.g., positive feedback to others, acceptance of negative feedback, self-monitoring, self-evaluation)", desc:'', image:2},
    {title:"Assertiveness skills and conflict resolution skills", desc: '', image:3},
    {title:"Coping with stress and the ability to relax", desc:'', image:11},
    {title:"Management of anger and moods", desc: '', image:4},
    {title:"Spiritual wellbeing", desc: '', image:5},
    {title:"Self-management of psychotropic medications and side effects", desc: '', image:6},
    {title:"Manage use of alcohol and drugs",  desc: '', image:7},
    {title:"Avoid physical confrontations and criminal activities", desc:'', image:8},
    {title:"Avoid danger to self and others",desc:'', image:9}
    ];

    $scope.certifications = [
    {title:"Create reciprocal relationships with others", desc:'', image: 1},
    {title:"Expression of care and concern for others", desc:'', image:10},
    {title:"Social skills (e.g., positive feedback to others, acceptance of negative feedback, self-monitoring, self-evaluation)", desc:'', image:2},
    {title:"Assertiveness skills and conflict resolution skills", desc: '', image:3},
    {title:"Coping with stress and the ability to relax", desc:'', image:11},
    {title:"Management of anger and moods", desc: '', image:4},
    {title:"Spiritual wellbeing", desc: '', image:5},
    {title:"Self-management of psychotropic medications and side effects", desc: '', image:6},
    {title:"Manage use of alcohol and drugs",  desc: '', image:7},
    {title:"Avoid physical confrontations and criminal activities", desc:'', image:8},
    {title:"Avoid danger to self and others",desc:'', image:9}
    ];

    $scope.other = [
    {title:"Create reciprocal relationships with others", desc:'', image: 1},
    {title:"Expression of care and concern for others", desc:'', image:10},
    {title:"Social skills (e.g., positive feedback to others, acceptance of negative feedback, self-monitoring, self-evaluation)", desc:'', image:2},
    {title:"Assertiveness skills and conflict resolution skills", desc: '', image:3},
    {title:"Coping with stress and the ability to relax", desc:'', image:11},
    {title:"Management of anger and moods", desc: '', image:4},
    {title:"Spiritual wellbeing", desc: '', image:5},
    {title:"Self-management of psychotropic medications and side effects", desc: '', image:6},
    {title:"Manage use of alcohol and drugs",  desc: '', image:7},
    {title:"Avoid physical confrontations and criminal activities", desc:'', image:8},
    {title:"Avoid danger to self and others",desc:'', image:9}
    ];
    $ionicModal.fromTemplateUrl('templates/resources/map_modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    });
    $scope.showMap = function() {
      $scope.modal.show();
    };
    $scope.closeModal = function() {
      $scope.modal.hide();
    };
    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
      $scope.modal.remove();
    });
    // Execute action on hide modal
    $scope.$on('modal.hidden', function() {
      // Execute action
    });
    // Execute action on remove modal
    $scope.$on('modal.removed', function() {
      // Execute action
    });

})

.controller('EmploymentCtrl', function($scope, $ionicSlideBoxDelegate,$ionicModal) {

    $scope.currentSlide = 0;

    $scope.slideChanged = function(currSlide) {
        $scope.currentSlide = currSlide;
        $scope.totalSlides = $ionicSlideBoxDelegate.slidesCount()
    }
    $scope.competitive = [
      {title:'Relationship development and maintenance of friendships',desc:'', image:1},
      {title:'Balance of independence and interdependence with family members',desc:'', image:2},
      {title:'Dating skills and development/maintenance of intimate relationships',desc:'', image:3},
      {title:'Maintenance of relationships with mentors and informal key players',desc:'', image:4}
    ];

    $scope.work = [
    {title:"Create reciprocal relationships with others", desc:'', image: 1},
    {title:"Expression of care and concern for others", desc:'', image:10},
    {title:"Social skills (e.g., positive feedback to others, acceptance of negative feedback, self-monitoring, self-evaluation)", desc:'', image:2},
    {title:"Assertiveness skills and conflict resolution skills", desc: '', image:3},
    {title:"Coping with stress and the ability to relax", desc:'', image:11},
    {title:"Management of anger and moods", desc: '', image:4},
    {title:"Spiritual wellbeing", desc: '', image:5},
    {title:"Self-management of psychotropic medications and side effects", desc: '', image:6},
    {title:"Manage use of alcohol and drugs",  desc: '', image:7},
    {title:"Avoid physical confrontations and criminal activities", desc:'', image:8},
    {title:"Avoid danger to self and others",desc:'', image:9}
    ];

    $scope.supported = [
      {title:'Social problem solving (e.g., generate alternative options, make informed decisions)',desc:'', image:5},
      {title:'Set goals and develop plans for achieving goals',desc:'', image:6},
      {title:'Evaluate one’s progress in achieving goals',desc:'', image:7},
      {title:'Accept one’s strengths and limitations',desc:'', image:8},
      {title:'Advocate for one’s rights and positions',desc:'', image : 17},
      {title:'Develop one’s creativity',desc:'', image : 18},
      {title:'Right to fail',desc:'', image : 19}
  ];

  $scope.transitional = [
    {title:'Relationship development and maintenance of friendships',desc:'', image:1},
    {title:'Balance of independence and interdependence with family members',desc:'', image:2},
    {title:'Dating skills and development/maintenance of intimate relationships',desc:'', image:3},
    {title:'Maintenance of relationships with mentors and informal key players',desc:'', image:4}
  ];
  $ionicModal.fromTemplateUrl('templates/resources/map_modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.showMap = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });

})

.controller('CommunityCtrl', function($scope, $ionicSlideBoxDelegate,$ionicModal) {

    $scope.currentSlide = 0;

    $scope.slideChanged = function(currSlide) {
        $scope.currentSlide = currSlide;
        $scope.totalSlides = $ionicSlideBoxDelegate.slidesCount()
    }
    $scope.daily = [
      {title:'Relationship development and maintenance of friendships',desc:'', image:1},
      {title:'Balance of independence and interdependence with family members',desc:'', image:2},
      {title:'Dating skills and development/maintenance of intimate relationships',desc:'', image:3},
      {title:'Maintenance of relationships with mentors and informal key players',desc:'', image:4}
    ];

      $scope.community = [
        {title:'Social problem solving (e.g., generate alternative options, make informed decisions)',desc:'', image:5},
        {title:'Set goals and develop plans for achieving goals',desc:'', image:6},
        {title:'Evaluate one’s progress in achieving goals',desc:'', image:7},
        {title:'Accept one’s strengths and limitations',desc:'', image:8},
        {title:'Advocate for one’s rights and positions',desc:'', image : 17},
        {title:'Develop one’s creativity',desc:'', image : 18},
        {title:'Right to fail',desc:'', image : 19}
    ];
    $ionicModal.fromTemplateUrl('templates/resources/map_modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    });
    $scope.showMap = function() {
      $scope.modal.show();
    };
    $scope.closeModal = function() {
      $scope.modal.hide();
    };
    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
      $scope.modal.remove();
    });
    // Execute action on hide modal
    $scope.$on('modal.hidden', function() {
      // Execute action
    });
    // Execute action on remove modal
    $scope.$on('modal.removed', function() {
      // Execute action
    });

})

.controller('LeisureCtrl', function($scope, $ionicSlideBoxDelegate,$ionicModal) {

    $scope.currentSlide = 0;

    $scope.slideChanged = function(currSlide) {
        $scope.currentSlide = currSlide;
        $scope.totalSlides = $ionicSlideBoxDelegate.slidesCount()
    }
$scope.hobbies = [
  {title:'Relationship development and maintenance of friendships',desc:'', image:1},
  {title:'Balance of independence and interdependence with family members',desc:'', image:2},
  {title:'Dating skills and development/maintenance of intimate relationships',desc:'', image:3},
  {title:'Maintenance of relationships with mentors and informal key players',desc:'', image:4}
];

  $scope.volunteering = [
    {title:'Social problem solving (e.g., generate alternative options, make informed decisions)',desc:'', image:5},
    {title:'Set goals and develop plans for achieving goals',desc:'', image:6},
    {title:'Evaluate one’s progress in achieving goals',desc:'', image:7},
    {title:'Accept one’s strengths and limitations',desc:'', image:8},
    {title:'Advocate for one’s rights and positions',desc:'', image : 17},
    {title:'Develop one’s creativity',desc:'', image : 18},
    {title:'Right to fail',desc:'', image : 19}
];
$scope.places = [
  {title:'Relationship development and maintenance of friendships',desc:'', image:1},
  {title:'Balance of independence and interdependence with family members',desc:'', image:2},
  {title:'Dating skills and development/maintenance of intimate relationships',desc:'', image:3},
  {title:'Maintenance of relationships with mentors and informal key players',desc:'', image:4}
];

  $scope.healthy = [
    {title:'Social problem solving (e.g., generate alternative options, make informed decisions)',desc:'', image:5},
    {title:'Set goals and develop plans for achieving goals',desc:'', image:6},
    {title:'Evaluate one’s progress in achieving goals',desc:'', image:7},
    {title:'Accept one’s strengths and limitations',desc:'', image:8},
    {title:'Advocate for one’s rights and positions',desc:'', image : 17},
    {title:'Develop one’s creativity',desc:'', image : 18},
    {title:'Right to fail',desc:'', image : 19}
];
$ionicModal.fromTemplateUrl('templates/resources/map_modal.html', {
  scope: $scope,
  animation: 'slide-in-up'
}).then(function(modal) {
  $scope.modal = modal;
});
$scope.showMap = function() {
  $scope.modal.show();
};
$scope.closeModal = function() {
  $scope.modal.hide();
};
//Cleanup the modal when we're done with it!
$scope.$on('$destroy', function() {
  $scope.modal.remove();
});
// Execute action on hide modal
$scope.$on('modal.hidden', function() {
  // Execute action
});
// Execute action on remove modal
$scope.$on('modal.removed', function() {
  // Execute action
});
})

.controller('LoginCtrl', function($scope, auth, $state, $ionicSlideBoxDelegate) {
  auth.signin({
    // This is a must for mobile projects
    popup: true,
    // Make the widget non closeable
    standalone: true,
    // This asks for the refresh token
    // So that the user never has to log in again
    offline_mode: true,
    device: 'Phone',
    container: 'login',
    icon: 'http://kmartinezmedia.com/logo-32.png',
    chrome: true,
    scope: 'openid profile'
  }, function() {
    // Login was successful
    $state.go('dash');
  }, function(error) {
    // Oops something went wrong during login:
    console.log('There was an error logging in', error);
  });
  $scope.myActiveSlide = 0;
})
