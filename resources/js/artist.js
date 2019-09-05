$(document).on('ready',function(){

console.log('hola mundo');

});
function nuevoart(){
	$.ajax({
		url:'artista/create',
		type:'get',
		success:function(art)
		{ console.log(art);
			var datas=JSON.parse(art);
			createform(datas);
		}
	})
}
function createform(arts)
{
   console.log(arts);
   var body=$('#body-art');
   	   body.empty();
   	   create='<form id="myform">'+
   	   		'<div class="form-group">'+
   	   		   '<label>Album</label>'+
   	   		   '<select id="album_id" name="album_id" class="form-control"></select>'+
   	   		   '</div>'+
   	   		'<div class="form-group" id="name1">'+
   	   			'<label>Nombre</label>'+
   	   	'<input type="text" name="name" id="name" class="form-control" placeholder="Introdusca su nombre">'+
   	   	    '<div id="danger-name">'+'</div>'+
   	   	'</div>'+
   	   		'<div class="form-group" id="biografia1">'+
   	   			  '<label>biografia</label>'+
   	   			  '<input type="text" name="biografia" id="biografia" class="form-control" placeholder="biografia">'+
   	   		      '<div id="danger-biografia">'+'</div>'+
   	   		'</div>'+



		'<div class="modal-footer">'+
                  			'<input type="submit"  value="Guardar"  class="btn btn-primary">'+
                  			'<input type="submit" value="Cancelar" class="btn btn-default" data-dismiss="modal">'+
         '</div>'+
		
   	           '</form>';

   	   body.append(create);
   	   var albumss="";
   	   $.each(arts.albums,function(i,value){
   	   	albumss+='<option value="'+value.id+'">'+value.albumname+'</option>'

   	   });
   	   $('#album_id').append(albumss);
   	   addartist();
   	   $('#modal-id').modal('show');
        


}
function  addartist()
{
 $('#myform').on('submit',function(z){
 	z.preventDefault();
 	var datillos=$(this).serializeArray();
 	$.ajax({
 		url:'artista',
 		type:'post',
      data:datillos,
 		success:function(ar){
 			console.log(ar);
 			if(!ar.success)	
 			{
 				if(ar.errors.biografia)
 				{
 					$('#biografia1').addClass('has-error');
 					$('#danger-biografia').empty().append('<div class="alert alert-danger">'+ar.errors.biografia+'</div>')

 				}
 				if(ar.errors.name)
 				{
 					$('#name1').addClass('has-error');
 					$('#danger-name').empty().append('<div class="alert alert-danger">'+ar.errors.name+'</div>');		


 				}

 			}
 			else{
 				$('#mesajillos').empty().hide().fadeIn('slow').append('<div class="alert alert-info">'+ar.mensajes+'</div>');
 				$('#modal-id').modal('hide');
 				location.reload();
 			}
 		}
 	})
 })

}

function deletear(id)
   {
      console.log(id);
      $.ajax({
         url:'/artista/'+id,
         type:'Delete',
         success:function(mio){
            console.log(mio);
            var mioss=JSON.parse(mio);
            console.log(mioss);
            $('#menssager').empty().hide().fadeIn('xslow').append('<div class="alert alert-danger"><strong>'+mioss.mesajes+'</strong></div>');
            $(location).attr('href','../artista');

         }
      });

   }

   function updateartist(id){
$.ajax({
   url:'artista/'+id+'/edit',
   type:'get',
   success:function(art)
   {
        console.log(art); 
        var artist=JSON.parse(art);
        console.log(artist);
        createformulary(artist);

   }
});
   }

   function createformulary(ar)
   {

        console.log(ar);
        var bodyar=$('#mio-art').empty(); 
            fromul='<form id="myform">'+
                     '<input type="hidden" id="albumid" value="'+ar.art.id+'">'+
               '<div class="form-group">'+
                  '<label>Album</label>'+
                  '<select id="album_id" name="album_id" class="form-control"></select>'+
                  '</div>'+
               '<div class="form-group" id="name11">'+
                  '<label>Nombre</label>'+
            '<input type="text" name="name" id="name" class="form-control" placeholder="Introdusca su nombre" value="'+ar.art.name+'">'+
                '<div id="danger-name1">'+'</div>'+
            '</div>'+
               '<div class="form-group" id="biografia11">'+
                    '<label>biografia</label>'+
                    '<input type="text" name="biografia" id="biografia" class="form-control" placeholder="biografia" value="'+ar.art.biografia+'">'+

                     '<div id="danger-biografia1">'+'</div>'+
               '</div>'+



      '<div class="modal-footer">'+
                           '<input type="submit"  value="Guardar"  class="btn btn-primary">'+
                           '<input type="submit" value="Cancelar" class="btn btn-default" data-dismiss="modal">'+
         '</div>'+
      
                 '</form>';
       bodyar.append(fromul);
       var albums='';
       $.each(ar.album,function(i,value){
         albums+='<option value="'+value.id+'">'+value.albumname+'</option>'

       });

       $('#album_id').append(albums);
       $('#album_id option[value="'+ar.art.album_id+'"]').attr("selected",true);
       $('#modal-idss').modal('show');
       postartist();


   }

   function postartist()
   {
    $('#myform').on("submit",function(a){
      a.preventDefault();
     var datas=$(this).serializeArray();
     $.ajax({
      url:'/artista/'+$('#albumid').val(),
      type:'PUT',
      data:datas,
      success:function(arts){

         console.log(arts);
         if(!arts.success)
         {
            if(arts.errors.name)
            { 
              $('#name11').addClass('has-error');
              $('#danger-name1').empty().append('<div class="alert alert-danger">'+arts.errors.name+'</div>'); 
            }
            if(arts.errors.biografia)
            {
               $('#biografia11').addClass('has-error');
               $('#danger-biografia1').empty().append('<div class="alert alert-danger">'+arts.errors.biografia+'</div>'); 
            }
         }
         else
         {
          $('#messageedit').empty().hide().fadeIn('xslow').append('<div class="alert alert-info">'+arts.dianamsg+'</div>');
          $('#modal-idss').modal('hide');
          location.reload();
         }
      }

     });
});
   } 

   function Mostarart(id)
   {
    console.log(id);
    $.get('artista/'+id,function(mio){
      console.log(mio);
      var datos=JSON.parse(mio);
      console.log(datos);
      createshow(datos);

    });
   }
   function createshow(arr)
   {
     console.log(arr);
     var bodysx=$("#showbody").empty();
         formy='<h3>'+arr.messagess+'</h3>'+
               '<p>'+
               '<strong>album::</strong>'+arr.album.albumname+'<br>'+
               '<strong>nombre artista::</strong>'+arr.artistas.name+'<br>'+
               '<strong>Biografia::</strong>'+arr.artistas.biografia+'<br>'+
               '<div class="modal-footer text-center">'+

            '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
     '</div>' 
         ;
         bodysx.append(formy);
         $('#modal-id1').modal('show');

    }

