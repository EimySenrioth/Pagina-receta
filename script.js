// Codigo de la barra de navegacion - fijo
let lastScrollTop = 0;
const menu = document.getElementById("menu");
let isVisible = true;

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Determina la dirección del scroll
    if (scrollTop > lastScrollTop) {
        // Scrolling hacia abajo
        if (isVisible && scrollTop > 100) { // 100px de umbral
            menu.style.transform = 'translateY(-100%)';
            isVisible = false;
        }
    } else {
        // Scrolling hacia arriba
        menu.style.transform = 'translateY(0)';
        isVisible = true;
    }
    
    lastScrollTop = scrollTop;
});