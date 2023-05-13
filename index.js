

let precioBase=parseInt(prompt("Ingrese precio base"));
let descuento=parseInt(prompt("Ingrese descuento"));
let resultado = calcularPrecio(precioBase, descuento);

function calcularPrecio(precioBase,descuento){
let preciofinal
if(precioBase<=0 || descuento<0 || descuento>100){
    preciofinal="Los valores ingesados son invalidos";
    }else if(descuento==0){
        preciofinal=precioBase;
    }else if (descuento>0 && descuento<100){
        preciofinal="El precio final con descuento es "+ (precioBase * (1-descuento/100));
        
    }
    return preciofinal;
    
}


console.log(resultado);