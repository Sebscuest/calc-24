// Crear a la funtion sum

let suma= function(a,b){
    suma = a + b;
    alert ("El resultado es " + suma);
}
//funcion resta
let resta = (a, b) => a - b;

//funtion calc 
function calc(op,fnsuma,fnresta){
    let number1 = Number(prompt('Ingresa el primer numero: '));
    let number2 = Number(prompt('Ingresa el segundo numero: '));
    if(op === 'suma'){
        fnsuma(number1,number2);
    }else( op === 'resta')
        fnresta(number1,number2);
        alert ("Operación no válida");  
}

//Llamamos a la funcion 
calc ('suma', suma, resta);