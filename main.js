const listadoautos = [
    {
        marca: "honda",
        modelo: "civic",
        precio: 3500,
        anio: 1994,
        color: "blanco"

    },
    {
        marca: "toyota",
        modelo: "corolla",
        precio: 6500,
        anio: 2006,
        color: "gris"
    },
   {
        marca: "honda",
        modelo: "fit",
        precio: 5500,
        anio: 2004,
        color: "negro",
   },
   {
        marca: "ford",
        modelo: "fiesta",
        precio: 2000,
        anio: 1994,
        color: "gris"
   },
   {
        marca: "fiat",
        modelo: "palio",
        precio: 13500,
        anio: 2020,
        color: "blanco"
   },
]

const filtro = prompt(`Ingrese el criterio de busqueda para encontrar su auto: 
    1. Marca
    2. Precio máximo
    3. Modelo
    4. Año
    5. Color
    Escriba su elección (ejemplo: "marca"):`).toLowerCase();

    let resultado;

    switch (filtro) {
        case "marca":
            const marca = prompt("Ingrese la marca del auto (ejemplo: 'honda, toyota, ford, fiat'):");
            resultado = listadoautos.filter(auto => auto.marca.toLowerCase() === marca.toLowerCase());
            break;
    
        case "precio maximo":
            const precioMax = parseFloat(prompt("Ingrese el precio máximo (ejemplo: 5000):"));
            resultado = listadoautos.filter(auto => auto.precio <= precioMax);
            break;
    
        case "modelo":
            const modelo = prompt("Ingrese el modelo del auto (ejemplo: 'civic, corolla, palio, fit, fiesta'):");
            resultado = listadoautos.filter(auto => auto.modelo.toLowerCase() === modelo.toLowerCase());
            break;
    
        case "anio":
            const anio = parseInt(prompt("Ingrese el año del auto (ejemplo: 2006):"), 10);
            resultado = listadoautos.filter(auto => auto.anio === anio);
            break;
    
        case "color":
            const color = prompt("Ingrese el color del auto (ejemplo: 'blanco, gris, negro'):");
            resultado = listadoautos.filter(auto => auto.color.toLowerCase() === color.toLowerCase());
            break;
    
        default:
            alert("Criterio inválido. Inténtelo de nuevo.");
            resultado = [];
            break;
    }

    if (resultado.length > 0) {
        const detalles = resultado.map(auto => 
            `Marca: ${auto.marca}, Modelo: ${auto.modelo}, Año: ${auto.anio}, Color: ${auto.color}, Precio: $${auto.precio}`
        ).join("\n");
    
        alert(`Resultados encontrados:\n\n${detalles}`)
        
    }
    console.log(detalles)
