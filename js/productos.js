let listaProductos = document.getElementById("listaProductos");
let name = "";
let description = "";
let img = "";
let price = 0.0;

//FUNCIÓN PARA AÑADIR UN PRODUCTO CON CARD A LISTA PRODUCTOS
function addItem(item) {
    listaProductos.insertAdjacentHTML("beforeend", `            
    <div class="col">
        <div class="card" style="width: 18rem;">
            <img src="${item.img}" class="card-img-top" alt="Foto elote">
            <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class= "card-text"> ${item.description} </p>
                <p class="text-center"><strong>$${item.price}</strong></p>
                <a href="#" class="btn btn_productos btn-primary">Agregar</a>
            </div>
        </div>
    </div>`);
    // const itemsContainer = document.getElementById("list-items");
    // itemsContainer.innerHTML += itemHTML;
}

//Elotes preparados ==========================================================

addItem({
    'name': 'Elote preparado',
    'img': '../src/img/fotosProductos/elotePreparadoTehuacan.jpg',
    'description': 'Elote preparado con mayonesa, queso, chile, limón y sal. Elote de grano pequeño (Tehuacán), por temporada.',
    'price': '25.00'
});

addItem({
    'name': 'Elote preparado',
    'img': 'https://www.gs1india.org/media/Juice_pack.jpg',
    'description': 'Elote preparado con mayonesa, queso, chile, limón y sal. Elote de grano grande (Cacahuazintle), por temporada.',
    'price': '35.00'
});

//Elote enchilado =============================================================

addItem({
    'name': 'Elote enchilado',
    'img': 'https://www.gs1india.org/media/Juice_pack.jpg',
    'description': 'Elote con chile de la casa (jugo de limón con chilito). Elote de grano pequeño (Tehuacán), por temporada.',
    'price': '25.00'
});

addItem({
    'name': 'Elote enchilado',
    'img': '../src/img/fotosProductos/eloteEnchiladoCacahuazintle.jpg',
    'description': 'Elote con chile de la casa (jugo de limón con chilito). Elote de grano grande (Cacahuazintle), por temporada.',
    'price': '35.00'
});

//Esquite natural =============================================================

addItem({
    'name': 'Esquite natural preparado chico',
    'img': '../src/img/fotosProductos/esquiteNaturalPreparado.jpg',
    'description': 'Esquite hervido preparado con mayonesa, queso, chile, limón y sal. Vaso chico.',
    'price': '25.00'
});

addItem({
    'name': 'Esquite natural preparado grande',
    'img': '../src/img/fotosProductos/esquiteNaturalPreparado.jpg',
    'description': 'Esquite hervido preparado con mayonesa, queso, chile, limón y sal. Vaso grande.',
    'price': '30.00'
});

//Esquite asado =============================================================

addItem({
    'name': 'Esquite asado preparado chico',
    'img': '../src/img/fotosProductos/esquiteAsadoPreparado.JPG',
    'description': 'Elote con chile de la casa (jugo de limón con chilito). Elote de grano grande (cacahuazintle), por temporada.',
    'price': '25.00'
});

addItem({
    'name': 'Esquite asado preparado grande',
    'img': '../src/img/fotosProductos/esquiteAsadoPreparado.JPG',
    'description': 'Esquite asado con chile de arbol, epazote y jalapeño,  preparado con mayonesa, queso, chile, limón y sal.',
    'price': '30.00'
});

//DoriEsquites =============================================================

addItem({
    'name': 'DoriEsquites',
    'img': '../src/img/fotosProductos/doriEsquite.JPG',
    'description': 'Las papitas de su gusto, con esquite mayonesa, queso de nachos, queso blanco, sal, limón, y la salsa que guste.',
    'price': '50.00'
});

//Maruchan =============================================================

addItem({
    'name': 'Maruchan Esquites',
    'img': '../src/img/fotosProductos/maruchanEsquites.JPG',
    'description': 'Las papitas de su gusto con Maruchan y con esquite, mayonesa, queso de nachos, queso blanco, sal, limón, y la salsa que guste.',
    'price': '70.00'
});

// addItem({
//     'name': 'Maruchan Normal',
//     'img': 'https://www.gs1india.org/media/Juice_pack.jpg',
//     'description': ' La Maruchan con  limón, sal y la salsa que guste.',
//     'price': '25.00'
// });

window.addEventListener("load", function (event) {
    event.preventDefault();
    if (this.localStorage.getItem("producto") != null) {
        JSON.parse(this.localStorage.getItem("producto")).forEach((p) => {
            addItem({
                "name": p.name,
                "img": p.img,
                "description": p.description,
                "price": p.price
            });
        }//foreach
        );

    }//if resumen

}); // window // load