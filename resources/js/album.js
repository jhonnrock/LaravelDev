$(document).on('ready',function(){

});
modalview();
function addalbums(){
	console.log('hola mundo');
	$.ajax({
		url:'../album/create',
		type:'get',
		success:function(mio)
		{
			console.log(mio);
			var datos=JSON.parse(mio);
			createformulario(datos);
		}
	})
}
function createformulario(a)
{ 
	console.log(a);
	var body=$('#body-albums');
		body.empty();
		formulary='<form id="mialbum" enctype="multipart/form-data" files="true">'+
					'<div class="form-group" id="">'+
						'<label>Genero</label>'+
						'<select name="genre_id" class="form-control" id="genre_id"></select>'+

					'</div>'+
					'<div class="form-group">'+
						'<label >Usuario</label>'+
						'<select class="form-control" name="user_id" id="user_id"></select>'+
						
					'</div>'+
					'<div class="form-group" >'+
					 '<label>Canciones</label>'+
					 '<select class="form-control" name="song_id" id="song_id"></select>'+
					'</div>'+

					'<div class="form-group" id="tittles1">'+
					'<label>Titulo</label>'+
						'<input class="form-control" name="tittles" id="tittles"placeholder="titulo cancion" type="text">'+
						'<div id="danger-tittles"></div>'+
					'</div>'+
					'<div class="form-group" id="albumname1">'+
					'<label>Albums</label>'+	
					'<input type="text" name="albumname" id="albumname" 			placeholder="Albums" class="form-control">'+
					'<div id="danger-albumname">'+
					'</div>'+

					'<div class="form-group" id="image1">'+
					'<label>Albums</label>'+	
					'<input type="file" name="image" id="image" 			placeholder="imagen" class="form-control">'+
					'<div id="danger-image">'+
					'</div>'+

					'</div>'+
						'<div class="form-group" id="year1">'+
						'<label>year</label>'+
						'<input class="form-control" name="year" type="date" id="year">'+
						'<div id="danger-year">'+
						'</div>'+
						'</div>'+
						'	<div class="modal-footer">'+
						'<input type="submit"  value="Guardar"  class="btn btn-primary">'+
                  			'<input type="submit" value="cancelar" class="btn btn-default" data-dismiss="modal">'+

						'</div>'


					'</form>';
		body.append(formulary);
		addalbum(a);
		var gen="";
		$.each(a.genero,function(i,value){
			console.log(value);
		    gen+='<option value="'+value.id+'">'+value.genres+'</option>'
		});

		$('#genre_id').append(gen);
		var songss="";
		$.each(a.song,function(i,value){
			console.log(value);
			songss+='<option value="'+value.id+'">'+value.title+'</option>'	
		});

		var userss="";
		$.each(a.usuario, function(i, value) {
	  			userss+='<option value="'+value.id+'">'+value.username+'</option>'
		});
		$('#user_id').append(userss);

		$('#song_id').append(songss);
		$('#modal-id').modal('show');



}
function addalbum(c){
	console.log(c);
	$('#mialbum').on('submit',function(x){
		x.preventDefault();
		var datos=new FormData();
		console.log($('#image').val());
		if($('#image').val()!=="")
		{	
			$.each($('#image')[0].files,function(i,file)
			{
	              datos.append('image',file) 
			});
	   }
		datos.append('genre_id',$('#genre_id').val());
		datos.append('user_id',$('#user_id').val());
		datos.append('song_id',$('#song_id').val());
		datos.append('tittles',$('#tittles').val());
		datos.append('albumname',$('#albumname').val());
		datos.append('year',$('#year').val());

		$.ajax({
			url:'../album/store',
			data:datos,
			cache:false,
			contentType: false,
      		processData: false,
      		type:'post',
      		dataType:'json',
      		success:function(datillos)
      		{
      			console.log(datillos);
      			if(!datillos.success)
      			{
      				if(datillos.errors.albumname)
      				{
      					$('#albumname1').addClass('has-error');
      					$('#danger-albumname').empty().append('<div class="alert alert-danger">'+datillos.errors.albumname+'</div>');
      				}
      				if(datillos.errors.tittles)
      				{
      					$('#tittles1').addClass('has-error');
      					$('#danger-tittles').empty().append('<div class="alert alert-danger">'+datillos.errors.tittles+'</div>');
      				}
      				if(datillos.errors.image)
      				{
      					$('#image1').addClass('has-error');
      					$('#danger-image').empty().append('<div class="alert alert-danger">'+datillos.errors.image+'</div>');

      				}
      				if(datillos.errors.year)
      				{
      					$('#year1').addClass('has-error');
      					$('#danger-year').empty().append('<div class="alert alert-danger">'+datillos.errors.year+'</div>');
      				}
      			}
      				else
      				{
      					$('#mesajillos').empty().hide().fadeIn('slow').append('<div class="alert alert-warning">'+datillos.mesaje+'</div>');
      					$('#modal-id').modal('hide');
      					location.reload();
      				}



      			

      		}



		})


	});



}

