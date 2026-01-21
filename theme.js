// Función para cambiar entre tema claro y oscuro
function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');
    const currentTheme = body.classList.contains('dark-mode') ? 'dark' : 'light';
    
    // Cambiar el tema
    if (currentTheme === 'light') {
        body.classList.add('dark-mode');
        themeIcon.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-mode');
        themeIcon.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    }
}

// Cargar el tema guardado al cargar la página
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');
    
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        themeIcon.textContent = '☀️';
    } else {
        body.classList.remove('dark-mode');
        themeIcon.textContent = '🌙';
    }
}

// Función para actualizar el año actual
function updateCurrentYear() {
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        const currentYear = new Date().getFullYear();
        currentYearElement.textContent = currentYear;
    }
}

// Función para mostrar/ocultar el botón de volver al inicio
function toggleScrollToTop() {
    const scrollButton = document.getElementById('scroll-to-top');
    if (scrollButton) {
        if (window.pageYOffset > 300) {
            scrollButton.classList.add('show');
        } else {
            scrollButton.classList.remove('show');
        }
    }
}

// Función para volver al inicio
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Event listener para el botón de cambio de tema
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const scrollToTopButton = document.getElementById('scroll-to-top');
    
    // Cargar el tema guardado
    loadTheme();
    
    // Actualizar el año actual
    updateCurrentYear();
    
    // Agregar evento click al botón de tema
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    // Agregar evento click al botón de scroll to top
    if (scrollToTopButton) {
        scrollToTopButton.addEventListener('click', scrollToTop);
    }
    
    // Mostrar/ocultar botón según el scroll
    window.addEventListener('scroll', toggleScrollToTop);
    
    // Verificar posición inicial
    toggleScrollToTop();
    
    // Funcionalidad del video
    initVideoPlayer();
});

// Funcionalidad del reproductor de video
function initVideoPlayer() {
    const video = document.getElementById('demo-video');
    const playButton = document.getElementById('play-button');
    const videoContainer = document.querySelector('.video-container');
    
    if (!video || !playButton || !videoContainer) {
        return;
    }
    
    // Reproducir video cuando se hace clic en el botón
    playButton.addEventListener('click', function() {
        video.play();
        videoContainer.classList.add('playing');
        playButton.classList.add('hidden');
    });
    
    // Mostrar botón cuando el video se pausa
    video.addEventListener('pause', function() {
        if (video.currentTime > 0 && !video.ended) {
            videoContainer.classList.remove('playing');
            playButton.classList.remove('hidden');
        }
    });
    
    // Ocultar botón cuando el video termina
    video.addEventListener('ended', function() {
        videoContainer.classList.remove('playing');
        playButton.classList.remove('hidden');
    });
    
    // Ocultar botón cuando el video se está reproduciendo
    video.addEventListener('play', function() {
        videoContainer.classList.add('playing');
        playButton.classList.add('hidden');
    });
}
