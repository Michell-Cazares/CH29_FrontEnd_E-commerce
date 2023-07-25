let txtNombre = document.getElementById("txtNombre");
let txtEmail = document.getElementById("txtEmail");
let txtPhone = document.getElementById("txtPhone");
let asunto = document.getElementById("asunto");
let btnEnviar = document.getElementById("btnEnviar");
let txtMensaje = document.getElementById("txtMensaje");
let listAsunto = document.getElementById("listAsunto");
let checkrecibirInfo = document.getElementById("checkrecibirInfo");
let checkPoliticasPriv = document.getElementById("checkPoliticasPriv");


let alertNombre = document.getElementById("alertNombre");
let alertEmail = document.getElementById("alertEmail");
let alertPhone = document.getElementById("alertPhone");
let alertMensaje = document.getElementById("alertMensaje");
let alertCheckPriv = document.getElementById("alertCheckPriv");




let alertValidacionesTextoNombre = document.getElementById("alertValidacionesTextoNombre");
let alertValidacionesTextoEmail = document.getElementById("alertValidacionesTextoEmail");
let alertValidacionesTextoPhone = document.getElementById("alertValidacionesTextoPhone");
let alertValidacionesTextoMensaje = document.getElementById("alertValidacionesTextoMensaje");
let alertValidacionesListAsunto = document.getElementById("alertValidacionesListAsunto");
let alertValidacionesCheckPriv = document.getElementById("alertValidacionesCheckPriv");
let index = 0;

function validarNombre(nombre) {
  if (nombre.length >= 3 && nombre.length < 100) {
    return true;
  } else {
    return false;
  }
}

//Regex Email
let regexEmail =
/^(([^<>()[]\.,;:\s@"]+(.[^<>()[]\.,;:\s@"]+)*)|.(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
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
  console.log(numTel);
  if (numTel != "") {
    if (regextel.test(numTel)) {
      console.log("true");
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
  console.log(checkPoliticasPriv.checked);
  if (checkPoliticasPriv.checked) {
    return true;
  } else {
    return false;
  }
}

btnEnviar.addEventListener("click", function (event) {
  event.preventDefault();
  if (!validarNombre(txtNombre.value)) {
    if (index == 0) {
      alertValidacionesTextoNombre.insertAdjacentHTML(
        "afterbegin", ` El <strong> Nombre </strong> no es correcto. <br/> `);
      alertValidacionesTextoNombre.style.color = "red";
      txtNombre.style.border = "solid thin red";
      isValid = false;
      index = 1;
    }
  }
  if (!validarEmail(txtEmail.value)) {
    if (index == 0) {
      alertValidacionesTextoEmail.insertAdjacentHTML("afterbegin", `El <strong> Correo </strong> no es correcto. <br/> `);
      alertValidacionesTextoEmail.style.color = "red";
      txtEmail.style.border = "solid thin red";
      isValid = false;
      index = 1;
    }

  }

  if (!validarNumTel(txtPhone.value)) {
    if (index == 0) {
      alertValidacionesTextoPhone.insertAdjacentHTML("afterbegin", `El <strong> Número telefónico </strong> no es correcto. <br/> `);
      alertValidacionesTextoPhone.style.color = "red";
      txtPhone.style.border = "solid thin red";
      isValid = false;
      index = 1;
    }

  }

  if (!validarListAsunto(listAsunto.value)) {
    if (index == 0) {
      alertValidacionesListAsunto.insertAdjacentHTML("afterbegin", `Selecciona un <strong> Asunto </strong> por favor. <br/> `);
      alertValidacionesListAsunto.style.color = "red";
      listAsunto.style.border = "solid thin red";
      isValid = false;
      index = 1;
    }

  }

  if (!validarMensaje(txtMensaje.value)) {
    if (index == 0) {
      alertValidacionesTextoMensaje.insertAdjacentHTML("afterbegin", `El <strong> Mensaje</strong> no es correcto. <br/> `);
      alertValidacionesTextoMensaje.style.color = "red";
      txtMensaje.style.border = "solid thin red";
      isValid = false;
      index = 1;
    }
  }

  if (!politicasPrivIsChecked()) {
    if (index == 0) {
      alertValidacionesCheckPriv.insertAdjacentHTML("afterbegin", `Debe aceptar las <strong>Políticas de Privacidad</strong>. <br/> `);
      alertValidacionesCheckPriv.style.color = "red";
      checkPoliticasPriv.style.border = "solid thin red";
      isValid = false;
      index = 1;
    }

  }


});


txtNombre.addEventListener("click", function (event) {
  event.preventDefault();
  //quitar alertas
  alertValidacionesTextoNombre.innerHTML = "";
  alertNombre.style.display = "none";
  txtNombre.style.border = "";
  index = 0;
});


txtEmail.addEventListener("click", function (event) {
  event.preventDefault();
  //quitar alertas
  alertValidacionesTextoEmail.innerHTML = "";
  alertEmail.style.display = "none";
  txtEmail.style.border = "";
  index = 0;
});

txtPhone.addEventListener("click", function (event) {
  event.preventDefault();
  //quitar alertas
  alertValidacionesTextoPhone.innerHTML = "";
  alertPhone.style.display = "none";
  txtPhone.style.border = "";
  index = 0;
});

txtMensaje.addEventListener("click", function (event) {
  event.preventDefault();
  //quitar alertas
  alertValidacionesTextoMensaje.innerHTML = "";
  alertMensaje.style.display = "none";
  txtMensaje.style.border = "";
  index = 0;
});


listAsunto.addEventListener("change", function (event) {
  event.preventDefault();
  //quitar alertas
  alertValidacionesListAsunto.innerHTML = "";
  listAsunto.style.border = "";
  index = 0;
});


checkPoliticasPriv.addEventListener("change", function (event) {
  event.preventDefault();
  //quitar alertas
  alertValidacionesCheckPriv.innerHTML = "";
  checkPoliticasPriv.style.border = "";
  index = 0;
});




// txtMarca.addEventListener("keypress", function (event) {
//   if (event.key === "Enter") {
//     event.preventDefault();
//     btnEjecutar.click();
//   } //if presiona enter
// });
