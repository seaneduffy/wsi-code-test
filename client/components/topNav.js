'use strict';

module.exports = function(app) {

app.component('topNav', {
	templateUrl: '/templates/topNav.html',
	controller: ['$state', function($state){
		this.state = $state;
	}]
})

}