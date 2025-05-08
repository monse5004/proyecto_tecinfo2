// Función para abrir la imagen en una ventana emergente (modal)
function mostrarImagen(imagenSrc) {
    var modal = document.getElementById("modal");
    var imgModal = document.getElementById("imgModal");
    
    // Cambiar la fuente de la imagen en el modal
    imgModal.src = imagenSrc;

    // Mostrar el modal
    modal.style.display = "block";
}

// Función para cerrar la ventana emergente
function cerrarModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}
