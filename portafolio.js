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

document.addEventListener("DOMContentLoaded", function () {
    const visitCounter = document.getElementById("visit-count");

    // Reiniciar contador en cada recarga
    let clickCount = 0;
    visitCounter.textContent = clickCount;

    document.addEventListener("click", function () {
        clickCount++;
        visitCounter.textContent = clickCount;
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const background = document.getElementById("background");
    const toggleButton = document.getElementById("toggle-theme");
    const body = document.getElementById("body");

    const savedTheme = localStorage.getItem("theme") || "light";
    if (savedTheme === "dark") {
        background.src = "img/fondo.webp";
        body.className = "dark-mode-text";
        toggleButton.textContent = "☀️";
    } else {
        background.src = "img/fondo1.webp";
        body.className = "";
        toggleButton.textContent = "🌚";
    }

    toggleButton.addEventListener("click", function () {
        if (body.className === "dark-mode-text") {
            background.src = "img/fondo1.webp";
            body.className = "";
            toggleButton.textContent = "🌚";
            localStorage.setItem("theme", "light");
        } else {
            background.src = "img/fondo.webp";
            body.className = "dark-mode-text";
            toggleButton.textContent = "☀️";
            localStorage.setItem("theme", "dark");
        }
    });
});


const textos = {
    es: {
        diseño: "DISEÑO GRÁFICO",
        ilus: "ilustración",
        footer: "Portafolio Edgar Oviedo 2025 Todos los derechos reservados",
        visitas: "Clicks en web: ",
    },
    en: {
        diseño: "GRAPHIC DESIGN",
        ilus: "illustration",
        footer: "Portfolio Edgar Oviedo 2025 All rights reserved",
        visitas: "Website clicks: ",
    }
};

let idioma = "es";
document.getElementById("lang-btn").addEventListener('click', function () {
    idioma = idioma === "es" ? "en" : "es";

    document.getElementById("diseño").innerText = textos[idioma].diseño;
    document.getElementById("ilus").textContent = textos[idioma].ilus;
    document.getElementById("footer").textContent = textos[idioma].footer;
    document.getElementById("visit-counter").firstChild.textContent = textos[idioma].visitas;
});

document.addEventListener("keydown", function (event) {
    if (event.ctrlKey && event.key === "m") { // Detecta Ctrl + M
        event.preventDefault(); // Evita conflictos con otros atajos
        toggleMenu(); // Llama a la función para abrir/cerrar el menú
    }
});

document.addEventListener("keydown", function (event) {
    if (event.ctrlKey && event.key === "m") { // Detecta Ctrl + M
        event.preventDefault(); // Evita conflictos con otros atajos
        toggleMenu(); // Llama a la función para abrir/cerrar el menú
    }
});

document.addEventListener("keydown", function (event) {
    if (event.ctrlKey && event.key === "m") { // Detecta Ctrl + M
        event.preventDefault(); // Evita conflictos con otros atajos
        toggleMenu(); // Llama a la función para abrir/cerrar el menú
    }
});

// Función para mostrar u ocultar el menú
function toggleMenu() {
    let menu = document.getElementById("nav-menu");
    
    if (!menu) {
        // Crear el menú si no existe
        menu = document.createElement("div");
        menu.id = "nav-menu";
        menu.innerHTML = `
            <nav class="menu-overlay">
                <ul>
                    <li><a href="index.html">Inicio</a></li>
                    <li><a href="diseñografico.html">Diseño Gráfico</a></li>
                    <li><a href="uxui.html">UX/UI</a></li>
                    <li><a href="contacto.html">Contacto</a></li>
                    <li><button id="close-menu">Cerrar</button></li>
                </ul>
            </nav>
        `;
        document.body.appendChild(menu);

        // Evento para cerrar el menú
        document.getElementById("close-menu").addEventListener("click", function () {
            menu.remove();
        });
    } else {
        // Si el menú ya existe, se elimina (para cerrarlo)
        menu.remove();
    }
}
