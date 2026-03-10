const icon = document.getElementById("chat-icon")
const bot = document.getElementById("chatbot")
const input = document.getElementById("chat-input")
const body = document.getElementById("chat-body")

let greeted = false

icon.onclick = () => {

bot.style.display = bot.style.display === "block" ? "none" : "block"

if(!greeted){
addMessage("AI","Hello 👋 I am Tejash's portfolio assistant. Ask me about skills, projects, education or internship.")
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

setTimeout(typing,18)

}

}

typing()

}

function reply(question){

let q = question.toLowerCase()

if(q.includes("hi") || q.includes("hello"))
return "Hello 👋"

if(q.includes("who") && q.includes("tejash"))
return "Tejash GC is an Electronics & Telecommunication Engineering student specializing in Embedded Systems, IoT and Communication Technologies."

if(q.includes("skill"))
return "Tejash works with C++, Python, SQL, Arduino, ESP8266, ESP32, MATLAB, Simulink and networking fundamentals."

if(q.includes("project"))
return "Main projects include LiFi Communication System, RF433 MHz Communication System, IoT Asthma Monitoring System and ADO-OFDM communication system."

if(q.includes("education") || q.includes("study"))
return "Tejash completed Diploma in Electronics at Siddaganga Polytechnic with CGPA 9.18 and is pursuing BE in Electronics & Telecommunication at Siddaganga Institute of Technology."

if(q.includes("intern") || q.includes("rittal") || q.includes("training"))
return "Tejash completed an Industrial Internship at Rittal from Jan 19 to May 23 working with industrial automation systems and control panels."

if(q.includes("publication") || q.includes("paper"))
return "Tejash co-authored the research paper 'Intelligent Dynamic Instruction Scheduling: An AI Driven Approach for Next Generation Processors' presented at ICTCS 2025 and accepted for Springer conference proceedings."

if(q.includes("certificate"))
return "Certifications include MATLAB & Simulink Onramp and Cisco Networking Fundamentals using Packet Tracer."

if(q.includes("activity") || q.includes("ieee"))
return "Tejash is a Member of the IEEE Photonics & Communications Society Joint Chapter."

if(q.includes("contact") || q.includes("email") || q.includes("phone"))
return "You can contact Tejash via email: tejashtej07@gmail.com or phone: +91 9611370876."

if(q.includes("resume"))
return "You can download Tejash's resume using the Resume button in the hero section."

return "You can ask about Tejash's skills, projects, education, internship, publications or contact."
}

function showSuggestions(){

let suggestions = [
"Who is Tejash",
"Skills",
"Projects",
"Education",
"Internship",
"Publications",
"Contact"
]

let box = document.createElement("div")
box.className = "suggest-container"

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
