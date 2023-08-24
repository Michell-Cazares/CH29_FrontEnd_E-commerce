if (this.localStorage.getItem("user-logged") != null) {
  location.replace("../index.html");
}//if

let txtNombre = document.getElementById("txtNombre");
let txtEmail = document.getElementById("txtEmail");
let txtPhone = document.getElementById("txtPhone");
let txtContraseña = document.getElementById("txtPassword");
let txtConfirContraseña = document.getElementById("txtConfirPassword");
let btnRegistrar = document.getElementById("btnRegistrar");

/* ALERTAS */

// Párrafos de las alertas
let alertNombre = document.getElementById("alertNombre");
let alertEmail = document.getElementById("alertEmail");
let alertPhone = document.getElementById("alertPhone");
let alertContraError = document.getElementById("alertContraError");
let alertConfirmaCon = document.getElementById("alertConfirmaCon");

//Div alertas validaciones
let alertValidacionesTextoNombre = document.getElementById("alertValidacionesTextoNombre");
let alertValidacionesTextoEmail = document.getElementById("alertValidacionesTextoEmail");
let alertValidacionesTextoPhone = document.getElementById("alertValidacionesTextoPhone");
let alertValidacionesTextoContraseña = document.getElementById("alertValidacionesTextoContraseña");
let alertValidacionesConfirContraseña = document.getElementById("alertValidacionesConfirContraseña");

//Bandera para evitar repetir la alerta de cada campo
let index = [];

//Arreglo para guardar los usuarios en el local storage
let users = [];

