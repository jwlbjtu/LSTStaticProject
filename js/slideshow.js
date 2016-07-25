(function($) {
    $(function() {

        // Variables
        var $window = $(window);
        window.settings = {};
        window.settings.defaultAnimationDuration = 300;

        $window.on('resize.slides', function() {
            var pictureAspectRatio = 630 / 975;

            // Make slides equal heights
            var equalHeights = function() {
                var width = $('.slider.generic li').eq(0).width(),
                    calculatedHeight = pictureAspectRatio * width;

                return calculatedHeight;
            };

            var idealHeight = equalHeights();

            $('.slider.generic li').css({
                'height': idealHeight
            });
        });

        /* Init slideshow
         ************************/
        var slider = $('.bxslider').bxSlider({
            nextSelector: '#slider-next',
            prevSelector: '#slider-prev',
            nextText: '<div class="slider-arrow nextslide"></div>',
            prevText: '<div class="slider-arrow prevslide"></div>',
            pager: false,
            speed: window.settings.defaultAnimationDuration,
            adaptiveHeight: true,
            useCSS: false,
            adaptiveHeightSpeed: window.settings.defaultAnimationDuration,
            onSlideAfter: function(currentSlide) {
                $window.trigger('load.slide-count');
                $('.picture-caption').html(currentSlide.find('img').attr('title'));
            },
            onSliderLoad: function() {
                $window.trigger('resize.slides');
            }
        });

        // Update slide counter with current slide number
        if (slider.length > 0) {
            $window.on('load.slide-count', function() {
                var slide_count = slider.getSlideCount();
                var slide_curr = slider.getCurrentSlide();
                $('.slide-counter').html((slide_curr + 1) + ' of ' + slide_count);
                $('.picture-caption').html($('.bxslider li img:last').attr('title'));
            }).trigger('load.slide-count');
        }

    });
})(jQuery);