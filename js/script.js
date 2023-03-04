function ibg(){
   $.each($('.ibg'), function(index, val) {
   if($(this).find('img').length>0){
   $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
}
});
}
ibg();


$(window).resize(function(event) {
   mainblock();
});
function mainblock() {
   var h=$(window).outerHeight();
   $('.mainblock').css('min-height',h);
}
mainblock();


$('.filter__item').click(function(event) {
   var i= $(this).data('filter');
   if(i===1) {
      $('.portfolio__column').show();
   }else{
      $('.portfolio__column').hide();
      $('.portfolio__column.f-'+i).show();
   }
   $('.filter__item').removeClass('active');
   $(this).addClass('active');

   return false;
});
