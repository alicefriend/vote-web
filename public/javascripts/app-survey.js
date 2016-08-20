var surveyApp = angular.module('surveyApp', []);

surveyApp.controller('SurveyController', function($scope){
  $scope.survey = {
    title : "Who would you expect be the next president of America?",
    items : [
    {
      label : "Hillary Clinto",
      count : "30000000"
    },
    {
      label : "Donald Trump",
      count : "30000001"
    }]
  };
});

surveyApp.controller('PostController', function($scope){
    
    $scope.postSurvey = {
      title : "",
      items : []
    };

    $scope.postEnter = function(keyEvent, tempItem) {
      if (keyEvent.which == 13) {
        $scope.addItem(tempItem);
      }
    }

    $scope.addItem = function(tempItem) {
      $scope.postSurvey.items.push(tempItem);
      $scope.tempItem = "";
    }

    $scope.removeItem = function(index) {
      $scope.postSurvey.items.splice(index, 1);
    }

});
