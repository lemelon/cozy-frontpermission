angular.module('Bookmarks').controller('HomeAngCtrl', HomeAngCtrl);

HomeAngCtrl.$inject = ['$scope', '$injector', '$rootScope'];

function HomeAngCtrl($scope, $injector, $rootScope) {

	var vm        = this;
	vm.getContact = getContact;
	var data = {};

  	function getContact() {
    	console.log('_____________Get contact_____________');
        Cozy.getData('ds-api', 'request', 'contact', function(data) {
        	console.log(data);
        });
        console.log('End get contact');
    }
}