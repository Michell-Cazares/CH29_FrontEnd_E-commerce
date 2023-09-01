if (this.localStorage.getItem("user-logged") != null) {
  location.replace("../index.html");
}//if




let txtEmail = document.getElementById("txtEmail");
let txtContraseña = document.getElementById("txtPassword");
let btnLogin = document.getElementById("btnLogin");

/* ALERTAS */

// Párrafos de las alertas
let alerta = document.getElementById("alert");
//Div alertas validaciones
let alertValidaciones = document.getElementById("alertValidaciones");

//Bandera para evitar repetir la alerta de cada campo
let index = [];

//Arreglo para guardar los usuarios en el local storage
let users = [];

//Función para validar que la contraseña contenga de 8-15caracteres, 1mays y 1min, 1número, no espacios en blanco 1carac especial.
//let regexContra = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
//let regexContra = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,15})/;
let regexContra = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-@_$!%*?&])[A-Za-z\d-@_$!%*?&]{8,15}$/;
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
btnLogin.addEventListener("click", function (event) {
  event.preventDefault();
  if (!validarEmail(txtEmail.value) || !validarContra(txtContraseña.value)) {
    if (!index.includes("email") || !index.includes("contraseña")) {
      alertValidaciones.insertAdjacentHTML("afterbegin", `Los <strong> Datos </strong> no son correctos. <br/> `);
      alertValidaciones.style.color = "red";
      txtEmail.style.border = "solid thin red";
      txtContraseña.style.border = "solid thin red";
      index.push("email");
      index.push("contraseña");
    }
  } else {
    alertValidaciones.innerHTML = "";
    alerta.style.display = "none";
    txtEmail.style.border = "";
    txtContraseña.style.border = "";
    removeAllInstances(index, "email");
    removeAllInstances(index, "contraseña");
  }

  if (validarEmail(txtEmail.value) && validarContra(txtContraseña.value)) {
    let user = validarSesion(txtEmail.value, txtContraseña.value);
    console.log(user);
    if (user != null) {
      iniciarSesion(txtEmail.value, txtContraseña.value);
      limpiarTodo();
      btnLogin.disabled = true;
      btnLogin.textContent = "Iniciando Sesión...";
      btnLogin.style.fontWeight = "bold";
      Swal.fire({
        icon: 'success',
        title: '¡Correcto!',
        text: `¡Bienvenido ${user.name}!`,
        type: 'success'
      }).then(function () {
        location.replace("../index.html");
      });
    } else {
      if (!index.includes("email") || !index.includes("contraseña")) {
        alertValidaciones.insertAdjacentHTML("afterbegin", `Los <strong> Datos </strong> no son correctos. <br/> `);
        alertValidaciones.style.color = "red";
        txtEmail.style.border = "solid thin red";
        txtContraseña.style.border = "solid thin red";
        index.push("email");
        index.push("contraseña");
      }
    }
  }
});


function validarSesion(email, contraseña) {
  if (users.length > 0) {
    for (let i = 0; i < users.length; i++) {
      console.log(users[i]);
      if (users[i].email == email && users[i].contraseña == contraseña) {
        return users[i];
      }
    }//for
  }//if
  else {
    return null;
  }

}

function iniciarSesion(email, contraseña) {
  if (this.localStorage.getItem("user") != null) {
    JSON.parse(this.localStorage.getItem("user")).forEach((u) => {
      if (u.email == email && u.contraseña == contraseña) {
        this.localStorage.setItem("user-logged", JSON.stringify(u));
      }
    }//foreach
    );
  }//if
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

//Remueve todas las instancias de un objeto dado (item) que se encuentre en el arreglo index
function removeAllInstances(arr, item) {
  for (var i = arr.length; i--;) {
    if (arr[i] === item) arr.splice(i, 1);
  }
}

txtEmail.addEventListener("keyup", function (event) {
  event.preventDefault();
  if (!index.includes("email")) {
    alertValidaciones.innerHTML = "";
    alerta.style.display = "none";
    txtEmail.style.border = "";
    txtContraseña.style.border = "";
    removeAllInstances(index, "email");
    removeAllInstances(index, "contrasña");
  }
});

txtContraseña.addEventListener("keyup", function (event) {
  event.preventDefault();
  if (!index.includes("contraseña")) {
    alertValidaciones.innerHTML = "";
    alerta.style.display = "none";
    txtEmail.style.border = "";
    txtContraseña.style.border = "";
    removeAllInstances(index, "email");
    removeAllInstances(index, "contrasña");
  }
});


// limpiar Todo
function limpiarTodo() {
  index = [];
  txtEmail.value = "";
  txtContraseña.value = "";
  removeAllInstances(index, "email");
  removeAllInstances(index, "contraseña");

  btnLogin.disabled = false;
  btnLogin.textContent = "Ingresar";
  btnLogin.style.fontWeight = "bold";
}