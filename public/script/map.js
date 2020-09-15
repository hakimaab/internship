function affichertexte(){
    document.getElementById('nom_unique').style.display= 'none'; 
    document.getElementById('suite').style.display= 'block'; 
  }
  function reduiretexte(){
    document.getElementById('nom_unique').style.display= 'block'; 
    document.getElementById('suite').style.display= 'none'; 
  }
  var sidebarBox = document.querySelector('#box');
  var sidebarBtn = document.querySelector('#btn');
  var pageWrapper = document.querySelector('#page');

function open() {
  document.getElementById("box").style.width = "250px";
  document.getElementById("page").style.marginLeft = "250px";
  document.getElementById("box").style.display = "block";
  document.getElementById("box").style.backgroundColor = "white";
  document.getElementById("head").innerText = "Indicateur de précarité numérique";
  document.getElementById("desiredInput").style.display = "block";
  document.getElementById("variables").style.display = "block";
  document.getElementById("s").style.display = "block";
  document.getElementById("explanation").style.display = "block";
  document.getElementById("box").style.boxShadow="4px 4px 10px";

}
function close() {
  document.getElementById("box").style.width = "0";
  document.getElementById("page").style.marginLeft = "0";
  document.getElementById("head").innerText = "";
  document.getElementById("desiredInput").style.display = "none";
  document.getElementById("variables").style.display = "none";
  document.getElementById("s").style.display = "none";
  document.getElementById("explanation").style.display = "none";
  document.getElementById("box").style.boxShadow="0px 0px 0px";

}
