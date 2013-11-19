var app = angular.module("animTodo", ["ngAnimate"]);

app.controller("TodoCtrl", function($scope) {
    $scope.items = [{text: "This is a demo todo.", complete: true}];
    $scope.newTodo = "";

    $scope.addTodo = function() {
        $scope.items.push({text: $scope.newTodo, complete: false});
        $scope.newTodo = "";
    };

    $scope.removeTodo = function(index) {
        $scope.items.splice(index, 1);
    };

    $scope.clearAll = function() {
        $scope.items = [];
    };
});

app.controller("sampleCtrl", function($scope) {
    $scope.sampleVisible = false;

    $scope.show = function() {
        $scope.sampleVisible = !$scope.sampleVisible;
    }

});