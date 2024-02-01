


const dropdownItems = document.querySelectorAll('.dropdown-item');

dropdownItems.forEach(function(dropdownItem) {
    const dropdownContent = dropdownItem.nextElementSibling;
    const arrowIcon = dropdownItem.querySelector('.arrow-icon');

    dropdownItem.addEventListener('click', function() {
        dropdownContent.classList.toggle('dropdown-content--show');
        arrowIcon.classList.toggle('arrow-rotate');
    });

    // Cerrar el menú cuando el usuario hace clic fuera de él
    window.addEventListener('click', function(e) {
        if (!e.target.matches('.dropdown-item')) {
            if (dropdownContent.classList.contains('dropdown-content--show')) {
                dropdownContent.classList.remove('dropdown-content--show');
                arrowIcon.classList.remove('arrow-rotate');
            }
        }
    });
});














