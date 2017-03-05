app.factory('githubService', function($http, API_GIT) {
	return {
		getAll: function(user) {
			return $http.get(API_GIT + '/users/' + user +'/starred').then(function(response) {
				return response.data;
			});
		}
	};
});