angular.module('starter.controllers', [])

.controller('LocationCtrl', function ($scope, $location) {
  $scope.go = function (target) {
    $location.path(target);
  };
})

.controller('RegisterCtrl', function ($scope, $location) {
  $scope.goToSplash= function() {
    $location.path('/splash');
  }
})

.controller('AdditionalNumbersCtrl', function($scope, $stateParams, $location, $ionicScrollDelegate, $log ) {
  $scope.providers  = [   {
    "name":"Abortion - Post-Abortion Project Rachel",
    "phone":"1-800-593-2273"
  },
  {
    "name":"Abortion Federation Hotline (National)",
    "phone":"1-800-772-9100"
  },
  {
    "name":"Adoption - Independent Adoption Center",
    "phone":"1-800-877-6736"
  },
  {
    "name":"Adoption Center (National)",
    "phone":"1-877-648-4400"
  },
  {
    "name":"Adoptions- Rosie Adoptions -(if you are pregnant)",
    "phone":"1-800-841-0804"
  },
  {
    "name":"AIDA Info - Centers for Disease Control",
    "phone":"1-800-342-2437"
  },
  {
    "name":"AIDS National Hotline",
    "phone":"1-800-342-2437"
  },
  {
    "name":"AIDS Treatment Information Services",
    "phone":"1-800-448-0440"
  },
  {
    "name":"Al-Anon Family Group Headquarters",
    "phone":"1-800-356-9996"
  },
  {
    "name":"Al-Anon/Alateen Hotline",
    "phone":"1-800-344-2666"
  },
  {
    "name":"Alcohol/Drug Abuse Hotline (National)",
    "phone":"1-800-662-4357"
  },
  {
    "name":"Be Sober Hotline",
    "phone":"1-800-237-6237"
  },
  {
    "name":"Birthright",
    "phone":"1-800-550-4900"
  },
  {
    "name":"Boys Town National Hotline",
    "phone":"1-800-448-3000"
  },
  {
    "name":"Care Net",
    "phone":"1-800-395-4357"
  },
  {
    "name":"Center for the Prevention of School Violence",
    "phone":"1-800-299-6504"
  },
  {
    "name":"CHADD-Children & Adults with Attention Deficit/Hyperactivity Disorder",
    "phone":"1-800-233-4050"
  },
  {
    "name":"Child Abuse Hotline (National)",
    "phone":"1-800-422-4453"
  },
  {
    "name":"Cocaine Help Line",
    "phone":"1-800-262-2463"
  },
  {
    "name":"Cocaine Hotline (24 Hour)",
    "phone":"1-800-992-9239"
  },
  {
    "name":"Covenant House Nineline",
    "phone":"1-800-999-9999"
  },
  {
    "name":"Crisis Hotline (National)",
    "phone":"1-800-448-4663"
  },
  {
    "name":"Crisis Intervention & Counseling Nineline",
    "phone":"1-800-999-9999"
  },
  {
    "name":"Domestic Violence (National Resource Center on)",
    "phone":"1-800-537-2238"
  },
  {
    "name":"Domestic Violence Hotline (KC Metro)",
    "phone":"816-468-5463"
  },
  {
    "name":"Domestic Violence Hotline (National)",
    "phone":"1-800-799-7233"
  },
  {
    "name":"Domestic Violence Hotline #2",
    "phone":"1-800-548-2722"
  },
  {
    "name":"Domestic Violence Hotline/Child Abuse",
    "phone":"1-800 422 4453"
  },
  {
    "name":"Drug Abuse & Alcoholism (National Institute on)",
    "phone":"1-888-644-6432"
  },
  {
    "name":"Drug Abuse Hotline (National)",
    "phone":"1-800-662-4357"
  },
  {
    "name":"Drug Help National Helplines",
    "phone":"1-800-378-4435"
  },
  {
    "name":"Eating Disorders Awareness and Prevention",
    "phone":"1-800-931-2237"
  },
  {
    "name":"Eating Disorders Center",
    "phone":"1-888-236-1188"
  },
  {
    "name":"Ecstasy Addiction",
    "phone":"1-800-468-6933"
  },
  {
    "name":"Emergency Contraception Information",
    "phone":"1-888-668-2528"
  },
  {
    "name":"Family Violence Prevention Center",
    "phone":"1-800-313-1310"
  },
  {
    "name":"Food Addiction",
    "phone":"1-800-872-0088"
  },
  {
    "name":"Gay & Lesbian National Hotline",
    "phone":"1-888-843-4564"
  },
  {
    "name":"Gay & Transgender Hate Crime Hotline",
    "phone":"1-800-616-4283"
  },
  {
    "name":"Gay, Lesbian, Bisexual, and Transgender (GLBT) Youth Support Line",
    "phone":"1-800-850-8078"
  },
  {
    "name":"Headache Foundation",
    "phone":"1-800-843-2256"
  },
  {
    "name":"Healing Woman Foundation (Abuse)",
    "phone":"1-800-477-4111"
  },
  {
    "name":"Help Finding a Therapist",
    "phone":"1-800-843-7274"
  },
  {
    "name":"Herpes Resource Center",
    "phone":"1-800-230-6039"
  },
  {
    "name":"Homeless - Artists Helping the Homeless (transportation to shelter)",
    "phone":"816-668-1007"
  },
  {
    "name":"Homeless - reStart 24 Hour Line",
    "phone":"816-472-5664"
  },
  {
    "name":"Homeless Hotline",
    "phone":"816-474-4599"
  },
  {
    "name":"Homeless/Runaway National Runaway Hotline",
    "phone":"1-800-231-6946"
  },
  {
    "name":"Human Trafficking Resource Center (National)",
    "phone":"1-888-373-7888"
  },
  {
    "name":"Human Trafficking Text \"BeFree\" to",
    "phone":"233733"
  },
  {
    "name":"Incest Awareness Foundation",
    "phone":"1-888-547-3222"
  },
  {
    "name":"Incest Hotline for guys: M.A.L.E.",
    "phone":"1-800-949-6253"
  },
  {
    "name":"Inhalant Prevention Coalition (National)",
    "phone":"1-800-269-4327"
  },
  {
    "name":"Kansas Department for Children and Families Abuse Hotline",
    "phone":"1-800-922-5330"
  },
  {
    "name":"Learning Disabilities - (National Center For)",
    "phone":"1-888-575-7373"
  },
  {
    "name":"LGBT - Kansas City Anti Violence Project for LGBT",
    "phone":"816-561-0550"
  },
  {
    "name":"Lyme Disease Hotline",
    "phone":"1-800-886-5963"
  },
  {
    "name":"Marijuana Anonymous",
    "phone":"1-800-766-6779"
  },
  {
    "name":"Mental Health - Compassionate Ear Warm Line",
    "phone":"913-281-2221"
  },
  {
    "name":"Mental Health - Rediscover 24 Hour Crisis Line",
    "phone":"816-966-0900"
  },
  {
    "name":"Mental Health - Wyandot Center Crisis Hotline",
    "phone":"913-788-4200"
  },
  {
    "name":"Mental Health Crisis Hotline (Johnson County)",
    "phone":"913-826-4200 (daytime hours)"
  },
  {
    "name":"Mental Health InfoSource",
    "phone":"1-800-447-4474"
  },
  {
    "name":"Missing & Exploited Children Hotline (National)",
    "phone":"1-800-843-5678"
  },
  {
    "name":"Missouri Children’s Division Child Abuse Hotline",
    "phone":"1-800-392-3738"
  },
  {
    "name":"MOCSA Sexual Abuse Hotline (KS)",
    "phone":"913-642-0233"
  },
  {
    "name":"MOCSA Sexual Abuse Hotline (MO)",
    "phone":"816-531-0233"
  },
  {
    "name":"Mothers Against Drunk Drivers",
    "phone":"1-800-438-6233"
  },
  {
    "name":"National Association for Children of Alcoholics",
    "phone":"1-888-554-2627"
  },
  {
    "name":"National Institute of Mental Health (NIMH)",
    "phone":"1-888-269-4389"
  },
  {
    "name":"National Mental Health Association",
    "phone":"1-800-969-6642"
  },
  {
    "name":"National Office of Post Abortion Trauma",
    "phone":"1-800-593-2273"
  },
  {
    "name":"National Runaway Safeline (National)",
    "phone":"1-800-786-2929"
  },
  {
    "name":"National SafePlace TXT 4 HELP (National)",
    "phone":"Text SAFE and your current location (address/city/state) to 69866"
  },
  {
    "name":"National Victim Center",
    "phone":"1-800-394-2255"
  },
  {
    "name":"Nurse Advice Line (Children's Mercy)",
    "phone":"816-234-3188"
  },
  {
    "name":"Nurseline (Saint Luke's)",
    "phone":"816-932-6220"
  },
  {
    "name":"Panic Disorder Information Hotline",
    "phone":"1-800-647-2642"
  },
  {
    "name":"Parent Helpline (National)",
    "phone":"1-855-427-2736"
  },
  {
    "name":"People Against Rape",
    "phone":"1-800-877-7252"
  },
  {
    "name":"Pet Loss Support Hotline - Grief Counseling Hotline",
    "phone":"1-888-478-7574"
  },
  {
    "name":"Planned Parenthood, Inc.",
    "phone":"1-800-230-7526"
  },
  {
    "name":"PMS Access",
    "phone":"1-800-222-4767"
  },
  {
    "name":"Pregnancy Hotline",
    "phone":"1-800-467-8466"
  },
  {
    "name":"Pregnancy Resource Option Line",
    "phone":"1-800-712-4357"
  },
  {
    "name":"Pregnancy Resource Option LineText: HELPLINE to ",
    "phone":"313131"
  },
  {
    "name":"Pregnant & Young Hotline (Birthright)",
    "phone":"1-800 550-4900"
  },
  {
    "name":"Rape, Abuse, Incest, National Network (RAINN)",
    "phone":"1-800-656-4673"
  },
  {
    "name":"reStart 24 Hour Youth Hotline ",
    "phone":"816-309-9048"
  },
  {
    "name":"Runaway and Homeless Youth (ages 12-21) - KidsTLC SOS 24 Hour Hotline for ",
    "phone":"913-324-3619"
  },
  {
    "name":"Runaway Hotline",
    "phone":"1-800-231-6946"
  },
  {
    "name":"Runaway Hotline (National)",
    "phone":"1-800-621-4000"
  },
  {
    "name":"SAFE (Self Abuse Finally Ends) Alternatives Program",
    "phone":"www.selfinjury.com"
  },
  {
    "name":"Safe Choice Hotline (STDs & Pregnancy)",
    "phone":"1-800-878-2347"
  },
  {
    "name":"Self-Injury Hotline",
    "phone":"1-800-366-8288"
  },
  {
    "name":"Sexual Assault Hotline",
    "phone":"1-800-656-4673"
  },
  {
    "name":"Society's League Against Molestation",
    "phone":"1-800-491-WATCH"
  },
  {
    "name":"STD Hotline (National)",
    "phone":"1-800-227-8922"
  },
  {
    "name":"Stop It Now! (Sexual Abuse)",
    "phone":"1-888-773-8368"
  },
  {
    "name":"Suicide & Crisis Hotline",
    "phone":"1-800-999-9999"
  },
  {
    "name":"Suicide Hotline (National Adolescent)",
    "phone":"1-800-621-4000"
  },
  {
    "name":"Suicide Hotline (National)",
    "phone":"1-800-784-2433"
  },
  {
    "name":"Suicide Prevention - The Trevor HelpLine - (Gay and lesbian youth suicide prevention).",
    "phone":"1-800-850-8078"
  },
  {
    "name":"Suicide Prevention Lifeline (National)",
    "phone":"1-800-273-8255"
  },
  {
    "name":"Synergy Services 24 Hour Youth Crisis Hotline",
    "phone":"816-741-8700"
  },
  {
    "name":"Teen Helpline",
    "phone":"1-800-400-0900"
  },
  {
    "name":"TeenLine",
    "phone":"1-800-522-8336"
  },
  {
    "name":"United Way 211 (info/refferal)",
    "phone":"211"
  },
  {
    "name":"Voices In Action (Incest & Child Abuse Treatment)",
    "phone":"1-800-786-4238"
  },
  {
    "name":"WAVE (Working Against Violence Everywhere)",
    "phone":"1-888-960-9600"
  },
  {
    "name":"Youth Crisis Hotline",
    "phone":"1-800-448-4663"
  },
  {
    "name":"Youth Crisis Hotline #2",
    "phone":"1-800-422-0009"
  } ];
  var providers = $scope.providers;
  var log = [];

  $scope.alphabet = iterateAlphabet();

  //Sort user list by first letter of name
  var tmp={};
  for(i=0;i<providers.length;i++){
    var letter=providers[i].name.toUpperCase().charAt(0);
    if( tmp[ letter] ==undefined){
      tmp[ letter]=[]
    }
      tmp[ letter].push( providers[i] );
  }
  $scope.sorted_providers = tmp;

  //Click letter event
  $scope.gotoList = function(id){
    $location.hash(id);
    $ionicScrollDelegate.anchorScroll();
  }

  //Create alphabet object
  function iterateAlphabet()
  {
     var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
     var numbers = new Array();
     for(var i=0; i<str.length; i++)
     {
        var nextChar = str.charAt(i);
        numbers.push(nextChar);
     }
     return numbers;
  }$scope.groups = [];
  for (var i=0; i<10; i++) {
    $scope.groups[i] = {
      name: i,
      items: []
    };
    for (var j=0; j<3; j++) {
      $scope.groups[i].items.push(i + '-' + j);
    }
  }

  /*
   * if given group is the selected group, deselect it
   * else, select the given group
   */
  $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };

})

