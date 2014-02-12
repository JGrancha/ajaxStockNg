<%-- 
    Document   : index
    Created on : Feb 8, 2014, 10:28:54 AM
    Author     : rafa
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>


<!DOCTYPE html>
<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]> <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]> <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js" lang="en" ng-app="myApp">
    <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>Ajax Stock uniDAO Spring</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width">
        <link rel="stylesheet" href="<%=request.getContextPath()%>/css/bootstrap.min.css">
        <style>
            body {
                padding-top: 60px;
                padding-bottom: 40px;
            }
        </style>
        <link rel="stylesheet" href="<%=request.getContextPath()%>/css/bootstrap-responsive.min.css">
        <link rel="stylesheet" href="<%=request.getContextPath()%>/css/main.css">
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
       <script>window.jQuery || document.write('<script src="<%=request.getContextPath()%>/js/vendor/jquery-1.10.2.min.js"><\/script>')</script>
      
        <script src="<%=request.getContextPath()%>/js/vendor/modernizr-2.6.2-respond-1.1.0.min.js"></script>


        <link rel="stylesheet" href="http://code.jquery.com/ui/1.10.1/themes/base/jquery-ui.css" />
        <script src="http://code.jquery.com/ui/1.10.1/jquery-ui.js"></script>


    </head>    

    <body>
        <div class="container-fluid">
            <div class="row-fluid">
                
                <div class="span12">  
                    <ul class="menu">
                        <li><a href="#cliente/list/1/10">clientes</a></li>
                        <li><a href="#productos/1/10">productos</a></li>
                        <li><a href="#view2">view2</a></li>
                    </ul> 
                </div>
            </div>
            <div class="row-fluid">
                <div class="span12">
                    <div ng-view></div>
                </div>
            </div>

            <div class="row-fluid">
                <div class="span12">
                    <hr>
                    <footer><p>&copy; Rafael Aznar (Febrero de 2014) Angular seed app: v<span app-version></span></p></footer>
                </div>            
            </div>
        </div>
        <!-- In production use:
        <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.0.7/angular.min.js"></script>
        -->
        <script src="lib/angular/angular.js"></script>
        <script src="lib/angular/angular-route.js"></script>
        <script src="lib/angular/angular-sanitize.min.js"></script>
        <script src="js/app.js"></script>
        <script src="js/services.js"></script>
        
        <script src="js/clienteControllers.js"></script>
        <script src="js/productoControllers.js"></script>
        
        <script src="js/filters.js"></script>
        <script src="js/directives.js"></script>
        <script src="<%=request.getContextPath()%>/js/vendor/bootstrap.min.js"></script>

        <script src="<%=request.getContextPath()%>/js/vendor/bootstrap-transition.js"></script>
        <script src="<%=request.getContextPath()%>/js/vendor/bootstrap-alert.js"></script>
        <script src="<%=request.getContextPath()%>/js/vendor/bootstrap-modal.js"></script>
        <script src="<%=request.getContextPath()%>/js/vendor/bootstrap-dropdown.js"></script>
        <script src="<%=request.getContextPath()%>/js/vendor/bootstrap-scrollspy.js"></script>
        <script src="<%=request.getContextPath()%>/js/vendor/bootstrap-tab.js"></script>
        <script src="<%=request.getContextPath()%>/js/vendor/bootstrap-tooltip.js"></script>
        <script src="<%=request.getContextPath()%>/js/vendor/bootstrap-popover.js"></script>
        <script src="<%=request.getContextPath()%>/js/vendor/bootstrap-button.js"></script>
        <script src="<%=request.getContextPath()%>/js/vendor/bootstrap-collapse.js"></script>
        <script src="<%=request.getContextPath()%>/js/vendor/bootstrap-carousel.js"></script>
        <script src="<%=request.getContextPath()%>/js/vendor/bootstrap-typeahead.js"></script>    

        <script src="<%=request.getContextPath()%>/js/util.js" charset="UTF-8"></script>
        <script src="<%=request.getContextPath()%>/js/main.js" charset="UTF-8"></script>

        <script src="<%=request.getContextPath()%>/js/control/cliente.js" charset="UTF-8"></script>
        <script src="<%=request.getContextPath()%>/js/control/producto.js" charset="UTF-8"></script>
        <script src="<%=request.getContextPath()%>/js/control/tipoproducto.js" charset="UTF-8"></script>
        <script src="<%=request.getContextPath()%>/js/control/compra.js" charset="UTF-8"></script>

    </body>
</html>
