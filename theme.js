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

// Event listener para el botón de cambio de tema
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    
    // Cargar el tema guardado
    loadTheme();
    
    // Actualizar el año actual
    updateCurrentYear();
    
    // Agregar evento click al botón
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
});
