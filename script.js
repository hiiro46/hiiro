$(function(){
  $(".title-name").click(function(){
    $("html,body").scrollTop(0);
  });
  $('head').append(
'<style>body{display:none;}'
);
  $(window).on("load", function() {
    $('body').fadeIn("slow");
  });
    $('.photo').on('click',function(){
        $('.modal').hide();
        modal_id = $(this).data('modal_id');
        $('#modal-pezi').show();
        $('#modal-widow'+modal_id).show(1000);
    });
    $(".fa-times").click(function(){
      $("#modal-pezi").fadeOut(1000);
    });
});
