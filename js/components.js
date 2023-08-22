//Arreglo para guardar los usuarios en el local storage
let userlogged = this.localStorage.getItem("user-logged");

class Footer extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML =
      `
       <!--Inicia footer-->
  <footer>
    <div class="container-fluid pieDePagina">
      <div class="row p-5 pb-2 color1">
        <div class="footer-center col-sm-12 col-md-4 col-lg-4 ">
          <p class="h4 mb-3">Síguenos</p>
          <!--Link de redes sociales-->
          <ul class="list-unstyled d-flex">
            <li>
              <a href="https://www.tiktok.com/@elotes.gutirrez?_t=8e8gVJCe1LB&_r=1"
                class="text-dark text-decoration-none" target="_blank" rel="noopener noreferrer">
                <i class='bx bxl-tiktok'></i></a>
              <a href="https://www.facebook.com/WinnivinMolina" class="text-dark text-decoration-none" target="_blank"
                rel="noopener noreferrer"><i class='bx bxl-facebook-circle'></i></a>
              <a href="https://www.instagram.com/Winnivinm/" class="text-dark text-decoration-none" target="_blank"
                rel="noopener noreferrer"><i class='bx bxl-instagram'></i></a>
              <a href="https://www.google.com/search?q=elotes+gutierrez+toluca&oq=elotes+gutierres+toluca&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIJCAEQIRgKGKABMgkIAhAhGAoYoAEyCQgDECEYChigATIJCAQQIRgKGKAB0gEJMTAzNjFqMGo0qAIAsAIA&sourceid=chrome&ie=UTF-8"
                class="text-dark text-decoration-none" target="_blank" rel="noopener noreferrer">
                <i class='bx bxl-google'></i></a>
            </li>
          </ul>
        </div>
        <div class="footer-center col-sm-12 col-md-4 col-lg-4 ">
          <p class="h4 mb-3">Legales</p>
          <ul class="list-unstyled d-flex">
            <li>
              <a href="./avisoPrivacidad.html" class="nav-link p-0 text-body-secondary" target="_blank" rel="noopener noreferrer">Aviso de privacidad</a>
              <a href="./terminosCondiciones.html" class="nav-link p-0 text-body-secondary" target="_blank" rel="noopener noreferrer">Términos y
                condiciones</a>
              <a href="./login.html" class="nav-link p-0 text-body-secondary">Mi
                cuenta</a>
            </li>
          </ul>
        </div>
        <div class="footer-center col-sm-12 col-md-4 col-lg-4">
          <p class="h4 mb-3">Patrocinador Oficial</p>
          <!--Link de patrocinadores-->
          <ul class="list-unstyled d-flex m-0">
            <li>
              <a href="https://sabritas.com.mx/promocion/" target="_blank" rel="noopener noreferrer"><img
                  src="../src/img/sabritas.png" width="70px" alt="logo-sabritas" /></a>
            </li>
          </ul>
        </div>
        <!-- Dirección -->
        <div class="col-xl-12">
          <p class="pt-4"><strong>Atendemos los 365 días del año. Reviviendo el sazón mexicano.</strong> <br>
            Elotes Gutiérrez. Av. Miguel Hidalgo Ote. 100, Centro, 50000 Toluca de Lerdo, México.</p>
        </div>
      </div>
    </div>
  </footer>
  <!--Termina footer-->
        `
  }
}



