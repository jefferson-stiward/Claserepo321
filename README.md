var alturaCuadrado, baseCuadrado, areaCuadrado, baseTriangulo, alturaTriangulo, areaTriangulo, radio, areaCirculo;
var PI=3.1416;
var figuraGeometrica;
figuraGeometrica = parseInt(prompt("Seleccione la figura geometrica a la que le desea encontrar el área: 1. Cuadrado 2.Triangulo 3. Circulo"));

switch (figuraGeometrica) {
    case 1:
        alturaCuadrado = parseFloat(prompt("Ingrese la altura del Cuadrado"));
        baseCuadrado = parseFloat(prompt("Ingrese la base del Cuadrado"));
        areaCuadrado = alturaCuadrado*baseCuadrado;
        alert("El área del cuadrado es igual a " +areaCuadrado)
        break;
    case 2:
        alturaTriangulo = parseFloat(prompt("Ingrese la altura del triangulo"));
        baseTriangulo = parseFloat(prompt("Ingrese la base del triangulo"));
        areaTriangulo = alturaTriangulo*baseTriangulo/2;
        alert("El área del triangulo es igual a " +areaTriangulo)
        break;
    case 3:
        radio = parseFloat(prompt("Ingrese el radio del circulo"))
        areaCirculo = PI*radio*radio;
        alert("El área del circulo es igual a " +areaCirculo)
        break;

    default:
        alert("La opción escogida no es válida");
        break;
}# Claserepo321
