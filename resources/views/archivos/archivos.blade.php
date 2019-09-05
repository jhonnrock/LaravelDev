@extends('layout.panel')
	@section('titulo')
	pagina de archivos
	@stop

@section('librerias')	
	@parent
		{{HTML::script('libjs/angular.min.js')}}
		{{HTML::script('libjs/angular.min.js.map')}}
		{{HTML::script('js/archivos.js')}}

@stop
@section('contenido')

<div class="container">
	
<div class="row">
	<div class="col-md-10">
		{{HTML::decode(HTMl::link('#','subir <i class="fa fa-cloud-download"></i>',array('class'=>'btn btn-warning','onclick'=>"obtaindata()")))}}
	</div>
</div>
<div class="row">
	<div id="mesajes">
		
	</div>
	<div id="mesajillo">
		
	</div>
	<div id="danger-del">
		
	</div>
</div>
<h2><i class="fa fa-th-list fa-lg"></i>Lista de subido  sus canciones</h2>
<div class="container-fluid">
<div class="row">
	<div class="panel-body">
		<div class="table-reponsive">
		<table class="table table-hover">
			<thead>
				<tr>
					<th colspan="" rowspan="" headers="" scope="">Nombre cancion</th>
					<th colspan="" rowspan="" headers="" scope="">upload</th>
					<th colspan="" rowspan="" headers="" scope="">tag</th>
					<th colspan="" rowspan="" headers="" scope="">descripcion</th>
					<th colspan="" rowspan="" headers="" scope="">Acciones</th>
				</tr>
			</thead>
			<tbody class="table-striped">

				@foreach($filess as $fil)
				<tr>
					<td colspan="" rowspan="" headers="">{{$fil->nombre_cancion}}</td>
					<td>
					@if(!empty($fil->subir))
		               <audio src="/upload/{{$fil->subir}}" autobuffer preload="auto" controls></audio>
					   

					@endif
					</td>
					<td>{{$fil->etiqueta}}</td>
					<td>{{$fil->description}}</td>
					
					<td>
						{{HTMl::decode(HTML::link('#','Mostrar <i class="glyphicon glyphicon-fire"></i>',array('class'=>'btn btn-success','onclick'=>"view(".$fil->id.")")))}}
					</td>
					<td>{{HTML::decode(html::link('#','editar<i class="glyphicon glyphicon-fire"></i>',array('class'=>'btn btn-info','onclick'=>"editfile(".$fil->id.")")))}}

					</td>
 <td>
			{{HTMl::decode(HTML::link('#','delete<i class="glyphicon glyphicon-trash"></i>',array('class'=>'btn btn-danger','onclick'=>"deletes(".$fil->id.")")))}}

</td>

				</tr>
				@endforeach
			</tbody>

		</table>
		</div>
	</div>

</div>
</div>

<div class="text-center">
{{$filess->links()}}
</div>

		

</div>
<!-- ///para e;l save  -->
		<!-- <a class="btn" data-toggle="modal" href="#myModal">Launch Modal</a> -->
		<div class="modal fade" id="myModal">
		<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<a class="close" data-dismiss="modal">&times;</a>
				<h3>subir cancion</h3>
			</div>
			<div class="modal-body" id="archivos-id">
				
				</div>
			</div>
	</div>
		</div>
   <!-- ///////////para el editar-->

<div class="modal fade" id="modal-id">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
				<h4 class="modal-title">Modal title</h4>
			</div>
			<div class="modal-body" id="bodyfile">
				
			</div>
			
		</div><!-- /.modal-content -->
	</div><!-- /.modal-dialog -->
</div>

	<div class="modal fade" id="modal-file">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-body" id="view-body">
				
			</div>
			
		</div><!-- /.modal-content -->
	</div><!-- /.modal-dialog -->
</div><!-- /.modal -->
	




@stop