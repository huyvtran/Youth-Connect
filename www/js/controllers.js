angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, auth, $state,$ionicSideMenuDelegate) {
  $scope.auth = auth;
  $scope.logout = function() {
    auth.signout();
    $state.go('login');
  }
 $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
 $scope.toggleRight = function() {
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
    $state.go('app.resources');
  };
  $scope.goToProfile = function() {
    $state.go('app.profile');
  };
  $scope.goToEguru = function() {
    $state.go('app.eguru');
  };
  $scope.goToAddResource = function() {
    $state.go('app.resources');
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


.controller('ResourcesCtrl', function($scope, auth, $state, Resources) {
$scope.resources = Resources.all();

$scope.clickedResource = {};
$scope.selectResource = function(selected){
  $scope.clickedResource.selected= selected;
}

})

.controller('ResourceDetailCtrl', function($scope, $stateParams, Resources, Subdomains, Categories) {

  $scope.resource = Resources.get($stateParams.resourceId);
  $scope.categories = Categories.all();
  $scope.subdomains = Subdomains.all();
  // $scope.resource = Resources.get($stateParams.resourceId-1);
  // $scope.resources = Resources.all();
  $scope.clickedSub= {}
  $scope.filterCategory = function(selected){
    $scope.clickedSub.selected= selected;
    $scope.currentSub = selected.id;
    $scope.currentSubCategory = selected.category;
  }
  $scope.clickedCategory= {};
  // $scope.goToCategory = function(selected){
  //   $scope.clickedCategory.selected= selected;
  //   $scope.currentCategory = selected.name;
  // }
})



.controller('CategoryCtrl', function($scope, $stateParams,Resources) {
console.log($stateParams);
$scope.category = Resources.get($stateParams.categoryId-1);
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
    $state.go('app.dash');
  }, function(error) {
    // Oops something went wrong during login:
    console.log("There was an error logging in", error);
  });
  $scope.myActiveSlide = 0;
})
