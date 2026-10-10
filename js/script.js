document.addEventListener("DOMContentLoaded", () => {

    const boton = document.getElementById("btn-saludo");
    const mensaje = document.getElementById("mensaje");

    boton.addEventListener("click", () => {
        mensaje.textContent = "¡Hola! Gracias por visitar mi página web.";
    });

});