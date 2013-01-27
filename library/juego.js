





var canvas = document.getElementById('mycanvas');
     var ctx = canvas.getContext('2d');
    var img = document.getElementById("img");
    function clear(canvas, ctx){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    function a_radianes(grados){
         return (grados * Math.PI)/180;
    }

var fondo;
var x = 1;
var y;
var boy;
var intervalo
var muneco =  {
    x: 16,
    y:  116,
    width: 22,
    height: 34
    };
var keyboard= {};
var images = {
    show : '4.gif',
    on : 'ciudad.jpg'
};
    


function loadmedia(){
        fondo = new Image();
        boy = new Image();
        fondo.src= images.on;
        boy.src= images.show;
        
        fondo.onload = function(){
            intervalo = window.setInterval(frameloop,1000/55);
        };
    
    }


function drawBackground(){
    ctx.drawImage(fondo, 0, 0, canvas.width, canvas.height);
}

function drawMuneco(){
    ctx.save();
    ctx.drawImage(boy, muneco.x, muneco.y, muneco.width, muneco.height);
    console.log(muneco.x, muneco.y);
    ctx.restore();
}
    

function addEventKeyboard() {
    addEvent(document, "keydown", function(e) { 
        keyboard[e.keyCode] = true;
        console.log(e.keyCode);
        
    });

    addEvent(document, "keyup", function(e) { 
        keyboard[e.keyCode] = false;
        
    });
    function addEvent(elemento, nombre, funcion) {
        if (elemento.addEventListener) {
            elemento.addEventListener(nombre, funcion , false);
        }else if (elemento.attachEvent) {
            elemento.attachEvent (nombre, funcion);
        }
        
    }
}

function moveHorizontal(){
    if(keyboard[37]){
        muneco.x -= 1;
        if(muneco.x < 0)muneco.x =0;
    }
    if(keyboard[39]){
        var limite = canvas.width - muneco.width;
        muneco.x += 1;
        if(muneco.x  > limite)muneco.x = limite;
    }
}
function moveVertical(){
    if(keyboard[38]){
        muneco.y -= 1;
        if(muneco.y  < 0)muneco.y = 0;
    }
    if(keyboard[40]){
        var limite2 = canvas.height - muneco.height;
        muneco.y += 1;
        if(muneco.y  > limite2)muneco.y = limite2;
    }
}
function esc(){
    if(keyboard[27]){
        images.on = 'ciudad.jpg';
        images.show = '4.gif';
        muneco.x = 16;
        muneco.y = 116;
        clearInterval(intervalo);
        loadmedia();
    }

}
function colision(){

    if(muneco.y <= 70 && muneco.y >= 0 && muneco.x <= 110 && muneco.x >= 70 && keyboard[13]){
        images.show = '1-2.gif';
        images.on = 'metro.png';
        muneco.x = '16';
        muneco.y = '116';
        clearInterval(intervalo);
        loadmedia();
    }
    if(muneco.y <= 90 && muneco.y >= 30 && muneco.x <= 170 && muneco.x >= 110 && keyboard[13]){
        images.show = '1-2.gif';
        images.on = 'casa.jpg';
        muneco.x = '16';
        muneco.y = '116';
        clearInterval(intervalo);
        loadmedia();
    }
    if(muneco.y <= 80 && muneco.y >= 0 && muneco.x <= 260 && muneco.x > 170 && keyboard[13]){
        images.show = '1-2.gif';
        images.on = 'centro_comercial.jpg';
        muneco.x = '16';
        muneco.y = '116';
        clearInterval(intervalo);
        loadmedia();
    }
    if(muneco.y <= 116 && muneco.y >= 80 && muneco.x <= 270 && muneco.x >= 210 && keyboard[13]){
        images.show = '1-2.gif';
        images.on = 'semaforo.png';
        muneco.x = '16';
        muneco.y = '116';
        clearInterval(intervalo);
        loadmedia();
    }
}
function moveMuneco(){
    if (images.on == 'ciudad.jpg'){
        moveHorizontal();
        moveVertical();
        identificador();
        esc();
        colision();
    }
    if (images.on == 'centro_comercial.jpg'){
        moveHorizontal();
        identificador();
        esc();
    }
    if (images.on == 'semaforo.png'){
        moveHorizontal();
        identificador();
        esc();
    }
    if (images.on == 'metro.png'){
        moveHorizontal();
        identificador();
        esc();
    }
    if (images.on == 'casa.jpg'){
        moveHorizontal();
        moveVertical();
        identificador();
        esc();
    }
}
function identificador(){
    if(muneco.x != y){
    if (images.on == 'metro.png'){
        var metro = $('#imges');
        var metro2 = $('#edit');
        metro2.html('Metro de Medellin: es agil, es el principal medio de transporte masivo de la ciudad, economico y de uso diario.');
        metro.html('<img src="metro.jpg">');
    }
    if (images.on == 'ciudad.jpg'){
        var city = $('#imges');
        var city2 = $('#edit');
        city2.html('para moverse presione las flechas para ingresar a un lugar ya senalado coloquese encima de el y presione enter.para ver un objeto y la descripcion muevase y para salir de un lugar presione esc ');
        city.html('<img src="ciud.jpg">');
    }
    if (images.on == 'semaforo.png'){
        var sem = $('#imges');
        var sem2 = $('#edit');
        sem2.html('Semaforo: orden, control y seguridad vial');
        sem.html('<img src="sem.jpg">');
    }
    if (images.on == 'centro_comercial.jpg'){
        var cenco = $('#imges');
        var cenco2 = $('#edit');
        if (muneco.x >= 60 && muneco.x <= 90){
            cenco2.html('Camaras de seguridad (unidad residencial) : Vigilan y hacen sentir mas segura a la gente al tener registro de todo lo que sucede, quien entra , quien sale y con qué intension');
            cenco.html('<img src="camara.jpg">');
        }else if (muneco.x >= 100 && muneco.x <= 150){
            cenco2.html('Escaleras electricas: rapido, seguro, aluden a un ser sedentario y perezoso');
            cenco.html('<img src="escalera.jpg">');
        }else if (muneco.x >= 190 && muneco.x <= 238){
            cenco2.html('Pistola:  La sociedad ya lo hace parte de su vida diaria o lo acepta como tal, genera seguridad, poder, advierte peligro. Hace sentir al ser que la posee poderoso ante otros.');
            cenco.html('<img src="pistola.jpg">');
        }
    }
    if(images.on == 'casa.jpg'){
            var cas = $('#imges');
            var cas2 = $('#edit');
        if(muneco.x >= 0 && muneco.x <= 15 && muneco.y >=70 && muneco.y <= 100){
            cas2.html('Textiles antibacteriales: En un mundo donde la higiene toma protagonismo y el cuidado personal es fundamental, entran estos textiles actuales que hacen sentir al usuario seguro con la materia prima de su vestuario.');
            cas.html('<img src="antibacterial.jpg">');
        }else if(muneco.x >= 0 && muneco.x <= 15&& muneco.y >= 45 && muneco.y <= 60){
            cas2.html('Tenis fitness step: con cada paso que se da se logra bajar de peso con facilidad y tonificar el cuerpo. Entra en el contexto de belleza y salud que se vive.');
            cas.html('<img src="tenisfit.jpg">');
        }else if(muneco.x >= 0 && muneco.x <= 85 && muneco.y >= 0 && muneco.y <= 30 ){
            cas2.html('Carro twingo: Economico, ahorrador de gasolina, pequeno (facil de parquear), repuestos economicos, buena tecnologia.');
            cas.html('<img src="carro.jpg">');
        }else if(muneco.x >= 25  && muneco.x <= 50 && muneco.y >= 45 && muneco.y <= 70){
            cas2.html('Urna de cenizas: Ocupa menos espacio, es ligero, es mas aseado y contribuye al medio ambiente.');
            cas.html('<img src="cenixero.jpg">');
        }else if(muneco.x >= 25 && muneco.x <=40 && muneco.y >=80 && muneco.y <=100 ){
            cas2.html('Llave para entrar a la casa: brinda seguridad, es portátil, pequeña, única.');
            cas.html('<img src="llave.jpg">');
        }else if(muneco.x >=60 && muneco.x <= 80 && muneco.y >= 50 && muneco.y <=60 ){
            cas2.html('Termo  polar: con un diseno liviano, ergonomico y facil de llevar conserva la temperatura (frio o calor ) que contiene dentro');
            cas.html('<img src="termo.jpg">');
        }else if(muneco.x >= 95 && muneco.x <= 110 && muneco.y >= 50 && muneco.y <= 60){
            cas2.html('Ropa para perros: crea sentimientos de cuidado y amor hacia el perro, se ve atractivo, llama la atencion.');
            cas.html('<img src="ropaper.jpg">');
        }else if(muneco.x >= 100 && muneco.x <= 110 && muneco.y >= 65 && muneco.y <= 85){
            cas2.html('Camara fotografica digital : congela un momento, vivencia del pasado, marca la historia evidentemente');
            cas.html('<img src="camarad">');
        }else if(muneco.x >= 100 && muneco.x <= 110 && muneco.y >= 86 && muneco.y <= 106 ){
            cas2.html('Celulares con tecnologia android: objeto de uso diario que facilita las tareas de un mundo interconectado y digital.');
            cas.html('<img src="samsung.jgp">');
        }else if(muneco.x >= 100 && muneco.x <= 110 && muneco.y >= 20 && muneco.y <= 40){
            cas2.html(' Audifonos beats:  Medio para escuchar con nitidez creando un experiencia sensorial placentera. Utilizado en gran proporcion para escuchar musica');
            cas.html('<img src="audifonos.jpg">');
        }else if(muneco.x >= 100 && muneco.x <= 110 && muneco.y >= 5 && muneco.y <=15 ){
            cas2.html(' Memorias SD: Utilizadas en todos los celulares, camaras fotograficas como medio de almacenarian principal, son pequenas y portatiles');
            cas.html('<img src="sd.jpg">');
        }else if(muneco.x >=  100 && muneco.x <= 110 && muneco.y >= 1 && muneco.y <= 4){
            cas2.html('Polvo compacto con espejo: Es la mascara para entrar en el contexto de belleza , su diseno permite llevarse con facilidad y maquillarse en cualquier lugar (espejo');
            cas.html('<img src="polvo-compacto.jpg">');
        }else if(muneco.x >= 125 && muneco.x <= 140 && muneco.y >= 1 && muneco.y <= 10 ){
            cas2.html(' Quita esmalte portatil: es actual porque no ocupa espacio, puede llevarse en el bolso facilmente y entra en el contexto de belleza actual');
            cas.html('<img src="quitaesmalte.jpg">');
        }else if(muneco.x >= 125 && muneco.x <= 140 && muneco.y >= 55 && muneco.y <= 80 ){
            cas2.html('Dolex:  La pastilla de masas que cura el malestar general');
            cas.html('<img src="dolex.jpg">');
        }else if(muneco.x >= 160 && muneco.x <= 175 && muneco.y >= 80 && muneco.y <= 90 ){
            cas2.html(' Reloj digital: Son mas faciles de leer, mas exactos y tienen opciones para estar interconectado con el exterior.');
            cas.html('<img src="reloj.jpg">');
        }else if(muneco.x >= 160 && muneco.x <= 180 && muneco.y >= 45 && muneco.y <= 70 ){
            cas2.html('Aretes: Entra en el contexto de belleza actual aludiendo a una mujer femenina, sofisticada y a la moda.');
            cas.html('<img src="aretes.jpg">');
        }else if(muneco.x >= 155 && muneco.x <= 180 && muneco.y >= 20 && muneco.y <= 35 ){
            cas2.html('Botellas de agua ecoflex:  En contexto con una mentalidad ecologica y de cuidado del medio ambiente, reduce en un 23% el consumo de PET y debido a su elasticidad se recicla facilmente.');
            cas.html('<img src="ecoflex.jpg">');
        }else if(muneco.x >= 160 && muneco.x <= 175 && muneco.y >= 7 && muneco.y <= 15 ){
            cas2.html('Codigos de barra: Identificacion rapida de productos');
            cas.html('<img src="codigo.jpg">');
        }else if(muneco.x >= 165 && muneco.x <= 175 && muneco.y >= 1 && muneco.y <= 6 ){
            cas2.html('I pod: Elemento con el que la gran mayoria de jovenes escuchan musica');
            cas.html('<img src="ipod.jpg">');
        }else if(muneco.x >= 190 && muneco.x <= 210 && muneco.y >= 45 && muneco.y <= 65 ){
            cas2.html('Olla de cocina de teflon:  Es común y brinda al cocinero una manera agil y aseada de cocinar los alimentos   ');
            cas.html('<img src="olla.jpg">');
        }else if(muneco.x >= 190 && muneco.x <= 205 && muneco.y >= 15 && muneco.y <= 30 ){
            cas2.html('Lentes de contacto: son comodos, invisibles, aluden a una imagen de belleza ( estereotipos segun contexto)');
            cas.html('<img src="lentes_contacto.jpg">');
        }else if(muneco.x >= 186 && muneco.x <= 200 && muneco.y >= 0 && muneco.y <= 5 ){
            cas2.html('Vaso desechable: Es cotidiano, practico y suple la necesidad de no tener que lavar platos.');
            cas.html('<img src="vaso.jpg">');
        }else if(muneco.x >= 215 && muneco.x <= 240 && muneco.y >= 80 && muneco.y <= 100 ){
            cas2.html('Cargador de celular: es portátil, fácil de usar, rápido en ocaciones compatible con varios equipos. Entra en el contexto de rapidez y flujo de energía constante.');
            cas.html('<img src="cargador1.jpg">');
        }else if(muneco.x >= 220 && muneco.x <= 235 && muneco.y >= 0 && muneco.y <= 10){
            cas2.html('Tarjetas bancarias: Reemplaza el dinero, ahorra tiempo, es seguro ');
            cas.html('<img src="tarjetasdecredito.jpg">');
        }else if(muneco.x >= 250 && muneco.x <= 275&& muneco.y >= 10 && muneco.y >= 28 ){
            cas2.html('Video juegos: Entretencion, espacio para el ocio en ninos y jovenes');
            cas.html('<img src="xbox.jpg">');
        }else if(muneco.x >= 250 && muneco.x <= 265&& muneco.y >= 50 && muneco.y >= 65 ){
            cas2.html('Forro para guardar portatil: protege, se lleva con facilidad, es liviano. Entra en el contexto del cuidado y relacion con la tecnologia.');
            cas.html('<img src="forro.jpg">');
        }
    }
    }   
}




function frameloop(){
    if(x == 1){
        y = muneco.x;
    }
    moveMuneco();
    drawBackground();
    drawMuneco();

}
window.addEventListener('load', init);
function init(){
    loadmedia();
    addEventKeyboard();
}
