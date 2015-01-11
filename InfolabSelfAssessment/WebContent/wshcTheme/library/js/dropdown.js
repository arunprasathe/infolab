$(document).ready(function() {

    $('.drop-sub').hide().removeClass('fallback');
    
    $('.nav ul li').hoverIntent(
	
	function showThis(){

		$('.trigger', this).addClass('dropdown-open');
		$('.drop-sub', this).stop().slideDown();	
	
	},

	function hideThis(){

		$('.trigger', this).removeClass('dropdown-open');
		$('.drop-sub', this).stop().slideUp();	
	
	});
	
});





	
	