
function fishClick(){
  var fish=document.getElementById("fish");
  var crab=document.getElementById("crab");
  var octopus=document.getElementById("octopus");
  var fishB=document.getElementById("fishbutton");
  var crabB=document.getElementById("crabbutton");
  var octopusB=document.getElementById("octopusbutton");
  fishB.style.backgroundColor = "lightblue";
  crabB.style.backgroundColor = "transparent";
  octopusB.style.backgroundColor = "transparent";
  fish.style.display="block";
  crab.style.display="none";
  octopus.style.display="none";
  
  }
function crabClick(){
  var fish=document.getElementById("fish");
  var crab=document.getElementById("crab");
  var octopus=document.getElementById("octopus");
  var fishB=document.getElementById("fishbutton");
  var crabB=document.getElementById("crabbutton");
  var octopusB=document.getElementById("octopusbutton");
  fishB.style.backgroundColor = "transparent";
  crabB.style.backgroundColor = "lightblue";
  octopusB.style.backgroundColor = "transparent";
  fish.style.display="none";
  crab.style.display="block";
  octopus.style.display="none";
  }
function octopusClick(){
  var fish=document.getElementById("fish");
  var crab=document.getElementById("crab");
  var octopus=document.getElementById("octopus");
  var fishB=document.getElementById("fishbutton");
  var crabB=document.getElementById("crabbutton");
  var octopusB=document.getElementById("octopusbutton");
  fishB.style.backgroundColor = "transparent";
  crabB.style.backgroundColor = "transparent";
  octopusB.style.backgroundColor = "lightblue";
  fish.style.display="none";
  crab.style.display="none";
  octopus.style.display="block";
  }
