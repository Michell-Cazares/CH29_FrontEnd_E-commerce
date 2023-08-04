//elementos del html
let txtNombreProducto = document.getElementById("txtNombreProducto");
let txtDescriptionProducto = document.getElementById("txtDescriptionProducto");
let txtPrecioProducto = document.getElementById("txtPrecioProducto"); // se declara variables
let btnAgregar = document.getElementById("btnAgregar");
let btnImg = document.getElementById("btnImg");
let product_img = document.getElementById("product_img");
let index = [];

let productos = [];


//parrafos de las alertas
let alertNombre = document.getElementById("alertNombre");
let alertDescrip = document.getElementById("alertDescrip");
let alertPrecio = document.getElementById("alertPrecio");
let alertImg = document.getElementById("alertImg");

//div para alertas
let alertValidaNombre = document.getElementById("alertValidaNombre");
let alertValidaDescription = document.getElementById("alertValidaDescription");
let alertValidaPrecioProducto = document.getElementById("alertValidaPrecioProducto");
let alertValidaImg = document.getElementById("alertValidaImg");

//se declaran funciones para las validaciones
function validarNombre(nombre) {
    if (nombre.length >= 3 && nombre.length < 50) {
        return true;
    } else {
        return false;
    }
}
function validarDescription(description) {
    if (description.length >= 50 && description.length < 201) {
        return true;
    } else {
        return false;
    }
}
function validarPrecio(precio) {
    if (precio > 0 || precio != "") {
        return true;
    } else {
        return false;
    }
}

btnAgregar.addEventListener("click", function (event) {
    event.preventDefault();
    if (!validarNombre(txtNombreProducto.value.trim())) {
        if (!index.includes("nombre")) {
            alertValidaNombre.insertAdjacentHTML(
                "afterbegin", ` El <strong> Nombre </strong> no es correcto. <br/> `);
            alertValidaNombre.style.color = "red";
            txtNombreProducto.style.border = "solid thin red";
            index.push("nombre");
        }
    }
    if (!validarDescription(txtDescriptionProducto.value.trim())) {
        if (!index.includes("description")) {
            alertValidaDescription.insertAdjacentHTML(
                "afterbegin", ` La <strong> Descripción </strong> no es correcta. <br/> `);
            alertValidaDescription.style.color = "red";
            txtDescriptionProducto.style.border = "solid thin red";
            index.push("description");
        }
    }
    if (!validarPrecio(txtPrecioProducto.value.trim())) {
        if (!index.includes("precio")) {
            alertValidaPrecioProducto.insertAdjacentHTML(
                "afterbegin", ` El <strong> Precio </strong> no es correcto. <br/> `);
            alertValidaPrecioProducto.style.color = "red";
            txtPrecioProducto.style.border = "solid thin red";
            index.push("precio");
        }
    }

    if (!product_img.src || !product_img.src.match(/[^\s]+(.*?).(jpg|jpeg|png|JPG|JPEG|PNG)$/)) {
        if (!index.includes("imagen")) {
            alertValidaImg.insertAdjacentHTML(
                "afterbegin", ` La <strong> imagen </strong> no es correcta. <br/> `);
            alertValidaImg.style.color = "red";
            alertImg.style.border = "solid thin red";
            index.push("imagen");
        }
    }
    if (!index.includes("nombre") && !index.includes("description") && !index.includes("price") && !index.includes("imagen")) {
        guardarProducto(txtNombreProducto.value, product_img.src, txtDescriptionProducto.value, txtPrecioProducto.value);
        Toast.fire({
            icon: 'success',
            title: '¡El producto se registró con éxito!'
        });

        limpiarTodo();

    }

});

function guardarProducto(name, src, description, price) {
    let producto = `{
        "name": "${name}",
        "img": "${src}",
        "description": "${description}",
        "price": "${price}"
    }`;

    productos.push(JSON.parse(producto));
    this.localStorage.setItem("producto", JSON.stringify(productos));
}

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 5000,
    timerProgressBar: true
});


window.addEventListener("load", function (event) {
    event.preventDefault();
    console.log(productos);
    if (this.localStorage.getItem("producto") != null) {
        JSON.parse(this.localStorage.getItem("producto")).forEach((p) => {
            productos.push(p);
        }//foreach
        );

    }//if

}); // window // load



