alert('controllersjs');
angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  //alert('PlayListController2');
  $scope.playlists = [{
    title: 'Featured',
    id: 1
  }, {
    title: 'Bestsellers',
    id: 2
  }, {
    title: 'Current Affairs',
    id: 3
  }, {
    title: 'Sports',
    id: 4
  }, {
    title: 'Music',
    id: 5
  }, {
    title: 'Trending',
    id: 6
  }, {
    title: 'Animals',
    id: 7
  }, {
    title: 'Seasonal',
    id: 8
  }];

  function setName(title) {
  $scope.title = this.title;
  }
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
  alert('PlayListController3,' + $stateParams.playlistId);
  $scope.name = $stateParams.playlistId;
});
