window.addEventListener("load",()=>{
document.getElementById("loader").style.display="none"
})

const text="Electronics & Telecommunication Engineer"
let i=0

function typing(){
if(i<text.length){
document.getElementById("typing").innerHTML+=text.charAt(i)
i++
setTimeout(typing,40)
}
}

typing()

function reveal(){
document.querySelectorAll(".reveal").forEach(el=>{
const top=el.getBoundingClientRect().top
if(top<window.innerHeight-100){
el.classList.add("active")
}
})
}

window.addEventListener("scroll",reveal)

fetch("projects.json")
.then(r=>r.json())
.then(data=>{
let html=""
data.forEach(p=>{
html+=`
<div class="card">
<h3>${p.title}</h3>
<p>${p.desc}</p>
</div>
`
})
document.getElementById("projectGrid").innerHTML=html
})

window.addEventListener("scroll",()=>{
const win=document.documentElement.scrollTop
const height=document.documentElement.scrollHeight-document.documentElement.clientHeight
document.getElementById("progress").style.width=(win/height)*100+"%"
})
