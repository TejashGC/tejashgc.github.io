const icon = document.getElementById("chat-icon")
const bot = document.getElementById("chatbot")
const input = document.getElementById("chat-input")
const body = document.getElementById("chat-body")

icon.onclick = () => {
bot.style.display = bot.style.display === "block" ? "none" : "block"
}

function reply(question){

let q = question.toLowerCase()

if(q.includes("hi") || q.includes("hello"))
return "Hello 👋 I am Tejash's portfolio assistant."

if(q.includes("who") && q.includes("tejash"))
return "Tejash GC is an Electronics & Telecommunication Engineering student focusing on Embedded Systems, IoT and Communication Technologies."

if(q.includes("skills"))
return "Tejash works with C++, Python, SQL, Arduino, ESP8266, ESP32, MATLAB, Simulink and communication systems."

if(q.includes("projects"))
return "Tejash built LiFi Communication System, RF433 MHz Communication System, IoT Asthma Monitoring System and ADO-OFDM System using MATLAB."

if(q.includes("lifi"))
return "LiFi project uses LED light for wireless data transmission using optical communication."

if(q.includes("rf433"))
return "RF433 system uses HT12E encoder and HT12D decoder modules for wireless communication."

if(q.includes("iot"))
return "IoT Asthma Monitoring system collects respiratory sensor data using ESP32."

if(q.includes("education"))
return "Tejash completed Diploma in Electronics from Siddaganga Polytechnic (CGPA 9.18) and is pursuing BE at Siddaganga Institute of Technology."

if(q.includes("internship"))
return "Tejash completed industrial internship at Rittal working with automation panels and industrial systems."

if(q.includes("publication"))
return "Tejash co-authored a paper titled Intelligent Dynamic Instruction Scheduling presented at ICTCS 2025 and accepted for Springer proceedings."

if(q.includes("certificate"))
return "Tejash completed MATLAB & Simulink Onramp and Cisco Networking Fundamentals certification."

if(q.includes("contact"))
return "You can contact Tejash via email: tejashtej07@gmail.com or phone: +91 9611370876."

if(q.includes("resume"))
return "You can download Tejash resume using the Resume button on this website."

if(q.includes("linkedin"))
return "LinkedIn profile is available through the LinkedIn button in the hero section."

if(q.includes("codechef"))
return "CodeChef profile shows Tejash programming activity and coding practice."

if(q.includes("thanks") || q.includes("thank"))
return "You're welcome 😊"

return "I am Tejash portfolio assistant. Ask about skills, projects, education, internship, publications or contact."
}

input.addEventListener("keypress", e => {

if(e.key === "Enter"){

let q = input.value

body.innerHTML += "<div><b>You:</b> " + q + "</div>"

let ans = reply(q)

body.innerHTML += "<div><b>AI:</b> " + ans + "</div>"

body.scrollTop = body.scrollHeight

input.value = ""

}

})
