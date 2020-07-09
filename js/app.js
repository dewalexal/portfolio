$(function(){
    // Tabs
    $('.nav_link').on('click', function(event){
        event.preventDefault();
    
        let tabName = $(this).data('tab');
        let tab = $('section[data-tab="'+tabName+'"]');

            $('.nav_link').removeClass('active');
            $(this).addClass('active');
        
            $('section').removeClass('active');
            tab.addClass('active');   

    
    });

    // Works Photo


    $('.vertical_photo').on("click", function(event){
        event.preventDefault();

        let photo = $(this).data('filter');
        let filter = $('.blog[data-filter="'+photo+'"');


        setTimeout(function(){
            $('.vertical_photo').removeClass('active');
            $(this).addClass('active');

            $('.blog').removeClass('active');
            filter.addClass('active');
        },500);

        });

});

