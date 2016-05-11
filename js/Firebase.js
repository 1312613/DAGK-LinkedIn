(function () {
    'use strict';

    angular.module('app', ['firebase']);
})();


(function () {
    'use strict';

    angular
        .module('app')
        .controller('ctrl', ctrl);

    ctrl.$inject = ['$scope', '$firebaseObject', '$firebaseArray'];

    function ctrl($scope, Object) {
        var vm = this;

        window.sc = $scope;

        var Firebaseref = new Firebase("https://shining-inferno-4286.firebaseio.com/");

        var obj = Object(Firebaseref);

        obj.$bindTo($scope, 'data').then(function () {
            
        })
    }
})();