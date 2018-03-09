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