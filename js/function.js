$(document).ready(function(){


 
  		//menu deplegable
	  $("#btnMenu").on('click', function(){
	  	$("#menunav").toggleClass("d-none");
	  	$("#menunav").toggleClass("ml-5");
	  	$("#menunav").toggleClass("bg-dark");
	  	$(".menu").toggleClass("bg-dark");
	  	$("#logo2").toggleClass("d-none");

	  }); 
   

	  	//Visibilidad del menu de navegacion
	$(window).scroll(function(event) {
  		var scrollTop = $(window).scrollTop();
	  	if( scrollTop >= 200){
	 		$('.menu').removeClass("");
	   		$('.menu').addClass("bg-white fixed-top shadow");
	    }else{
	   		$('.menu').removeClass("bg-white fixed-top shadow");
	   		$('.menu').addClass("");
	    }  

	});


	//desplazamiento de los botones del menu de navegacion

	var inicio = $('#Inicio').offset().top,
		top1 = $('#Top1').offset().top;
		
	$('#button1').on('click', function(){
		$('html, body').animate({
			scrollTop: top1			
		}, 700);
		
	});

	
	

});

