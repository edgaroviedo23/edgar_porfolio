document.addEventListener("DOMContentLoaded", function () {
let clickCount = localStorage.getItem("clickCount") ? parseInt(localStorage.getItem("clickCount")) : 0;
const visitCounter = document.getElementById("visit-count");
visitCounter.textContent = clickCount;
document.addEventListener("click", function () {
        clickCount++;
        localStorage.setItem("clickCount", clickCount); 
        visitCounter.textContent = clickCount; 
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let clickCount = localStorage.getItem("clickCount") ? parseInt(localStorage.getItem("clickCount")) : 0;


    const visitCounter = document.getElementById("visit-count");


    visitCounter.textContent = clickCount;


    document.addEventListener("click", function (event) {
        clickCount++;
        localStorage.setItem("clickCount", clickCount);
        visitCounter.textContent = clickCount;


        const ripple = document.createElement("span");
        ripple.classList.add("ripple");


        ripple.style.left = `${event.clientX}px`;
        ripple.style.top = `${event.clientY}px`;

        document.body.appendChild(ripple);


        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

function enviarFormulario(event) {
    event.preventDefault();
    alert("Solicitud completada con éxito");
}

// Seleccionar el fondo parallax
const parallaxBg = document.querySelector(".background");

// Evento de movimiento del mouse
document.addEventListener("mousemove", (e) => {
    let x = (window.innerWidth / 2 - e.clientX) / 50; // Inverso al movimiento del cursor
    let y = (window.innerHeight / 2 - e.clientY) / 50;

    parallaxBg.style.transform = `translate(${x}px, ${y}px)`;
});


