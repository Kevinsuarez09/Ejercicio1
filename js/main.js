function operacionesBasicas(){
    var A;
    var B;
    var suma;
    var resta;
    var multi;
    var div;

    A = parseInt(prompt ("POR FAVOR INGRESE EL PRIMER VALOR (A) PARA REALIZAR LAS OPERACIONES MATEMARTICAS: "));

    B = parseInt(prompt ("POR FAVOR INGRESE EL SEGUNDO VALOR (B) PARA REALIZAR LAS OPERACIONES MATEMARTICAS: "));

    suma = A + B;
    resta = A - B;
    multi = A * B;
    div = A / B;

    alert("AL REALIZAR LA SUMA DE " + A + " Y " + B + " SU RESULTADO ES: " + suma);

    alert("AL REALIZAR LA RESTA DE " + A + " Y " + B + " SU RESULTADO ES: " + resta);

    alert("AL REALIZAR LA MULTIPLICACION DE " + A + " Y " + B + " SU RESULTADO ES: " + multi);

    alert("AL REALIZAR LA DIVISION DE " + A + " Y " + B + " SU RESULTADO ES: " + div)
}


function exponerNumero(){
    var A;
    var Expo;
        
    A = parseInt(prompt("POR FAVOR INGRESE EL NUMERO PARA HALLAR SU VALOR AL CUADRADO:"));
        
    Expo = A * A;

    alert("EL VALOR DEL CUADRADO DE " + A + " ES: " + Expo);
}


function areaTriangulo(){
    var B;
    var H;
    var A;
        
    B = parseFloat(prompt("POR FAVOR INGRESE EL VALOR DE LA BASE DEL TRIÁNGULO, PARA HALLAR SU AREA:"));

    H = parseFloat(prompt("POR FAVOR INGRESE EL VALOR DE LA ALTURA DEL TRIÁNGULO, PARA HALLAR SU AREA:"));
        
    A = B * H / 2;
        
    alert("EL AREA DEL TRIANGULO INGRESADO CON UNA BASE DE " + B + " Y UNA ALTURA DE " + H + " ES: " + A);
}


function convertirMetros(){
    var M;
    var CM;
        
    M = parseInt(prompt("POR FAVOR INGRESE EL NUMERO DE METROS A CONVERTIR EN CENTIMETROS: "));
        
    CM = M * 100;
        
    alert("AL CONVERTIR LOS " + M + " METROS INGRESADOS A CENTIMETROS OBTENEMOS " + CM + " CENTIMETROS");
}

Rectangulo.onclick = function(E){
    var selector = document.getElementById("circulo");
    selector.className='';
    selector.classList.toggle("Rectangulo");
}

Cuadrado.onclick = function(E){
    var selector = document.getElementById("circulo");
    selector.className='';
    selector.classList.toggle("Cuadrado");
}

Rombo.onclick = function(E){
    var selector = document.getElementById("circulo");
    selector.className='';
    selector.classList.toggle("Rombo");
}

Amarillo.onclick = function(E){
    var selector = document.getElementById("circulo");
    selector.className='';
    selector.classList.toggle("Amarillo");
}

Blanco.onclick = function(E){
    var selector = document.getElementById("circulo");
    selector.className='';
    selector.classList.toggle("Blanco");
}

Azul.onclick = function(E){
    var selector = document.getElementById("circulo");
    selector.className='';
    selector.classList.toggle("Azul");
}

Arriba.onclick = function(E){
    var selector = document.getElementById("circulo");
    selector.className='';
    selector.classList.toggle("Arriba");
}

Abajo.onclick = function(E){
    var selector = document.getElementById("circulo");
    selector.className='';
    selector.classList.toggle("Abajo");
}

Derecha.onclick = function(E){
    var selector = document.getElementById("circulo");
    selector.className='';
    selector.classList.toggle("Derecha");
}

Izquierda.onclick = function(E){
    var selector = document.getElementById("circulo");
    selector.className='';
    selector.classList.toggle("Izquierda");
}