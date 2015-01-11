$(document).ready(function() {

    var allTabs = $("ul.switch-tabs > li > .tab-content").hide();
	$("ul.switch-tabs > li > .tab-content:first").show(); 

	$("ul.switch-tabs li a.tabs").click(function() {
		$("ul.switch-tabs li").removeClass("active");
		currentParent = $(this).parent();
		currentParent.addClass("active");
		allTabs.hide();
		currentParent.children('.tab-content').fadeIn();
	});

});



	
	