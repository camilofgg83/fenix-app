document.getElementById('logIn').addEventListener('click', function() {
    window.location.href = '../layouts/home.html'; // Cambia 'nueva-pagina.html' por la ruta de tu archivo HTML
});

document.addEventListener('DOMContentLoaded', function() {
    // ******** Modal LogOut ************
// **********************************
var modalLogout = document.getElementById("modalErrors");
var btnLogout = document.getElementById("iconErrors");
var cerrar = document.getElementById("closeErrors");
var iconCerrar = document.getElementById("iconCancelModal");


// Abre el modal al hacer clic en el botón
btnLogout.onclick = function(event) {
   event.preventDefault(); // Evita cualquier comportamiento predeterminado
   console.log("Abriendo Modal");
   modalLogout.style.display = "block";
}


// Cierra el modal al hacer clic en el botón de cerrar
cerrar.onclick = function(event) {
   event.preventDefault(); // Evita cualquier comportamiento predeterminado
   console.log("Cerrar Modal con click");
   modalLogout.style.display = "none";
}

// Cierra el modal al hacer clic en el icono de cerrar
iconCerrar.onclick = function(event) {
   event.preventDefault(); // Evita cualquier comportamiento predeterminado
   console.log("Cerrar Modal con click");
   modalLogout.style.display = "none";
}

// Cierra el modal si se hace clic fuera de él
window.onclick = function(event) {
   if (event.target === modalLogout) {
       console.log("Cerrar Modal");
       modalLogout.style.display = "none";
   }
}
});

// JSON con los errores
const errorData = {
"errors": [
"Error al cargar el archivo",
"Campo obligatorio no completado",
"Formato de correo electrónico ",
"La contraseña es demasiado corta"
]
};

// Función para cargar los errores en el modal
function loadErrors(errors) {
// Seleccionar el contenedor de los errores
const listErrorsContainer = document.getElementById('listErrors');

// Limpiar cualquier error existente en el contenedor
listErrorsContainer.innerHTML = '';


// Recorrer el JSON y agregar cada error al contenedor
errors.forEach(error => {
   const errorElement = document.createElement('p');
   errorElement.textContent = error;
   listErrorsContainer.appendChild(errorElement);
});
}

const listMessageContainer = document.getElementById('listMessage');
listMessageContainer.innerHTML = '';
const nuevoMensaje = document.createElement('p');
nuevoMensaje.textContent = 'Mensaje Exitoso';
listMessageContainer.appendChild(nuevoMensaje);

// Llamar a la función para cargar los errores
loadErrors(errorData.errors);