function editalbum(id)
{
	console.log(id);
	$.ajax({
		url:'../album/editar/'+id,
		type:'GET',
		success:function(a)
		{
			console.log(a);
			var datos2=JSON.parse(a);
			createform(datos2);


		}
	})
}
function createform(al){

   console.log(al);
   var bodya=$('#body-albu');
   bodya.empty();
   formularys='<form id="newalbum" enctype="multipart/form-data" files="true">'+
   					'<input type="hidden" id="albumid" value="'+al.album.id+'">'+
					'<div class="form-group" >'+
						'<label>Genero</label>'+
						'<select name="genre_id" class="form-control" id="genre_id1"></select>'+

					'</div>'+
					'<div class="form-group">'+
						'<label >Usuario</label>'+
						'<select class="form-control" name="user_id" id="user_id1"></select>'+
						
					'</div>'+
					'<div class="form-group" >'+
					 '<label>Canciones</label>'+
					 '<select class="form-control" name="song_id" id="song_id1"></select>'+
					'</div>'+

					'<div class="form-group" id="tittles11">'+
					'<label>Titulo</label>'+
						'<input class="form-control" name="tittles" id="tittles"placeholder="titulo cancion" type="text" value="'+al.album.tittles+'">'+
						'<div id="danger-tittles1"></div>'+
					'</div>'+
					'<div class="form-group" id="albumname11">'+
					'<label>Albums</label>'+	
					'<input type="text" name="albumname" id="albumname" 			placeholder="Albums" class="form-control" value="'+al.album.albumname+'">'+
					'<div id="danger-albumname1">'+
					'</div>'+

					'<div class="form-group" id="image11">'+
					'<label>Albums</label>'+	
					'<input type="file" name="image" id="imagess" 			placeholder="imagen" class="form-control" value="'+al.album.image+'">'+
					'<div id="danger-image1">'+
					'</div>'+

					'</div>'+
						'<div class="form-group" id="year11">'+
						'<label>year</label>'+
						'<input class="form-control" name="year" type="date" id="year" value="'+al.album.year+'">'+
						'<div id="danger-year1">'+
						'</div>'+
						'</div>'+
						'	<div class="modal-footer">'+
						'<input type="submit"  value="Guardar"  class="btn btn-primary">'+
                  			'<input type="submit" value="cancelar" class="btn btn-default" data-dismiss="modal">'+

						'</div>'


					'</form>';
   bodya.append(formularys);
   var songs="";
   $.each(al.song,function(i,value){
   	songs+='<option value="'+value.id+'">'+value.title+'</option>';
   });
   $('#song_id1').append(songs);
   var users="";
   $.each(al.usuario,function(i,value){
   	 users+='<option value="'+value.id+'">'+value.username+'</option>'
   });
   $('#user_id1').append(users);
   var genreos="";
    $.each(al.genero,function(i,value){
    	genreos+='<option value="'+value.id+'">'+value.genres+'</div>'

    })
    $('#genre_id1').append(genreos);
    postalbum();
   $('#modal-id1').modal('show');


}
function postalbum()
{ $('#newalbum').on('submit',function(v){
	v.preventDefault();
	var datos1=new FormData();
	$.each($('#imagess')[0].files,function(i,file){
		datos1.append('image',file);

	});
	datos1.append('genre_id',$('#genre_id1').val());
		datos1.append('user_id',$('#user_id1').val());
		datos1.append('song_id',$('#song_id1').val());
		datos1.append('tittles',$('#tittles').val());
		datos1.append('albumname',$('#albumname').val());
		datos1.append('year',$('#year').val());
	$.ajax({
		url:'../album/modificar/'+$('#albumid').val(),
		data:datos1,
		cache: false,
      	contentType: false,
      	processData: false,
		type:'POST',
		dataType:'json',
		success:function(f)
		{
			console.log(f);
			if(!f.success)	
			{
				if(f.error.albumname)
      				{
      					$('#albumname11').addClass('has-error');
      					$('#danger-albumname1').empty().append('<div class="alert alert-danger">'+f.error.albumname+'</div>');
      				}
      				if(f.error.tittles)
      				{
      					$('#tittles11').addClass('has-error');
      					$('#danger-tittles1').empty().append('<div class="alert alert-danger">'+f.error.tittles+'</div>');
      				}
      				if(f.error.image)
      				{
      					$('#image11').addClass('has-error');
      					$('#danger-image1').empty().append('<div class="alert alert-danger">'+f.error.image+'</div>');

      				}
      				if(f.error.year)
      				{
      					$('#year11').addClass('has-error');
      					$('#danger-year1').empty().append('<div class="alert alert-danger">'+f.error.year+'</div>');
      				}
			}
			else
			{   
				$('#mesajess').empty().hide().fadeIn('slow').append('<div class="alert alert-info">'+f.mensajes+'</div>');
				$('#modal-id1').modal('hide');
				location.reload();
			}
		}
	});

});


}