class IndexFooter extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML =
      `
      <!--Inicia footer-->
      <footer>
        <div class="container-fluid pieDePagina">
          <div class="row p-5 pb-2 color1">
            <div class="footer-center col-sm-12 col-md-4 col-lg-4 ">
              <p class="h4 mb-3">Síguenos</p>
              <!--Link de redes sociales-->
              <ul class="list-unstyled d-flex">
                <li>
                  <a href="https://www.tiktok.com/@elotes.gutirrez?_t=8e8gVJCe1LB&_r=1"
                    class="text-dark text-decoration-none" target="_blank" rel="noopener noreferrer">
                    <i class='bx bxl-tiktok'></i></a>
                  <a href="https://www.facebook.com/WinnivinMolina" class="text-dark text-decoration-none" target="_blank"
                    rel="noopener noreferrer"><i class='bx bxl-facebook-circle'></i></a>
                  <a href="https://www.instagram.com/Winnivinm/" class="text-dark text-decoration-none" target="_blank"
                    rel="noopener noreferrer"><i class='bx bxl-instagram'></i></a>
                  <a href="https://www.google.com/search?q=elotes+gutierrez+toluca&oq=elotes+gutierres+toluca&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIJCAEQIRgKGKABMgkIAhAhGAoYoAEyCQgDECEYChigATIJCAQQIRgKGKAB0gEJMTAzNjFqMGo0qAIAsAIA&sourceid=chrome&ie=UTF-8"
                    class="text-dark text-decoration-none" target="_blank" rel="noopener noreferrer">
                    <i class='bx bxl-google'></i></a>
                </li>
              </ul>
            </div>
            <div class="footer-center col-sm-12 col-md-4 col-lg-4 ">
              <p class="h4 mb-3">Legales</p>
              <!--Legales-->
              <ul class="list-unstyled d-flex">
                <li>
                  <a href="./pages/avisoPrivacidad.html" class="nav-link p-0 text-body-secondary" target="_blank"
                    rel="noopener noreferrer">Aviso de privacidad</a>
                  <a href="./pages/terminosCondiciones.html" class="nav-link p-0 text-body-secondary" target="_blank"
                    rel="noopener noreferrer">Términos y
                    condiciones</a>
                  <a href="./pages/login.html" class="nav-link p-0 text-body-secondary">Mi
                    cuenta</a>
                </li>
              </ul>
            </div>
            <div class="footer-center col-sm-12 col-md-4 col-lg-4">
              <p class="h4 mb-3">Patrocinador Oficial</p>
              <!--Link de patrocinadores-->
              <ul class="list-unstyled d-flex m-0">
                <li>
                  <a href="https://sabritas.com.mx/promocion/" target="_blank" rel="noopener noreferrer"><img
                      src="./src/img/sabritas.png" width="70px" alt="logo-sabritas" /></a>
                </li>
              </ul>
            </div>
            <!-- Dirección -->
            <div class="col-xl-12">
              <p class="pt-4"><strong>Atendemos los 365 días del año. Reviviendo el sazón mexicano.</strong> <br>
                Elotes Gutiérrez. Av. Miguel Hidalgo Ote. 100, Centro, 50000 Toluca de Lerdo, México.</p>
            </div>
          </div>
        </div>
      </footer>
      <!--Termina footer-->
        `
  }
}



class IndexNavBarLogged extends HTMLElement {
  connectedCallback() {
    this.innerHTML =
      `
      <!-- Navbar -->
      <nav class="navbar sticky-top navbar-expand-lg">
        <div class="container-fluid">
          <!-- Logo -->
          <a href="./index.html"><img src="./src/img/logo.png" class="navbar-brand fs-4 logo"
              alt="logo de Elotes Gutierrez"></a>
          <!-- Toggle Btn -->
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <!-- SideBar -->
          <div class="sidebar offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel">
            <!-- Side Header -->
            <div class="offcanvas-header">
              <a href="./index.html"><img src="./src/img/logo.png" class="navbar-brand fs-4 logo-sidebar"
                  alt="logo de Elotes Gutierrez"></a>
              <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar" data-bs-dismiss="offcanvas" aria-label="Close">
                <i class='bx bx-x' style="font-size:30px"></i>
              </button>
            </div>
    
            <!-- Sidebar Body -->
            <div class="offcanvas-body d-flex flex-column flex-lg-row p-4 p-lg-0">
              <ul class="navbarUl navbar-nav pe-3">
                <li class="nav-item mx-2">
                  <a class="nav-link" href="./index.html">Inicio</a>
                </li>
                <li class="nav-item mx-2">
                  <a class="nav-link" href="./pages/nosotros.html">Nosotros</a>
                </li>
                <li class="nav-item mx-2">
                  <a class="nav-link" href="./pages/contacto.html">Contacto</a>
                </li>
                <li class="nav-item mx-2">
                  <a class="nav-link" href="./pages/productos.html">Productos</a>
                </li>
              </ul>
              <div class="d-flex justify-content-center align-items-center navBarButtons">
    
                <li class="nav-item dropdown">
                  <a class="nav-link" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class='bx bx-user'></i>
                  </a>
                  <ul class="dropdown-menu">
                  <li>
                  <a id="btnLogout" class="dropdown-item">Cerrar Sesión</a>
                  </li>
                  </ul>
                </li>
    
    
                <a class="nav-link" href="./pages/carrito.html"><i class='bx bx-cart'></i></a>
    
              </div>
            </div>
          </div>
        </div>
      </nav>
      <!-- Termina Navbar -->
        `
  }
}


