document.addEventListener('DOMContentLoaded', function() {
    // ****** Comportamiento Sidebar ****** 
    document.querySelectorAll('.menuOption > .linkMenuOption').forEach(menuLink => {
        const menuOption = menuLink.parentElement;
        const subMenu = menuOption.querySelector('.subMenuSidebar');
        const expandIcon = menuOption.querySelector('.iconExpandSubmenu');
        
        if (subMenu) {
            expandIcon.style.display = 'block'; // Mostrar ícono si hay submenú
        } else {
            expandIcon.style.display = 'none'; // Ocultar ícono si no hay submenú
        }

        menuLink.addEventListener('click', function(e) {
            e.preventDefault();

            // Alternar el submenú del elemento actual
            const isActive = menuOption.classList.toggle('active');

            if (subMenu) {
                subMenu.style.display = isActive ? 'block' : 'none';
                expandIcon.textContent = isActive ? 'keyboard_arrow_up' : 'keyboard_arrow_down';
            }

            // Cerrar otros submenús abiertos
            document.querySelectorAll('.menuOption').forEach(option => {
                if (option !== menuOption) {
                    option.classList.remove('active');
                    const otherSubMenu = option.querySelector('.subMenuSidebar');
                    const otherExpandIcon = option.querySelector('.iconExpandSubmenu');
                    if (otherSubMenu) {
                        otherSubMenu.style.display = 'none';
                    }
                    if (otherExpandIcon) {
                        otherExpandIcon.textContent = 'keyboard_arrow_down';
                    }
                }
            });
        });
    });

    // *********** Expandir/Contraer Sidebar **************
    document.getElementById('sidebarToggle').addEventListener('click', function() {
        const sidebar = document.getElementById('sidebar');
        const toggleIcon = document.getElementById('toggleIcon');
        

        // Alternar la expansión del sidebar
        if (sidebar.classList.contains('expanded')) {
            sidebar.classList.remove('expanded');
            
            toggleIcon.textContent = 'menu'; // Cambiar icono a "menu"
        } else {
            sidebar.classList.add('expanded');
            
            toggleIcon.textContent = 'close'; // Cambiar icono a "close"
        }
    });

    // *************** Dropdown User ****************
    function setupDropdown(dropdownButtonId, dropdownMenuId) {
        const dropdownButton = document.getElementById(dropdownButtonId);
        const dropdownMenu = document.getElementById(dropdownMenuId);

        dropdownButton.addEventListener('click', function(event) {
            // Cerrar otros menús abiertos antes de mostrar el actual
            closeAllDropdowns(dropdownMenuId);
            
            // Alterna la clase para mostrar/ocultar el menú
            dropdownMenu.classList.toggle('show'); 
            event.stopPropagation(); // Evita que el clic se propague al body
        });

        document.addEventListener('click', function(event) {
            if (!dropdownMenu.contains(event.target) && !dropdownButton.contains(event.target)) {
                dropdownMenu.classList.remove('show');
            }
        });
    }

    function closeAllDropdowns(currentDropdownId) {
        const allDropdowns = document.querySelectorAll('.Dropdown-menu.show');
        allDropdowns.forEach(function(dropdown) {
            if (dropdown.id !== currentDropdownId) {
                dropdown.classList.remove('show');
            }
        });
    }

    setupDropdown('dropdownOption', 'userDropdownMenu');
    setupDropdown('taskButton', 'taskDropdownMenu');
    setupDropdown('notificationsButton', 'notificationsDropdownMenu');
    
    

    // ******** Modal LogOut ************
    // **********************************
    var modalLogout = document.getElementById("modalLogout");
    var btnLogout = document.getElementById("logOut");
    var btnLogoutSidebar = document.getElementById("cerrarSesionSidebar");
    var cerrar = document.getElementById("cerrarModal");
    

    // Abre el modal al hacer clic en el botón
    btnLogout.onclick = function(event) {
        event.preventDefault(); // Evita cualquier comportamiento predeterminado
        console.log("Abriendo Modal");
        modalLogout.style.display = "block";
    }

    btnLogoutSidebar.onclick = function(event) {
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

    // Cierra el modal si se hace clic fuera de él
    window.onclick = function(event) {
        if (event.target === modalLogout) {
            console.log("Cerrar Modal");
            modalLogout.style.display = "none";
        }
    }
});

// ******* Función para cargar los contenidos dinámicamente ********
function loadContent(url) {
    const content = document.getElementById('content');

    // Limpiar el contenido anterior
    content.innerHTML = '';

    fetch(url)
        .then(response => response.text())
        .then(html => {
            content.innerHTML = html;

            // Aquí no necesitas hacer nada más, el componente se inicializa automáticamente
        })
        .catch(error => {
            content.innerHTML = `<p>Error al cargar el contenido desde ${url}: ${error}</p>`;
            console.error("Error:", error);
        });
}
