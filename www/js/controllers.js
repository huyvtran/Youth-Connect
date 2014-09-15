angular.module('starter.controllers', [])

.controller('NavCtrl', function($scope, auth, $state,$ionicSideMenuDelegate) {
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

.controller('HousingCtrl', function($scope) {
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
