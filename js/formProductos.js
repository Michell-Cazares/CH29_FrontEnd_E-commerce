//elementos del html
let txtNombreProducto=document.getElementById("txtNombreProducto");
let txtDescriptionProducto= document.getElementById("txtDescriptionProducto");
let txtPrecioProducto= document.getElementById("txtPrecioProducto"); // se declara variables
let btnAgregar=document.getElementById("btnAgregar") 
let index=[];

//parrafos de las alertas
let alertNombre = document.getElementById("alertNombre");
let alertDescrip = document.getElementById("alertDescrip");
let alertPrecio = document.getElementById("alertPrecio");

//div para alertas
 let alertValidaNombre = document.getElementById("alertValidaNombre");
 let alertValidaDescription = document.getElementById("alertValidaDescription");
 let alertValidaPrecioProducto = document.getElementById("alertValidaPrecioProducto");
 let alertValida = document.getElementById(""); //pendiente la validacion de imagen

 //se declaran funciones para las validaciones
 function validarNombre(nombre) {
    if (nombre.length >=3  && nombre.length < 50) {
      return true;
    } else {
      return false;
    }
  }
  function validarDescriptio(description) {
    if (description.length >=50  && description.length < 201) {
      return true;
    } else {
      return false;
    }
  }
  function validarPrecio(precio) {
    if (precio >0 ) {
      return true;
    } else {
      return false;
    }
  }

  btnAgregar.addEventListener("click",function(event){
    event.preventDefault();
        if (!validarNombre(txtNombreProducto.value)) {
          if (!index.includes("nombre")) {
            alertValidaNombre.insertAdjacentHTML(
              "afterbegin", ` El <strong> Nombre </strong> no es correcto. <br/> `);
              alertValidaNombre.style.color = "red";
            txtNombreProducto.style.border = "solid thin red";
            index.push("nombre");
          }
        }
        if (!validarDescriptio(txtDescriptionProducto.value)) {
            if (!index.includes("description")) {
                alertValidaDescription.insertAdjacentHTML(
                "afterbegin", ` La <strong> Descripción </strong> no es correcta. <br/> `);
                alertValidaDescription.style.color = "red";
                txtDescriptionProducto.style.border = "solid thin red";
              index.push("description");
            }
          }
        if (!validarPrecio(txtPrecioProducto.value)) {
            if (!index.includes("precio")) {
                alertValidaPrecioProducto.insertAdjacentHTML(
                "afterbegin", ` El <strong> Precio </strong> no es correcto. <br/> `);
                alertValidaPrecioProducto.style.color = "red";
                txtPrecioProducto.style.border = "solid thin red";
              index.push("precio");
            }
          }

          if (validarNombre(txtNombreProducto.value) && validarDescriptio(txtDescriptionProducto.value) && validarPrecio(txtPrecioProducto.value)) {
                addItem();
             index = [];
          }

  });
