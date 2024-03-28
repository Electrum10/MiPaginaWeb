const nav = document.querySelector(".nav"); // Modificado para seleccionar por clase
const abrir = document.querySelector(".abrir-menu"); // Modificado para seleccionar por clase
const cerrar = document.querySelector(".cerrar-menu"); // Modificado para seleccionar por clase

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
});

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
});
