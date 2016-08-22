var mainApp = angular.module('mainApp', []);

mainApp
.controller('MainController', MainController)
.controller('PostController', PostController)
.controller('VoteController', VoteController)
.directive("boxVotes", function() {
	return {
		restrict : "E",
		templateUrl : "box-votes.html",
		controller : "VoteController"
	};
})
.directive("boxPost", function() {
	return {
		restrict : "E",
		templateUrl : "box-post.html",
		controller : "PostController"
	};
});

function MainController($scope) {

}

function PostController($scope) {
	$scope.postSurvey = { 'title' : "", 'items' : [] };

	$scope.postEnter = function(keyEvent, tempItem) {
		var enterKeycode = 13;
		if (keyEvent.which == enterKeycode) {
			$scope.addItem(tempItem);
		}
	};

	$scope.addItem = function(tempItem) {
		$scope.postSurvey.items.push(tempItem);
		console.log($scope.postSurvey.items);
		$scope.tempItem = "";
	};

	$scope.removeItem = function(index) {
		$scope.postSurvey.items.splice(index, 1);
	};
}

function VoteController($scope, $http){
	/*
	$scope.init = function() {
		$http.get('/voteslist', function(response) {
			//success
		}, function(response) {
			//failed
		});
		$scopes.surveyes = body;
	};
	*/

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
}