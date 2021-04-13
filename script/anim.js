$(function(){

    $("#map").mousemove(function(event){
      $("span").text(event.pageX + ", " + event.pageY);
    });
  
    $( "#tt" ).toggle(function() {
      alert( "Please search your location !" );
    }, function() {
      alert( "welcome to the map." );
    });

    $("#p").hover(function(){
      $('#p').css('text-shadow',"2px 2px #ff0000").css('border',"1px solid").css("text-transform", "uppercase").css('padding', '15px').css('box-shadow', "5px 10px #ff0000");
  },
  function(){
    $('#p').css('text-shadow',"none").css('border',"none").css('box-shadow', "none").css("text-transform", "none");
  });








});