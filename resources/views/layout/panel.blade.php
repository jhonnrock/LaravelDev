<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>
	@section('titulo')			
		pagina principal
	@show 
	</title>
    @section('librerias')
   
		 <script src="libjs/jquery-2.1.4.min.js"></script>
       <script src="libjs/angular.min.js"></script> 
		<script src="libjs/bootstrap.js"></script>
        
		<script src="libjs/rwd-table.min.js"></script>

        <link rel="stylesheet" type="text/css"  href="css/rwd-table.min.css">
        <link rel="stylesheet" type="text/css" href="css/bootstrap.css">
		<link rel="stylesheet" type="text/css" href="css/font-awesome.css">
		<link rel="stylesheet" type="text/css" href="css/morris-0.4.3.min.css">
		<link rel="stylesheet" type="text/css" href="css/custom.css">
        
		<script src="libjs/jquery.metisMenu.js"></script>
		<script src="libjs/raphael-2.1.0.min.js"></script>
		<script src="libjs/custom.js"></script>
        <script src="libjs/morris.js"></script>
        <script src="libjs/raphael-2.1.0.min.js"></script>
        

        @show
		
        

	
</head>
<body>
<div id="wrapper">
        <nav class="navbar navbar-default navbar-cls-top " role="navigation" style="margin-bottom: 0">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".sidebar-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="index.html">Adminitracion</a> 
            </div>
 <div style="color: white;
padding: 15px 50px 5px 50px;
float: right;
font-size: 16px;">   
</div>
</nav> 
  

@section('headeres')

 <nav class="navbar-default navbar-side" role="navigation">
            <div class="sidebar-collapse">
                <ul class="nav" id="main-menu">
				<li class="text-center">
                    <img src="../../image/find_user.png" class="user-image img-responsive"/>
					</li>
				
					
                    <li>
                       
                    <a href="/artist"><i class="fa fa-qq fa-3x btn btn-default"></i>Canciones</a>
                    </li>
                    <li>
                       
                       <a href="/archivo"><i class="fa fa-cloud-download fa-3x btn btn-default"></i>Archivos</a>
                       </li> 
                    <li>
                       
                       <a href="/artist"><i class="fa fa-linux fa-3x btn btn-default"></i>Genero</a>
                       </li>

                       <li>
                       
                       <a href="/artist"><i class="fa  fa-cloud fa-3x btn btn-default"></i>Albums</a>
                       </li>
                       <li>
                       
                       <a href="/artist"><i class="fa fa-user fa-3x fa-3x btn btn-default"></i>Usuario</a>
                       </li> 
                       
                       <li>
                       
                       <a href="/artist"><i class="fa fa-font fa-3x btn btn-default"></i>Artista</a>
                       </li> 
                     
                       
                  
                </ul>
                  
<br/>

<br/><br/>
            </div>
            
        </nav>  

	@show

	<div class="contenidos-panel">
		

	<div id="page-wrapper" >
  
            <div id="page-inner">
                <div class="row">
                    <div class="col-md-12">
                    
                        <h5>Welcome Johnny Penia Trujillo , Love to see you back. </h5>
                    </div>
                </div>              
                 <!-- /. ROW  -->
                  <hr />
                  @section('mostrar')
                <div class="row">
                <div class="col-md-3 col-sm-6 col-xs-6">           
			<div class="panel panel-back noti-box">
                <span class="icon-box bg-color-red set-icon">
                    <i class="fa fa-envelope-o"></i>
                </span>
                <div class="text-box" >
                    <p class="main-text">120 New</p>
                    <p class="text-muted">Messages</p>
                </div>
             </div>
		     </div>
                    <div class="col-md-3 col-sm-6 col-xs-6">           
			<div class="panel panel-back noti-box">
                <span class="icon-box bg-color-green set-icon">
                    <i class="fa fa-bars"></i>
                </span>
                <div class="text-box" >
                    <p class="main-text">30 Tasks</p>
                    <p class="text-muted">Remaining</p>
                </div>
             </div>
		     </div>
                    
                    
			</div>
      @show    
                 <!-- /. ROW  -->
                <hr /> 
                           
                <div class="row" ng-app>
                    
                    
                    @yield('contenido')
                    
                
                        
        		</div>
                 <!-- /. ROW  -->
                
                 <!-- /. ROW  -->
                
             <!-- /. PAGE INNER  -->
            </div>
         <!-- /. PAGE WRAPPER  -->


</div>
</div>


		<footer>
		 <script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-50556188-1', 'binarycart.com');
  ga('send', 'pageview');
</script>	
		</footer>
</body>
</html>