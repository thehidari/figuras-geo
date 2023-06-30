// Area y perimetro del cuadrado
const perimSquare = (side) => side * 4;
const areaSquare = (side) => side * side;

function calculatePerimSquad(){
    let inputSide = document.getElementById('inputSide');
    let value = Number(inputSide.value);

    const result = `El Perimetro del Cuadrado es: ${perimSquare(value)} cm`;
    document.getElementById('result').innerText = result;
}

function calculateAreaSquad(){
    let inputSide = document.getElementById('inputSide');
    let value = Number(inputSide.value);

    const result = `El Area del Cuadrado es: ${areaSquare(value)} cm^2`;
    document.getElementById('result').innerText = result;
}

function periTria(){
    var uno = document.getElementById('sideTria1').value;
    var dos = document.getElementById('sideTria2').value;
    var tres = document.getElementById('sideTria3').value;

    uno = parseInt(uno);
    dos = parseInt(dos);
    tres = parseInt(tres);

    if(uno > 0 && dos > 0 && tres > 0){
        document.getElementById('result').innerHTML = "El perimetro del triangulo es: " + (uno+dos+tres);
    } else {
        document.getElementById('result').innerHTML = "Un lado no puede ser negativo ni tener un valor nulo"
    }
}

function areaTria(){
    var base = document.getElementById('sideBase').value;
    var altura = document.getElementById('sideAlt').value;

    base = parseInt(base)
    altura = parseInt(altura)

    if(base > 0 && altura > 0){
        document.getElementById('result').innerHTML = "El area del triangulo es " + (base*altura/2)
    }
}

function diaCircle(){
    var radio = document.getElementById('sideRadio').value;
    radio = parseInt(radio)
    if(radio>0){
        document.getElementById('result').innerHTML = "El diametro es " + (2*radio)
    }
}

function periCircle(){
    var radio = document.getElementById('sideRadio').value;
    radio = parseInt(radio)
    if(radio>0){
        document.getElementById('result').innerHTML = "El perimetro es " + (2*radio*3.14)
    }
}

function areaCircle(){
    var radio = document.getElementById('sideRadio').value;
    radio = parseInt(radio)
    if(radio>0){
        document.getElementById('result').innerHTML = "El area es " + (radio*radio*3.14)
    }
}