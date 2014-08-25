(function(){
	"use strict";

	var switchers = $('.carousel-switch'),
		carousels = $('.carousel'),
		current = 0;

	switchers.each(function(index){
		$(this).click(function(){
			if(index !== current){
				switchers.eq(current).removeClass('active');
				carousels.eq(current).removeClass('active');
				switchers.eq(index).addClass('active');
				carousels.eq(index).addClass('active');
				current = index;
			}
		});
	});
})();