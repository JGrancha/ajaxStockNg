'use strict';

/* Controllers */

var moduloCliente = angular.module('myApp.clienteControllers', []);



moduloCliente.controller('controlClientesList', function($scope, $routeParams, serverService) {

    $scope.numPagina = $routeParams.numpage;
    $scope.nrpp = $routeParams.numrpp;
    $scope.botoneraNrpp = serverService.getNrppBar('cliente', $scope.numPagina, $scope.nrpp);

    $scope.pages = serverService.getPages('cliente', $scope.nrpp, null, null, null, null, null, null).then(function(datos5) {
        $scope.pages = datos5['data'];
        if (parseInt($scope.numPagina) > parseInt($scope.pages))
            $scope.numPagina = $scope.pages;
            //$location.path( "#/clientes/" +$scope.pages + "/" + $scope.pages);
    });

    $scope.$watch('pages', function() {
        $scope.$broadcast('myApp.construirBotoneraPaginas');
    }, true)

    $scope.$on('myApp.construirBotoneraPaginas', function() {

        $scope.botoneraPaginas = serverService.getPaginationBar('cliente', $scope.numPagina, $scope.pages, 2, $scope.nrpp);
    })

    $scope.prettyFieldNames = serverService.getPrettyFieldNames('cliente').then(function(datos4) {
        datos4['data'].push('acciones');
        $scope.prettyFieldNames = datos4['data'];
    });

    $scope.clientes = serverService.getPage('cliente', $scope.numPagina, null, null, $scope.nrpp, null, null, null, null, null, null).then(function(datos3) {
        $scope.clientes = datos3['list'];

    });

    $scope.fieldNames = serverService.getFieldNames('cliente').then(function(datos6) {
        $scope.fieldNames = datos6['data'];
        $scope.selectedFilterFieldName = null;
    });


    $scope.$watch('numPagina', function() {
        $scope.$broadcast('myApp.construirPagina');
    }, true)

    $scope.$on('myApp.construirPagina', function() {

        $scope.clientes = serverService.getPage('cliente', $scope.numPagina, null, null, $scope.nrpp, null, null, null, null, null, null).then(function(datos3) {
            $scope.clientes = datos3['list'];

        });

    })


});

moduloCliente.controller('controlClienteView', function($scope, $routeParams, serverService) {
    $scope.back = function() {
        window.history.back();
    };
    $scope.idCliente = $routeParams.id;
    $scope.cli = serverService.get('cliente', $scope.idCliente).then(function(datos4) {

        $scope.cli = datos4;
    });
});


moduloCliente.controller('MyCtrl2', function($scope) {
    $scope.flores = [{nombre: 'margarita'}, {nombre: 'jazmin'}];
});