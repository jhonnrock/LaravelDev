$(document).on("ready",function(){
 console.log('hola mundo');
 editfile();
 createview();
});

function obtaindata(){
	$.ajax({
		url:'archivos/get',
		type:'get',
		/*dataType:'json',*/
		success:function(data)
		{
				console.log(data);
				var mio=JSON.parse(data);
				console.log(mio);
				//esto es para mostar solo la primera fila
				console.table([mio.filess[0]]);
				//esto esp ara ver todos los datos de files 
				/*console.table(mio.filess);*/
				
				createform(mio);
		}

	});
}

function createform(cf){
	console.log(cf);
	var body=$("#archivos-id").empty();
	formulary='<form id="archivillos" enctype="multipart/form-data" files="true">'+
				'<div class="form-group" id="nomb">'+
					'<label>Nombre cancion</label>'+
					'<input type="text" class="form-control" name="nombre_cancion" id="nombre_cancion">'+
					'<div id="danger-nombre"></div>'+

				'</div>'+
					
				'<div class="form-group" id="sub">'+
					'<label>subiendo...</label>'+
					'<input type="file" class="form-control" name="subir" id="subir">'+	
					'<div id="danger-subir"></div>'+
				'</div>'+


					'<div class=form-group id="tag">'+
						'<label>etiqueta</label>'+
						'<input type="text" name="etiqueta" id="etiqueta" class="form-control">'+
						'<div id="danger-etiqueta"></div>'+
					'</div>'+
				'<div class="form-group" id="des">'+
						'<label>Descripcion</label>'+
						'<input type="text" name="description" id="description" class="form-control">'+
						'<div id="danger-descrip"></div>'+
				'</div>'+

				'<div class="modal-footer">'+
					'<input type="submit"  value="Guardar"  class="btn btn-primary">'+
					'<input type="submit" value="Cancelar" class="btn" data-dismiss="modal">'+

				'</div>'+


				'</form>';
	body.append(formulary);
	$('#myModal').modal('show')	;

		addpost();


}

function addpost()
{
	$('#archivillos').on('submit',function(a){
		a.preventDefault();
		/*var datos=$(this).serializeArray();*/
		var datos=new FormData();
		datos.append('nombre_cancion',$('#nombre_cancion').val());
		if($('#subir').val()!=="")
		{
			$.each($('#subir')[0].files,function(i,file){
				datos.append('subir',file);
			});
			}
		datos.append('etiqueta',$('#etiqueta').val());
		datos.append('description',$('#description').val());

		$.ajax({
			url:'archivos/post',
			type:'POST',
			dataType:'json',
			data:datos,
			cache:false,
			contentType: false,
      		processData: false,
			success:function(nuevos){
				console.log(nuevos);
				if(!nuevos.success)
				{
					if(nuevos.respuesta.nombre_cancion)
					{
						$('#nomb').addClass('has-error');
						$('#danger-nombre').empty().append('<div class="alert alert-danger">'+nuevos.respuesta.nombre_cancion+'</div>');
					}
					/*if(nuevos.respuesta.subir)
					{
						$('#sub').addClass('has-error');
						$('#danger-subir').empty().append('<div class="alert alert-danger">'+nuevos.respuesta.subir+'</div>');
					}*/
					if(nuevos.respuesta.etiqueta)

					{
						$('#').addClass('has-error');
						$('#danger-etiqueta').empty().append('<div class="alert alert-danger">'+nuevos.respuesta.etiqueta+'</div>');
					}
					if(nuevos.respuesta.description)
					{
						$('#').addClass('has-error');
						$('#danger-descrip').empty().append('<div class="alert alert-danger">'+nuevos.respuesta.description+'</div>');

					}

				}
				else{

					$('#mesajes').empty().hide().fadeIn('slow').append('<div class="alert alert-info">'+nuevos.respuesta+'</div>');
					$('#myModal').modal('hide');
					location.reload();
				}


			}
		})


});



}

