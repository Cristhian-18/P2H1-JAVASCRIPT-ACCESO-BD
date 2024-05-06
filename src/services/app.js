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
coleccionProductos = db.ref().child('productos');
bodyProductos = $('#bodyProductos').val();
//console.log(bodyProductos);  
$('form').submit(function (e) {
  e.preventDefault();
  console.log("a")
  let id = $('#id').val();
  let nombre = $('#nombre').val();
  let codigo = $('#codigo').val();
  let descripcion = $('#descripcion').val();
  let precio = $('#precio').val();
  let urlimg = $('#urlimg').val();
  let idFirebase = id;
  if (idFirebase == '') {
    idFirebase = coleccionProductos.push().key;
  };
  data = { codigo: codigo, nombre: nombre, descripcion: descripcion, precio: precio, urlimg: urlimg };
  actualizacionData = {};
  actualizacionData[`/${idFirebase}`] = data;
  coleccionProductos.update(actualizacionData);
  id = '';


});
const iconoEditar = '<svg class="bi bi-pencil-square" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/><path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/></svg>';
const iconoBorrar = '<svg class="bi bi-trash" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/><path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/></svg>';
function mostrarProductos({ codigo, nombre, descripcion, precio, urlimg }) {
  return `    
  <tr>
    <td
        class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
        ${codigo}</td>
        <td
        class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
        ${nombre}</td>
    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div class="flex items-center">

            <div class="ml-4">
                <div class="text-sm font-medium leading-5 text-justify text-gray-900">${descripcion}
                </div>
               
            </div>
        </div>
    </td>


    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div class="text-sm leading-5 text-gray-900">${precio}</div>
    </td>
    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
    <div class="flex items-center">
        <div class="flex-shrink-0 w-10 h-10">
            <img class="w-10 h-10 rounded-full"
                src="${urlimg}"
                alt="">
        </div>
        <div class="ml-4">
            <div class="text-sm font-medium leading-5 text-gray-900"> 
            <span class="hidden">${urlimg}</span>
            </div>
           
        </div>
    </div>
</td>
    <td
        class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
        <button class="btnEditar btn btn-secondary focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900" data-toggle="tooltip" title="Editar" >${iconoEditar}</button>

        <button class="btnBorrar btn btn-danger focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" data-toggle="tooltip" title="Borrar">${iconoBorrar}</button>
    </td>
</tr>`
};


// Obtén una referencia a la colección de productos en tu base de datos
const productosRef = firebase.database().ref('productos');

// Escucha los cambios en la colección de productos
productosRef.on('value', (snapshot) => {
    const productos = snapshot.val();
    const productosContainer = document.getElementById('productosContainer');

    // Reinicia el contenedor de productos
    productosContainer.innerHTML = '';

    // Itera sobre los productos y crea una carta para cada uno
    Object.keys(productos).forEach((key) => {
        const producto = productos[key];

        // Crea una nueva carta
        const card = document.createElement('div');
        card.classList.add('w-full', 'max-w-sm', 'bg-white', 'border', 'border-gray-200', 'rounded-lg', 'shadow', 'dark:bg-white', 'dark:border-white', 'mb-4');

        // Contenido de la carta
        card.innerHTML = `
        <div
        class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-white dark:border-white">
        <a href="#">
            <img class=" rounded-t-lg"
            src="${producto.urlimg}"
                alt="product image" />
        </a>
        <div class="px-5 pb-5">
            <a href="#">
                <br>
                <h5 id="nom" class="text-xl font-semibold tracking-tight text-gray-900 dark:text-black">${producto.nombre}</h5>
            </a>
            <div class="flex items-center mt-2.5 mb-5">
                <div class="flex items-center space-x-1 rtl:space-x-reverse">
                    <svg class="w-4 h-4 text-yellow-300" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path
                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg class="w-4 h-4 text-yellow-300" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path
                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg class="w-4 h-4 text-yellow-300" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path
                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg class="w-4 h-4 text-yellow-300" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path
                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path
                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                </div>
                <span
                    class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
            </div>
            <div class="flex items-center justify-between">
                <span class="text-3xl font-bold text-gray-900 dark:text-black">$${producto.precio}</span>
      
            </div>
            <br>
            <button type="button"
                class="text-white  bg-green-600 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-gray-800 dark:hover:bg-green-700 dark:focus:ring-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Apúntate</button>
        </div>
      </div>
        `;

        // Agrega la carta al contenedor de productos
        productosContainer.appendChild(card);
    });
});



