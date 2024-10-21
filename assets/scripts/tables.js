document.addEventListener("DOMContentLoaded", function(){

    let newRecord = document.getElementById('buttonNewRecord');
    let containerModal = document.getElementById('modalFormNewRecord');
    let formContainer = document.getElementById('formModal');
    let closeModalButton = document.getElementById('closeModal');

    document.querySelector('.tableData').addEventListener('click', function(event) {
        let row = event.target.closest('tr'); // Obtener la fila correspondiente al clic

        if (event.target.classList.contains('iconStatusActiveOptionsTable')) {
            let activeIcon = event.target;
            let desactiveIcon = activeIcon.nextElementSibling.nextElementSibling; // El siguiente toggle_off
            activeIcon.style.display = 'none';
            desactiveIcon.style.display = 'inline';
            row.classList.add('inactiveRow'); // Agregar la clase 'inactive' (inactivo)
        } else if (event.target.classList.contains('iconStatusDesactiveOptionsTable')) {
            let desactiveIcon = event.target;
            let activeIcon = desactiveIcon.previousElementSibling.previousElementSibling; // El toggle_on anterior
            desactiveIcon.style.display = 'none';
            activeIcon.style.display = 'inline';
            row.classList.remove('inactiveRow'); // Quitar la clase 'inactive' (activo)
        }
    });

    newRecord.addEventListener('click', function(){
        containerModal.style.display = 'block';
        formContainer.classList.add('show');

    });

    // Función para cerrar el modal
    function closeModal() {
        containerModal.style.display = 'none';
        formContainer.classList.remove('show');
    }

    // Cerrar el modal al hacer clic en cualquier parte fuera del contenido del modal
    window.addEventListener('click', function(event) {
        if (event.target === containerModal) {
            closeModal();
        }
    });

    // Cerrar el modal al hacer clic en el botón "Cancelar"
    closeModalButton.addEventListener('click', closeModal);

});