//btn - txt - 
let btnAgregar = document.getElementById("btnAgregar");
let btnClear = document.getElementById("btnClear");
let txtNombre = document.getElementById("Name");
let txtNumber = document.getElementById("Number");
// contador - productor - precio 
let contadorProductos = document.getElementById("contadorProductos");
let productosTotal = document.getElementById("productosTotal");
let precioTotal = document.getElementById("precioTotal");
// tabla - cuerpo - 
let tablaListaCompras = document.getElementById("tablaListaCompras");
let cuerpoTabla = tablaListaCompras.getElementsByTagName("tbody");

let alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
let alertValidaciones = document.getElementById("alertValidaciones");

let contador = 0;
let precio = 0;
let costoTotal = 0;
let totalEnProductos = 0;
let isValid = true;

let datos = new Array(); //Aqui vamos a almacenar los elementos de la tabla
btnClear.addEventListener("click", function (event) {
    event.preventDefault();
    txtNombre.value = "";
    txtNumber.value = "";
    cuerpoTabla[0].innerHTML = "";
    contadorProductos.innerText = "0";
    productosTotal.innerText = "0";
    precioTotal.innerText = "$ 0";
    alertValidacionesTexto.innerHTML = "";
    alertValidaciones.style.display = "none";
    txtNombre.style.border = "";
    txtNumber.style.border = "";
    contador = 0;
    costoTotal = 0;
    totalEnProductos = 0;
    datos = [];
    // localStorage.clear(); //limpia todas las variables

});
function validarCantidad() {
    if (txtNumber.value.length == 0) {
        return false;
    }// if length
    if (isNaN(txtNumber.value)) {
        return false;
    }//if isNaN
    if (parseFloat(txtNumber.value) <= 0) {
        return false;
    }//if
    return true;

}//validarCantidad
function getPrecio() {
    return Math.floor(Math.random() * 75 * 100) / 100;

}// getPrecio
btnAgregar.addEventListener("click", function (event) {
    event.preventDefault();
    isValid = true;
    alertValidacionesTexto.innerHTML = "";
    alertValidaciones.style.display = "none";
    txtNombre.style.border = "";
    txtNumber.style.border = "";
    txtNombre.value = txtNombre.value.trim();
    txtNumber.value = txtNumber.value.trim();
    if (txtNombre.value.length < 3) {
        alertValidacionesTexto.insertAdjacentHTML("beforeend", `
            El <strong>Nombre</strong> no es correcto.<br/>`);
        alertValidaciones.style.display = "block";
        txtNombre.style.border = "solid 2px red";
        isValid = false;
    }
    //if nombre.length
    if (!validarCantidad()) {
        alertValidacionesTexto.insertAdjacentHTML("beforeend", `
            La <strong>Cantidad</strong> no es correcta.<br/>`);
        alertValidaciones.style.display = "block";
        txtNumber.style.border = "solid 2px red";
        isValid = false;
    }
    //if validarCantidad
    if (isValid) {
        contador++;
        precio = getPrecio();
        let row = `<tr>
                        <td>${contador}</td>
                        <td>${txtNombre.value}</td>
                        <td>${txtNumber.value}</td>
                        <td>$ ${precio}</td>
                   </tr>`;

        //este si necesita las comillas - NOMBRE
        let elemento = `{"id"      : ${contador},
                      "nombre"   : "${txtNombre.value}",
                      "cantidad" : "${txtNumber.value}",
                      "precio"   : "${precio}"}`;
        datos.push(JSON.parse(elemento));
        console.log(datos);
        localStorage.setItem("datos", JSON.stringify(datos));

        cuerpoTabla[0].insertAdjacentHTML("beforeend", row);
        contadorProductos.innerText = contador;
        totalEnProductos += parseFloat(txtNumber.value);
        costoTotal += precio * parseFloat(txtNumber.value);
        precioTotal.innerText = `$ ${costoTotal.toFixed(2)}`;
        productosTotal.innerText = totalEnProductos;

        let resumen = ` {"contador": ${contador},
               "costoTotal" : ${costoTotal},
               "totalEnProductos" : ${totalEnProductos} 
               }`;
        localStorage.setItem("resumen", resumen);

        //Guardar info 

        txtNombre.value = "";
        txtNumber.value = "";
        txtNombre.focus();
    }
}); // btnAgregar click

window.addEventListener("load", function (event) {
    event.preventDefault();
    if (this.localStorage.getItem("resumen") != null) {
        let res = JSON.parse(this.localStorage.getItem("resumen"));
        contador = parseInt(res.contador);
        costoTotal = parseFloat(res.costoTotal);
        totalEnProductos = parseInt(res.totalEnProductos);
    }//if resumen
    contadorProductos.innerText = contador;
    precioTotal.innerText = `$ ${costoTotal.toFixed(2)}`;
    productosTotal.innerText = totalEnProductos;

    if (this.localStorage.getItem("datos") != null) {
        datos = JSON.parse(this.localStorage.getItem("datos"));
        datos.forEach((r) => {
            let row = `<tr>
                        <td>${r.id}</td>
                        <td>${r.nombre}</td>
                        <td>${r.cantidad}</td>
                        <td>$ ${r.precio}</td>
                   </tr>`;
            cuerpoTabla[0].insertAdjacentHTML("beforeend", row);
        } //foreach
        );
    } // if datos

    //Contador 
    contadorProductos.innerText = contador;
    precioTotal.innerText = `$ ${costoTotal.toFixed(2)}`;
    productosTotal.innerText = totalEnProductos;
}); 