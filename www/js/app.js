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

    // // setup an abstract state for the tabs directive
    // .state('app', {
    //   url: "/app",
    //   abstract: true,
    //   templateUrl: "templates/menu.html",
    //   controller: 'AppCtrl',
    //   data: {
    //     // This tells Auth0 that this state requires the user to be logged in.
    //     // If the user isn't logged in and he tries to access this state
    //     // he'll be redirected to the login page
    //     requiresLogin: true
    //   }
    // })

    // Your app states
    .state('dash', {
      url: '/dashboard',
templateUrl: "templates/dashboard.html",
controller: 'DashCtrl'
    })

    //Resources state
    .state('resources', {
      url: '/resources',
templateUrl: "templates/resources.html",
controller: 'ResourcesCtrl'
    })

      .state('housing-tab', {
      url: "/housing",
      abstract: true,
      templateUrl: "templates/resources/housing-tabs.html"
    })

    .state('housing-tab.homeless', {
      url: "/homeless",
      views: {
        'homeless-tab': {
          templateUrl: "templates/resources/housing-homeless.html",
          controller: 'HousingCtrl'
        }
      }
    })

    .state('housing-tab.runaway', {
      url: "/runaway",
      views: {
        'runaway-tab': {
          templateUrl: "templates/resources/housing-runaway.html",
          controller: 'HousingCtrl'
        }
      }
    })

    .state('housing-tab.other', {
      url: "/other",
      views: {
        'other-tab': {
          templateUrl: "templates/resources/housing-other.html",
          controller: 'HousingCtrl'
        }
      }
    })

.state('personal_effectiveness-tab', {
url: "/personal_effectiveness",
abstract: true,
templateUrl: "templates/resources/personal_effectiveness-tabs.html"
})

.state('personal_effectiveness-tab.interpersonal_relationships', {
url: "/interpersonal_relationships",
views: {
  'interpersonal_relationships-tab': {
    templateUrl: "templates/resources/personal_effectiveness-interpersonal_relationships.html",
    controller: 'PersonalEffectivenessCtrl'
  }
}
})

.state('personal_effectiveness-tab.self_determination', {
url: "/self_determination",
views: {
  'self_determination-tab': {
    templateUrl: "templates/resources/personal_effectiveness-self_determination.html",
    controller: 'Personal_EffectivenessCtrl'
  }
}
})

.state('personal_effectiveness-tab.commmunication', {
url: "/commmunication",
views: {
  'commmunication-tab': {
    templateUrl: "templates/resources/personal_effectiveness-commmunication.html",
    controller: 'Personal_EffectivenessCtrl'
  }
}
})

.state('personal_effectiveness-tab.parenting', {
url: "/parenting",
views: {
  'parenting-tab': {
    templateUrl: "templates/resources/personal_effectiveness-parenting.html",
    controller: 'Personal_EffectivenessCtrl'
  }
}
})




    //Eguru state
    .state('eguru', {
      url: '/eguru',
templateUrl: "templates/eguru.html",
controller: 'EguruCtrl'
    })

    .state('read', {
      url: "/read",
templateUrl: "templates/read.html"
    })

    .state('skills', {
      url: "/skills",
templateUrl: "templates/skills.html"
    })

    .state('scenarios', {
      url: "/scenarios",
templateUrl: "templates/scenarios.html",
controller: "ScenariosCtrl"
    })

    //Resources detail state
    .state('scenario-detail', {
      url: '/scenario/:scenarioId',
templateUrl: 'templates/scenario-detail.html',
controller: 'ScenarioDetailCtrl'
    })

    .state('game', {
      url: "/game",
templateUrl: "templates/game.html"
    })

    .state('inspiration', {
      url: "/inspiration",
templateUrl: "templates/inspiration.html"
    })

    .state('bookmarks', {
      url: "/bookmarks",
templateUrl: "templates/bookmarks.html"
    })

    .state('notes', {
      url: "/notes",
templateUrl: "templates/notes.html"
    })

    .state('friends', {
      url: "/friends",
templateUrl: "templates/friends.html"
    })

    .state('additional_numbers', {
      url: "/additional_numbers",
templateUrl: "templates/additional_numbers.html"
    })

    .state('profile', {
      url: "/profile",
templateUrl: "templates/profile.html",
controller: 'ProfileCtrl'
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
  $urlRouterProvider.otherwise('/dashboard');

})

.run(function(auth) {
  // This hooks al auth events to check everything as soon as the app starts
  auth.hookEvents();
});
