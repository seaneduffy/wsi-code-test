'use strict';

module.exports = function(app) {

app.component('navBtn', {
	bindings: {
		href: '<',
		name: '<',
		tab: '<',
		active: '<'
	},
	templateUrl: '/templates/navBtn.html',
	transclude: true,
	controller: function(){
	}
})

}