function editfile(id)
{
	console.log(id);
$.ajax({
	url:'archivos/get/'+id,
	type:'GET',
	success:function(mio){
		console.log(mio);
		var datos2=JSON.parse(mio);
		console.log(datos2);
		console.table(datos2.archivos);
		createforms(datos2);

	}


})

}
function createforms(dato){
	console.table(dato.archivos);
	console.log(dato);
	var body=$('#bodyfile').empty();
	fromu='<form id="miformulario" enctype="multipart/form-data"    files="true" method="POST">'+
			'<input type="hidden" value="'+dato.archivo.id+'" id="ids">'+	
			'<div class="form-group" id="nomb1">'+
				'<label for="nomb1">Nombre Cancion</label>'+
				'<input type="text" name="nombre_cancion" id="nombre_cancion" value="'+dato.archivo.nombre_cancion+'" class="form-control">'+
				'<div class="danger-nombre1"></div>	'+
			'</div>'+

			'<div class="form-group" id="sub1">'+
				 '<label for="sub1">Upload..</label>'+
				 '<input type="file" name="subir" value="'+dato.archivo.subir+'" id="subir" class="form-control">'+
				 '<div class="danger-subir1"></div>'+
				 	
		 '</div>'+

		 '<div class="form-group" id="tag1">'+
			 '<label for="tag1">Etiqueta</label>'+
			 	'<input type="text" name="etiqueta" id="etiqueta" value="'+dato.archivo.etiqueta+'" class="form-control">'+
			 	'<div class="danger-etiqueta1"></div>'+
		 '</div>'+
		 '<div class="form-group" id="des1">'+
			 '<label for="des1">Descripcion</label>'+
			 '<input type="text" name="description" id="description" value="'+dato.archivo.description+'" class="form-control">'+
			 '<div class="danger-des1"></div>'+
		 '</div>'+	
		 '<div class="modal-footer">'+
		 	'<input type="submit" class="btn btn-primary" value="guardar">'+
		 	'<input type="submit" class="btn" data-dismiss="modal" value="cancelar">'+
		 '</div>'+	

			'</form>';
		body.append(fromu);
		$('#modal-id').modal('show');
		postfile(dato);	


}

function postfile()
{
	console.log($('#ids').val());
	$('#miformulario').on('submit',function(a){

		a.preventDefault();
		/*var datoss=$(this).serializeArray();*/
		var datoss=new FormData();
		console.log($('#subir')[0].files);
		datoss.append('nombre_cancion',$('#nombre_cancion').val());
		if($('#subir').val()!==" ")
		{
			$.each($('#subir')[0].files,function(i,file){
				datoss.append('subir',file)
			});
		}
		datoss.append('etiqueta',$('#etiqueta').val());
		datoss.append('description',$('#description').val());

		$.ajax({
			url:'archivos/post/'+$('#ids').val(),
			type:'POST',
			data:datoss,
			dataType:'JSON',
			cache:false,
			contentType: false,
      		processData: false,
			success:function(mios)
			{
				console.log(mios);
				if(!mios.success)
				{
					/*if(mio.)*/

				}
				else
				{
					$('#mesajillo').empty().hide().fadeIn('slow').append('<div class="alert alert-info">'+mios.message+'</div>');
					$('#modal-id').modal('hide');
					location.reload();
				}

			}

		});


	});


}

function deletes(id)
{
		console.log(id);
		$.ajax({
			url:'archivos/del/'+id,
			type:'DELETE',
			success:function(mio12)
			{
				console.log(mio12);
				var miss=JSON.parse(mio12);
				console.log(miss);
				$('#danger-del').empty().hide().fadeIn('slow').append('<div class="alert alert-danger">'+miss.mesajillo+' la cancion'+miss.file.nombre_cancion+'<div>');
				$(location).attr('href','../archivos');

				//mesajillo

			}
		});
}

function view(id)
{
	console.log(id);
	$.get('archivos/view/'+id, function(nuevo) {
		console.log(nuevo);
		var mio=JSON.parse(nuevo);
		console.log(mio);
		createview(mio);
	
   });



}

function createview(mio)
{
	console.log(mio);
	var bodys=$('#view-body').empty();
     vista=
		     '<div class="modal-header">'+
		      '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>'+
     		'<h3 class="modal-title">'+mio.message+'</h3>'+
     		'</div> '+
     		'<div class="modal-body">'+
     		'<p>'+
     		'<strong class="text-primary">Nombre de la cancion::</strong>'+mio.archivos.nombre_cancion+


     		'<br>'+
     		'<strong class="text-primary">Subir:: </strong>'+mio.archivos.subir+
     		'<div style="text-align:center">'+
     		'<audio src="upload/'+mio.archivos.subir+'" autobuffer autoloop loop controls ></audio>'+
     		'</div>'+
     		'<br>'+

     		'<strong class="text-primary">Etiqueta:: </strong>'+mio.archivos.etiqueta+'<br>'+
     		'<strong class="text-primary">Descripcion:: </strong>'+mio.archivos.description+
     		'</p>'+
     		'</div>'+

     		'<div class="modal-footer text-center">'+

			      '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
     '</div>';
     bodys.append(vista);
     $('#modal-file').modal('show');

}