//Función para validar que la contraseña contenga de 8-15caracteres, 1mays y 1min, 1número, no espacios en blanco 1carac especial.
//let regexContra = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
//let regexContra = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,15})/;
let regexContra = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-@_$!%*?&.])[A-Za-z\d-@_$!%*?&.]{8,15}$/;
function validarContra(password) {
  if (password != "") {
    if (regexContra.test(password)) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}



function validarContraConfirmar(passwordConfirm, password) {
  if (passwordConfirm != "") {
    if (passwordConfirm == password) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

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


// Function para validar numero de teléfono 
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
      return false
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



//oreja de botón registrarse.
btnRegistrar.addEventListener("click", function (event) {
  event.preventDefault();
  if (!validarNombre(txtNombre.value)) {
    if (!index.includes("nombre")) {
      alertValidacionesTextoNombre.insertAdjacentHTML("afterbegin", ` Escribe tu <strong> Nombre Completo </strong>. <br/> `);
      alertValidacionesTextoNombre.style.color = "red";
      txtNombre.style.border = "solid thin red";
      index.push("nombre");
    }
  }

  if (!validarNumTel(txtPhone.value)) {
    if (!index.includes("phone")) {
      alertValidacionesTextoPhone.insertAdjacentHTML("afterbegin", `El <strong> Teléfono </strong> no es correcto. <br/> `);
      alertValidacionesTextoPhone.style.color = "red";
      txtPhone.style.border = "solid thin red";
      index.push("phone");
    }
  }

  if (!validarEmail(txtEmail.value)) {
    if (!index.includes("email")) {
      alertValidacionesTextoEmail.insertAdjacentHTML("afterbegin", `El <strong> Correo </strong> no es correcto. <br/> `);
      alertValidacionesTextoEmail.style.color = "red";
      txtEmail.style.border = "solid thin red";
      index.push("email");
    }

  }

  if (!validarContra(txtContraseña.value)) {
    if (!index.includes("contraseña")) {
      txtContraseña.style.border = "solid thin red";
      alertValidacionesTextoContraseña.insertAdjacentHTML("afterbegin", `La <strong> Contraseña </strong> debe contener: <br/> Min 8 caracteres <br/> Una mayúscula <br/> Una minúscula<br/> Un número <br/> Un caracter epecial: <strong>-@_$!%*?&.</strong><br/> <strong>NO</strong> espacios en blanco `);
      alertValidacionesTextoContraseña.style.color = "blue";
      index.push("contraseña");
    }
  }


  if (!validarContraConfirmar(txtConfirContraseña.value, txtContraseña.value)) {
    if (!index.includes("contraConfirm")) {
      alertValidacionesConfirContraseña.insertAdjacentHTML("afterbegin", `La <strong> Contraseña  </strong> no coincide. <br/> `);
      alertValidacionesConfirContraseña.style.color = "red";
      txtConfirContraseña.style.border = "solid thin red";
      index.push("contraConfirm");
    }
  }


  if (!index.includes("nombre") && !index.includes("email") && !index.includes("phone") && !index.includes("contraseña")   && !index.includes("contraConfirm")) {
    if (!isRegistered(txtEmail.value)) {
      btnRegistrar.disabled = true;
      btnRegistrar.textContent = "Registrando...";
      btnRegistrar.style.fontWeight = "bold";
      registrarUsuario(txtNombre.value, txtEmail.value, txtPhone.value, txtContraseña.value);
      limpiarTodo();
      Swal.fire({
        icon: 'success',
        title: '¡Correcto!',
        text: '¡Se ha registrado con éxito!'
      }).then(function () {
        location.replace("./login.html");
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: '¡Error!',
        text: '¡El correo que ha ingresado, ya se encuentra registrado!'
      });
      txtContraseña.value = "";
      txtConfirContraseña.value = "";
    }
  }

});

function registrarUsuario(name, email, phone, contraseña) {
  let user = `{
      "name": "${name}",
      "phone": "${phone}",
      "email": "${email}",
      "contraseña": "${contraseña}",
      "userType":"cliente"
  }`;

  users.push(JSON.parse(user));
  this.localStorage.setItem("user", JSON.stringify(users));
}

function isRegistered(email) {
  if (users.length > 0) {
    for (let i = 0; i < users.length; i++) {
      if (users[i].email == email) {
        return true;
      } else {
        return false;
      }
    }
  }//if
  else {
    return false;
  }

}

window.addEventListener("load", function (event) {
  event.preventDefault();
  console.log(users);
  if (this.localStorage.getItem("user") != null) {
    JSON.parse(this.localStorage.getItem("user")).forEach((u) => {
      users.push(u);
    }//foreach
    );

  }//if

}); // window // load

//Listener para validar el nombre cada vez que el usuario teclee algo en el campo nombre
txtNombre.addEventListener("keyup", function (event) {
  event.preventDefault();
  if (!validarNombre(txtNombre.value)) {
    if (!index.includes("nombre")) {
      alertValidacionesTextoNombre.insertAdjacentHTML("afterbegin", ` Escribe tu <strong> Nombre Completo </strong>. <br/> `);
      alertValidacionesTextoNombre.style.color = "red";
      txtNombre.style.border = "solid thin red";
      index.push("nombre");
    }
  }
  else {
    //quitar alertas
    alertValidacionesTextoNombre.innerHTML = "";
    alertNombre.style.display = "none";
    txtNombre.style.border = "";
    removeAllInstances(index, "nombre");
  }
});

txtPhone.addEventListener("keyup", function (event) {
  event.preventDefault();
  if (!validarNumTel(txtPhone.value)) {
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

txtEmail.addEventListener("keyup", function (event) {
  event.preventDefault();
  if (!validarEmail(txtEmail.value)) {
    if (!index.includes("email")) {
      alertValidacionesTextoEmail.insertAdjacentHTML("afterbegin", `El <strong> Correo </strong> no es correcto. <br/> `);
      alertValidacionesTextoEmail.style.color = "red";
      txtEmail.style.border = "solid thin red";
      index.push("email");
    }

  }
  else {
    //quitar alertas
    alertValidacionesTextoEmail.innerHTML = "";
    alertEmail.style.display = "none";
    txtEmail.style.border = "";
    removeAllInstances(index, "email");
  }
});


txtContraseña.addEventListener("keyup", function (event) {
  event.preventDefault();
  if (!validarContra(txtContraseña.value)) {
    if (!index.includes("contraseña")) {
      alertValidacionesTextoContraseña.insertAdjacentHTML("afterbegin", `La <strong> Contraseña </strong> debe contener: <br/> Min 8 caracteres <br/> Una mayúscula <br/> Una minúscula<br/> Un número <br/> Un caracter epecial: <strong>-@_$!%*?&.</strong><br/> <strong>NO</strong> espacios en blanco `);
      alertValidacionesTextoContraseña.style.color = "blue";
      txtContraseña.style.border = "solid thin red";
      index.push("contraseña");
    }
  }
  else {
    //quitar alertas
    alertValidacionesTextoContraseña.innerHTML = "";
    alertContraError.style.display = "none";
    txtContraseña.style.border = "";
    removeAllInstances(index, "contraseña");
  }
});


txtConfirContraseña.addEventListener("keyup", function (event) {
  event.preventDefault();
  if (!validarContraConfirmar(txtConfirContraseña.value, txtContraseña.value)) {
    if (!index.includes("contraConfirm")) {
      alertValidacionesConfirContraseña.insertAdjacentHTML("afterbegin", `La <strong> Contraseña  </strong> no coincide. <br/> `);
      alertValidacionesConfirContraseña.style.color = "red";
      txtConfirContraseña.style.border = "solid thin red";
      index.push("contraConfirm");
    }
  }
  else {
    //quitar alertas
    alertValidacionesConfirContraseña.innerHTML = "";
    alertConfirmaCon.style.display = "none";
    txtConfirContraseña.style.border = "";
    removeAllInstances(index, "contraConfirm");
  }
});

//Remueve todas las instancias de un objeto dado (item) que se encuentre en el arreglo index
function removeAllInstances(arr, item) {
  for (var i = arr.length; i--;) {
    if (arr[i] === item) arr.splice(i, 1);
  }
}

// limpiar Todo
function limpiarTodo() {
  index = [];
  txtNombre.value = "";
  txtPhone.value = "";
  txtEmail.value = "";
  txtContraseña.value = "";
  txtConfirContraseña.value = "";
  removeAllInstances(index, "nombre");
  removeAllInstances(index, "email");
  removeAllInstances(index, "phone");
  removeAllInstances(index, "contraseña");
  removeAllInstances(index, "contraConfirm");

  btnRegistrar.disabled = false;
  btnRegistrar.textContent = "Registrarse";
  btnRegistrar.style.fontWeight = "bold";
}