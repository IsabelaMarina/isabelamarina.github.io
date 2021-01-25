function rellenar(){
    // document.getElementById("templado").innerHTML = `
    var headerTemp = `
    <header>
    <span id="IzqAbrir" class="hamburger" onclick="openAside('#Izq','left')"><i class="fas fa-chevron-right fa-1x"></i></span>
    <div id="LogoHeaderCont" class="Logo"><img src="imgs/LogoMioVer.png" id="LogoHeader" alt="Logo" title="Logo"/>
    </div>
    <h1>Principal</h1>
    <div class="DerAbrirCont">
        <span id="DerAbrir" class="hamburger" onclick="openAside('#Der','right')"><i class="fas fa-angle-double-left fa-1x"></i></span>
    </div>
    <!-- <hr> -->
    </header>
    `;

    var asideIzqTemp = `
    <aside id="Izq">
        <div class="TituloAside" id="TituloDer">
            <figure class="Logo">
                <img src="imgs/LogoMioVer.png" id="LogoAside" alt="Mi Sitio" title="Mi Sitio"/>
            </figure>
            <div class="DerAbrirCont">
                <span id="AsideDerCerrar" class="hamburger hamburgerAside" onclick="closeAside('#Izq','left')"><i class="fas fa-chevron-left fa-1x"></i></span>
            </div>
            <br>
            Isabela Mercado
        </div>

        <hr>
        
        <nav>
            Categorías
            <ul class="MenuNav">
                <li class="OpcionConSubmenu"><a href='#'>Temáticas</a>
                    <ul class="SubmenuNav">
                        <li><a href="ThesisTest.html">Tema 1</a></li>
                        <li><a href='#'>Tema 2</a></li>
                        <li><a href='#'>Tema 3</a></li>
                    </ul>
                </li>
                <li><a href='#'>Simulaciones</a></li>
                <li><a href='#'>Blog</a></li>
            </ul>
        </nav>
    </aside>
    `;

    var asideDerTemp = `
    <aside id="Der">
        <div class="TituloAside" id="TituloIzq">
            Blog
            <div class="DerAbrirCont">
                <span id="AsideDerCerrar" class="hamburger hamburgerAside" onclick="closeAside('#Der','right')"><i class="fas fa-angle-double-right fa-1x"></i></span>
            </div>
        </div>

        <hr>
        
        <nav>
            <ul class="MenuNav">
                <li><a href='#'>Última entrada</a></li>
                <li class="OpcionConSubmenu"><a href='return false;'>entradas del mes</a>
                    <ul class="SubmenuNav">
                        <li><a href='#'>Tema 1</a></li>
                        <li><a href='#'>Tema 2</a></li>
                        <li><a href='#'>Tema 3</a></li>
                    </ul>
                </li>
                <li><a href='#'>Historial</a></li>
            </ul>
        </nav>
    </aside>
    `;


    $('#asideIzqPlace').before(asideIzqTemp);
    $('#asideIzqPlace').remove();
    $('#asideDerPlace').before(asideDerTemp);
    $('#asideDerPlace').remove();
    $('#headerPlace').before(headerTemp);
    $('#headerPlace').remove();
}