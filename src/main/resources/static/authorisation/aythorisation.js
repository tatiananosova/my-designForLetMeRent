angular.module('tools').controller('authorisationController', function ($scope, $http, $routeParams, $location) {
    // const contextPath = 'http://localhost:8189/tools/';

    //
    // $scope.registerUser = function () {
    //     $http.put(contextPath + 'НАШ ЭНД ПОИНТ', $scope.new_user)
    //         .then(function successCallback (response) {
    //             $scope.new_user = null;
    //             alert('Вы успешно зарегистрированы');
    //             $location.path('/'); // ТУТ, НАВЕРНОЕ, БЕЗ ПЕРЕХОДОВ. ПЕРЕХОД БУДЕТ НА ТУ СТРАНИЦУ, ОТКУДА БЫЛА ПЕРЕБРОСКА НА РЕГИСТРАЦИЮ
    //         }, function failureCallback (response) {
    //             alert(response.data.messages);
    //         });
    // }
    //

    // $scope.tryToAuth = function () {
    //     $http.post(contextPath + 'НАШ ЭНД ПОИНТ', $scope.user)
    //         .then(function successCallback(response) {
    //             if (response.data.token) {
    //                 $http.defaults.headers.common.Authorization = 'Bearer ' + response.data.token;
    //                 $localStorage.webMarketUser = {username: $scope.user.username, token: response.data.token};
    //
    //                 $scope.user.username = null;
    //                 $scope.user.password = null;
    //             }
    //         }, function errorCallback(response) {
    //         });
    // };
    //
    // $scope.tryToLogout = function () {
    //     $scope.clearUser();
    //     if ($scope.user.username) {
    //         $scope.user.username = null;
    //     }
    //     if ($scope.user.password) {
    //         $scope.user.password = null;
    //     }
    //     $location.path('/');
    // };
    //
    // $scope.clearUser = function () {
    //     delete $localStorage.webMarketUser;
    //     $http.defaults.headers.common.Authorization = '';
    // };


});