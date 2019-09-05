$(document).on('ready',function(){

});
function check_values() {
        if ($("#username").val().length != 0 && $("#password").val().length != 0) {
            $("#button1").removeClass("hidden").animate({ left: '250px' });;
            $("#lock1").addClass("hidden").animate({ left: '250px' });;
        }
    }

 function postlogins()
 {
 	console.log('hola munndo');
 	console.log($('#username').val());
 	console.log($('#passwords').val());
 	console.log($('#cuentausuario').val());
 	console.log($('#email.com').val());
 $.ajax({
 	url:'login',
 	type:'POST',
 	dataType:'Json',
 	data:{username:$('#username').val(),cuentausuario:$('#cuentausuario').val(),passwords:$('#passwords').val(),email:$('#email').val()},
 	success:function(midata){
 		console.log(midata);
 		//console.log(midata.user[0].id);
 		/*var mio=JSON.parse(midata);*/
 		/*cosole.log(mio);*/
 			if(midata.success)
 			{
 				$('#mialerta').addClass('has-error');
 				$('#danger-alert12').empty().append('<div class="alert alert-info">'+midata.mensajillo+'</div>');
 				$(location).attr('href','http://www.johnnmuic.com:4000/admin/'+midata.user[0].id);
 			}
 			else{

 				$('#mialerta').addClass('hass-error');
 				$('#danger-alert12').empty().append('<div class="alert alert-danger">'+midata.mensaje_error+'</div>');
 				
 			}
 	}
 	});
 }   