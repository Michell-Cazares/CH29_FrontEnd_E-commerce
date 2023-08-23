let txtNombre = document.getElementById("txtNombre");
let txtEmail = document.getElementById("txtEmail");
let txtPhone = document.getElementById("txtPhone");
let asunto = document.getElementById("asunto");
let btnEnviar = document.getElementById("btnEnviar");
let txtMensaje = document.getElementById("txtMensaje");
let listAsunto = document.getElementById("listAsunto");
let checkrecibirInfo = document.getElementById("checkrecibirInfo");
let checkPoliticasPriv = document.getElementById("checkPoliticasPriv");

let formContacto = document.getElementById("formContacto");


/* ALERTAS */

// Párrafos de las alertas
let alertNombre = document.getElementById("alertNombre");
let alertEmail = document.getElementById("alertEmail");
let alertPhone = document.getElementById("alertPhone");
let alertMensaje = document.getElementById("alertMensaje");
let alertCheckPriv = document.getElementById("alertCheckPriv");


//Div de la alerta-
let alertValidacionesTextoNombre = document.getElementById("alertValidacionesTextoNombre");
let alertValidacionesTextoEmail = document.getElementById("alertValidacionesTextoEmail");
let alertValidacionesTextoPhone = document.getElementById("alertValidacionesTextoPhone");
let alertValidacionesTextoMensaje = document.getElementById("alertValidacionesTextoMensaje");
let alertValidacionesListAsunto = document.getElementById("alertValidacionesListAsunto");
let alertValidacionesCheckPriv = document.getElementById("alertValidacionesCheckPriv");

//Bandera para evitar repetir la alerta de cada campo
let index = [];


