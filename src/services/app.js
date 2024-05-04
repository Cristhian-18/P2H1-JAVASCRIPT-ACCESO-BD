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








