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

.controller('pressController', function($scope, $http) {
 
    $scope.getData = function() {
        $http.get("https://api.scalablepress.com/v2/categories", { params: { "key1": "value1", "key2": "value2" } })
            .success(function(data) {
                $scope.catList = data;
            })
            .error(function(data) {
                alert("ERROR");
            });
    }
})

.controller('garmentController', function($scope, $http) {
 
    $scope.getData = function() {
        $http.get("https://api.scalablepress.com/v2/products/gildan-sweatshirt-crew", { params: { "key1": "value1", "key2": "value2" } })
            .success(function(data) {
                $scope.garmentList = data;
            })
            .error(function(data) {
                alert("ERROR");
            });
    }
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
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
  $scope.name = $stateParams.playlistId;
});
