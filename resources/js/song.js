
$(document).on('ready',function(){
	/*contadorsillo();*/
	console.log('hola mundo');
				
});
listsong();

/*contadorsillo();*/

function listsong(id){
  console.log(id);
 console.log('holamundo');
	$.get('../song/view1/'+id,function(mio){
		 console.log(mio);	
		 var parse=JSON.parse(mio);
		 console.log(parse);
		contadorsillo(parse);
	});

}


function contadorsillo(id){
	console.log(id);
	console.log(id.misongs[0].subir);
	/*console.log("mioss1122");*/

/*	$.each(id.song,function(i,value){
	 	console.log(value);
*/		
	  	var audios=$('a audio').attr('src','/upload/'+id.misongs[0].subir).get(0);
	  		$('#audio').append(audios);
			console.log(audios);	
			//audios.load();
			if(audios.paused)
			{
				audios.play();
			   //audios.play();
			}
			else
		     {
		     	audios.stop();
		     	audios.currentTime = 0;
		     }
		timer(id);
/*	})*/
}

function timer(sonn)
{	console.log(sonn);
	var totals=[0,0,0];
    setInterval(function(){
/*    $('audio').each(function(){
        

*/    var options=$('audio').get(0);
console.log(options);
	
	/*console.log(options);*/
	var currentTime=Math.floor(options.currentTime);	
	var sec= new Number();
	var min= new Number();
	    sec=Math.floor(options.currentTime);
		min=Math.floor(sec/10);
		min=min>=10 ? min : '0'+ min;
		sec=Math.floor(sec % 60);
		sec= sec>=10 ? sec : '0' + sec;

	/*console.log(min + ":"+ sec);*/
//para el minute 
	var duration=Math.floor(options.duration);
	var sec1=new Number();
	var minu1=new Number();
	var hora=new Number();
		sec1=Math.floor(options.duration);
		minu1=Math.floor(options.duration);
		minu1=Math.floor(minu1/60);
		minu1=minu1>=10 ? minu1:'0'+minu1;
		sec1=Math.floor(sec1 % 60);
		sec1=sec1>=10 ? sec1:'0'+ sec1;
/*	console.log(minu1 + ":"+ sec1);	*/				
    
   
	$('#calculationtim').html(min + ":" + sec);
	$('#totaltime').html(minu1 + ":" + sec1);	
 },500);

}

function cambiardata(newsx)
	{	console.log(newsx);
		$('#archivos_id').on('change',function(){
			ids=this.value;
			$.each(newsx.song,function(i,value){
				console.log(value);
				if(ids==value.id)
				{
					duracion=value.dutation;
					$('#dutation').val(duracion);
 
/*		  var options=$('audio').get(0);
		  	  console.log(options);
  		 	   options.load();
		var sec1=new Number();
		var minu1=new Number();
		sec1=Math.floor(options.duration);
		minu1=Math.floor(options.duration);
		minu1=Math.floor(minu1/60);
		minu1=minu1>=10 ? minu1:'0'+minu1;
		sec1=Math.floor(sec1 % 60);
		sec1=sec1>=10 ? sec1:'0'+ sec1;
		$('#dutation').val("00"+ minu1 + ":" + sec1);
		
*/ 			}

			});
			
				

			
			console.log("cambiando datos");
			


		})
			
	}
