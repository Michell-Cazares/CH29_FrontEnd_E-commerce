let txtNombre = document.getElementById("txtNombre");
let txtEmail = document.getElementById("txtEmail");
let txtPhone = document.getElementById("txtPhone");
let txtContraseña = document.getElementById("txtPassword");
let txtConfirContraseña = document.getElementById("txtConfirPassword");
let btnRegistrar = document.getElementById("btnRegistrar");


//alertas
let alertNombre = document.getElementById("alertNombre");
let alertEmail = document.getElementById("alertEmail");
let alertPhone = document.getElementById("alertPhone");
let alertConfirmaCon = document.getElementById("alertConfirmaCon");
let alertContraError = document.getElementById("alertContraError");

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


//oreja de botón registrarse.
btnRegistrar.addEventListener("click", function (event) {
    event.preventDefault();
    /*if (!validarNombre(txtNombre.value)) {
      if (!index.includes("nombre")) {
        alertValidacionesTextoNombre.insertAdjacentHTML(
          "afterbegin", ` El <strong> Nombre </strong> no es correcto. <br/> `);
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
    if (!validarEmail(txtEmail.value)) {
      if (!index.includes("email")) {
        alertValidacionesTextoEmail.insertAdjacentHTML("afterbegin", `El <strong> Correo </strong> no es correcto. <br/> `);
        alertValidacionesTextoEmail.style.color = "red";
        txtEmail.style.border = "solid thin red";
        index.push("email");
      }
  
    }*/
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
