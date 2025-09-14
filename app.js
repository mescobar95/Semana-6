
const usuarios = [];


const form = document.getElementById("formUsuario");
const contenedor = document.getElementById("contenedor");
const mensaje = document.getElementById("mensaje");
const btnMayores = document.getElementById("btnMayores");
const btnTodos = document.getElementById("btnTodos");


let soloMayores = false;


function mostrarUsuarios() {
  let lista;
  if (soloMayores) {
    //se envia a filter los que sean adultos
    lista = usuarios.filter(u => u.esAdulto());
  } else {
    lista = usuarios;
  }

  contenedor.innerHTML = "";
  lista.forEach(u => {
    const p = document.createElement("p");
    let estado = u.esAdulto() ? " ,Mayor de edad" : " , Menor de edad";
    p.textContent = u.describir() + estado; 
    contenedor.appendChild(p);
  });
}

// Cuando se envía el formulario
form.addEventListener("submit", function(e) {
  e.preventDefault();

  let nombre = document.getElementById("nombre").value;
  let edad = document.getElementById("edad").value;
  let ocupacion = document.getElementById("ocupacion").value;

  let nuevo = new Usuario(nombre, edad, ocupacion);
  usuarios.push(nuevo);

  console.table(usuarios);

  // se muestra  mensaje 
  mensaje.textContent = "✅ Usuario agregado con éxito";

  //para el siguiente usuario 
  form.reset();
  document.getElementById("nombre").focus();
});

// Botón: solo mayores
btnMayores.addEventListener("click", function() {
  soloMayores = true;
  mostrarUsuarios();
});

// Botón: todos
btnTodos.addEventListener("click", function() {
  soloMayores = false;
  mostrarUsuarios();
});

