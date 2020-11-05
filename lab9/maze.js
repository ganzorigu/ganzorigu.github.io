$(document).ready(function (){
  console.log("ready");
  var wallHit = false;
  var gameStarted = false;
  var allWalls = $("div#maze div.boundary");
  allWalls.mouseover(function() {    
    if (gameStarted) {
      allWalls.addClass("youlose");
      if (!wallHit) {        
        $("h2#status").text("You lose! :[");
        wallHit = true;
        gameStarted = false;
      }
    }
  });

  $("#end").mouseover(function(){
    if (!wallHit){      
      gameStarted = false;
      $("h2#status").text("You win! :]");
    }
  });

  $("div#start").click(function(){
    gameStarted = true;
    $("h2#status").text("Game Started");
    $(".boundary").removeClass("youlose");
    wallHit = false;
  });

  $("div#maze").mouseleave(function(){
    if (gameStarted) {
      allWalls.addClass("youlose");
      if (!wallHit) {        
        $("h2#status").text("You lose! :[");
        wallHit = true;
        gameStarted = false;
      }
    }
  });
});