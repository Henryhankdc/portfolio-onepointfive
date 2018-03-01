	// Hamburger Nav
    $( document ).ready(function() {


        function hamburger(){
            $('.menu-trigger').click(function(){
                console.log('worked');
                $(this).toggleClass('menu-open');
                $('.overlay-container').toggleClass('reveal');
                $('.logo').toggleClass('change-color');
            });
        }
        
        //call scrizzipts
        hamburger();
        });
             
        
        
        
        
        