class IndexNavBarUnlogged extends HTMLElement {
  connectedCallback() {
    this.innerHTML =
      `
      <!-- Navbar -->
      <nav class="navbar sticky-top navbar-expand-lg">
        <div class="container-fluid">
          <!-- Logo -->
          <a href="./index.html"><img src="./src/img/logo.png" class="navbar-brand fs-4 logo"
              alt="logo de Elotes Gutierrez"></a>
          <!-- Toggle Btn -->
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <!-- SideBar -->
          <div class="sidebar offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel">
            <!-- Side Header -->
            <div class="offcanvas-header">
              <a href="./index.html"><img src="./src/img/logo.png" class="navbar-brand fs-4 logo-sidebar"
                  alt="logo de Elotes Gutierrez"></a>
              <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar" data-bs-dismiss="offcanvas" aria-label="Close">
                <i class='bx bx-x' style="font-size:30px"></i>
              </button>
            </div>
    
            <!-- Sidebar Body -->
            <div class="offcanvas-body d-flex flex-column flex-lg-row p-4 p-lg-0">
              <ul class="navbarUl navbar-nav pe-3">
                <li class="nav-item mx-2">
                  <a class="nav-link" href="./index.html">Inicio</a>
                </li>
                <li class="nav-item mx-2">
                  <a class="nav-link" href="./pages/nosotros.html">Nosotros</a>
                </li>
                <li class="nav-item mx-2">
                  <a class="nav-link" href="./pages/contacto.html">Contacto</a>
                </li>
                <li class="nav-item mx-2">
                  <a class="nav-link" href="./pages/productos.html">Productos</a>
                </li>
              </ul>
              <div class="d-flex justify-content-center align-items-center navBarButtons">
    
                <li class="nav-item dropdown">
                  <a class="nav-link" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class='bx bx-user'></i>
                  </a>
                  <ul class="dropdown-menu dropdown-menu-right">
                    <li><a class="dropdown-item" href="./pages/login.html">Iniciar Sesión</a></li>
                    <li><a class="dropdown-item" href="./pages/signup.html">Regístrate</a></li>
                  </ul>
                </li>
    
    
                <a class="nav-link" href="./pages/carrito.html"><i class='bx bx-cart'></i></a>
    
              </div>
            </div>
          </div>
        </div>
      </nav>
      <!-- Termina Navbar -->
        `
  }
}

class NavBarLogged extends HTMLElement {
  connectedCallback() {
    this.innerHTML =
      `
            <!-- Navbar -->
            <nav class="navbar sticky-top navbar-expand-lg bg-white">
              <div class="container-fluid">
                <!-- Logo -->
                <a href="../index.html"><img src="../src/img/logo.png" class="navbar-brand fs-4 logo"
                    alt="logo de Elotes Gutierrez"></a>
                <!-- Toggle Btn -->
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                  aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <!-- SideBar -->
                <div class="sidebar offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar"
                  aria-labelledby="offcanvasNavbarLabel">
                  <!-- Side Header -->
                  <div class="offcanvas-header">
                    <a href="../index.html"><img src="../src/img/logo.png" class="navbar-brand fs-4 logo"
                        alt="logo de Elotes Gutierrez"></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                        aria-controls="offcanvasNavbar" data-bs-dismiss="offcanvas" aria-label="Close">
                        <i class='bx bx-x' style="font-size:40px"></i>
                      </button>
                  </div>
                  <!-- Sidebar Body -->
                  <div class="offcanvas-body d-flex flex-column flex-lg-row p-4 p-lg-0">
                  <ul class="navbarUl navbar-nav pe-3">
                      <li class="nav-item mx-2">
                        <a class="nav-link" href="../index.html">Inicio</a>
                      </li>
                      <li class="nav-item mx-2">
                        <a class="nav-link" href="./nosotros.html">Nosotros</a>
                      </li>
                      <li class="nav-item mx-2">
                        <a class="nav-link" href="./contacto.html">Contacto</a>
                      </li>
                      <li class="nav-item mx-2">
                        <a class="nav-link" href="./productos.html">Productos</a>
                      </li>
                    </ul>
                    <div class="d-flex justify-content-center align-items-center navBarButtons">
                    <li class="nav-item dropdown">
                    <a class="nav-link" role="button" data-bs-toggle="dropdown"
                      aria-expanded="false">
                      <i class='bx bx-user'></i>
                    </a>
                    <ul class="dropdown-menu">
                    <li><a  id="btnLogout" class="dropdown-item">Cerrar Sesión</a></li>
                    </ul>
                  </li>
                    <a class="nav-link" href="./carrito.html"><i class='bx bx-cart'></i></a>
                  </div>
                  </div>
                </div>
              </div>
            </nav>
            <!-- Termina Navbar -->
        `
  }
}


