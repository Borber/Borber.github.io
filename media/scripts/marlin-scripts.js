(function($){
	"use strict";	
    $(document).ready(function() {
            
        if ( $('.post').length ) { $('.post').fitVids(); }
            
        if ( $('select').length ) { $('select').chosen(); }
		
		// Menu Navigation
        if ( $('.toggle-menu').length ) {
            $('.toggle-menu').click( function(){
                $('#nav-wrapper .vtmenu').toggle();
            } );
        }
        
        $('.vtmenu .caret').click( function() {
            var $submenu = $(this).closest('.menu-item-has-children').find(' > .sub-menu');
            
            $submenu.toggle();
            
            return false;
        });
        $(window).resize( function() {
            $icon.css({
                'width' : parseFloat( ( 100 / $('.social-footer a').length ) ).toFixed(4) + '%'
            });
        });
		
		// Toggle vtmenu
		$(".nav-toggle").on("click", function(){
			$(this).toggleClass("active");
			$(".vtmenu").slideToggle();
		});
	
		// Fitvids
		$(document).ready(function(){
			$(".container").fitVids();
		});

    });
})(jQuery);