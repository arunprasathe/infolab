$(document).ready(function() {
	
	var current_fs, next_fs, previous_fs;
	
	var allPanels = $('.msform > fieldset > .content').hide();
	$('.msform > fieldset > .content:first').show();
	$('.msform > fieldset > .content > #hidden-fields').hide();
	//$('.msform > fieldset > .fs-title > a').css("display", "none");
	
	$("#lookup").click(function() {
		$('.msform > fieldset > .content > #hidden-fields').slideDown();
	});
	
	$(".next").click(function() {
		current_fs = $(this).parentsUntil('fieldset');
		current_fs_parent = $(this).parentsUntil('form');
		next_fs = $(this).parentsUntil('form').next();
		
		allPanels.slideUp();
		next_fs.children('.content').slideDown();
		next_fs.children('.fs-title').addClass('active');
		current_fs_parent.children('.fs-title').removeClass('active');
		current_fs.siblings().children('.changes').css("display", "block");
		
		$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
		$("#progressbar li").eq($("fieldset").index(next_fs) - 1).removeClass("active").addClass("past");
		
	});
	
	
	$(".changes").click(function() {
		current_fs = $(this).parentsUntil('fieldset');
		current_fs_parent = $(this).parentsUntil('form');
		next_fs = $(this).parentsUntil('form').next();
		
		allPanels.slideUp();
		current_fs_parent.children('.content').slideDown();
		$('.fs-title').removeClass('active');
		current_fs_parent.children('.fs-title').addClass('active');
	});
	
});