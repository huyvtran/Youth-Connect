// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services','ngCookies', 'auth0'])

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

    .state('register', {
      url: "/register",
      templateUrl: "templates/register.html",
      controller: "RegisterCtrl"
    })

    .state('splash', {
      url: "/splash",
      templateUrl: "templates/splash.html"
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

    .state('questions', {
      url: '/questions',
templateUrl: "templates/questions.html",
controller: 'QuestionsCtrl'
    })

//Resources detail state
.state('question-detail', {
  url: '/question/:questionId',
templateUrl: 'templates/question-detail.html',
controller: 'QuestionsDetailCtrl'
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

.state('personal-tab', {
url: "/personal",
abstract: true,
templateUrl: "templates/resources/personal-tabs.html"
})

.state('personal-tab.interpersonal', {
url: "/interpersonal",
views: {
  'interpersonal-tab': {
    templateUrl: "templates/resources/personal-interpersonal.html",
    controller: 'PersonalEffectivenessCtrl'
  }
}
})

.state('personal-tab.self', {
url: "/self",
views: {
  'self-tab': {
    templateUrl: "templates/resources/personal-self.html",
    controller: 'PersonalEffectivenessCtrl'
  }
}
})

.state('personal-tab.communication', {
url: "/communication",
views: {
  'communication-tab': {
    templateUrl: "templates/resources/personal-communication.html",
    controller: 'PersonalEffectivenessCtrl'
  }
}
})

.state('personal-tab.parenting', {
url: "/parenting",
views: {
  'parenting-tab': {
    templateUrl: "templates/resources/personal-parenting.html",
    controller: 'PersonalEffectivenessCtrl'
  }
}
})

.state('health-tab', {
url: "/health",
abstract: true,
templateUrl: "templates/resources/health-tabs.html"
})

.state('health-tab.emotional', {
url: "/emotional",
views: {
  'emotional-tab': {
    templateUrl: "templates/resources/health-emotional.html",
    controller: 'HealthCtrl'
  }
}
})
.state('health-tab.physical', {
url: "/physical",
views: {
  'physical-tab': {
    templateUrl: "templates/resources/health-physical.html",
    controller: 'HealthCtrl'
  }
}
})

.state('educational-tab', {
url: "/educational",
abstract: true,
templateUrl: "templates/resources/educational-tabs.html"
})

.state('educational-tab.degrees', {
url: "/degrees",
views: {
  'degrees-tab': {
    templateUrl: "templates/resources/educational-degrees.html",
    controller: 'EducationalCtrl'
  }
}
})

.state('educational-tab.certifications', {
url: "/certifications",
views: {
  'certifications-tab': {
    templateUrl: "templates/resources/educational-certifications.html",
    controller: 'EducationalCtrl'
  }
}
})

.state('educational-tab.other', {
url: "/other",
views: {
  'other-tab': {
    templateUrl: "templates/resources/educational-other.html",
    controller: 'EducationalCtrl'
  }
}
})

.state('employment-tab', {
url: "/employment",
abstract: true,
templateUrl: "templates/resources/employment-tabs.html"
})

.state('employment-tab.competitive', {
url: "/competitive",
views: {
  'competitive-tab': {
    templateUrl: "templates/resources/employment-competitive.html",
    controller: 'EmploymentCtrl'
  }
}
})

.state('employment-tab.work', {
url: "/work",
views: {
  'work-tab': {
    templateUrl: "templates/resources/employment-work.html",
    controller: 'EmploymentCtrl'
  }
}
})

.state('employment-tab.supported', {
url: "/supported",
views: {
  'supported-tab': {
    templateUrl: "templates/resources/employment-supported.html",
    controller: 'EmploymentCtrl'
  }
}
})

.state('employment-tab.transitional', {
url: "/transitional",
views: {
  'transitional-tab': {
    templateUrl: "templates/resources/employment-transitional.html",
    controller: 'EmploymentCtrl'
  }
}
})

.state('community-tab', {
url: "/community",
abstract: true,
templateUrl: "templates/resources/community-tabs.html"
})


.state('community-tab.daily', {
url: "/daily",
views: {
  'daily-tab': {
    templateUrl: "templates/resources/community-daily.html",
    controller: 'CommunityCtrl'
  }
}
})

.state('community-tab.participation', {
url: "/participation",
views: {
  'participation-tab': {
    templateUrl: "templates/resources/community-participation.html",
    controller: 'CommunityCtrl'
  }
}
})

.state('leisure-tab', {
url: "/leisure",
abstract: true,
templateUrl: "templates/resources/leisure-tabs.html"
})

.state('leisure-tab.hobbies', {
url: "/hobbies",
views: {
  'hobbies-tab': {
    templateUrl: "templates/resources/leisure-hobbies.html",
    controller: 'LeisureCtrl'
  }
}
})

.state('leisure-tab.volunteering', {
url: "/volunteering",
views: {
  'volunteering-tab': {
    templateUrl: "templates/resources/leisure-volunteering.html",
    controller: 'LeisureCtrl'
  }
}
})

.state('leisure-tab.places', {
url: "/places",
views: {
  'places-tab': {
    templateUrl: "templates/resources/leisure-places.html",
    controller: 'LeisureCtrl'
  }
}
})

.state('leisure-tab.healthy', {
url: "/healthy",
views: {
  'healthy-tab': {
    templateUrl: "templates/resources/leisure-healthy.html",
    controller: 'LeisureCtrl'
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
templateUrl: "templates/additional_numbers.html",
controller: "AdditionalNumbersCtrl"
    })

    .state('profile', {
      url: "/profile",
templateUrl: "templates/profile.html",
controller: 'ProfileCtrl'
    });



  // Configure Auth0
  authProvider.init({
    domain: AUTH0_DOMAIN,
    clientID: AUTH0_CLIENT_ID,
    callbackURL: location.href,
    loginState: 'splash'
  });

  $httpProvider.interceptors.push('authInterceptor');
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/splash');

})
.run(function(auth) {
  auth.hookEvents();
});
