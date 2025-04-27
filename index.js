// Mostrar y ocultar el menú de categorías
const hamburgerMenu = document.getElementById('hamburger-menu');
const categoryMenu = document.getElementById('category-menu');
const closeBtn = document.getElementById('close-btn');
const searchBtn = document.getElementById('search-btn');
const searchBar = document.getElementById('search-bar');

// Abrir y cerrar el panel de categorías
document.getElementById('category-toggle').addEventListener('click', function () {
    document.getElementById('category-panel').classList.toggle('open');
});

// Cerrar el panel de categorías
document.getElementById('close-category').addEventListener('click', function () {
    document.getElementById('category-panel').classList.remove('open');
});
// Agregar la clase active a la categoría seleccionada
const categoryLinks = document.querySelectorAll('.category-panel a');
categoryLinks.forEach(link => {
  link.addEventListener('click', function() {
    categoryLinks.forEach(link => link.classList.remove('active')); // Elimina la clase de las otras categorías
    this.classList.add('active'); // Añade la clase active a la categoría seleccionada
  });
});

// Configuración del desplazamiento automático para el carrusel
function moveCarousel(direction, carouselId) {
    const carousel = document.getElementById(carouselId);
    const items = carousel.querySelectorAll('.carousel-item');
    const itemWidth = items[0].offsetWidth + 20; // Ajuste con el espacio entre los elementos

    if (direction === 'next') {
        carousel.scrollBy({ left: itemWidth, behavior: 'smooth' });
    } else {
        carousel.scrollBy({ left: -itemWidth, behavior: 'smooth' });
    }
}