.controller('NavCtrl', function($scope, auth, $state,$ionicSideMenuDelegate, $ionicSlideBoxDelegate, $location) {
  $scope.auth = auth;

  $scope.go = function (target) {
    $location.path(target);
  };


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
  $scope.$watch('auth.profile.name', function(name) {
    if (!name) {
      return;
    }
    $scope.message.text = 'Welcome ' + auth.profile.name + '!';
  });

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
  $scope.goToInspiration = function() {
    $state.go('inspiration');
  };
  $scope.goToAbout = function() {
    $state.go('about');
  };
  $scope.goToCheat = function() {
    $state.go('cheat');
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

  $scope.goToPreviousQuestion = function(currentQuestion) {
  var questionId = currentQuestion -1;
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
.controller('LoginCtrl', function (auth, $scope, $location) {

  $scope.goToSplash= function() {
    $location.path('/splash');
  }

  $scope.message = {text: ''};

  $scope.user = '';
  $scope.pass = '';

  $scope.goToSplash = function() {
    $location.path('/splash');
  }

  function onLoginSuccess() {
    $scope.message.text = '';
    $location.path('/dashboard');
    $scope.loading = false;
  }

  function onLoginFailed() {
    $scope.message.text = 'invalid credentials';
    $scope.loading = false;
  }

  $scope.reset = function() {
    auth.reset({
      email: 'hello@bye.com',
      password: 'hello',
      connection: 'Username-Password-Authentication'
    });
  }

  $scope.submit = function () {
    $scope.message.text = 'loading...';
    $scope.loading = true;
    auth.signin({
      connection: 'Username-Password-Authentication',
      username: $scope.user,
      password: $scope.pass,
      scope: 'openid name email'
    }, onLoginSuccess, onLoginFailed);

  };

  $scope.doGoogleAuthWithPopup = function () {
    $scope.message.text = 'loading...';
    $scope.loading = true;

    auth.signin({
      popup: true,
      connection: 'google-oauth2',
      scope: 'openid name email'
    }, onLoginSuccess, onLoginFailed);
  };

})
