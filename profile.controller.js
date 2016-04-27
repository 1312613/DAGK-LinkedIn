(function() {
'use strict';

    angular
        .module('app.profile')
        .controller('ProfileController', ProfileController);

    ProfileController.$inject = ['$http'];
    function ProfileController($http) {
        var vm = this;
        vm.account = {};
        vm.Background = {};

        activate();

        ////////////////

        function activate() { 
            $http.get('data/Profile.json')
            .then(function (response) {
                vm.account = response.data.account;
            });
            $http.get('data/Profile.json')
            .then(function (response) {
                vm.Background = response.data.Background;
            })
        }
    }
})();