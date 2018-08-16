$(function(){
    var div = $('#ms-ul-3');
    var MovMenu1 = $('#ms-mov-menu1')
    var closeIcon1 = $('#ms-closeIcon1')
  
    MovMenu1.on('click',function(){
      //primero menu
      console.log(div);
      
      div["0"].style.display = 'block';
    });

    closeIcon1.on('click',function(){
        //primero menu
        div["0"].style.display = 'none';
    });
  });

// funcion para el boton ir arriba
$(document).ready(function(){
 
  $('.ms2-footer1__btn__icon').click(function(){
    $('body, html').animate({
      scrollTop: '0px'
    }, 300);
  });
 
  $(window).scroll(function(){
    if( $(this).scrollTop() > 0 ){
      $('.ms2-footer1__btn__icon').slideDown(300);
    } else {
      $('.ms2-footer1__btn__icon').slideUp(300);
    }
  });
 
});