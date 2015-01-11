
$(window).load(function() {
	//$('.Cat-Container').on({
	//	mouseenter : function(e){
	//		$(this).children('.Cat-Contents').stop(true,false);                    
	//		$(this).children('.Cat-Contents').animate({top:0,marginTop:0} , 500, "linear");
	//	},
	//	mouseleave : function(e){
	//		$(this).children('.Cat-Contents').stop(true,false);
	//		$(this).children('.Cat-Contents').animate({top:'100%',marginTop:'-55px'} , 500, "linear");
	//	}
	//});

	
});





$(document).ready(function() {
	 $('.cms-content-public p').each(function() {
		var $this = $(this);
		if($this.html().replace(/\s|&nbsp;/g, '').length == 0)
			$this.remove();
	});
	
	$('.cms-content-public span').each(function() {
		var $this = $(this);
		if($this.html().replace(/\s|&nbsp;/g, '').length == 0)
			$this.remove();
	});
  
	$('#myacc').collapse({
	  toggle: true
	})
	
	$('.subpage').css('margin-top', '-20px')
	
	//$('.edit-btn-admin').hide();
    $('.carousel').carousel();
    
	$('[data-toggle=offcanvas]').click(function() {
	    $('.row-offcanvas').toggleClass('active');
	  });
	
    $('#featured-slider').bjqs({
         'animtype'      : 'fade',
         'height'        : 390,
         'width'         : 1140,
		 'centercontrols': true,
         'showmarkers'   : false,
		 'responsive'    : true,
    });
      
    $('#resource-slider').bjqs({
        'animtype'      : 'fade',
        'height'        : 400,
        'width'         : 600,
		'centercontrols': true,
        'showmarkers' 	: false,
        'responsive'    : true,
    });
	
	$('#resource-slider-new').bjqs({
        'animtype'      : 'fade',
        'height'        : 340,
        'width'         : 407,
        'showmarkers' 	: false,
        'responsive'    : true,
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
	
	var allPanels = $('.sidebar-container');
	allPanels.hide();
	$('.sidebar-container:first').show();
	
	$('.sidebar-header > a').click(function() {
	    $('.sidebar-header').removeClass("panel-expand").addClass("panel-collapse");
		$(this).parent().removeClass("panel-collapse").addClass("panel-expand");
		$('.sidebar-container').slideUp();
		$(this).parent().next().slideDown();
		return false;
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
    

	// admin panel left menu collapse
	
    $(".cms-sidebar li").each(function(){
		if($(this).has("ul").length){
			$(this).addClass("list-side-parent");
        }
    })
	
	$(".cms-sidebar li ul li").each(function(){
		if($(this).has("ul").length){
			$(this).removeClass("list-side-parent")
			$(this).addClass("list-side-parent-level2");
        }
    })
	
	$('.cms-sidebar li ul').hide();
	$('.cms-sidebar li ul.sub2 li ul').hide();
	
	$('.cms-sidebar li a').click(function() {
		$(this).parent().find('ul').slideToggle();
		$(this).parent().find('ul li ul.sub2').hide();
	});
	
	$('.cms-sidebar li ul.sub2 li a').click(function() {
		$(this).parent().find('ul').slideToggle();
	});
	
	var currentURL = location.href.replace(/#.*/, ''); //remove hash tag from the link
    currentURL = currentURL.replace(/.html*/, '');
    $(".cms-sidebar ul li ul li a").each(function () {
	
	var myURL = $(this).attr("href").replace(/.html*/, '');
	myURL = myURL.replace(/#.*/, '');
		if (currentURL.indexOf(myURL) > -1 && myURL.length > 0) {
			//alert(currentURL+myURL);
			$(this).parent().parent().parent().parent().show();
			$(this).parent().parent().show();
			$(this).addClass("active");
       }
    })
	
	// manson image load
	var $container = $('#manson-container');
	// initialize Masonry after all images have loaded  
	$container.imagesLoaded( function() {
		 $container.masonry();
	});
	
	
	
    
});