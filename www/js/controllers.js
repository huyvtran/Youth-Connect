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

.controller('ScenariosCtrl', function($scope, auth, $state, Scenarios) {
  $scope.scenarios = Scenarios.all();
  var s = $scope.scenarios;
})
.controller('ScenarioDetailCtrl', function($scope, $stateParams, Scenarios) {
  $scope.scenario = Scenarios.get($stateParams.scenarioId);
})

.controller('ResourcesCtrl', function($scope, $state, Resources,$location) {
  $scope.goToSubdomain = function() {
    $state.go('housing-tab.homeless');
  };
  $scope.resources = Resources.all();
})

.controller('HousingCtrl', function($scope, $ionicSlideBoxDelegate) {

    $scope.currentSlide = 0;

    $scope.slideChanged = function(currSlide) {
        $scope.currentSlide = currSlide;
        $scope.totalSlides = $ionicSlideBoxDelegate.slidesCount()
        console.log('Active Slide=' + $scope.currentSlide);
        console.log('Total Slides=' + $scope.totalSlides);
    }
    $scope.homeless = [
    { title: 'Couch Surfing', desc: 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.', image: '1' },
    { title: 'Living on the Streets', desc: 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',image: '2' }
  ];
      $scope.runaway = [
    { title: 'Coming Soon', desc: 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.', image: '1' }
  ];
      $scope.other = [
        { title: 'Independent residence', desc: 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.', image: '1' },
        { title: 'Residing with natural, adoptive, or foster family', desc: 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',image: '2' },
        { title: 'Other family situations (e.g., girlfriend’s family, extended family)', desc: 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',image: '3' },
        { title: 'Semi-independent living (e.g., service coordinator assists but does not live on site)', desc: 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',image: '4' },
        { title: 'Supported living (e.g., supervised apartment with a live in mentor or on site support staff at apartment complex)', desc: 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',image: '5' },
        { title: 'Group home or boarding home', desc: 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',image: '1' },
        { title: 'Restrictive setting (e.g., crisis unit, residential treatment center, detention center)', desc: 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',image: '2' }
  ];

})

.controller('PersonalEffectivenessCtrl', function($scope, $ionicSlideBoxDelegate) {

    $scope.currentSlide = 0;

    $scope.slideChanged = function(currSlide) {
        $scope.currentSlide = currSlide;
        $scope.totalSlides = $ionicSlideBoxDelegate.slidesCount()
        console.log('Active Slide=' + $scope.currentSlide);
        console.log('Total Slides=' + $scope.totalSlides);
    }

    $scope.interpersonal_relationships = [
      {"title":"Relationship development and maintenance of friendships","desc":"Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.", "image":1},
      {"title":"Balance of independence and interdependence with family members","desc":"Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.", "image":2},
      {"title":"Dating skills and development/maintenance of intimate relationships","desc":"Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.", "image":3},
      {"title":"Maintenance of relationships with mentors and informal key players","desc":"Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.", "image":4}
    ];

      $scope.self_determination = [
        {"title":"Social problem solving (e.g., generate alternative options, make informed decisions)","desc":"Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.", "image":5},
        {"title":"Set goals and develop plans for achieving goals","desc":"Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.", "image":6},
        {"title":"Evaluate one’s progress in achieving goals","desc":"Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.", "image":7},
        {"title":"Accept one’s strengths and limitations","desc":"Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.", "image":8},
        {"title":"Advocate for one’s rights and positions","desc":"", "image" : 17},
        {"title":"Develop one’s creativity","desc":"", "image" : 18},
        {"title":"Right to fail","desc":"", "image" : 19}
    ];
      $scope.communication = [
        {"title":"Express one’s ideas and feelings through speaking and listening","desc":"Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.", "image":9},
        {"title":"Reading and writing skills for learning, fun and communication","desc":"Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.", "image":10},
        {"title":"Knowledge of information sources (e.g., use of library, authorities, internet communications, and other resources)","desc":"Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.", "image":11},
        {"title":"Study and learning skills for gaining and applying new information","desc":"Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.", "image":12},
        {"title":"Cyberspace safety (e.g., revealing personal information, meeting contacts in person, use of credit cards online)","desc":""}
      ];
  $scope.parenting = [
    {"title":"Health of mother for the prenatal fetus (e.g., balanced diet, physical activity, adequate sleep, no smoking)","desc":"Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.", "image":13},
    {"title":"Recognizing when to see a physician for prenatal and postnatal care","desc":"Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.", "image":14},
    {"title":"Young adult male supports girlfriend/spouse in promoting the health of the mother and baby","desc":"Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.", "image":15},
    {"title":"Young adult male and female assuming responsibility for rearing the children (e.g., care and discipline, behavioral parenting practices, providing home setting, finances)","desc":"Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.", "image":16}
    ];

})

.controller('HealthSafetyCtrl', function($scope, $ionicSlideBoxDelegate) {

    $scope.currentSlide = 0;

    $scope.slideChanged = function(currSlide) {
        $scope.currentSlide = currSlide;
        $scope.totalSlides = $ionicSlideBoxDelegate.slidesCount()
        console.log('Active Slide=' + $scope.currentSlide);
        console.log('Total Slides=' + $scope.totalSlides);
    }

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
    console.log("There was an error logging in", error);
  });
  $scope.myActiveSlide = 0;
})