function showalbum(id){
	console.log(id);
	$.get('../albums/show/'+id,function(x){
		console.log(x);
		var data=JSON.parse(x);
		console.log(data);
		createalbum(data);
	})
}
function createalbum(data){
	console.log(data);
	var bodyshow=$('#albumshow').empty();
	formulary2='<div class="container">'+
	'<strong>genero::</strong>'+data.genero.genres+'</br>'
	+'<strong>Usuario::</strong>'+data.usuario.username+'<br>'
	+'<strong>Cancion::</strong>'+data.song.title+'<br>'
	+'<strong>Titulo::</strong>'+data.album.tittles+'<br>'
	+'<strong>Album::</strong>'+data.album.albumname+'</br>'
	+'<strong>Anio::</strong>'+data.album.year+'</br>'
	+'<strong>Portada::</strong>'+'<img src="../download/'+data.album.image+'" align="center"></img><br>'+'<strong ><p align="center">'+data.album.albumname+'</p></strong><br>'
	+'</div>';
	bodyshow.append(formulary2);
	$('#modal-id4').modal('show');

}

function listsong(id)
{
	console.log(id);
}

function modalview(){
$('#mio123').click(function(){
	console.log('hola mudos222');
	$('.fade').modal('show');
	

	})	
}

function viewlist(id)
{

$.get('../../album/list/view/'+id,function(x){
	console.log(x);
	var data=JSON.parse(x);
	console.log(data);
	createView(data);
});
}

function createView(data){

	console.log(data);
	var bodyss=$("#listbody").empty();
		formulary="hola mundo";
		bodyss.append(formulary);
			$('#modal-id23').modal('show');

}
