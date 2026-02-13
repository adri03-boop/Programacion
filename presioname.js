const contenedor = document.querySelector(".presioname-container");
const boton = document.querySelector(".btn-abrir");

boton.addEventListener("click", (e) => {
    e.stopPropagation(); // evita conflictos
    contenedor.classList.toggle("abierto");
});
