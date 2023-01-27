/* Declare variables below to save the different sections (divs) of your story*/

let nextbutton1=document.querySelector(".nextbutton1");
let nextbutton2=document.querySelector(".nextbutton2");
let opening=document.querySelector(".story-opening");
let option1=document.querySelector(".option-one");
let option2=document.querySelector(".option-two");
let option1screen=document.querySelector(".open-one-screen");
let option2screen=document.querySelector(".open-two-screen");
let option1end=document.querySelector(".open-one-end");
let option2end=document.querySelector(".open-two-end");
let homefail=document.querySelector(".homebuttonfail");
let homesuccess=document.querySelector(".homebuttonsuccess");
let creature=document.querySelector(".creature");
let inner=document.querySelector(".innerhtml");
    







 /*When youre ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!*/
     
option1.onclick=function(){
    opening.style.display="none";
    option1screen.style.display="block";
    option1.style.display="none";
    option2.style.display="none";
    nextbutton1.style.display="block";
    
    
    
};

option2.onclick=function(){
    opening.style.display="none";
    option2screen.style.display="block";
    option1.style.display="none";
    option2.style.display="none";
    nextbutton2.style.display="block";
    
};

nextbutton1.onclick=function(){
    option1screen.style.display="none";
    nextbutton1.style.display="none";
    option1end.style.display="block";
    homefail.style.display="block";
    
    
};

nextbutton2.onclick=function(){
    option2screen.style.display="none";
    nextbutton2.style.display="none";
    option2end.style.display="block";
    homesuccess.style.display="block";
    
    
};



homefail.onclick=function(){
    opening.style.display="block";
    option1end.style.display="none";
    homefail.style.display="none";
    option1.style.display="block";
    option2.style.display="block";
    
};

homesuccess.onclick=function(){
    opening.style.display="block";
    option2end.style.display="none";
    homesuccess.style.display="none";
    option1.style.display="block";
    option2.style.display="block";
    
};

creature.onmouseover=function(){
    creature.style.width="800px";
    inner.innerHTML="Boo!";
    
    
};

creature.onmouseout=function(){
   creature.style.width="700px";
    
};







