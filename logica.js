var salarioInicial;
var salarioAjustado;
var ajuste;
salarioInicial=parseFloat(prompt ("Ingrese su Salario" ))
ajuste=parseFloat(ajuste);
if (salarioInicial<1300606) {
    ajuste=salarioInicial=0.15
} else {
    ajuste=0
}
salarioAjustado=ajuste+salarioInicial;
alert("El salario actual es" + salarioAjustado);
console.log ("El salario actual es" + salarioAjustado);