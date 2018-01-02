$( document ).ready(function() {

	$('.planos .btn').on('click', function(){
		console.log('hi');
		$('.modal').addClass('modal-ativo');
	});

	$('.modal').on('click', function(modal){
		if(modal.target==this){
			$(this).removeClass('modal-ativo');
		}
	});

	$('.modal-wrapper span').on('click', function(){
		$('.modal').removeClass('modal-ativo');
	});

	

	$(window).scroll(function(){
		var windowTop = $(this).scrollTop();

		$('.anime-left').each(function(){
			if(windowTop > $(this).offset().top - 600){
				$(this).addClass('anime-init');
			}
			else{
				$(this).removeClass('anime-init');
			}
		});

		$('.anime-right').each(function(){
			if(windowTop > $(this).offset().top - 600){
				$(this).addClass('anime-init');
			}
			else{
				$(this).removeClass('anime-init');
			}
		});
	});

});