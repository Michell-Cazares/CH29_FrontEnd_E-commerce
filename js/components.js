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
          <p class="h4 mb-3">Patrocinadores</p>
          <!--Link de patrocinadores-->
          <ul class="list-unstyled d-flex m-0">
            <li>
              <a href="http://www.salesdelistmo.com.mx/" target="_blank" rel="noopener noreferrer">
                <img src="../src/img/la-fina.png" width="70px" alt="logo-la-fina" /></a>
              <a href="https://www.lacostena.com.mx/es/" target="_blank" rel="noopener noreferrer"><img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Isologo_de_La_Coste%C3%B1a%C2%AE.svg/2560px-Isologo_de_La_Coste%C3%B1a%C2%AE.svg.png"
                  width="70px" alt="logo-la-costena" /></a>
              <a href="https://www.mccormick.mx/" target="_blank" rel="noopener noreferrer"><img
                  src="https://seeklogo.com/images/M/McCormick-logo-144428A8DB-seeklogo.com.png" width="70px"
                  alt="logo-mccormick" /></a>
            </li>
          </ul>
          <!--Link de patrocinadores-->
          <ul class="list-unstyled d-flex m-0">
            <li>
              <a href="https://www.labotanera.com/" target="_blank" rel="noopener noreferrer">
                <img src="https://www.labotanera.com/wp-content/uploads/2022/05/part-3.png" width="70px"
                  alt="logo-botanera" alt="logo-la-fina" /></a>
              <a href="https://www.salsavalentina.mx/" target="_blank" rel="noopener noreferrer"><img
                  src="https://seeklogo.com/images/S/salsa-valentina-logo-660854C893-seeklogo.com.png" width="70px"
                  alt="logo-valentina" /></a>
              <a href="https://sabritas.com.mx/promocion/" target="_blank" rel="noopener noreferrer"><img
                  src="../src/img/sabritas.webp" width="70px" alt="logo-sabritas" /></a>
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
class NavBar extends HTMLElement {
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
                    <a class="nav-link" href="./login.html"><i class='bx bx-user'></i></a>
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



customElements.define('app-footer', Footer);
customElements.define('app-navbar', NavBar);
customElements.define('app-whatsapp', Whatsapp);