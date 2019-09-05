$(document).on('ready',function(){

})
function nuevogen(){
  $.ajax({
  		url:'../genre/get',
  		type:'GET',
  		success:function(mio)
  		{
  				console.log(mio);
  				var datos=JSON.parse(mio);
  				console.log(datos);
  				addget(datos);
  		}
  });
}
/*  $.getJSON('../genre/get',{},function(data){
  			console.log(data)
  			


  }).success(function(mio){

  		var datos=JSON.parse(mio);
  		console.log(datos);
  });
*/
function addget(a){
	console.log(a);
	 var bodygen=$('#body-gen');
	 bodygen.empty();
	 formulary='<form id="id-genres">'+
	 			
	 			'<div class="form-group" id="genress">'+
	 			'<label> Genero</label>'+
	 			'<input type="text" id="genres" name="genres"  class="form-control" placeholder="genero del cancion">'+
	 			'<div id="danger-genres">'+
	 				 			'</div>'+
	 			'</div>'+
	 			'<div class="form-group" id="descrips">'+
	 				'<label>Descripcion</label>'+
	 				'<input class="form-control" type="text" id="descrip" name="descrip" placeholder="descripcion del genero">'+
					'<div id="danger-descrip">'+
					'</div>'+
	 			'</div>'+
	 			'<div class="modal-footer">'+
	 									'<input type="submit" class="btn btn-default" data-dismiss="modal" value="cancelar">'+
	 									'<input type="submit" class="btn btn-primary" value="guardar">'+
	 								'</div>'+
	 					'</form>';	

	 bodygen.append(formulary);
	 addpost();
	 $('#modal-id').modal('show');

}

function addpost(){
$('#id-genres').on('submit',function(g){
	g.preventDefault();
	var datillos=$(this).serializeArray();
    $.ajax({
    	url:'../genre/post',
    	type:'POST',
    	data:datillos,
    	success:function(print){
    		console.log(print)
    		if(!print.success){
    			if(print.errors.genres){
    				$('#genress').addClass('has-error');
    				$('#danger-genres').empty().append('<div class="alert alert-danger two">'+ print.errors.genres +'</div>')
    			}
    			if(print.errors.descrip)
    			{
    				$('#descrips').addClass('has-error');
    				$('#danger-descrip').empty().append('<div class="alert alert-danger two">'+print.errors.descrip+'</div>');
    			}

    		}
    		else
    		{
    			$('#mymessage').empty().hide().fadeIn('slow').append('<div class="alert alert-info">'+print.mensaje+'</div>');
    			$('#modal-id').modal('hide');
    			location.reload();
    		}
    	}

    });

	});
}

function editargen(id){
	$.ajax({
		url:'../genre/edit/'+id,
		type:'get',
		success:function(b){
			console.log(b);
			var datas=JSON.parse(b);
			create(datas);

		}
	})
}
	function create(c)
	{	
		console.log(c);
		var body=$('#body-edit');
		body.empty();
		register='<form id="editformulary">'+
					'<input type="hidden" id="idgen" value="'+c.genero.id+'">'+
					'<div class="form-group" id="genress1">'+
	 			'<label> Genero</label>'+
	 			'<input type="text" id="genres" name="genres"  class="form-control" placeholder="genero del cancion" value="'+c.genero.genres+'">'+
	 			'<div id="danger-genres1">'+
	 				 			'</div>'+
	 			'</div>'+
	 			'<div class="form-group" id="descrips1">'+
	 				'<label>Descripcion</label>'+
	 				'<input class="form-control" type="text" id="descrip" name="descrip" placeholder="descripcion del genero" value="'+c.genero.descrip+'">'+
					'<div id="danger-descrip1">'+
					'</div>'+
	 			'</div>'+	
	 			'<div class="modal-footer">'+
	 			'<input class="btn btn-primary" type="submit" value="Guardar">'+
	 			'<input type="submit" class="btn btn-default" value="cancelar" data-dismiss="modal">'+
	 			'</div>'+

					'</form>';
		body.append(register);
		putedit();
		$('#modal-id2').modal('show');
	}
function putedit(){
$('#editformulary').on('submit',function(h){
	h.preventDefault();
	var midata=$(this).serializeArray()
$.ajax({
	url:'../genre/put/'+$('#idgen').val(),
	type:'PUT',
	data:midata,
	dataType:'json',
	success:function(k)
	{
		console.log(k);
		if(!k.success)
		{
			if(k.errors.genres)
			{
				$('#genress1').addClass('has-error');
				$('#danger-genres1').empty().append('<div class="alert alert-danger">'+k.errors.genres+'</div>');

			}
			if(k.errors.descrip)
			
			{	$('#descrips1').addClass('has-error');
							$('#danger-descrip1').empty().append('<div class="alert alert-danger">'+k.errors.descrip+'</div>');
			}
		}
		else
		{
			$('#genmessage').empty().hide().fadeIn('slow').append('<div class="alert alert-info" align="center"><strong>'+k.mesajillos+'<i class="fa fa-bolt"></i></strong></div>');
			$('#modal-id2').modal('hide');
			location.reload();

		}

	}



		});
	});
}
function showgene(id)
	{
		console.log(id);
		$.get('../genre/show/'+id,function(a){
			console.log(a);
			var data=JSON.parse(a);
			console.log(data);
			createshow(data);
		});

	}

function createshow(sh){
	console.log(sh);
	var body=$('#bodygenero').empty();
	ctForm='<div class="container">'+'<strong>genero::</strong>'+sh.genero.genres+'<br>'+'<strong>Descripcion::</strong>'+sh.genero.descrip+'</div>';
	body.append(ctForm);
	$('#modal-id3').modal('show');
}