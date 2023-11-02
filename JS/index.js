

$(function(){
  $(".navigation").mouseenter(function(){
    $(this).css({
      'transition-duration': "0.8s",
      'transform':"translatey(-5px)",
    });
  });

  $(".navigation").mouseleave(function(){
    $(this).css({
      'transform':"translatey(0px)"
    });
  });


})