app.controller('KittyController', function($scope, KittyService){
    $scope.Kitty = KittyService.getKitty();
});