'use strict';

function getPaginationBar(page_number, total_pages, neighborhood) {
    page_number = parseInt(page_number);
    total_pages = parseInt(total_pages);
    neighborhood = parseInt(neighborhood);
    var link = '#/cliente/';
    var vector = "<div class=\"pagination\"><ul>";
    if (page_number > 1)
        vector += ("<li><a class=\"pagination_link\" id=\"" + (page_number - 1) + "\" href=\"" + link + (page_number - 1) + "\">prev</a></li>");
    if (page_number > neighborhood + 1)
        vector += ("<li><a class=\"pagination_link\" id=\"1\" href=\"" + link + "1\">1</a></li>");
    if (page_number > neighborhood + 2)
        vector += ("<li>" + "<a href=\"#\">...</a>" + "</li>");
    for (var i = (page_number - neighborhood); i <= (page_number + neighborhood); i++) {
        if (i >= 1 && i <= total_pages) {
            if (page_number == i) {
                vector += ("<li class=\"active\"><a class=\"pagination_link\" id=\"" + i + "\" href=\"" + link + i + "\">" + i + "</a></li>");
            }
            else
                vector += ("<li><a class=\"pagination_link\" id=\"" + i + "\" href=\"" + link + i + "\">" + i + "</a></li>");
        }
    }
    if (page_number < total_pages - (neighborhood + 1))
        vector += ("<li>" + "<a href=\"#\">...</a>" + "</li>");
    if (page_number < total_pages - (neighborhood))
        vector += ("<li><a class=\"pagination_link\" id=\"" + total_pages + "\" href=\"" + link + total_pages + "\">" + total_pages + "</a></li>");
    if (page_number < total_pages)
        vector += ("<li><a class=\"pagination_link\"  id=\"" + (page_number + 1) + "\" href=\"" + link + (page_number + 1) + "\">next</a></li>");
    vector += "</ul></div>";
    return vector;
}
;


/* Controllers */

var modulo01 = angular.module('myApp.controllers', []);

modulo01.controller('MyCtrl1', function($scope, serverService) {

    $scope.nrpps = [{
            id: 5,
            desc: "5 registros"
        }, {
            id: 10,
            desc: "10 registros"
        }, {
            id: 50,
            desc: "50 registros"
        }, {
            id: 100,
            desc: "100 registros"
        }
    ];

    $scope.nrpp = 10;
    $scope.numPagina = 1;

//    $http({
//        method: 'GET',
//        url: '/cliente/getcolumns.json'  
//                //data: { applicationId: 3 }
//    }).success(function(result) {
//        $scope.fieldNames = result;
//    });




    //$scope.nrpp = 5;

//    $scope.cliente = serverService.get('cliente', 2).then(function(datos) {
//        $scope.cliente = datos;
//    });

    $scope.prettyFieldNames = serverService.getPrettyFieldNames('cliente').then(function(datos4) {
        datos4['data'].push('acciones');
        $scope.prettyFieldNames = datos4['data'];
    });

    $scope.clientes = serverService.getPage('cliente', $scope.numPagina, null, null, $scope.nrpp, null, null, null, null, null, null).then(function(datos3) {
        $scope.clientes = datos3['list'];

    });

    $scope.pages = serverService.getPages('cliente', $scope.nrpp, null, null, null, null, null, null).then(function(datos5) {
        $scope.pages = datos5['data'];
        $scope.botoneraPaginas = getPaginationBar($scope.numPagina, $scope.pages, 2);
    });

    $scope.fieldNames = serverService.getFieldNames('cliente').then(function(datos6) {
        $scope.fieldNames = datos6['data'];
        $scope.selectedFilterFieldName = null;
    });

    $scope.$watch('nrpp', function() {
        $scope.$broadcast('myApp.eventoClienteInicia');
    }, true)

    $scope.$watch('numPagina', function() {
        $scope.$broadcast('myApp.eventoClienteInicia');
    }, true)

    $scope.$on('myApp.eventoClienteInicia', function() {
        $scope.clientes = serverService.getPage('cliente', $scope.numPagina, null, null, $scope.nrpp, null, null, null, null, null, null).then(function(datos3) {
            $scope.clientes = datos3['list'];
        });
        $scope.pages = serverService.getPages('cliente', $scope.nrpp, null, null, null, null, null, null).then(function(datos8) {
            $scope.pages = datos8['data'];
            $scope.botoneraPaginas = getPaginationBar($scope.numPagina, $scope.pages, 2);
        });

    })

});

//modulo01.controller('MyCtrl1', function($scope, $http) {
// $scope.foos = myService.getFoos().then(function(foos) {
//        $scope.resultado = foos;
//    });
////    $scope.resultado = "vacío";
////    $scope.estado = 0;
////    $scope.pedirajax = function() {
////        $http(
////             "/cliente/1/get.json"
////        ).success(function(data, status, headers, config) {
////            $scope.resultado = data;
////            $scope.estado = status;
////            console.log("----Resultados:");
////            console.log($scope.resultado);
////            console.log($scope.estado);
////        }).error(function(data, status, headers, config) {
////            $scope.resultado = status;
////        });
////    }
//
//
//
//
//});


modulo01.controller('MyCtrl2', function($scope) {
    $scope.flores = [{nombre: 'margarita'}, {nombre: 'jazmin'}];
});