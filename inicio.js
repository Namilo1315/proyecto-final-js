
class Usuario {
    constructor(nombre, apellido, correo) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
    }

}

const arrayUsuarios = [];

//Formulario

let nombreForm = document.querySelector("#nombre");
let apellidoForm = document.querySelector("#apellido");
let correoForm = document.querySelector("#correo");

nombreForm.addEventListener("input", function () {
    console.log(nombreForm.value);
    
})

apellidoForm.addEventListener("input", function () {
    console.log(apellidoForm.value);
    
})

correoForm.addEventListener("input", function () {
    console.log(correoForm.value);
    
})

let formulario = document.querySelector("#formulario");

let info = document.querySelector(".info");

const mostrarInfo = formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    info.innerHTML = `
 <div class="alert alert-dark mt-3" role= "alert">
 <h5> Muchas Gracias ${nombreForm.value} ${apellidoForm.value}!!! Estaremos manteniendote informado sobre actualizaciones jurídicas a ${correoForm.value}. <h5/>
 <button class="aceptar btn btn-success d-grid gap-2 mx-auto mt-2">ACEPTAR</button>
 <div/>
   `;   

   let boton = document.querySelector(".aceptar");

   boton.addEventListener("click" , function ( ) {
    Swal.fire({
    
        title: 'En breve nos comunicaremos',
        icon: 'success',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
        
      })
   })

    const usuario = new Usuario(nombreForm.value, apellidoForm.value, correoForm.value);

    arrayTurnos.push(usuario)


    let usuarioRegistrado = {
        nombre: nombreForm.value,
        apellido: apellidoForm.value,
        correo: correoForm.value
    }
    localStorage.setItem('usuario', JSON.stringify(usuarioRegistrado));
    const datosStorage = JSON.parse(localStorage.getItem('usuario')) 
    
})

//TURNOS


let turneroOnline = document.querySelector(".form-select");
let btnreservar = document.querySelector(".btn-reservar");

const arrayTurnos = []

btnreservar.addEventListener("click", function () {
    let fecha = document.querySelector("#day").value;

    let turno = document.querySelector(".turno");
    turno.innerHTML = `
        <div class="turno alert alert-secondary" role="alert">
        <h5 class= "text-center"> Tu turno será reservado para el dia ${fecha}. </h5>
        <div class="d-grid gap-1 col-6 mx-auto">
        <button onclick='CancelarTurno()' class="cancelar btn btn-danger  gap-1 col-10 mx-auto mt-2 ">CANCELAR </button>
        <button onclick='AceptarTurno()' class="ok btn btn-success  gap-1 col-10 mx-auto mt-2 ">ACEPTAR</button>
        </div>
      </div>`;
      

      let divTurno = document.querySelector('.turno');

      divTurno.style.display = 'block'
      
     let turnoRegistrado = {
       turno: turneroOnline.value,
    }

    localStorage.setItem('turno', JSON.stringify(turnoRegistrado));

    const dataStorage = JSON.parse(localStorage.getItem('turno')) 
    
  
})

function AceptarTurno() {
  let diveTurno = document.querySelector('.ok');

  diveTurno.style.display = 'none'
}



//CANCELAR TURNO

function CancelarTurno() {
	let divTurno = document.querySelector(".turno");
	divTurno.innerHTML = "";
 localStorage.clear();
}



//FETCH PROMESAS

const responsable = document.querySelector("#abogado");

 fetch("./data.json")
 .then((resp) =>resp.json ())
 .then((data)=>
 
 data.forEach((doctora) => {
   const re =  document.createElement("re")
  re.innerHTML = `
  <div class=" mt-3 mb-3">
  <h4 class=" d-grid gap-1 col-3 mx-auto"> ${doctora.nombre} <h4/>
  <h5 class=" d-grid gap-1 col-3 mx-auto"> ${doctora.area} <h5/>
  <div/> `
  
  responsable.append(re);
 })
 )




