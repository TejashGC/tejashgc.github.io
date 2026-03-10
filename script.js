particlesJS("particles-js",{
particles:{
number:{value:80},
size:{value:3},
color:{value:"#00e0ff"},
line_linked:{enable:true,color:"#00e0ff"},
move:{speed:3}
}
});

const text="Electronics & Telecommunication Engineer";
let i=0;

function typing(){
if(i<text.length){
document.getElementById("typing").innerHTML+=text.charAt(i);
i++;
setTimeout(typing,50);
}
}

typing();

function revealOnScroll(){
const reveals=document.querySelectorAll(".reveal");
const windowHeight=window.innerHeight;

reveals.forEach(el=>{
const elementTop=el.getBoundingClientRect().top;
if(elementTop<windowHeight-100){
el.classList.add("active");
}
});
}

window.addEventListener("scroll",revealOnScroll);
window.addEventListener("load",revealOnScroll);

window.addEventListener("scroll",()=>{
const winScroll=document.body.scrollTop||document.documentElement.scrollTop;
const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;
const scrolled=(winScroll/height)*100;
document.getElementById("progress").style.width=scrolled+"%";
});