class NavBarUnlogged extends HTMLElement {
  connectedCallback() {
    this.innerHTML =
      `
            <!-- Navbar -->
            <nav class="navbar sticky-top navbar-expand-lg bg-white">
              <div class="container-fluid">
                <!-- Logo -->
                <a href="../index.html"><img src="../src/img/logo.png" class="navbar-brand fs-4 logo"
                    alt="logo de Elotes Gutierrez"></a>
                <!-- Toggle Btn -->
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                  aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <!-- SideBar -->
                <div class="sidebar offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar"
                  aria-labelledby="offcanvasNavbarLabel">
                  <!-- Side Header -->
                  <div class="offcanvas-header">
                    <a href="../index.html"><img src="../src/img/logo.png" class="navbar-brand fs-4 logo"
                        alt="logo de Elotes Gutierrez"></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                        aria-controls="offcanvasNavbar" data-bs-dismiss="offcanvas" aria-label="Close">
                        <i class='bx bx-x' style="font-size:40px"></i>
                      </button>
                  </div>
                  <!-- Sidebar Body -->
                  <div class="offcanvas-body d-flex flex-column flex-lg-row p-4 p-lg-0">
                  <ul class="navbarUl navbar-nav pe-3">
                      <li class="nav-item mx-2">
                        <a class="nav-link" href="../index.html">Inicio</a>
                      </li>
                      <li class="nav-item mx-2">
                        <a class="nav-link" href="./nosotros.html">Nosotros</a>
                      </li>
                      <li class="nav-item mx-2">
                        <a class="nav-link" href="./contacto.html">Contacto</a>
                      </li>
                      <li class="nav-item mx-2">
                        <a class="nav-link" href="./productos.html">Productos</a>
                      </li>
                    </ul>
                    <div class="d-flex justify-content-center align-items-center navBarButtons">
                    <li class="nav-item dropdown">
                    <a class="nav-link" role="button" data-bs-toggle="dropdown"
                      aria-expanded="false">
                      <i class='bx bx-user'></i>
                    </a>
                    <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="./login.html">Iniciar Sesión</a></li>
                    <li><a class="dropdown-item" href="./signup.html">Regístrate</a></li>
                    </ul>
                  </li>
                    <a class="nav-link" href="./carrito.html"><i class='bx bx-cart'></i></a>
                  </div>
                  </div>
                </div>
              </div>
            </nav>
            <!-- Termina Navbar -->
        `
  }
}


class Whatsapp extends HTMLElement {
  connectedCallback() {
    this.innerHTML =
      `
      <a href="https://wa.me/c/5217221953594" class="whatsapp" target="_blank"> <i class='bx bxl-whatsapp whatsapp-icon'></i></a>
        `
  }
}


window.addEventListener("load", function (event) {
  event.preventDefault();
  let ruta = this.location.pathname;
  if (this.localStorage.getItem("user-logged") != null) {
    if (ruta.includes("/index.html")) { // <- ESTO HAY QUE MODIFICARLO
      customElements.define('app-indexnavbar', IndexNavBarLogged);
    } else {
      customElements.define('app-navbar', NavBarLogged);
    }
    userlogged = JSON.parse(this.localStorage.getItem("user-logged"));
    console.log(userlogged);
    let btnLogout = document.getElementById("btnLogout");
    btnLogout.addEventListener("click", function (event) {
      event.preventDefault();
      Swal.fire({
        title: '¿Seguro que quieres cerrar sesión?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Cerrar Sesión',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: `¡Hasta la próxima\n${userlogged.name}!`,
            showConfirmButton: false,
            timer: 1499
          })
          localStorage.removeItem("user-logged");
          setTimeout(function () {
            if (ruta.includes("/index.html")) { // <- ESTO HAY QUE MODIFICARLO
              window.location.href = './pages/login.html';
            } else {
              window.location.href = './login.html';
            }
          }, 1500);
        }
      })

    });
  }//if
  else {
    if (ruta.includes("/index.html")) { // <- ESTO HAY QUE MODIFICARLO
      customElements.define('app-indexnavbar', IndexNavBarUnlogged);
    } else {
      customElements.define('app-navbar', NavBarUnlogged);
    }
  }
}); // window // load

customElements.define('app-footer', Footer);
customElements.define('app-indexfooter', IndexFooter);
customElements.define('app-whatsapp', Whatsapp);