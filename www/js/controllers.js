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
  console.log(s);
})
.controller('ScenarioDetailCtrl', function($scope, $stateParams, Scenarios) {
  $scope.scenario = Scenarios.get($stateParams.scenarioId);
})


.controller('ResourcesCtrl', function($scope, auth, $state, Resources) {
$scope.resources = Resources.all();
var r = $scope.resources;
console.log(r);
})

.controller('ResourceDetailCtrl', function($scope, $stateParams, Resources) {
  $scope.resource = Resources.get($stateParams.resourceId);
  $scope.activeButtonBar = 0;
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

.directive('tabState', function($state) {

    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        scope.$watch(function() {
          return $state.current.name;
        }, function(stateName) {
           if(stateName === attrs.uiSref) {
             element.addClass('active')
           }
          else {
            element.removeClass('active')
          }
        });
      }
    };
  });
