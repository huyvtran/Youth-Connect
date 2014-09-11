// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'auth0'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, authProvider, $httpProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // This is the Login state
    .state('login', {
      url: "/login",
      templateUrl: "templates/login.html",
      controller: "LoginCtrl"
    })

    // setup an abstract state for the tabs directive
    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl',
      data: {
        // This tells Auth0 that this state requires the user to be logged in.
        // If the user isn't logged in and he tries to access this state
        // he'll be redirected to the login page
        requiresLogin: true
      }
    })

    // Your app states
    .state('app.dash', {
      url: '/dashboard',
      views: {
        'menuContent' :{
          templateUrl: "templates/dashboard.html",
          controller: 'DashCtrl'
        }
      }
    })

    //Resources state
    .state('app.resources', {
      url: '/resources',
      views: {
        'menuContent' :{
          templateUrl: "templates/resources.html",
          controller: 'ResourcesCtrl'
        }
      }
    })

    //Resources detail state
    .state('app.resource-detail', {
      url: '/resource/:resourceId',
      views: {
        'menuContent': {
          templateUrl: 'templates/resource-detail.html',
          controller: 'ResourceDetailCtrl'
        }
      }
    })

    //Resources detail state
    .state('app.resource-category', {
      url: '/resource/:resourceId/:categoryId',
      views: {
        'menuContent': {
          templateUrl: 'templates/category.html',
          controller: 'CategoryCtrl'
        }
      }
    })


    //Eguru state
    .state('app.eguru', {
      url: '/eguru',
      views: {
        'menuContent' :{
          templateUrl: "templates/eguru.html",
          controller: 'EguruCtrl'
        }
      }
    })

    .state('app.read', {
      url: "/read",
      views: {
        'menuContent' :{
          templateUrl: "templates/read.html"
        }
      }
    })

    .state('app.skills', {
      url: "/skills",
      views: {
        'menuContent' :{
          templateUrl: "templates/skills.html"
        }
      }
    })

    .state('app.scenarios', {
      url: "/scenarios",
      views: {
        'menuContent' :{
          templateUrl: "templates/scenarios.html",
          controller: "ScenariosCtrl"
        }
      }
    })

    //Resources detail state
    .state('app.scenario-detail', {
      url: '/scenario/:scenarioId',
      views: {
        'menuContent': {
          templateUrl: 'templates/scenario-detail.html',
          controller: 'ScenarioDetailCtrl'
        }
      }
    })

    .state('app.game', {
      url: "/game",
      views: {
        'menuContent' :{
          templateUrl: "templates/game.html"
        }
      }
    })

    .state('app.inspiration', {
      url: "/inspiration",
      views: {
        'menuContent' :{
          templateUrl: "templates/inspiration.html"
        }
      }
    })

    .state('app.bookmarks', {
      url: "/bookmarks",
      views: {
        'menuContent' :{
          templateUrl: "templates/bookmarks.html"
        }
      }
    })

    .state('app.notes', {
      url: "/notes",
      views: {
        'menuContent' :{
          templateUrl: "templates/notes.html"
        }
      }
    })

    .state('app.friends', {
      url: "/friends",
      views: {
        'menuContent' :{
          templateUrl: "templates/friends.html"
        }
      }
    })

    .state('app.profile', {
      url: "/profile",
      views: {
        'menuContent' :{
          templateUrl: "templates/profile.html",
          controller: 'ProfileCtrl'
        }
      }
    })

    .state('app.playlists', {
      url: "/playlists",
      views: {
        'menuContent' :{
          templateUrl: "templates/playlists.html",
          controller: 'PlaylistsCtrl'
        }
      }
    })

    .state('app.single', {
      url: "/playlists/:playlistId",
      views: {
        'menuContent' :{
          templateUrl: "templates/playlist.html",
          controller: 'PlaylistCtrl'
        }
      }
    });

  // Configure Auth0
  authProvider.init({
   domain: 'youthconnect.auth0.com',
   clientID: 'GWdPLDnNOoJAcFTMtjlpLb57y4ui5hNL',
   callbackURL: location.href,
   // This is the name of the state to redirect to if the user tries to enter
   // to a restricted page
   loginState: 'login'
  });



  $httpProvider.interceptors.push('authInterceptor');
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

})

.run(function(auth) {
  // This hooks al auth events to check everything as soon as the app starts
  auth.hookEvents();
});