btnImg.addEventListener("click", function (event) {
    event.preventDefault();
    // Cloudinary ================================================
    let myWidget = cloudinary.createUploadWidget({
        cloudName: 'dpgloi0zv',
        uploadPreset: 'ml_default',
        multiple: false
    }, (error, result) => {
        if (!error && result && result.event === "success") {
            console.log('Done! Here is the image info: ', result.info);
            product_img.src = result.info.secure_url;
        }
    });
    myWidget.open();

}, false);


//Listener para validar el nombre cada vez que el usuario teclee algo en el campo nombre
txtNombreProducto.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (!validarNombre(txtNombreProducto.value.trim())) {
        if (!index.includes("nombre")) {
            alertValidaNombre.insertAdjacentHTML(
                "afterbegin", ` El <strong> Nombre </strong> no es correcto. <br/> `);
            alertValidaNombre.style.color = "red";
            txtNombreProducto.style.border = "solid thin red";
            index.push("nombre");
        }
    }//if nombre del producto no cumple las validaciones
    else {
        //quitar alertas
        alertValidaNombre.innerHTML = "";
        alertNombre.style.display = "none";
        txtNombreProducto.style.border = "";
        removeAllInstances(index, "nombre");
    }

});


txtDescriptionProducto.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (!validarDescription(txtDescriptionProducto.value.trim())) {
        if (!index.includes("description")) {
            alertValidaDescription.insertAdjacentHTML(
                "afterbegin", ` La <strong> Descripción </strong> no es correcta. <br/> `);
            alertValidaDescription.style.color = "red";
            txtDescriptionProducto.style.border = "solid thin red";
            index.push("description");
        }
    }//if description no cumple las validaciones
    else {
        //quitar alertas
        alertValidaDescription.innerHTML = "";
        alertDescrip.style.display = "none";
        txtDescriptionProducto.style.border = "";
        removeAllInstances(index, "description");
    }

});

txtPrecioProducto.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (!validarPrecio(txtPrecioProducto.value.trim())) {
        if (!index.includes("precio")) {
            alertValidaPrecioProducto.insertAdjacentHTML(
                "afterbegin", ` El <strong> Precio </strong> no es correcto. <br/> `);
            alertValidaPrecioProducto.style.color = "red";
            txtPrecioProducto.style.border = "solid thin red";
            index.push("precio");
        }
    }//if precio producto no cumple las validaciones 
    else {
        //quitar alertas
        alertValidaPrecioProducto.innerHTML = "";
        alertPrecio.style.display = "none";
        txtPrecioProducto.style.border = "";
        removeAllInstances(index, "precio");
    }

});

txtPrecioProducto.addEventListener("change", function (event) {
    event.preventDefault();
    if (!validarPrecio(txtPrecioProducto.value.trim())) {
        if (!index.includes("precio")) {
            alertValidaPrecioProducto.insertAdjacentHTML(
                "afterbegin", ` El <strong> Precio </strong> no es correcto. <br/> `);
            alertValidaPrecioProducto.style.color = "red";
            txtPrecioProducto.style.border = "solid thin red";
            index.push("precio");
        }
    }//if precio producto no cumple las validaciones 
    else {
        //quitar alertas
        alertValidaPrecioProducto.innerHTML = "";
        alertPrecio.style.display = "none";
        txtPrecioProducto.style.border = "";
        removeAllInstances(index, "precio");
    }

});


product_img.addEventListener("load", function (event) {
    event.preventDefault();
    if (!product_img.src || !product_img.src.match(/[^\s]+(.*?).(jpg|jpeg|png|JPG|JPEG|PNG)$/)) {
        alertValidaImg.insertAdjacentHTML(
            "afterbegin", ` La <strong> imagen </strong> no es correcta. <br/> `);
        alertValidaImg.style.color = "red";
        alertImg.style.border = "solid thin red";
        index.push("imagen");
    }//if precio producto no cumple las validaciones 
    else {
        //quitar alertas
        alertValidaImg.innerHTML = "";
        alertImg.style.display = "none";
        product_img.style.border = "";
        removeAllInstances(index, "imagen");
    }
});

//Remueve todas las instancias de un objeto dado (item) que se encuentre en el arreglo index
function removeAllInstances(arr, item) {
    for (var i = arr.length; i--;) {
        if (arr[i] === item) arr.splice(i, 1);
    }
}

function limpiarTodo() {
    index = [];
    txtNombreProducto.value = "";
    txtDescriptionProducto.value = "";
    txtPrecioProducto.value = "";
    removeAllInstances(index, "nombre");
    removeAllInstances(index, "description");
    removeAllInstances(index, "price");
    removeAllInstances(index, "imagen");
    product_img.src = "";
}

