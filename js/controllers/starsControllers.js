app.controller('starsControllers', function($scope, githubService) {
	githubService.getAll('wilfernandesjr').then(function(response) {
		$scope.cards = response;
	});

	$scope.clearOrderFilter = function() {
		$scope.orderFilter = '';
	}
});