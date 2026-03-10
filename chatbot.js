const icon=document.getElementById("chat-icon")
const bot=document.getElementById("chatbot")
const input=document.getElementById("chat-input")
const body=document.getElementById("chat-body")

icon.onclick=()=>{
bot.style.display=bot.style.display==="block"?"none":"block"
}

input.addEventListener("keypress",e=>{

if(e.key==="Enter"){

let q=input.value

body.innerHTML+="<div>You: "+q+"</div>"

let a="I am Tejash's portfolio assistant."

if(q.toLowerCase().includes("skills"))
a="Tejash works on Embedded systems, IoT and communication."

if(q.toLowerCase().includes("projects"))
a="He built LiFi system, RF433 communication and IoT asthma monitoring."

body.innerHTML+="<div>AI: "+a+"</div>"

input.value=""

}

})
