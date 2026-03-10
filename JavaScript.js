particlesJS("particles-js", {

particles: {

number: { value: 60 },

size: { value: 3 },

color: { value: "#00e0ff" },

line_linked: { enable: true, color: "#00e0ff" },

move: { speed: 2 }

}

});

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {

reveals.forEach(el => {

const rect = el.getBoundingClientRect();

if (rect.top < window.innerHeight - 100) {

el.classList.add("active");

}

});

}

window.addEventListener("scroll", revealOnScroll);

window.addEventListener("load", revealOnScroll);
