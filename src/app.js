var app = angular.module('app', ['ui.router', 'ngMaterial','LocalStorageModule', 'users'])
       .config(function($mdThemingProvider, $mdIconProvider, $stateProvider, $urlRouterProvider, $httpProvider){

              $stateProvider
                .state('home', {
                 url:'/',
                 templateUrl: 'src/home/view/Home.html'

               })
                $stateProvider
                    .state('login', {
                        url:'/login',
                        templateUrl: 'src/login/view/login.html'

                })
                $stateProvider
                    .state('consultant', {
                        url:'/consultant',
                        templateUrl: 'src/consultant/view/consultant.html'

                })

                $urlRouterProvider.otherwise('/');


                $mdIconProvider
                      .defaultIconSet("./assets/svg/avatars.svg", 128)
                      .icon("menu"       , "./assets/svg/menu.svg"        , 24)
                      .icon("share"      , "./assets/svg/share.svg"       , 24)
                      .icon("google_plus", "./assets/svg/google_plus.svg" , 512)
                      .icon("hangouts"   , "./assets/svg/hangouts.svg"    , 512)
                      .icon("twitter"    , "./assets/svg/twitter.svg"     , 512)
                      .icon("phone"      , "./assets/svg/phone.svg"       , 512);

                      $mdThemingProvider.theme('default')
                          .primaryPalette('blue-grey')
                          .accentPalette('red');

                          $httpProvider.interceptors.push('authInterceptorService');

              })

        app.run(['authService', function (authService) {
          authService.fillAuthData();
        }]);
