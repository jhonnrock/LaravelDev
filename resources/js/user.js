$(document).on('ready',function(){

});
function nuevouser(){
	$.ajax({
		url:'users/add',
		type:'GET',
		success:function(mio)
		{ console.log(mio);
			var datos=JSON.parse(mio);
			createformulario(datos);
		}



	})
}

function createformulario(us){
	console.log(us);
	var body=$('#body-user');
		body.empty();
		create='<form id="formulariox" >'+
				 
                '<div class="form-group ">'+
                	'<label>Tipo  Usuario</label><select class="form-control" name="tipousuario_id" id="tipousuario_id"> </select>'+
                '</div>'+	

                '<div id="cuentausuario-group" class="form-group ">'+ 
                '<label>Cuenta</label><input type="text"  class="form-control" placeholder="Cuenta usuario" id="cuentausuario" name="cuentausuario" >'+
                '<div id="msg-danger1">'+ 
                    '</div>'+
                  '</div>'+
                 '<div id="username-group" class="form-group ">'+ 
                '<label>Usuario</label><input type="text"  class="form-control" placeholder="Nombre usuario" id="username" name="username" >'+
                '<div id="msg-danger2">'+ 
                    '</div>'+
                  '</div>'+	

				'<div id="password-group" class="form-group ">'+ 
                '<label>Password</label><input type="password"  class="form-control" placeholder="Password" id="password" name="password"   >'+
                '<div id="msg-danger3">'+ 
                    '</div>'+
                  '</div>'+		

              
                	'<div id="email-group" class="form-group ">'+ 
                '<label>Email</label><input type="text"  class="form-control" placeholder="Email" id="email" name="email"  >'+
                '<div id="msg-danger8">'+ 
                    '</div>'+
                  '</div>'+

                  	'<div id="recordpass-group" class="form-group ">'+ 
                		'<label>Recordar password</label><input type="password"  class="form-control" placeholder="recordpass" id="recordpass" name="recordpass" >'+
                     		'<div id="msg-danger9">'+ 
                      '</div>'+
                  '</div>'+

              
			'	<div class="modal-footer">'+
				'<div class="text-center">'+
		      '<div class="col-lg-8 col-lg-offset-2">'+	
                  '<input type="submit"  value="Guardar"  class="btn btn-primary">'+
                  '<input type="submit" value="cancelar" class="btn btn-default" data-dismiss="modal">'+
                  '</div>'+
                  '</div>'+
                  '</div>'+


				'</form>';
		
		body.append(create);
		postadd();
		var tipo="";
		$.each(us.tipousuarios,function(i,value){
			console.log(value);
			tipo+='<option value="'+value.id+'">'+value.nombtipousuario+'</option>';
		});
		$('#tipousuario_id').append(tipo);

		$('#modal-id').modal('show');




}
function postadd(c)
{
	$('#formulariox').on('submit',function(a)
	{
		a.preventDefault();
		var datos2=$(this).serializeArray();
		$.ajax({
			url:'users/add1',
			type:'post',
			data:datos2,
			success:function(as){
				console.log(as);
				if(!as.success)
				{
					if(as.mensajes.cuentausuario)
					{
						$('#cuentausuario-group').addClass('has-error');
						$('#msg-danger1').empty().append('<div class="alert alert-danger">'+as.mensajes.cuentausuario+'</div>');
					}	
					if(as.mensajes.username)
					{
						$('#username-group').addClass('has-error');
						$('#msg-danger2').empty().append('<div class="alert alert-danger">'+as.mensajes.username+'</div>')

					}
					if(as.mensajes.password)
					{
						$('#password-group').addClass('has-error');
						$('#msg-danger3').empty().append('<div class="alert alert-danger">'+as.mensajes.password+'</div>')
					}
					if(as.mensajes.email)
					{
						$('#email-group').addClass('has-error');
						$('#msg-danger8').empty().append('<div class="alert alert-danger">'+as.mensajes.email+'</div>')
					}
					if(as.mensajes.recordpass)
						{
							$('#recordpass-group').addClass('has-error');
							$('#msg-danger9').empty().append('<div class="alert alert-danger">'+as.mensajes.recordpass+'</div>')
						}
				}
				else
				{
					$('#mesajillos').empty().hide().fadeIn('slow').append('<div class="alert alert-info">'+as.msg+'</div>')
					$('#modal-id').modal('hide');
					location.reload();

				}	
			}

		});
	})

}

