let txtNombre = document.getElementById("txtNombre");
let txtEmail = document.getElementById("txtEmail");
let txtPhone = document.getElementById("txtPhone");
let txtContraseña = document.getElementById("txtPassword");
let txtConfirContraseña = document.getElementById("txtConfirPassword");
let btnRegistrar = document.getElementById("btnRegistrar");

//Div alertas validaciones
let alertValidacionesTextoNombre = document.getElementById("alertValidacionesTextoNombre");
let alertValidacionesTextoEmail = document.getElementById("alertValidacionesTextoEmail");
let alertValidacionesTextoPhone = document.getElementById("alertValidacionesTextoPhone");
let alertValidacionesTextoContraseña = document.getElementById("alertValidacionesTextoContraseña");
let alertValidacionesConfirContraseña = document.getElementById("alertValidacionesConfirContraseña");

//Bandera para evitar repetir la alerta de cada campo
let index = [];

//Función para validar que la contraseña contenga de 8-15caracteres, 1mays y 1min, 1número, no espacios en blanco 1carac especial.
let regexContra = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
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

// Validación para que el campo nombre solo permita nombres de longitud (7 - 99) caracteres.
function validarNombre(nombre) {
    if (nombre.length >= 7 && nombre.length < 100) {
      return true;
    } else {
      return false;
    }
  }
// Function para validar numero de teléfono 
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
        alertValidacionesTextoNombre.insertAdjacentHTML(
          "afterbegin", ` El <strong> Nombre </strong> no es correcto. <br/> `);


    if (!validarContra(txtContraseña.value)) {
        if (!index.includes("contraseña")) {
            txtContraseña.style.border = "solid thin red";
            alertValidacionesTextoContraseña.insertAdjacentHTML("afterbegin", `La <strong> Contraseña </strong> debe contener: <br/> Min 8 caracteres <br/> Una mayúscula <br/> Una minúscula<br/> Un número <br/> Un Caracter epecial<br/> NO espacios en blanco `);
            alertValidacionesTextoContraseña.style.color = "blue";
            index.push("contraseña");
        }

    }
    if (!validarContraConfirmar(txtConfirContraseña.value)) {
        if (!index.includes("contraConfirm")) {
            alertValidacionesConfirContraseña.insertAdjacentHTML("afterbegin", `La <strong> Contraseña  </strong> no coincide. <br/> `);
            alertValidacionesConfirContraseña.style.color = "red";
            txtConfirContraseña.style.border = "solid thin red";
            index.push("contraConfirm");
        }

    }


    if (/*validarNombre(txtNombre.value) && validarEmail(txtEmail.value) && validarNumTel(txtPhone.value) && */validarContra(txtContraseña.value) && validarContraConfirmar(txtConfirContraseña.value)) {


    }
});
 //Listener para validar el nombre cada vez que el usuario teclee algo en el campo nombre
txtNombre.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (!validarNombre(txtNombre.value)) {
      if (!index.includes("nombre")) {
        alertValidacionesTextoNombre.insertAdjacentHTML("afterbegin", ` Escribe tu <strong> Nombre </strong> completo. <br/> `);
        alertValidacionesTextoNombre.style.color = "red";
        txtNombre.style.border = "solid thin red";
        index.push("nombre");
      }
    }
    if (!validarNumTel(txtPhone.value)) {
        if (!index.includes("phone")) {
          alertValidacionesTextoPhone.insertAdjacentHTML("afterbegin", `El <strong> Número telefónico </strong> no es correcto. <br/> `);
          alertValidacionesTextoPhone.style.color = "red";
          txtPhone.style.border = "solid thin red";
          index.push("phone");
        }
    
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

  txtPhone.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (!validarNumTel(txtPhone.value)) {
      if (!index.includes("phone")) {
        alertValidacionesTextoPhone.insertAdjacentHTML("afterbegin", `El <strong> Número telefónico </strong> no es correcto. <br/> `);
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
  
    }*/


//Remueve todas las instancias de un objeto dado (item) que se encuentre en el arreglo index
function removeAllInstances(arr, item) {
    for (var i = arr.length; i--;) {
      if (arr[i] === item) arr.splice(i, 1);
    }
  }

// limpiar Todo
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
  }
  
