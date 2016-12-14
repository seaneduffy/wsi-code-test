'use strict';

module.exports = function(app) {

app.component('sideNav', {
	templateUrl: '/templates/sideNav.html',
	controller: [function(){
		this.categories = [
			{
				name: 'Categories',
				links: [
					{
						name: 'Bedding',
						display: 'Bedding',
						href: '#'
					},
					{
						name: 'Bath',
						display: 'Bath',
						href: '#'
					},
					{
						name: 'Rooms',
						display: 'Rooms',
						href: '#'
					},
					{
						name: 'Kitchen',
						display: 'Kitchen',
						href: '#'
					},
					{
						name: 'Living',
						display: 'Living',
						href: '#'
					},
					{
						name: 'Cars',
						display: 'Cars',
						href: '#'
					},
					{
						name: 'Birds',
						display: 'Birds',
						href: '#'
					},
					{
						name: 'Planes',
						display: 'Planes',
						href: '#'
					}
				]
			},
			{
				name: 'Pages',
				links: [
					{
						name: 'Bedding',
						display: 'Bedding',
						href: '#'
					},
					{
						name: 'Bath',
						display: 'Bath',
						href: '#'
					},
					{
						name: 'Rooms',
						display: 'Rooms',
						href: '#'
					},
					{
						name: 'Kitchen',
						display: 'Kitchen',
						href: '#'
					},
					{
						name: 'Living',
						display: 'Living',
						href: '#'
					},
					{
						name: 'Cars',
						display: 'Cars',
						href: '#'
					},
					{
						name: 'Birds',
						display: 'Birds',
						href: '#'
					},
					{
						name: 'Planes',
						display: 'Planes',
						href: '#'
					}
				]
			}
		]
	}]
})

}