var tInterval = null;
var frameNum=0;
var animationArr = BLANK;
var currSpeed = 250;

function btnStart() {
  window.document.getElementById("stop").disabled = false;
  window.document.getElementById("start").disabled = true;
  console.log("btn start clicked");  
  changeAnimation();
  if (tInterval==null) {
    console.log("timer started with: " + currSpeed + "ms");
    tInterval = setInterval(animation,currSpeed);
  } 
}

function changeAnimation() {
  switch(window.document.getElementById("animation").value) {
    case "Blank":
      //clearAnimation();
      animationArr = BLANK;
      return;      
    case "Exercise":
      animationArr = EXERCISE;
      break;
    case "Juggler":
      animationArr = JUGGLER;
      break;
    case "Bike":
      animationArr = BIKE;
      break;
    case "Dive":
      animationArr = DIVE;
      break;
    default:
      break;      
  }
  frameNum = 0;
}

function changeFontSize() {
  let fontSize;
  switch(window.document.getElementById("fontsize").value) {
    case "Tiny":
      //clearAnimation();      
      fontSize = 7;
      return;      
    case "Small":
      fontSize = 10;
      break;
    case "Medium":
      fontSize = 12;
      break;
    case "Large":
      fontSize = 16;
      break;
    case "Extra":
      fontSize = 24;
      break;
    case "XXL":
      fontSize = 32;
      break;
    default:
      break;      
  }
  console.log(window.document.getElementById("fontsize").value);
  window.document.getElementById("text-area").style.fontSize = fontSize+"pt";    
}
function clearAnimation() {
  window.document.getElementById("text-area").value = BLANK;
}


function btnStop() {
  window.document.getElementById("stop").disabled = true;
  window.document.getElementById("start").disabled = false;
  console.log("btn stop clicked");
  if (tInterval!=null) {
    clearInterval(tInterval);
    tInterval = null;
  }
  frameNum = 0; 
}

function turboSpeed() {
  if (document.getElementById("turbo").checked) {
    currSpeed = 50;    
  } else {
    currSpeed = 250;    
  }
  if (tInterval!=null) {
    // if animation is running
    // stop it and run with faster speed    
    clearInterval(tInterval);    
    tInterval = setInterval(animation, currSpeed);
  }
}

function animation() {
  let currStage = window.document.getElementById("text-area");
  let temp;
  temp = animationArr.indexOf("=====",frameNum);
  // console.log(temp);
  if (temp<0) {
    currStage.value = animationArr.substring(frameNum)  
    frameNum = 0;
  } else {
    currStage.value = animationArr.substring(frameNum, temp)
    frameNum = temp + 6;
  }  
}


window.onload = function() {
  // Initial value should be set like this.
  window.document.getElementById("animation").selectedIndex=0;
  document.getElementById("turbo").checked = false;
  window.document.getElementById("stop").disabled = true;
  window.document.getElementById("start").disabled = false;  
  //************************************** */
  window.document.getElementById("text-area").value = BLANK;
  window.document.getElementById("start").onclick = btnStart;
  window.document.getElementById("stop").onclick = btnStop;
  window.document.getElementById("turbo").onchange = turboSpeed;
  window.document.getElementById("animation").onchange = changeAnimation;
  window.document.getElementById("fontsize").onchange = changeFontSize;

}