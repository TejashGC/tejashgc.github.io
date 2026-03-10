const input=document.getElementById("chat-input")
const body=document.getElementById("chat-body")

input.addEventListener("keypress",e=>{

if(e.key==="Enter"){

let q=input.value

body.innerHTML+="<div>You: "+q+"</div>"

let a="I am Tejash's portfolio assistant."

if(q.includes("skills")) a="Tejash works on Embedded systems, IoT and communication."

if(q.includes("projects")) a="He built LiFi, RF433 system and IoT asthma monitor."

body.innerHTML+="<div>AI: "+a+"</div>"

input.value=""

}

})
