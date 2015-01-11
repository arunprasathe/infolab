$(document).ready(function() {

    $('[data-toggle=offcanvas]').click(function() {
	    $('.row-offcanvas').toggleClass('active');
	  });
    
    

    $(".bizsafe-content-tab").hide();
	$(".bizsafe-content-tab:first").show(); 

	$("ul.bizsafe-tab li").click(function() {
		$(".button-bizsafe-green").removeClass("active");
		$('.button-bizsafe-green', this).addClass("active");
		$(".bizsafe-content-tab").hide();
		var activeTab = $(this).attr("rel"); 
		$("#"+activeTab).fadeIn(); 
	});
	
	var allTabs = $("ul.switch-tabs > li > .tab-content").hide();
	$("ul.switch-tabs > li > .tab-content:first").show(); 

	$("ul.switch-tabs li a.tabs").click(function() {
		$("ul.switch-tabs li").removeClass("active");
		currentParent = $(this).parent();
		currentParent.addClass("active");
		allTabs.hide();
		currentParent.children('.tab-content').fadeIn();
	});
    
    var allPanels = $('.sidebar-container > dd').hide();
	$('.sidebar-container > dd:first').show();
	
	$('.sidebar-container > dt > a').click(function() {
	    $('.sidebar-container > dt').removeClass("expand").addClass("collapse");
		$(this).parent().removeClass("collapse").addClass("expand");
		allPanels.slideUp();
		$(this).parent().next().slideDown();
		return false;
	});
	
	$('.hidden-content').hide().removeClass('fallback');
    
    $('.hidden-trigger').hoverIntent(
	
	function showThis(){

		$('.hidden-content', this).stop().fadeIn();	
	
	},

	function hideThis(){

		$('.hidden-content', this).stop().fadeOut();	
	
	});
	
	var slideCount = $('#bizsafe-resources ul li').length;
	var slideWidth = $('#bizsafe-resources ul li').width();
	var slideHeight = $('#bizsafe-resources ul li').height();
	var sliderUlWidth = slideCount * slideWidth;
	
	$('#bizsafe-resources').css({ width: '100%', height: slideHeight });
	
	$('#bizsafe-resources ul').css({ width: sliderUlWidth, marginLeft: '40px' });
	
    $('#bizsafe-resources ul li:last-child').prependTo('#bizsafe-resources ul');

    function moveLeft() {
        $('#bizsafe-resources ul').animate({
            left: + slideWidth
        }, 400, function () {
            $('#bizsafe-resources ul li:last-child').prependTo('#bizsafe-resources ul');
            $('#bizsafe-resources ul').css('left', '');
        });
    };

    function moveRight() {
        $('#bizsafe-resources ul').animate({
            left: - slideWidth
        }, 400, function () {
            $('#bizsafe-resources ul li:first-child').appendTo('#bizsafe-resources ul');
            $('#bizsafe-resources ul').css('left', '');
        });
    };

    $('a.nav-left').click(function () {
        moveLeft();
    });

    $('a.nav-right').click(function () {
        moveRight();
    });
	
	$('.offcanvas-top').hide();
	
	$(".login-control").click(function() {
		$('.offcanvas-top').slideToggle();
		
		$(this).toggleClass("active");

		if ($(this).text() == "Close")
		   $(this).text("Login")
		else
		   $(this).text("Close");
	});
	
	$(".login-error-box").hide();
	var $errorMessages = $('#login-error');
	
	$.validate({
      form : '#login',
      validateOnBlur : false,
      errorMessagePosition : $errorMessages,
      scrollToTopOnError : false,
      onError : function() {
	      $(".login-error-box").slideDown();
      },
    });
    
    
    $.validate({
      form : '#login-b',
      scrollToTopOnError : false,
      errorMessagePosition : 'top',
      validateOnBlur : false,
    });
    
    var allPanels = $('.faq-container > .faq > .faq-hidden').hide();
	$('.faq-container > .faq > .faq-hidden:first').show();
	
	$('.faq-container > .faq > .title > a').click(function() {
	    $('.faq-container > .faq > .title').removeClass("faq-expand").addClass("faq-collapse");
		$(this).parent().removeClass("faq-collapse").addClass("faq-expand");
		allPanels.slideUp();
		$(this).parent().next().slideDown();
		return false;
	});

});



	
	