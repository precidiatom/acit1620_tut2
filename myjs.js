document.getElementById("open").addEventListener("click", function(){
    document.getElementById("control").style.left="0px";
    
}
);

document.getElementById("bg1").addEventListener("click", function(){
   document.getElementById("background").style.background = "url(img/alpacayawn.jpg)" 
});

document.getElementById("bg2").addEventListener("click", function(){
   document.getElementById("background").style.background = "url(img/near.jpg)" 
});

document.getElementById("bg3").addEventListener("click", function(){
   document.getElementById("background").style.background = "url(img/sdoge.jpeg)" 
});

document.getElementById("bg4").addEventListener("click", function(){
   document.getElementById("background").style.background = "url(img/catsurprise.jpg)" 
});

document.getElementById("close").addEventListener("click", function(){
   document.getElementById("control").style.left="-200px"; 
});