// Validación para que el campo nombre solo permita nombres de longitud (3 - 99) caracteres.
let regexName = /^[a-zA-ZáéíóúüÁÉÍÓÚÜñÑ' ']{6,100}[\d]{0}$/;
//let regexName = /^[a-zA-Z]|[à-üÀ-Ü][\d]{0}$/;
function validarNombre(nombre) {
  if (nombre.length >= 6 && nombre.length < 100) {
    if (regexName.test(nombre)) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

//Función para validar que lo que se escribe en el campo email cumpla con la regex definida.
let regexEmail =
  /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
function validarEmail(email) {
  if (email != "") {
    if (regexEmail.test(email)) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

function validarMensaje(mensaje) {
  if (!isNumeric(mensaje)) {
    if (mensaje.length >= 3 && mensaje.length <= 200) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

function isNumeric(str) {
  return /^\d+$/.test(str);
}

let regextel = /^(\(\+?\d{2,3}\)[\*|\s|\-|\.]?(([\d][\*|\s|\-|\.]?){6})(([\d][\s|\-|\.]?){2})?|(\+?[\d][\s|\-|\.]?){8}(([\d][\s|\-|\.]?){2}(([\d][\s|\-|\.]?){2})?)?)$/;
function validarNumTel(numTel) {
  if (numTel != "") {
    if (numTel.substr(0, 3) != "000") {
      if (regextel.test(numTel)) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }


  } else {
    return false;
  }
}


function validarListAsunto(asunto) {
  if (asunto != "Asunto") {
    return true;
  } else {
    return false;
  }
}

function politicasPrivIsChecked() {
  console.log("Políticas" + checkPoliticasPriv.checked)
  if (checkPoliticasPriv.checked == true) {
    checkPoliticasPriv.value = "Si";
    return true;
  } else {
    return false;
  }
}

function recibirInfoIsChecked() {
  console.log("Recibir Info" + checkrecibirInfo.checked)
  if (checkrecibirInfo.checked == true) {
    checkrecibirInfo.value = "Si";
    return true;
  } else {
    checkrecibirInfo.value = "No";
    return false;
  }
}

btnEnviar.addEventListener("click", function (event) {
  event.preventDefault();
  if (!validarNombre(txtNombre.value.trim())) {
    if (!index.includes("nombre")) {
      alertValidacionesTextoNombre.insertAdjacentHTML(
        "afterbegin", ` El <strong> Nombre Completo </strong> no es correcto. <br/> `);
      alertValidacionesTextoNombre.style.color = "red";
      txtNombre.style.border = "solid thin red";
      index.push("nombre");
    }
  }
  if (!validarEmail(txtEmail.value.trim())) {
    if (!index.includes("email")) {
      alertValidacionesTextoEmail.insertAdjacentHTML("afterbegin", `El <strong> Correo </strong> no es correcto. <br/> `);
      alertValidacionesTextoEmail.style.color = "red";
      txtEmail.style.border = "solid thin red";
      index.push("email");
    }

  }

  if (!validarNumTel(txtPhone.value.trim())) {
    if (!index.includes("phone")) {
      alertValidacionesTextoPhone.insertAdjacentHTML("afterbegin", `El <strong> Teléfono </strong> no es correcto. <br/> `);
      alertValidacionesTextoPhone.style.color = "red";
      txtPhone.style.border = "solid thin red";
      index.push("phone");
    }

  }

  if (!validarListAsunto(listAsunto.value)) {
    if (!index.includes("listAsunto")) {
      alertValidacionesListAsunto.insertAdjacentHTML("afterbegin", `Selecciona un <strong> Asunto </strong> por favor. <br/> `);
      alertValidacionesListAsunto.style.color = "red";
      listAsunto.style.border = "solid thin red";
      index.push("listAsunto");
    }

  }

  if (!validarMensaje(txtMensaje.value.trim())) {
    if (!index.includes("mensaje")) {
      alertValidacionesTextoMensaje.insertAdjacentHTML("afterbegin", `El <strong> Mensaje</strong> no es correcto. <br/> `);
      alertValidacionesTextoMensaje.style.color = "red";
      txtMensaje.style.border = "solid thin red";
      index.push("mensaje");
    }
  }

  if (!politicasPrivIsChecked()) {
    if (!index.includes("checkPriv")) {
      alertValidacionesCheckPriv.insertAdjacentHTML("afterbegin", `Debe aceptar las <strong>Políticas de Privacidad</strong>. <br/> `);
      alertValidacionesCheckPriv.style.color = "red";
      checkPoliticasPriv.style.border = "solid thin red";
      index.push("checkPriv");
    }
  }
  recibirInfoIsChecked();
  if (!index.includes("nombre") && !index.includes("email") && !index.includes("phone") && !index.includes("listAsunto") && !index.includes("mensaje") && !index.includes("checkPriv")) {
    btnEnviar.disabled = true;
    btnEnviar.textContent = "Enviando...";
    btnEnviar.style.fontWeight = "bold";
    enviarEmail();
  }
});

// Animation del botoncito
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 5000,
  timerProgressBar: true
});



function enviarEmail() {
  const serviceID = 'service_9r31h4b';
  const templateID = 'template_o4c2eck';
  emailjs.sendForm(serviceID, templateID, formContacto)
    .then(() => {
      Toast.fire({
        icon: 'success',
        title: '¡Gracias por comunicarte con nosotros!'
      });
      limpiarTodo();
    }, (err) => {
      alert(JSON.stringify(err));
    });
}



//Listener para validar el nombre cada vez que el usuario teclee algo en el campo nombre
txtNombre.addEventListener("keyup", function (event) {
  event.preventDefault();
  if (!validarNombre(txtNombre.value.trim())) {
    if (!index.includes("nombre")) {
      alertValidacionesTextoNombre.insertAdjacentHTML(
        "afterbegin", ` El <strong> Nombre </strong> no es correcto. <br/> `);
      alertValidacionesTextoNombre.style.color = "red";
      txtNombre.style.border = "solid thin red";
      index.push("nombre");
    }
  }//if nombre no cumple las validaciones
  else {
    //quitar alertas
    alertValidacionesTextoNombre.innerHTML = "";
    alertNombre.style.display = "none";
    txtNombre.style.border = "";
    removeAllInstances(index, "nombre");
  }

});


txtEmail.addEventListener("keyup", function (event) {
  event.preventDefault();
  if (!validarEmail(txtEmail.value.trim())) {
    if (!index.includes("email")) {
      alertValidacionesTextoEmail.insertAdjacentHTML("afterbegin", `El <strong> Correo </strong> no es correcto. <br/> `);
      alertValidacionesTextoEmail.style.color = "red";
      txtEmail.style.border = "solid thin red";
      index.push("email");
    }
  }//if email no cumple las validaciones
  else {
    //quitar alertas
    alertValidacionesTextoEmail.innerHTML = "";
    alertEmail.style.display = "none";
    txtEmail.style.border = "";
    removeAllInstances(index, "email");
  }

});

txtPhone.addEventListener("keyup", function (event) {
  event.preventDefault();
  if (!validarNumTel(txtPhone.value.trim())) {
    if (!index.includes("phone")) {
      alertValidacionesTextoPhone.insertAdjacentHTML("afterbegin", `El <strong> Teléfono </strong> no es correcto. <br/> `);
      alertValidacionesTextoPhone.style.color = "red";
      txtPhone.style.border = "solid thin red";
      index.push("phone");
    }

  }//if phone no cumple las validaciones 
  else {
    //quitar alertas
    alertValidacionesTextoPhone.innerHTML = "";
    alertPhone.style.display = "none";
    txtPhone.style.border = "";
    removeAllInstances(index, "phone");
  }

});

txtMensaje.addEventListener("keyup", function (event) {
  event.preventDefault();
  if (!validarMensaje(txtMensaje.value.trim())) {
    if (!index.includes("mensaje")) {
      alertValidacionesTextoMensaje.insertAdjacentHTML("afterbegin", `El <strong> Mensaje</strong> no es correcto. <br/> `);
      alertValidacionesTextoMensaje.style.color = "red";
      txtMensaje.style.border = "solid thin red";
      index.push("mensaje");
    }
  }//if mensaje no cumple las validaciones 
  else {
    //quitar alertas
    alertValidacionesTextoMensaje.innerHTML = "";
    alertMensaje.style.display = "none";
    txtMensaje.style.border = "";
    removeAllInstances(index, "mensaje");
  }
});


listAsunto.addEventListener("change", function (event) {
  event.preventDefault();
  //quitar alertas
  alertValidacionesListAsunto.innerHTML = "";
  listAsunto.style.border = "";
  removeAllInstances(index, "listAsunto");
});


checkPoliticasPriv.addEventListener("change", function (event) {
  event.preventDefault();
  //quitar alertas
  alertValidacionesCheckPriv.innerHTML = "";
  checkPoliticasPriv.style.border = "";
  alertCheckPriv.style.display = "none";
  removeAllInstances(index, "checkPriv");
});

//Remueve todas las instancias de un objeto dado (item) que se encuentre en el arreglo index
function removeAllInstances(arr, item) {
  for (var i = arr.length; i--;) {
    if (arr[i] === item) arr.splice(i, 1);
  }
}

function limpiarTodo() {
  index = [];
  checkrecibirInfo.checked = false;
  checkPoliticasPriv.checked = false;
  txtNombre.value = "";
  txtEmail.value = "";
  txtPhone.value = "";
  txtMensaje.value = "";
  listAsunto.value = "Asunto";
  removeAllInstances(index, "nombre");
  removeAllInstances(index, "email");
  removeAllInstances(index, "phone");
  removeAllInstances(index, "mensaje");
  removeAllInstances(index, "listAsunto");
  removeAllInstances(index, "checkPriv");
  btnEnviar.disabled = false;
  btnEnviar.textContent = "Enviar";
  btnEnviar.style.fontWeight = "bold";
}