function songget()
{
	$.ajax({
		url:'../song/get',
		type:'GET',
		success:function(data)
		{ 
			console.log(data);
			console.log('pruebilla');
			 var mio=JSON.parse(data);
			 //ojo cuando se parse debe ser controllador bien limpios en las function para parsear
			 createformulary(mio);
		}
		


	});
}
function createformulary(a){
	console.log(a);
	var body=$('#body-song');
		body.empty();
		formulary=
		'<form id="songss" enctype="multipart/form-data" files="true">'+
		'<div class="form-group">'+
		 '<label>Genero</label><select  class="form-control" name="genre_id" id="genre_id"></select>'+
		'</div>'+
		'<div class="form-group" id="postion1">'+
					'<label>Posicion</label>'
					+'<input type="number" name="postion" id="postion" class="form-control" min="0" max="100">'+
					'<div id="danger-postion"></div>'+
				'</div>'+
		'<div class="form-group" id="upload">'+
			'<label>Subida Cancion </label>'+
			/*'<input type="file" name="archivos_id" id="archivos_id" class="form-control">'+*/
			'<select class="form-control" name="archivos_id" id="archivos_id"></select>'+
			'<div class="danger-archivos"><div>'+
					'</div>'+		
		'<div class="form-group" id="cancion1">'+
				'<label>Cancion</label>'
				+'<input type="text" class="form-control" name="cancion" id="cancion" placeholder="introdusca la cancion">'+
				'<div id="danger-canciones"></div>'+
				'</div>'+

		'<div class="form-group" id="title1">'+
				'<label>titulo</label>'+	
		     		'<input type="text" class="form-control" name="title" id="title"  placeholder="Titulo del song">'+
		     		'<div id="danger-title"></div>'+
		'</div>'+

	'<div class="from-group" id="lyrics1">'+
				'<label>Letra</label>'+
				'<input type="text" name="lyrics" id="lyrics" placeholder="letra de la cancion" class="form-control">'+
					'<div id="danger-lyrics"></div>'+
			'</div>'+
	'<div class="form-group" id="dutation1">'+
			'<label>duracion</label>'
			+'<input type="time" name="dutation" id="dutation" placeholder="duracion song" class="form-control" readonly>'+
			'<div id="msg-danger"></div>'+
	'</div>'+
'<div class="form-group id="image1">'+
	'<label>Image</label>'+
	'<input type="file" name="image" id="image"  class="form-control">'+
'</div>'+

'<div class="form-group" id="year1">'+
	'<label>Anio</label>'+
	'<input type="date" name="year" id="year" class="form-control">'+
	'<div id="danger-year"></div>'+
'</div>'+

'<div class="modal-footer">'+
                  			'<input type="submit"  value="Guardar"  class="btn btn-primary">'+
                  			'<input type="submit" value="Cancelar" class="btn btn-default" data-dismiss="modal">'+
        '</div>'+

					


		'</form>';

		body.append(formulary);
		var nuevos="";
		$.each(a.genres,function(i,value){
			console.log(value);
			nuevos+='<option value="'+value.id+'">'+value.genres+'</option>';

		});
		var archivoss="";
		$.each(a.archiv,function(i,value){
			console.log(value);
				archivoss+="<option value="+value.id+">"+value.subir+"</option>";	

		});

		$('#genre_id').append(nuevos);
		$('#archivos_id').append(archivoss);

		$("#modal-id").modal('show');
		addpost();
		cambiardata(a);	




}

function addpost(){

	$('#songss').on('submit',function(c){
		c.preventDefault();
		//var datos=$(this).serializeArray();
		var datos=new FormData();
		console.log(datos);
		datos.append('genre_id',$('#genre_id').val());
		datos.append('archivos_id',$('#archivos_id').val());
		datos.append('postion',$('#postion').val());
		datos.append('cancion',$('#cancion').val());
		datos.append('title',$('#title').val());
		datos.append('lyrics',$('#lyrics').val());
		datos.append('dutation',$('#dutation').val());
		if($('#image').val()!=="")
		{
			$.each($('#image')[0].files,function(i,file)
			{
							datos.append('image',file)
			});
		}
		datos.append('year',$('#year').val());
		$.ajax({
			url:'../song/post',
			type:'Post',
			data:datos,
			dataType:'json',
			cache:false,
			contentType: false,
      		processData: false,
			success:function(mip){
				console.log(mip);
				if(!mip.success)
				{
					if(mip.respuesta.dutation)
					{	
						$('#dutation1').addClass('has-error');
						$('#msg-danger').empty().append('<div class="alert alert-danger two">'+mip.respuesta.dutation+'</div>');
					}
					if(mip.respuesta.postion)
					{
						$('#postion1').addClass('has-error');
						$('#danger-postion').empty().append('<div class="alert alert-danger two">'+mip.respuesta.postion+'</div>');
					}
					if(mip.respuesta.lyrics)
					{
						$('#lyrics1').addClass('has-error');
						$('#danger-lyrics').empty().append('<div class="alert alert-danger two">'+mip.respuesta.lyrics+'</div>');
					}
					if(mip.respuesta.title)
					{
						$('#title1').addClass('has-error');
						$('#danger-title').empty().append('<div class="alert alert-danger two">'+mip.respuesta.title+'</div>');
					}
					if(mip.respuesta.year)	
					{
						$('#year1').addClass('has-error');
						$('#danger-year').empty().append('<div class="alert alert-danger two">'+mip.respuesta.year+'</div>');
					}



				}
				else
				{
					$('#mensajillo').empty().hide().fadeIn('slow').append('<div class="alert  alert-info">'+mip.mesajes+'</div>');
					$('#modal-id').modal('hide');
					location.reload();

				}

			}
		});

	});


}
function editarsong(id){
	console.log(id);
	$.ajax({
		url:'../song/edit/'+id,
		type:'GET',
		success:function(mios){
			console.log(mios);
			var datos1=JSON.parse(mios);
			postSong(datos1);

		}

	});

}

