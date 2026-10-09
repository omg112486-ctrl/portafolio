const boton= document.getElementById("btn-saludo")
const mensaje= document.getElementById("mensaje")

let saludo= 0

function saludar(){
    saludo++;
    mensaje.textContent = `gracias por saludar,llevas ${saludo} saludo(s)` 
}
boton.addEventListener("click", saludar)
