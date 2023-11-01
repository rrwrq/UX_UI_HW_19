/*$("#workButton").hover(function(){
    $(this).css("background-color", "violet"
        );

    },function(){
        $(this).css("background-color", "gray");
        
    });

    const btn = document.getElementById('btn');

    btn.addEventListener('click', function onClick(event) {
      // 👇️ change background color
      document.body.style.backgroundColor = 'salmon';
    
      // 👇️ optionally change text color
      // document.body.style.color = 'white';
    });
    */

/*
$( ".navigation" ).hover(function() {
    $( this ).fadeOut( 100 );
    $( this ).fadeIn( 500 );
});
*/



$( "#go" ).hover (function() {
    $( ".block" ).first().animate({
        bottom: 10
    }, {
        duration: 1000,
        top:10
      }
    );
  });


/*
$(".navigation").hover(function() {
  $(this).animate({height: "100px"}, 500, 'easeOutBounce');
});

*/