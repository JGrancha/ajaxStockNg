'use strict';

var appName = 'AjaxStockNg';



// Declare app level module which depends on filters, and services
angular.module('myApp', [
    'ngRoute',
    'myApp.filters',
    'myApp.services',
    'myApp.directives',
    'myApp.clienteControllers',
    'myApp.productoControllers',
    'ngSanitize' //http://stackoverflow.com/questions/9381926/insert-html-into-view-using-angularjs
])
        .config(['$routeProvider', function($routeProvider) {
                $routeProvider.when('/cliente/list/:numpage/:numrpp', {templateUrl: 'partials/clientes.jsp', controller: 'controlClientesList'});
                $routeProvider.when('/cliente/view/:id', {templateUrl: 'partials/clienteview.jsp', controller: 'controlClienteView'});
                
                //claves ajenas: usar un módulo compartido para apuntarse la url de llamada: http://stackoverflow.com/questions/12008908/how-can-i-pass-variables-between-controllers-in-angularjs
                
                
                $routeProvider.when('/productos/:numpage/:numrpp', {templateUrl: 'partials/productos.jsp', controller: 'controlProductosList'});
                $routeProvider.when('/producto/view/:id', {templateUrl: 'partials/productoview.jsp', controller: 'controlProductoView'});
                
                $routeProvider.when('/view2', {templateUrl: 'partials/partial2.jsp', controller: 'MyCtrl2'});
                $routeProvider.otherwise({redirectTo: '/view1'});
            }]);
