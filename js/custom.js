(function($) {
    $(function() {
    	
		/* Programs Slider
		*******************************************/
	    var $programsSlider = $('.programs-slider'),
	        $programs = $programsSlider.find('.program-pad');
	
	    $programs.on('mouseenter', function() {
	        var index = $programs.index(this) + 1;
	        $programsSlider.addClass('program-pad' + index);
	       // $(".saturated").show();
	        //$(".desaturated").hide();
	    });
	
	    $programs.on('mouseleave', function() {
	        var index = $programs.index(this) + 1;
	        $programsSlider.removeClass('program-pad' + index);
	        //$(".saturated").hide();
	        //$(".desaturated").show();
	    });
		    
    });
})(jQuery);