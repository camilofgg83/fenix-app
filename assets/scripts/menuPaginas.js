function loadContentInt(componentName) {
    const content = document.getElementById('formInterno');
    const options = document.querySelectorAll('.linkOpcionMenuCard'); // Selecciona todas las opciones

    // Asegurarte de que el contenedor existe
    if (!content) {
        console.error("El contenedor 'formInterno' no existe.");
        return;
    }

    // Elimina la clase 'selected' de todas las opciones
    options.forEach(option => {
        option.classList.remove('selected');
    });

    // Busca la opción actual usando el atributo data-component en <a>
    const currentOption = Array.from(options).find(option => 
        option.getAttribute('data-component') === componentName
    );

    if (currentOption) {
        currentOption.classList.add('selected'); // Añadir clase 'selected' al enlace seleccionado
        console.log(currentOption);
    } else {
        console.log('Opción no encontrada'); // Mensaje si no se encuentra la opción
    }

    // Limpiar el contenido anterior
    content.innerHTML = '';

    switch (componentName) {
        case 'personaJuridica':
            const personaJuridica = document.createElement('persona-juridica');
            console.log("Cargando componente persona-juridica");
            content.appendChild(personaJuridica);
            break;
        
        case 'direccionmapa':
            const direccionMapa = document.createElement('direccion-mapa');
            content.appendChild(direccionMapa);
            break;

        case 'contactos':
            const contactos = document.createElement('contactos');
            content.appendChild(contactos);
            break;

        case 'archivosadjuntos':
            const archivosAdjuntos = document.createElement('archivos-adjuntos');
            content.appendChild(archivosAdjuntos);
            break;

        case 'notasadjuntas':
            console.log("Llega a la opción de notasadjuntas");
            const notasAdjuntas = document.createElement('notas-adjuntas');
            content.appendChild(notasAdjuntas);
            break;

        default:
            content.innerHTML = `<p>Componente ${componentName} no encontrado.</p>`;
            break;
    }
}

// Función para verificar y cargar contenido por defecto
function loadContentIfExists() {
    const content = document.getElementById('formInterno');
    if (content) {
        loadContentInt('personaJuridica'); // Cargar la opción por defecto
    } else {
        // Usar un observador de mutaciones para detectar cuando el contenedor se añade al DOM
        const observer = new MutationObserver(() => {
            const newContent = document.getElementById('formInterno');
            if (newContent) {
                observer.disconnect(); // Deja de observar
                loadContentInt('personaJuridica'); // Cargar la opción por defecto
            }
        });

        // Configuración para observar cambios en el body o en un contenedor específico
        observer.observe(document.body, { childList: true, subtree: true });
    }
}

// Escuchar el evento DOMContentLoaded para cargar la opción por defecto
document.addEventListener('DOMContentLoaded', loadContentIfExists);
