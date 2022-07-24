$( document ).ready(function() {

    
    
    $('.tematics').niceSelect();
    $('.selectpopular_mob').niceSelect();

    // не больше 7
    let listOption = document.querySelectorAll('.selectpopular_mob li.option')
    let listHeight = 0
    let listOpen = document.querySelector('.nice-select.selectpopular_mob .list')
    
    for (i=0;i<listOption.length&&i<8;i++) {
        listHeight +=listOption[i].offsetHeight
    }
    if (listOpen !== null) {
        listOpen.style.maxHeight = listHeight + 35 + 'px'

    }
    

    // Добавление прозрачности последней строке
    function transparentString (selector,height) {
        let element = document.querySelectorAll(`${selector}`)
        for (i=0;i<element.length;i++) {
            if (element[i].offsetHeight>=height) {
                console.log(element[i].offsetHeight)
                element[i].classList.add('big')
            }
        }
    }
    transparentString ('.review_block_title','100')
    transparentString ('.review_block_text','100')

    // длина окна
    const windowWidth = document.documentElement.clientWidth
    function reviewTextHeight(height) {
        $('.reviewblock-text').each(function(){
            if ($(this).height()<height) {
                
                $(this).closest('.reviewmain_reviewblocks__text').find('.showhide').hide();
            } else {
                $(this).addClass('hidemore')
            }
        })
        
    }
    if (windowWidth>768) {
        transparentString ('.reviewblock-text','59');
        reviewTextHeight('60')
    } else {
        transparentString('.reviewblock-text','100');
        reviewTextHeight('100')
    }

    $('.showhide').on('click',function(){
        $(this).closest('.reviewmain_reviewblocks__text').find('.reviewblock-text').toggleClass('hidemore').toggleClass('big')
        console.log($(this).text())
        if ($(this).text()== 'Скрыть') {
            $(this).text('Читать весь комментарий') 
        } else {
            $(this).text('Скрыть' )
        }
    })
    

    $('.showall').on('click', function(e){
        e.preventDefault()
        $('.hideshow').each(function(){
            if($(this).hasClass('hiddenlink')) {
                $(this).removeClass('hiddenlink')
            } else {
                $(this).addClass('hiddenlink')
            }
        });
        if ($(this).text() == 'Смотреть все') {
            $(this).text('Скрыть тэги') 
        } else {
            $(this).text('Смотреть все')
        }
    })

    // слайдер
    const swiper = new Swiper('.reviewmain_slider .swiper', {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
      
        pagination: {
          el: '.reviewmain_slider .swiper-pagination',
          clickable: true
        },
        breakpoints: {
            320: {
              slidesPerView: 1,
              spaceBetween: 30
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 30
            },
            990: {
                slidesPerView: 3,
                spaceBetween: 30 
            }
          }
        
      });

    // popup Благодарности
    $('.submit_btn').on('click',function(){
        Fancybox.show([{
             src: "#thankspopup",
            type: "inline" ,
        }],
         {
            dragToClose: false,
            mainClass: 'thanks_popup',
        } 
        );
        
    })
    $('.title__close_popup').on('click',function(){
        Fancybox.close([{
            all:true,
        }])
    })
});


