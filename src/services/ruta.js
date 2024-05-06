
// Verificar si hay información de usuario en el localStorage al cargar la página
window.addEventListener('load', function () {
    const usuarioGuardado = localStorage.getItem('user');
    if (!usuarioGuardado) {
        // Redirigir automáticamente al usuario a la página de inicio si hay información de usuario en el localStorage
        window.location.href = 'https://cristhian-18.github.io/P2H1-JAVASCRIPT-ACCESO-BD/';
    }
});