function postSong(msg){
	console.log(msg);
	var cuerpo=$('#body-edit');
		cuerpo.empty();
		myformulary=
		'<form id="edit-song" enctype="multipart/form-data">'+
		'<div class="form-group">'+
		'<input type="hidden" id="song-id" value="'+msg.song.id+'">'+
		'</div>'+	
		'<div class="form-group">'+
		 '<label>Genero</label><select  class="form-control" name="genre_id" id="genre_ids"></select>'+
		'</div>'+
		'<div class="form-group" id="postion2">'+
					'<label>Posicion</label>'
					+'<input type="number" name="postion" id="postions" class="form-control" min="0" max="100" value="'+msg.song.postion+'">'+
					'<div id="danger-postion2"></div>'+
				'</div>'+
		'<div class="form-group" id="upload">'+
			'<label>Upload</label>'+
				'<select class="form-control" name="archivos_id" id="archivos_id12"></select>'+

		'</div>'+
		'<div class="form-group" id="title2">'+
				'<label>titulo</label>'+	
		     		'<input type="text" class="form-control" name="title" id="title"  place holder="Titulo del song" value="'+msg.song.title+'">'+
		     		'<div id="danger-title2"></div>'+
		'</div>'+

	'<div class="from-group" id="lyrics2">'+
				'<label>Letra</label>'+
				'<input type="text" name="lyrics" id="lyrics" placeholder="letra de la cancion" class="form-control" value="'+msg.song.lyrics+'">'+
					'<div id="danger-lyrics2"></div>'+
			'</div>'+
	'<div class="form-group" id="dutation2">'+
			'<label>duracion</label>'
			+'<input type="time" name="dutation" id="dutation" placeholder="duracion song" class="form-control" value="'+msg.song.dutation+'">'+
			'<div id="msg-dutation2"></div>'+
	'</div>'+
'<div class="form-group" id="imageerror">'+
	'<label>Image</label>'+
	'<input type="file" name="image" id="imagess"  class="form-control" value="'+msg.song.image+'" placeholder="introdusca Image">'+
'</div>'+
'<div class="form-group" id="year2">'+
	'<label>Anio</label>'+
	'<input type="date" name="year" id="year" class="form-control" value="'+msg.song.year+'">'+
	'<div id="danger-year2"></div>'+
'</div>'+

'<div class="modal-footer">'+
                  			'<input type="submit"  value="Guardar"  class="btn btn-primary">'+
                  			'<input type="submit" value="Cancelar" class="btn btn-default" data-dismiss="modal">'+
        '</div>'+

					


		'</form>';



		cuerpo.append(myformulary);
		var genresss="";
		$.each(msg.genre,function(i,value){
			/*console.log(value);*/
			genresss+='<option value="'+value.id+'">'+value.genres+'</option>';


		});
		var arch="";
		$.each(msg.archivo2,function(i,valuess){
			/*console.log(valuess)*/
			 arch+="<option value="+valuess.id+">"+valuess.subir+"</option>";	
		});
		$('#archivos_id12').append(arch);
		$('#genre_ids').append(genresss);
		$('#genre_ids option[value="'+ msg.song.genre_id +'"]').attr("selected", true);
		$('#postions option[value="'+msg.song.postion+'"]').attr('selected', true);
		$('#archivos_id12 option[value="'+msg.song.archivos_id+'"]').attr('selected',true);

		editsongs();

		$('#modal-song').modal('show');


}

