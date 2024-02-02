
// Selecciona todos los elementos con la clase 'dropdown-item'
const dropdownItems = document.querySelectorAll('.dropdown-item');

const navbarVisibility = document.getElementById('navbar__visibility');
const closeMenu = document.getElementById('close-menu');
const openMenu = document.getElementById('open-menu');

// Variable para rastrear el último menú desplegable abierto
let lastOpenedDropdown = null;

// Itera sobre cada elemento con la clase 'dropdown-item'
dropdownItems.forEach(function(dropdownItem) {
    // Obtiene el elemento del menú desplegable siguiente
    const dropdownContent = dropdownItem.nextElementSibling;
    const arrowIcon = dropdownItem.querySelector('.arrow-icon');

    // Agrega un evento de clic al elemento del menú desplegable
    dropdownItem.addEventListener('click', function() {
        // Cierra el último menú desplegable abierto, si existe y si no es el mismo
        if(lastOpenedDropdown && lastOpenedDropdown !== dropdownContent) {
            lastOpenedDropdown.classList.remove('dropdown-content--show');
            lastOpenedDropdown.previousElementSibling.querySelector('.arrow-icon').classList.remove('arrow-rotate');
        }

        dropdownContent.classList.toggle('dropdown-content--show');
        arrowIcon.classList.toggle('arrow-rotate');

        // Actualiza la variable para rastrear el último menú desplegable abierto
        lastOpenedDropdown = dropdownContent;
    });

    // Cerrar el menú cuando el usuario hace clic fuera de él
    window.addEventListener('click', function(e) {
        if (!e.target.matches('.dropdown-item')) {
            if(lastOpenedDropdown) {
                lastOpenedDropdown.classList.remove('dropdown-content--show');
                lastOpenedDropdown.previousElementSibling.querySelector('.arrow-icon').classList.remove('arrow-rotate');
                lastOpenedDropdown = null;
            }
        }
    });
});




openMenu.addEventListener('click', function() {
    navbarVisibility.classList.add('navbar__items--visibility');
})
closeMenu.addEventListener('click', function() {
    navbarVisibility.classList.remove('navbar__items--visibility');
})









