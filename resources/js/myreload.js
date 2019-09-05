$(document).on('ready',function(){

console.log('hola mundo')
//cargarimagen();
//myreloading();

});

function cargarimagen(){

var id=1+Math.floor(Math.random()*10);
	console.log(id);


 $('.row-1').fadeIn('slow').append('cargando...').css({'border-radios':'10px','background-color':'white','color':'black',});

		var tmpimg=new Image();
		console.log(tmpimg);
		tmpimg.src=$('#myimage').attr('src');
		console.log(tmpimg.src);
		tmpimg.onload=function(){

		};
		setTimeout(function(){
			$('#myimage').html(tmpimg.src);

		},1000) ;

    }

function myreloading(){
	console.log('jhonn');
	
		/*console.log(a);*/
	
	$.ajax({
		url:'login',
		type:'POST',
		dataType:'json',
		data:{usuario:$('#username').val(),contrasenia:$('#password').val()},
		success:function(mio){
			console.log(mio);
			console.log('pruevass');
			var tmpimg1=new Image();
			tmpimg1.src=$('#myimage').attr('src');
			
			nuevo.append(tmpimg1.src);

		}



	});	

		var nuevo=$('.row-1').empty();	
		
		var tmpimg1=new Image();
			tmpimg1.src=$('#myimage').attr('src');
			
			nuevo.append(tmpimg1.src);


    }
