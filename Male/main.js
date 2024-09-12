window.addEventListener('load', () => {
  const loadingScreen = document.getElementById('loading-screen');
  const mainContent = document.getElementById('main-content');
  const header = document.getElementById('header');

  // Simula la duración de la pantalla de carga
  setTimeout(() => {
      loadingScreen.style.display = 'none';
      mainContent.classList.remove('hidden');
      revealElements();
  }, 3000);
});

document.getElementById('discover-btn').addEventListener('click', () => {
  document.getElementById('header').style.opacity = 1;
  window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
  });
});

// Función para revelar los elementos con animación al cargar la página
function revealElements() {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
      section.classList.add('appear');
  });
}

// Escucha de scroll para activar animaciones de aparición
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
          section.classList.add('appear');
      }
  });
});
