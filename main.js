let precioauto = parseInt(prompt("ingrese el valor del auto"));

const sumar = (a, b) => a + b;

const transfe = (precioauto) => {
    return precioauto * 0.10 ; 
}

const transferencia = transfe(precioauto)
const transfefinal = sumar(precioauto, transferencia)

alert("el costo total del auto mas la transferencia es de : $"+transfefinal)

let año = parseInt(prompt("Ingrese el año del auto para recomendarle un seguro"));

const seguro = (año) => {
    if (año <= 1990) {
        return 50000;  
    } else if (año <= 2000) {
        return 25000;  
    } else {
        return 150000;  
    }
}

const precioSeguro = seguro(año);  

alert("El precio del seguro es: $" + precioSeguro);  

const precioautofinal = sumar(transfefinal, precioSeguro);
alert("el costo total del auto con la transferencia y seguro es de : $"+precioautofinal)