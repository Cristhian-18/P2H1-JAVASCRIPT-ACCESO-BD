// Your web app's Firebase configuration
var firebaseConfig = {
    //***ATENCIÓN***//
    apiKey: "AIzaSyBnIhMtYR0NZvHPSjA3U_7nEM4yIzBLGYI",
    authDomain: "base-de-datos-2fff4.firebaseapp.com",
    projectId: "base-de-datos-2fff4",
    storageBucket: "base-de-datos-2fff4.appspot.com",
    messagingSenderId: "303028718385",
    appId: "1:303028718385:web:33ac61efc57074fe9d3e10"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
coleccionUsuarios = db.ref().child('usuarios');
coleccionProductos = db.ref().child('productos');

coleccionUsuarios.once('value', (snapshot) => {
    const usuarios = snapshot.val();
    console.log(usuarios);
});

$('#btnLogin').click(function () {
    document.getElementById('loginForm').addEventListener('submit', async function (event) {
        event.preventDefault(); // Evita el envío del formulario por defecto

        // Obtener los valores de correo electrónico y contraseña del formulario
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        try {
            // Realizar una consulta a la base de datos para verificar si el usuario existe y la contraseña coincide
            const snapshot = await coleccionUsuarios.once('value');
            const usuarios = snapshot.val();

            // Verificar si el usuario con el correo electrónico proporcionado existe y si la contraseña coincide
            let usuarioEncontrado = false;
            if (usuarios) {
                Object.keys(usuarios).forEach((key) => {
                    const usuario = usuarios[key];
                    if (usuario.user === email && usuario.password === password) {
                        usuarioEncontrado = true;
                        console.log("Usuario encontrado:", usuario.user);
                        console.log("Rol:", usuario.rol);
                        window.location.href = '/src/components/dashboardHome.html'
                        // Si el inicio de sesión es exitoso, muestra una alerta
                        Swal.fire({
                            icon: 'success',
                            title: 'Signed in successfully!',
                            showConfirmButton: false,
                            timer: 1500
                        });

                        
                    }
                });
            }

            if (!usuarioEncontrado) {
                console.log("Usuario no encontrado o contraseña incorrecta.");
                             // Si el inicio de sesión es exitoso, muestra una alerta
                             Swal.fire({
                                icon: 'error',
                                title: 'Usuario no encontrado o contraseña incorrecta.',
                                showConfirmButton: false,
                                timer: 1500
                            });
            }
        } catch (error) {
            console.error("Error al consultar la base de datos:", error);
            // Aquí puedes manejar el error como desees, por ejemplo, mostrando un mensaje al usuario
        }
    });
});

