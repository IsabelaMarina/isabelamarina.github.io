var w;

function checkSize(){
    k = window.innerWidth;
    return k;
}

//Función de abrir los Aside (sirve para ambos, hay que decirle cuál)
function openAside(menu, direcc){
    $(menu).css(direcc,"0");    //Abre el menú (modifica left/right para que se pegue al borde de la pantalla)
    w = checkSize();    //Revisa el ancho actual del navegador

    //Sólo para pantallas grandes (responsive y eso)
    if(w >= 768){
        $(menu+'Abrir').css('display','none');  //Quita el botón respectivo de abrir
        var ancho = $(menu).outerWidth();       //Revisa el grosor del aside para mover el main/header la misma cantidad de espacio

        //"Mueve" el main/header (en reaolidad aumenta el margen izquierdo/derecho, dependiendo del aside que se está abriendo)
        $('main').css('margin-'+direcc,ancho+'px');
        $('header').css('margin-'+direcc,ancho+'px');
    }
}

function closeAside(menu,direcc){
    $(menu).css(direcc,"-100%");    //Oculta el menú (-100% lo mueve fuera de la vista del navegador)
    w = checkSize();

    //Responsive
    if(w >= 768){
        $(menu+'Abrir').css('display','inline-block');  //Vuelve a mostrar el botón

        //Mueve el main/header a su posición original
        $('main').css('margin-'+direcc,'0px');
        $('header').css('margin-'+direcc,'0px');
    }
}

//Esta función es para cuando se cambia el ancho del navegador (se resiza)
//~No me di cuenta lo juro~
function normalizar(){
    w = checkSize();

    //Regresa a la "normalidad" (estándar) cada medida que se modifica al abrir o cerrar los menús. Porque si no se normalizan, entonces queda el margin-left del header/main con un hueco.
    if(w<768){
        closeAside('#Izq','left');
        closeAside('#Der','right');
        $('#Izq').css('position','fixed');
        $('#IzqAbrir').css('display','inline-block');
        $('main').css('margin','0px');
        $('header').css('margin','0px');
    }else{
        openAside('#Izq','left');
        closeAside('#Der','right');
    }
}