function useredit(id){
	console.log(id);
	$.ajax({
		url:'users/edit/'+id,
		type:'get',
		success:function(a){
			console.log(a);
			var news=JSON.parse(a);
			createform(news);
		}

	})

}
function createform(use)
{
	console.log(use);
	var body=$('#body-edit');
		body.empty();
		create='<form id="formulary" >'+

				'<input type="hidden" id="user-id" value="'+use.user.id+'">'+
				 
                '<div class="form-group">'+
                	'<label>Tipo  Usuario</label><select class="form-control" name="tipousuario_id" id="tipousuario_id"> </select>'+
                '</div>'+	

                '<div id="cuentausuario-group1" class="form-group ">'+ 
                '<label>Cuenta</label><input type="text"  class="form-control" placeholder="Cuenta usuario" id="cuentausuario" name="cuentausuario" value="'+use.user.cuentausuario+'">'+
                '<div id="msg-danger11">'+ 
                    '</div>'+
                  '</div>'+
                 '<div id="username-group1" class="form-group ">'+ 
                '<label>Usuario</label><input type="text"  class="form-control" placeholder="Nombre usuario" id="username" name="username" value="'+use.user.username+'">'+
                '<div id="msg-danger21">'+ 
                    '</div>'+
                  '</div>'+	

				'<div id="password-group1" class="form-group ">'+ 
                '<label>Password</label><input type="password"  class="form-control" placeholder="Password" id="password" name="password" value="'+use.user.password+'"  >'+
                '<div id="msg-danger31">'+ 
                    '</div>'+
                  '</div>'+		

              
                	'<div id="email-group1" class="form-group ">'+ 
                '<label>Email</label><input type="text"  class="form-control" placeholder="Email" id="email" name="email" value="'+use.user.email+'" >'+
                '<div id="msg-danger81">'+ 
                    '</div>'+
                  '</div>'+

                  

              
			'	<div class="modal-footer">'+
				'<div class="text-center">'+
		      '<div class="col-lg-8 col-lg-offset-2">'+	
                  '<input type="submit"  value="Guardar"  class="btn btn-primary">'+
                  '<input type="submit" value="cancelar" class="btn btn-default" data-dismiss="modal">'+
                  '</div>'+
                  '</div>'+
                  '</div>'+


				'</form>';
		
		body.append(create);
		var tiposs="";
		$.each(use.tipo,function(i,value){
			console.log(value);
			tiposs+='<option value="'+value.id+'">'+value.nombtipousuario+'</option>';

		});
		$('#tipousuario_id').append(tiposs)	;
		$('#tipousuario_id option[value="'+use.user.tipousuario_id+'"]').attr('selected',true);
		postsaveuser();
		$('#modal-id1').modal('show');

  

 
 }
 function postsaveuser(){
 	$('#formulary').on('submit',function(h){
 		h.preventDefault();
 		var datos1=$(this).serializeArray();
 		$.ajax({
 			url:'users/editar/'+$('#user-id').val(),
 			type:'PUT',
 			data:datos1,
 			success:function(nuevo){
 				console.log(nuevo);

 				if(!nuevo.success)
				{
					if(nuevo.error.cuentausuario)
					{
						$('#cuentausuario-group1').addClass('has-error');
						$('#msg-danger11').empty().append('<div class="alert alert-danger">'+nuevo.error.cuentausuario+'</div>');
					}	
					if(nuevo.error.username)
					{
						$('#username-group1').addClass('has-error');
						$('#msg-danger21').empty().append('<div class="alert alert-danger">'+nuevo.error.username+'</div>')

					}
					if(nuevo.error.password)
					{
						$('#password-group1').addClass('has-error');
						$('#msg-danger31').empty().append('<div class="alert alert-danger">'+nuevo.error.password+'</div>')
					}
					if(nuevo.error.email)
					{
						$('#email-group1').addClass('has-error');
						$('#msg-danger81').empty().append('<div class="alert alert-danger">'+nuevo.error.email+'</div>')
					}
					
				}
				else{
					$('#mesajilos3').empty().hide().fadeIn('Slow').append('<div class="alert alert-info">'+nuevo.mensajes+' '+nuevo.usuario.username+'</div>');
					$('#modal-id1').modal('hide');
					location.reload();


				}

 			}
 		})

 	});

 }