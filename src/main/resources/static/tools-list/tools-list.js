angular.module('tools').controller('toolsListController', function ($scope, $http, $location, $localStorage) {
    const contextPath = 'http://localhost:8189/tools/';
    // let currentPageIndex = 1;
    //
    // $scope.loadTools = function (pageIndex = 1) { // ЗАГОТОВОЧКА ПО ЗАГРУЗКЕ СТРАНИЦЫ СО СПИСКОМ
    //     currentPageIndex = pageIndex;
    //     $http({
    //         url: contextPath + 'НАШ ЭНД ПОИНТ',
    //         method: 'GET',
    //         params: {
    //             p: pageIndex,
    //             title: $scope.filter ? $scope.filter.title : null,
    //             owner: $scope.filter ? $scope.filter.owner : null,
    //             max_price: $scope.filter ? $scope.filter.max_price : null
    //         }
    //     }).then(function (response) {
    //         $scope.productsPage = response.data;
    //         $scope.paginationArray = $scope.generatePagesIndexes(1, $scope.productsPage.totalPages);
    //     });
    // };
    //

    // $scope.generatePagesIndexes = function (startPage, endPage) {
    //     let arr = [];
    //     for (let i = startPage; i < endPage + 1; i++) {
    //         arr.push(i);
    //     }
    //     return arr;
    // }
    //

    $scope.navToToolInfoPage = function (toolId) {
        $location.path('/tool-info/' + toolId);
    }


    $scope.tryToRent = function (toolId) {
    //    ТУТ ЕСЛИ НЕ АВТОРИЗОВАН, ТО АЛЕРТ, ЧТО НАДО АВТОРИЗОВАТЬСЯ СНАЧАЛА, И ПЕРЕБРОСКА НА
    // СТРАНИЦУ АВТОРИЗАЦИИ
    // $location.path('/authorisation');
    // И после авторизации уже отправка запроса о желании арендовать.
    $location.path('/rent-request-page/' + toolId);
    }
    //
    // $scope.loadTools();
});