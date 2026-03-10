const icon = document.getElementById("chat-icon")
const bot = document.getElementById("chatbot")
const input = document.getElementById("chat-input")
const body = document.getElementById("chat-body")

let greeted = false


icon.onclick = () => {

bot.style.display = bot.style.display === "block" ? "none" : "block"

if(!greeted){
addMessage("AI","Hello 👋 I am Tejash's portfolio assistant. Ask me about skills, projects or education.")
showSuggestions()
greeted = true
}

}



function addMessage(sender,text){

let div = document.createElement("div")

div.innerHTML = "<b>"+sender+":</b> "

body.appendChild(div)

typeText(div,text)

body.scrollTop = body.scrollHeight

}



function typeText(element,text){

let i = 0

function typing(){

if(i < text.length){

element.innerHTML += text.charAt(i)

i++

setTimeout(typing,20)

}

}

typing()

}



function reply(question){

let q = question.toLowerCase()

if(q.includes("hi") || q.includes("hello"))
return "Hello 👋"

if(q.includes("who") && q.includes("tejash"))
return "Tejash GC is an Electronics & Telecommunication Engineering student specializing in Embedded Systems and IoT."

if(q.includes("skills"))
return "Skills include C++, Python, SQL, Arduino, ESP8266, ESP32, MATLAB, Simulink and communication systems."

if(q.includes("projects"))
return "Main projects are LiFi Communication System, RF433 MHz Communication System, IoT Asthma Monitoring System and ADO-OFDM system."

if(q.includes("education"))
return "Tejash studied Diploma at Siddaganga Polytechnic with CGPA 9.18 and currently pursuing BE at Siddaganga Institute of Technology."

if(q.includes("internship"))
return "Tejash completed industrial internship at Rittal working with automation panels and industrial control systems."

if(q.includes("publication"))
return "Tejash co-authored Intelligent Dynamic Instruction Scheduling presented at ICTCS 2025 and accepted for Springer proceedings."

if(q.includes("contact"))
return "Email: tejashtej07@gmail.com  Phone: +91 9611370876"

return "Ask about skills, projects, education, internship or publications."
}



function showSuggestions(){

let suggestions = [

"Who is Tejash",
"Skills",
"Projects",
"Education",
"Internship",
"Contact"

]

let box = document.createElement("div")

box.style.marginTop = "10px"

suggestions.forEach(q => {

let btn = document.createElement("button")

btn.innerText = q

btn.className = "suggest-btn"

btn.onclick = () => {

addMessage("You",q)

let ans = reply(q)

addMessage("AI",ans)

}

box.appendChild(btn)

})

body.appendChild(box)

}



input.addEventListener("keypress", e => {

if(e.key === "Enter"){

let q = input.value

addMessage("You",q)

let ans = reply(q)

addMessage("AI",ans)

input.value = ""

}

})
