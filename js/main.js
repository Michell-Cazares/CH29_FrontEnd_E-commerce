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


let alertNombre = document.getElementById("alertNombre");
let alertEmail = document.getElementById("alertEmail");
let alertPhone = document.getElementById("alertPhone");
let alertMensaje = document.getElementById("alertMensaje");
let alertCheckPriv = document.getElementById("alertCheckPriv");



//Alertas
let alertValidacionesTextoNombre = document.getElementById("alertValidacionesTextoNombre");
let alertValidacionesTextoEmail = document.getElementById("alertValidacionesTextoEmail");
let alertValidacionesTextoPhone = document.getElementById("alertValidacionesTextoPhone");
let alertValidacionesTextoMensaje = document.getElementById("alertValidacionesTextoMensaje");
let alertValidacionesListAsunto = document.getElementById("alertValidacionesListAsunto");
let alertValidacionesCheckPriv = document.getElementById("alertValidacionesCheckPriv");

let index = [];

function validarNombre(nombre) {
  if (nombre.length >= 3 && nombre.length < 100) {
    return true;
  } else {
    return false;
  }
}

//Regex Email
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
  if (mensaje.length >= 20 && mensaje.length <= 200) {
    return true;
  } else {
    return false;
  }
}

let regextel = /^(\(\+?\d{2,3}\)[\*|\s|\-|\.]?(([\d][\*|\s|\-|\.]?){6})(([\d][\s|\-|\.]?){2})?|(\+?[\d][\s|\-|\.]?){8}(([\d][\s|\-|\.]?){2}(([\d][\s|\-|\.]?){2})?)?)$/;
function validarNumTel(numTel) {
  if (numTel != "") {
    if (regextel.test(numTel)) {
      return true;
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
  if (checkPoliticasPriv.checked) {
    checkPoliticasPriv.value = "Si";
    return true;
  } else {
    return false;
  }
}

function recibirInfoIsChecked() {
  if (checkrecibirInfo.checked) {
    return true;
  } else {
    return false;
  }
}

btnEnviar.addEventListener("click", function (event) {
  event.preventDefault();
  if (!validarNombre(txtNombre.value)) {
    if (!index.includes("nombre")) {
      alertValidacionesTextoNombre.insertAdjacentHTML(
        "afterbegin", ` El <strong> Nombre </strong> no es correcto. <br/> `);
      alertValidacionesTextoNombre.style.color = "red";
      txtNombre.style.border = "solid thin red";
      isValid = false;
      index.push("nombre");
    }
  }
  if (!validarEmail(txtEmail.value)) {
    if (!index.includes("email")) {
      alertValidacionesTextoEmail.insertAdjacentHTML("afterbegin", `El <strong> Correo </strong> no es correcto. <br/> `);
      alertValidacionesTextoEmail.style.color = "red";
      txtEmail.style.border = "solid thin red";
      isValid = false;
      index.push("email");
    }

  }

  if (!validarNumTel(txtPhone.value)) {
    if (!index.includes("phone")) {
      alertValidacionesTextoPhone.insertAdjacentHTML("afterbegin", `El <strong> Número telefónico </strong> no es correcto. <br/> `);
      alertValidacionesTextoPhone.style.color = "red";
      txtPhone.style.border = "solid thin red";
      isValid = false;
      index.push("phone");
    }

  }

  if (!validarListAsunto(listAsunto.value)) {
    if (!index.includes("listAsunto")) {
      alertValidacionesListAsunto.insertAdjacentHTML("afterbegin", `Selecciona un <strong> Asunto </strong> por favor. <br/> `);
      alertValidacionesListAsunto.style.color = "red";
      listAsunto.style.border = "solid thin red";
      isValid = false;
      index.push("listAsunto");
    }

  }

  if (!validarMensaje(txtMensaje.value)) {
    if (!index.includes("mensaje")) {
      alertValidacionesTextoMensaje.insertAdjacentHTML("afterbegin", `El <strong> Mensaje</strong> no es correcto. <br/> `);
      alertValidacionesTextoMensaje.style.color = "red";
      txtMensaje.style.border = "solid thin red";
      isValid = false;
      index.push("mensaje");
    }
  }

  if (!politicasPrivIsChecked()) {
    if (!index.includes("checkPriv")) {
      alertValidacionesCheckPriv.insertAdjacentHTML("afterbegin", `Debe aceptar las <strong>Políticas de Privacidad</strong>. <br/> `);
      alertValidacionesCheckPriv.style.color = "red";
      checkPoliticasPriv.style.border = "solid thin red";
      isValid = false;
      index.push("checkPriv");
    }
  }
  if (validarEmail(txtEmail.value) && validarEmail(txtEmail.value) && validarNumTel(txtPhone.value) && validarListAsunto(listAsunto.value) && politicasPrivIsChecked()) {
    if(recibirInfoIsChecked()){
      checkrecibirInfo.value = "Si";
    }else{
      checkrecibirInfo.value = "No";
    }
    enviarEmail();
    checkrecibirInfo.value = "";
    checkPoliticasPriv.value = "";
    index = [];
  }
});



function enviarEmail() {
  const serviceID = 'service_9r31h4b';
  const templateID = 'template_o4c2eck';
  emailjs.sendForm(serviceID, templateID, formContacto)
    .then(() => {
      alertValidacionesEnviar.insertAdjacentHTML("afterbegin", `<strong>Gracias por comunicarte con nosotros.</strong> <br/> `);
      alertValidacionesEnviar.style.display = "block";
      alertValidacionesEnviar.style.color = "green";
      alertEnviar.style.border = "solid thin green";
    }, (err) => {
      alert(JSON.stringify(err));
    });
}




txtNombre.addEventListener("keyup", function (event) {
  event.preventDefault();
  //quitar alertas
  alertValidacionesTextoNombre.innerHTML = "";
  alertNombre.style.display = "none";
  txtNombre.style.border = "";
  removeAllInstances(index, "nombre");
});


txtEmail.addEventListener("keyup", function (event) {
  event.preventDefault();
  //quitar alertas
  alertValidacionesTextoEmail.innerHTML = "";
  alertEmail.style.display = "none";
  txtEmail.style.border = "";
  removeAllInstances(index, "email");
});

txtPhone.addEventListener("keyup", function (event) {
  event.preventDefault();
  //quitar alertas
  alertValidacionesTextoPhone.innerHTML = "";
  alertPhone.style.display = "none";
  txtPhone.style.border = "";
  removeAllInstances(index, "phone");
});

txtMensaje.addEventListener("keyup", function (event) {
  event.preventDefault();
  //quitar alertas
  alertValidacionesTextoMensaje.innerHTML = "";
  alertMensaje.style.display = "none";
  txtMensaje.style.border = "";
  removeAllInstances(index, "mensaje");
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


function removeAllInstances(arr, item) {
  for (var i = arr.length; i--;) {
    if (arr[i] === item) arr.splice(i, 1);
  }
}


// txtMarca.addEventListener("keypress", function (event) {
//   if (event.key === "Enter") {
//     event.preventDefault();
//     btnEjecutar.click();
//   } //if presiona enter
// });