function editsongs(){

	$('#edit-song').on('submit',function(a){
		a.preventDefault();
		/*var datillos=$(this).serializeArray();*/
			var datillos=new FormData();
				datillos.append('genre_id',$("#genre_ids").val());
				datillos.append('postion',$("#postions").val());
				datillos.append('archivos_id',$("#archivos_id12").val());
				datillos.append('title',$("#title").val());
				datillos.append('lyrics',$("#lyrics").val());
				datillos.append('dutation',$("#dutation").val());
				datillos.append('year',$("#year").val());

				$.each($('#imagess')[0].files,function(i,file){

					datillos.append('image',file);
				});
				

			$.ajax({
				url:'../song/editando/'+$('#song-id').val(),
				type:'POST',
				data:datillos,
				dataType:'json',
				cache: false,
      			contentType: false,
      			processData: false,
			    success:function(mioss){
			    	console.log(mioss);
			    	if(!mioss.success)
			    	{
			    		if(mioss.error.title)
			    		{
			    			$('#title2').addClass('has-error');
			    		$('#danger-title2').empty().append('<div class="alert alert-danger two">'+mioss.error.title+'</div>');
			    		}
			    		if(mioss.error.postion)
			    		{
			    			$('#postion2').addClass('has-error');
			    			$('#danger-postion2').empty().append('<div class="alert alert-danger two">'+mioss.error.postion+'</div>')
			    		}
			    		if(mioss.error.lyrics)
			    			{
			    				$('#lyrics2').addClass('has-error');
			    			$('#danger-lyrics2').empty().append('<div class="alert alert-danger two">'+mioss.error.lyrics+'</div>');

			    			}
			    		if(mioss.error.dutation)	
			    		{
			    			$('#dutation2').addClass('has-error');
			    			$('#msg-dutation2').empty().append('<div class="alert alert-danger two">'+mioss.error.dutation+'</div>');
	
			    		}
			    		if(mioss.error.year)
			    		{
			    			$('#year2').addClass('has-error');
			    			$('#danger-year2').empty().append('<div class="alert alert-danger two">'+mioss.error.year+'</div>');
			    		}
			    	}
			    	else
			    	{
			    		$('#mimensaje').empty().hide().fadeIn('slow').append('<div class="alert alert-info">'+mioss.messajess+'</div>');
			    		$('#modal-song').modal('hide');
			    		location.reload();


			    	}
			    }
			});






	});

}
function mostrarsong(id)
	{
	   console.log(id);
	   $.get('../song/show/'+id, function(a) {
	   	console.log(a);
	   	var data=JSON.parse(a);
	   	console.log(data);
	   	createshow(data);
	   });


	}

function createshow(data)
 {
  	var body=$('#showbody').empty();
  	    showform='<div class="container">'+
  	    	'<strong>Genero::</strong>'+data.genero.genres+'<br>'+
  	    	'<strong>Posicion::</strong>'+data.song.postion+'<br>'+
  	    	'<strong>Subida cancion::</strong>'+'<audio src="/upload/'+data.archivo.subir+'" autobuffer preload="none" controls align="center"></audio>'+'<br>'+'<p align="justify">'+data.archivo.subir+'</p>'+'<br>'+
  	    	'<strong>Cancion::</strong>'+data.song.cancion+'<br>'+'<strong>Titulo::</strong>'+data.song.title+'<br>'+
  	    	'<strong>Letra::</strong>'+data.song.lyrics+'<br>'+
  	    	'<strong>Duracion</strong>'+data.song.dutation+'<br>'+
  	    	'<strong>Image::</strong>'+'<img src="../myimage/'+data.song.image+'" align="middle"></img>'+'<br>'+	
  	    	'<strong>Anio::</strong>'+data.song.year+
  	    	'</div>';
  	    body.append(showform);
  	    $("#modal-id2").modal('show');

	}	