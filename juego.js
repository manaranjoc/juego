
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
var muneco = {
    x: 100,
    y: canvas.height - 100,
    width: 50,
    height: 50
    };
    


function loadmedia(){
        fondo = new Image();
        fondo.src= 'cometa.jpg';
        fondo.onload = function(){
            var intervalo = window.setInterval(frameloop,1000/55);
        };
    
    }
function drawBackground(){
    ctx.drawImage(fondo, 0, 0);
}
function drawMuneco(){
    ctx.save();
    ctx.fillStyle = "white";
    ctx.fillRect(muneco.x, muneco.y, muneco.width, muneco.height);
    ctx.restore();
}

function addEventKeyboard() {
    addEvent(document, "keydown", function(e) { 
        keyboard[e.keyCode] = true;
        
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
function moveMuneco(){
    if(keyboard[37]){
        muneco.x -= 4;
        if(muneco.x < 0)muneco.x =0;
    }
    if(keyboard[39]){
        var limite = canvas.width - muneco.width;
        muneco.x += 4;
        if(muneco.x  > limite)muneco.x = limite;
    }
}
function frameloop(){
    moveMuneco();
    drawBackground();
    drawMuneco();
}
var keyboard= {};
loadmedia();
addEventKeyboard();
