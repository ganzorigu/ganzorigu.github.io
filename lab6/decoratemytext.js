function alertWrapper() {
  alert("Hello, world!");  
}

function biggerFont() {
  // window.document.getElementById("userText").className="biggerFont";
  window.document.getElementById("userText").style.fontSize="24pt";
  // window.document.getElementById("userText").style.background="yellow";
}

// function incFontSize() {
//   var currSize = parseInt(window.document.getElementById("userText").style.fontSize);
//   currSize +=2;
//   window.document.getElementById("userText").style.fontSize = currSize+"pt";
// }

function incFontSize() {
  currSize +=2;
  window.document.getElementById("userText").style.fontSize = currSize+"pt";
}

function changeFont() {
  var chkBoxFont = window.document.getElementById("bling");
  if (chkBoxFont.checked==true) {
    window.document.getElementById("userText").style.fontWeight="bold";
    window.document.getElementById("userText").style.color="green";
    window.document.getElementById("userText").style.textDecoration="underline";

    window.document.getElementsByTagName("body")[0].className="setBackground";



  } else {
    window.document.getElementById("userText").style.fontWeight="normal";
    window.document.getElementById("userText").style.color="";
    window.document.getElementById("userText").style.textDecoration="";
    window.document.getElementsByTagName("body")[0].className="";
  }
}

var timerTemp = null;
function increaseFont() {
  var chkIncFont = window.document.getElementById("fontInc");
  if (chkIncFont.checked==true) {
    timerTemp = setInterval(incFontSize,500);
    console.log("checked");
  } else {
    if(timerTemp!=null) {
      clearInterval(timerTemp);
      timerTemp = null;
    } 
    window.document.getElementById("userText").style.fontSize = "14pt";
    currSize = 14;
    
  }
}


// setInterval(incFontSize,500);

function pigLatinConvert() {
  var myText = window.document.getElementById("userText").value;
  // console.log(myText);

  var temp = myText.split(" ");
  // console.log(temp);
  
  for (let i=0; i<temp.length; i++) {
    temp[i] = str2PigLatin(temp[i]);
  }
  var output="";
  for (let t of temp) {
    output+=t+" ";
  }
  window.document.getElementById("userText").value = output;

}

function str2PigLatin(str) {
  var consonants = ["B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Z"];
  var strArray = str.toUpperCase().split("");
  var j = 0;
  var vowelFound = false;
  var consonantFound = false;
  if (str.length>0) {    
    while(j<strArray.length && !vowelFound){
      consonantFound = false;
      for (let i=0;i<consonants.length; i++) {
        if (strArray[0]==consonants[i]) {
          consonantFound = true;
          break;
        }
      }
      if (consonantFound) {
        j++;
        strArray.push(strArray.shift());
      } else {
        vowelFound = true;
      }
    }
    var output="";
    for (let t of strArray) {
      output+=t;
    }

    return output.toLowerCase()+"ay";
  }
  return str;
}

function malkovichConvert() {
  var myText = window.document.getElementById("userText").value;
  if (myText.length>=5) {
    window.document.getElementById("userText").value = "Malkovich";
  }
}

var obj
var currSize 
window.onload = function(){
  // window.document.getElementById("btnDecorate").onclick = alertWrapper;  
  window.document.getElementById("btnDecorate").onclick = biggerFont;  
  window.document.getElementById("btnPigTail").onclick = pigLatinConvert;  
  window.document.getElementById("btnMalkovich").onclick = malkovichConvert;  
  window.document.getElementById("bling").onchange = changeFont;
  window.document.getElementById("fontInc").onchange = increaseFont;

  obj=document.getElementById("userText");
  currSize = parseInt(window.getComputedStyle(obj).fontSize);
}

