$(document).on('ready',function(){

});
function nuevotipo(){
	$.ajax({
		url:'tipousuario/create',
		type:'get',
		success:function(mio){
			console.log(mio);
			var datos=JSON.parse(mio);
				createform(datos);
		}

	});
}
function createform(a){
	console.log(a);
	 var body=$('#body-tipo');
	  body.empty();
	  formulary='<form id="formtipo">'+
	  				'<div class="form-group" id="nombtipousuarios">'+
	  				 '<label>Tipo usuario</label>'+
	  				 '<input class="form-control" type="text" name="nombtipousuario" id="nombtipousuario" placeholder="tipo usuario">'+
	  				 '<div id="danger-nombtipousuario">'+
	  				 '</div>'+
	  				'</div>'+
	  				'<div class="form-group" id="descriptipousuarios">'+
	  				'<label>descripcion</label>'+
	  			'<input class="form-control" type="text" name="descriptipousuario" id="descriptipousuario" placeholder="descripcion">'+
	  			'<div id="danger-descriptipousuario">'+
	  			'</div>'+
	  					  					
	  			'</div>'+
	  			'<div class="modal-footer">'+
	  	'<input class="btn btn-default" type="submit" value="cancelar" data-dismiss="modal">'+
	    '<input class="btn btn-primary" value="guardar" type="submit">'+

	  			'</div>'+
	  			'</form>';
	  body.append(formulary);
	  addtipo(a);
	  $('#modal-id').modal('show');


}
function addtipo(b){
 $('#formtipo').on('submit',function(a){
	 	a.preventDefault();
	 	var datillos=$(this).serializeArray();
	 	$.ajax({
	 		url:'tipousuario',
	 		type:'post',
	 		data:datillos,
	 		success:function(z){
	 			console.log(z);
	 			if(!z.success)
	 			{
	 				

	 				if(z.errors.descriptipousuario)
	 				{
	 					
	 					$('#descriptipousuarios').addClass('has-error');
	 					$('#danger-descriptipousuario').empty().append('<div class="alert alert-danger two">'+ z.errors.descriptipousuario +'</div>');

	 				}
	 				if(z.errors.nombtipousuario)
	 				{
	 					$('#nombtipousuarios').addClass('has-error');
	 					$('#danger-nombtipousuario').empty().append('<div class="alert alert-danger two">'+z.errors.nombtipousuario+'</div>');
	 				}

	 			}
	 			else
	 			{
	 				$('#mesajillo').empty().hide().fadeIn('slow').append('<div class="alert alert-info">'+z.mensaje+' <i class="fa fa-drupal"></i></div>');
	 				$('#modal-id').modal('hide');
	 				location.reload();	

	 			}



	 		}

	 	});

 });

}

function tipoedit(id)
{
	console.log(id);
	$.ajax({
		url:'tipousuario/'+id+'/edit',
		type:'GET',
		success:function(nuevo)
		{
				console.log(nuevo);
				var datoss=JSON.parse(nuevo);
				createformu(datoss);
		}
	})


}
function createformu(w){
	console.log(w);
	 var bodytip=$('#body-edit');
	     bodytip.empty();
	     formu='<form id="formtipo1">'+
	    		'<input type="hidden" id="tipoedit" value="'+w.tipousuario.id+'">'+
	  				'<div class="form-group" id="nombtipousuarioss">'+
	  				 '<label>Tipo usuario</label>'+
	  				 '<input class="form-control" type="text" name="nombtipousuario" id="nombtipousuario" placeholder="tipo usuario" value="'+w.tipousuario.nombtipousuario+'">'+
	  				 '<div id="danger-nombtipousuarios">'+
	  				 '</div>'+
	  				'</div>'+
	  				'<div class="form-group" id="descriptipousuarioss">'+
	  				'<label>descripcion</label>'+
	  			'<input class="form-control" type="text" name="descriptipousuario" id="descriptipousuario" placeholder="descripcion" value="'+w.tipousuario.descriptipousuario+'">'+
	  			'<div id="danger-descriptipousuarios">'+
	  			'</div>'+
	  					  					
	  			'</div>'+
	  			'<div class="modal-footer">'+
	  			'<input class="btn btn-primary" value="Editar" type="submit">'+
	  				'<input class="btn btn-default" type="submit" value="cancelar" data-dismiss="modal">'+
	    

	  			'</div>'+
	  			'</form>';
	     bodytip.append(formu);
	     editandotipo();
	     $('#modal-id1').modal('show');

}
function editandotipo()
{
  $('#formtipo1').on('submit',function(l){
  	l.preventDefault();
  	 var datos1=$(this).serializeArray();
  	 	 $.ajax({
  	 	 	url:'tipousuario/'+$('#tipoedit').val(),
  	 	 	type:'put',
  	 	 	data:datos1,
  	 	 	success:function(v){

  	 	 			console.log(v);
  	 	 			if(!v.success)
  	 	 			{
  	 	 				if(v.errores.descriptipousuario)
  	 	 				{
  	 	 					$('#descriptipousuarioss').addClass('has-error');
  	 	 					$('#danger-descriptipousuarios').empty().append('<div class="alert alert-danger">'+v.errores.descriptipousuario+'</div>')
  	 	 				}
  	 	 				if(v.errores.nombtipousuario)
  	 	 				{
  	 	 					$('#nombtipousuarioss').addClass('has-error');
  	 	 					$('#danger-nombtipousuarios').empty().append('<div class="alert alert-danger">'+v.errores.nombtipousuario+'</div>');
  	 	 				}
  	 	 			}
  	 	 			else
  	 	 			{
  	 	 				 $('#messages2').empty().hide().fadeIn('slow').append('<div class="alert alert-info">'+v.mensajess+' '+v.tipo.descriptipousuario+'</div>');
  	 	 				 $('#modal-id1').modal('hide');
  	 	 				 location.reload();



  	 	 			}


  	 	 	}

  	 	 });

  })
}