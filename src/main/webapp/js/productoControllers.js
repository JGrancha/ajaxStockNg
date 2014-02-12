'use strict';

/* Controllers */

var moduloProducto = angular.module('myApp.productoControllers', []);



moduloProducto.controller('controlProductosList', function($scope, $routeParams, serverService) {

    $scope.numPagina = $routeParams.numpage;
    $scope.nrpp = $routeParams.numrpp;
    $scope.botoneraNrpp = serverService.getNrppBar('productos', $scope.numPagina, $scope.nrpp);

    $scope.pages = serverService.getPages('producto', $scope.nrpp, null, null, null, null, null, null).then(function(datos5) {
        $scope.pages = datos5['data'];
        if (parseInt($scope.numPagina) > parseInt($scope.pages))
            $scope.numPagina = $scope.pages;
            //$location.path( "#/clientes/" +$scope.pages + "/" + $scope.pages);
    });

    $scope.$watch('pages', function() {
        $scope.$broadcast('myApp.construirBotoneraPaginas');
    }, true)

    $scope.$on('myApp.construirBotoneraPaginas', function() {
        $scope.botoneraPaginas = serverService.getPaginationBar('productos', $scope.numPagina, $scope.pages, 2, $scope.nrpp);
    })

    $scope.prettyFieldNames = serverService.getPrettyFieldNames('producto').then(function(datos4) {
        datos4['data'].push('acciones');
        $scope.prettyFieldNames = datos4['data'];
    });

    $scope.productos = serverService.getPage('producto', $scope.numPagina, null, null, $scope.nrpp, null, null, null, null, null, null).then(function(datos3) {
        $scope.productos = datos3['list'];

    });



    $scope.fieldNames = serverService.getFieldNames('producto').then(function(datos6) {
        $scope.fieldNames = datos6['data'];
        $scope.selectedFilterFieldName = null;
    });


    $scope.$watch('numPagina', function() {
        $scope.$broadcast('myApp.construirPagina');
    }, true)

    $scope.$on('myApp.construirPagina', function() {

        $scope.clientes = serverService.getPage('producto', $scope.numPagina, null, null, $scope.nrpp, null, null, null, null, null, null).then(function(datos3) {
            $scope.clientes = datos3['list'];

        });

    })


});