//CHILD_ADDED
coleccionProductos.on('child_added', data => {
  let tr = document.createElement('tr')
  tr.id = data.key
  console.log(data)
  tr.innerHTML = mostrarProductos(data.val())
  document.getElementById('bodyProductos').appendChild(tr)
});




//CHILD_CHANGED
coleccionProductos.on('child_changed', data => {
  let nodoEditado = document.getElementById(data.key)
  nodoEditado.innerHTML = mostrarProductos(data.val())
});
//CHILD_REMOVED
coleccionProductos.on('child_removed', data => {
  let nodoEditado = document.getElementById(data.key)
  document.getElementById('bodyProductos').removeChild(nodoEditado)
});
//Programación de los botones
$('#btnNuevo').click(function () {
  console.log("Nuevo")
  $('#id').val('');
  $('#codigo').val('');
  $('#nombre').val('');
  $('#descripcion').val('');
  $('#precio').val('');
  $('#urlimg').val('');
  $('form').trigger('reset');


});
$('#tablaProductos').on('click', '.btnEditar', function () {
  document.querySelector('[data-modal-toggle="crud-modal"]').click();
  let id = $(this).closest('tr').attr('id');
  let codigo = $(this).closest('tr').find('td:eq(0)').text().trim();
  let nombre = $(this).closest('tr').find('td:eq(1)').text().trim();
  let descripcion = $(this).closest('tr').find('td:eq(2)').text().trim();
  let precio = $(this).closest('tr').find('td:eq(3)').text().trim();
  let urlimg = $(this).closest('tr').find('td:eq(4)').text().trim();

  $('#id').val(id);
  $('#codigo').val(codigo);
  $('#nombre').val(nombre);
  $('#descripcion').val(descripcion);
  $('#precio').val(precio);
  $('#urlimg').val(urlimg);
});
$('#tablaProductos').on('click', '.btnBorrar', function () {
  Swal.fire({
    title: '¿Está seguro de eliminar el producto?',
    text: "¡Está operación no se puede revertir!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'Borrar'
  }).then((result) => {
    if (result.value) {
      let id = $(this).closest('tr').attr('id'); //capturamos el atributo ID de la fila  
      db.ref(`productos/${id}`).remove() //eliminamos el producto de firebase      
      Swal.fire('¡Eliminado!', 'El producto ha sido eliminado.', 'success')
    }
  })
});

// Verificar si hay datos de usuario en el Local Storage
function checkLocalStorage() {
  const userData = localStorage.getItem('user');
  if (userData) {
      // Si hay datos de usuario en el Local Storage, ocultar el enlace de inicio de sesión
      document.getElementById('inicio-sesion').style.display = 'none';
      document.getElementById('inicio').style.display = 'none';
      return true;
  } else {
      document.getElementById('cierre-sesion').style.display = 'none';
      document.getElementById('cierre').style.display = 'none';
      cerrarSesion();
  }
}

// Llamar a la función para verificar el Local Storage cuando la página se cargue
document.addEventListener('DOMContentLoaded', function () {
  checkLocalStorage();
});


// Función para cerrar sesión
function cerrarSesion() {
  // Eliminar la información del usuario del localStorage
  localStorage.removeItem('user');
  
  // Redirigir al usuario a la página de inicio de sesión
  window.location.href = 'https://cristhian-18.github.io/P2H1-JAVASCRIPT-ACCESO-BD/index.html';
}

// Agregar un evento de clic al botón de cerrar sesión
document.getElementById('btnCerrarSesion').addEventListener('click', function () {
console.log("a")
  // Llamar a la función de cerrar sesión
  cerrarSesion();
});













