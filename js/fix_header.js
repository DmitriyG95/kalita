$( document ).ready(function() {

    function windowSize(){
    if ($(window).width() >= '992'){
            var FixHead = $('.fixed_header');
            
            $(window).scroll(function() {
                $('#burger_button').removeClass('active_btn')
                $('.open_burger').removeClass('visible_block')
                if($(this).scrollTop() > 10) {
                    FixHead.addClass('visible_block');
                    
                } else {
                    FixHead.removeClass('visible_block');
                
                }
            });
            
        } 
    if ($(window).width()<'992') {
        var marginTop = $('.top-bar_new').height() + $('#perenos').height();
        $(document.body).css('margin-top',marginTop+10+'px')
        $(window).scroll(function(){

            if($(this).scrollTop()>10) {
                $('.quotes_cont').css({
                    'position':'static',
                    'margin-bottom':'20px'
                })
                $('#perenos').prependTo('#nav-mobile')
            } else {
                $('.quotes_cont').css({
                    'position':'fixed',
                    'margin-bottom':'0'
                })
                $('#perenos').insertAfter('.fixed_header')
            }
        })
    }
    if ($(window).width()<'768') {
        $('#language>li').on('click', function(){
            $(this).toggleClass('show_list')
        })
    }
    }
    
    $(window).on('load resize',windowSize);

    
    
    $('#burger_button').on('click', function(){
        $('.open_burger').toggleClass('visible_block');
        $(this).toggleClass('active_btn')
        $(this).closest('.fixed_header').find('.quotes_cont').toggleClass('open_brg')
    })

    

    // добавление отступа для котировок
    var heightTopBar = $('.top-bar_new').height()
    $('.quotes_cont').css('top', heightTopBar +14+'px')

    
});


