var surveyApp = angular.module('surveyApp', []);

surveyApp
.directive("boxPost", function() {
  return {
    restrict : "E",
    templateUrl : "box-post.html",
    controller : "PostController"
  };
})
.directive("boxSurveys", function() {
  return {
    restrict : "E",
    templateUrl : "box-survey.html",
    controller : "SurveyController"
  };
})
.controller('SurveyController', function($scope){
  $scope.surveys = [
    {
      title : "Who would you expect be the next president of America?",
      items : [
      {
        label : "Hillary Clinto",
        count : "30000000"
      },
      {
        label : "Donald Trump",
        count : "30000001"
      }],
      showResult : false,
      selected : 0
    },
    {
      title : "Who would you expect be the next president of America?",
      items : [
      {
        label : "Hillary Clinto",
        count : "30000000"
      },
      {
        label : "Donald Trump",
        count : "30000001"
      },
      {
        label : "Donald Trump",
        count : "30000001"
      },
      {
        label : "Donald Trump",
        count : "30000001"
      }],
      showResult : false,
      selected : 0
    }];
})
.controller('PostController', function($scope){
  $scope.postSurvey = {
    title : "",
    items : []
  };

  $scope.postEnter = function(keyEvent, tempItem) {
    var enterKeycode = 13;
    if (keyEvent.which == enterKeycode) {
      $scope.addItem(tempItem);
    }
  }

  $scope.addItem = function(tempItem) {
    $scope.postSurvey.items.push(tempItem);
    console.log($scope.postSurvey.items);
    $scope.tempItem = "";
  }

  $scope.removeItem = function(index) {
    $scope.postSurvey.items.splice(index, 1);
  }
});
