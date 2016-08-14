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
