class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML =
            `
            <!--Inicia footer-->
            <footer>
              <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top color1 pieDePagina">
          
                <div class="col-4 col-mb-4 siguenos">
                  <h5>Síguenos</h5>
                  <ul class="list-unstyled d-flex">
                    <li class="ms-3">
                      <a class="link-body-emphasis" href="https://www.tiktok.com/@elotes.gutirrez?_t=8e8gVJCe1LB&_r=1"  target="_blank" rel="noopener noreferrer">
                        <i class='bx bxl-tiktok'></i>
                      </a>
                    </li>
                    <li class="ms-3">
                      <a class="link-body-emphasis" href="https://www.facebook.com/WinnivinMolina"  target="_blank" rel="noopener noreferrer"><i
                          class='bx bxl-facebook-circle'></i></a>
                    </li>
                  </ul>
                  <ul class="list-unstyled d-flex">
                    <li class="ms-3">
                      <a class="link-body-emphasis" href="https://www.instagram.com/Winnivinm/"  target="_blank" rel="noopener noreferrer"><i
                          class='bx bxl-instagram'></i></a>
                    </li>
                    <li class="ms-3">
                      <a class="link-body-emphasis"
                        href="https://www.google.com/search?q=elotes+gutierrez+toluca&oq=elotes+gutierres+toluca&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIJCAEQIRgKGKABMgkIAhAhGAoYoAEyCQgDECEYChigATIJCAQQIRgKGKAB0gEJMTAzNjFqMGo0qAIAsAIA&sourceid=chrome&ie=UTF-8">
                        <i class='bx bxl-google'></i></a>
                    </li>
                  </ul>
                </div>
          
                <div class="col-4 col-mb-4 legales">
                  <h5>Legales</h5>
                  <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Aviso de privacidad</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Términos y condiciones</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Mi cuenta</a></li>
                  </ul>
                </div>
          
                <div class="col-4 col-mb-4">
                  <h5>Patrocinadores</h5>
                  <ul class="list-unstyled d-flex">
                    <li class="ms-3"><a class="link-body-emphasis" href="http://www.salesdelistmo.com.mx/"  target="_blank" rel="noopener noreferrer"><img
                          src="./src/img/la-fina.png" width="80px" alt="logo-la-fina"></img> </a></li>
                    <li class="ms-3"><a class="link-body-emphasis" href="https://www.lacostena.com.mx/es/"><img
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Isologo_de_La_Coste%C3%B1a%C2%AE.svg/2560px-Isologo_de_La_Coste%C3%B1a%C2%AE.svg.png"
                          width="80px" alt="logo-la-costena"></img></a></li>
                    <li class="ms-3"><a class="link-body-emphasis" href="https://www.mccormick.mx/"  target="_blank" rel="noopener noreferrer"><img
                          src="https://seeklogo.com/images/M/McCormick-logo-144428A8DB-seeklogo.com.png" width="80px"
                          alt="logo-mccormick"></a></li>
                  </ul>
                  <ul class="list-unstyled d-flex">
                    <li class="ms-3"><a class="link-body-emphasis" href="https://www.labotanera.com/"  target="_blank" rel="noopener noreferrer"><img
                          src="https://www.labotanera.com/wp-content/uploads/2022/05/part-3.png" width="80px"
                          alt="logo-botanera"></a></li>
                    <li class="ms-3"><a class="link-body-emphasis" href="https://www.salsavalentina.mx/"  target="_blank" rel="noopener noreferrer">
                        <img src="https://seeklogo.com/images/S/salsa-valentina-logo-660854C893-seeklogo.com.png" width="80px"
                          alt="logo-valentina"></a></li>
                    <li class="ms-3"><a class="link-body-emphasis" href="https://sabritas.com.mx/promocion/"  target="_blank" rel="noopener noreferrer">
                        <img src="./src/img/sabritas.webp" width="80px" alt="logo-sabritas"></a></li>
                  </ul>
                  </ul>
                </div>
              </div>
          
              <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top color1">
                <p><strong>Atendemos los 365 días del año. Reviviendo el sazón mexicano.</strong> <br>
                  Elotes Gutiérrez. Av. Miguel Hidalgo Ote. 100, Centro, 50000 Toluca de Lerdo, México.</p>
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
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
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
                    <a href="./index.html"><img src="./src/img/logo.png" class="navbar-brand fs-4 logo"
                        alt="logo de Elotes Gutierrez"></a>
                    <button type="button" class="btn btn-outline-success" data-bs-dismiss="offcanvas" aria-label="Close"><i
                        class='bx bx-x'></i></button>
                  </div>
                  <!-- Sidebar Body -->
                  <div class="offcanvas-body d-flex flex-column flex-lg-row p-4 p-lg-0">
                    <ul class="navbar-nav justify-content-center align-items-center flex-grow-1 pe-3">
                      <li class="nav-item mx-2">
                        <a class="nav-link active" aria-current="page" href="./index.html">Inicio</a>
                      </li>
                      <li class="nav-item mx-2">
                        <a class="nav-link" href="./pages/nosotros.html">Nosotros</a>
                      </li>
                      <li class="nav-item mx-2">
                        <a class="nav-link" href="./pages/contacto.html">Contacto</a>
                      </li>
                      <li class="nav-item mx-2">
                        <a class="nav-link" href="#">Productos</a>
                      </li>
                    </ul>
                    <div class="d-flex flex-column flex-lg-row justify-content-center align-items-center gap-3">
                      <button class="btn btn-outline-success" type="button"><i class='bx bx-user'></i></button>
                      <button class="btn btn-outline-success" type="button"><i class='bx bx-cart'></i></button>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
            <!-- Termina Navbar -->
        `
    }
}

customElements.define('app-footer', Footer);
customElements.define('app-navbar', NavBar);