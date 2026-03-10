particlesJS("particles-js",{
particles:{
number:{value:60},
size:{value:3},
color:{value:"#00e0ff"},
line_linked:{enable:true,color:"#00e0ff"},
move:{speed:2}
}
});

function revealOnScroll(){

const elements=document.querySelectorAll(".reveal");
const windowHeight=window.innerHeight;

elements.forEach(el=>{

const elementTop=el.getBoundingClientRect().top;

if(elementTop<windowHeight-100){
el.classList.add("active");
}

});

}

window.addEventListener("scroll",revealOnScroll);
window.addEventListener("load",revealOnScroll);


/* typing animation */

const text="Electronics & Telecommunication Engineer";
let index=0;

function typing(){

if(index<text.length){
document.getElementById("typing").innerHTML+=text.charAt(index);
index++;
setTimeout(typing,50);
}

}

window.onload=function(){
typing();
revealOnScroll();
};
