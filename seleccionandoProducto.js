//SIMULADOR DE COMPRAS ADOR//

let nombreUsuario = prompt('Ingresa tu nombre');

while((nombreUsuario == '') || (nombreUsuario == ' ') ){
    alert('Nombre invalido 😫');
    nombreUsuario = prompt('Ingresa tu nombre');
}


alert('Bienvenido/a a Ador Jewelry '+nombreUsuario);

let mensaje = prompt('Deseas comprar alguno de nuestros maravillosos  productos 😊 ? (s-si)');
//creo una variable global para calcular el total de la compra
let total = 0;

//Ciclo para que el usuario compre o siga comprando
while(mensaje.toLowerCase() == 's'){
    let producto = prompt('1 - Candongas Valiente $39900\n2 - Aretes Curiosa Gold $39900\n3 - Cadena Amorosa Silver $49900\n4 - Cadena Amorosa Gold $54900\n5 - Pulsera Cubana Gold $35000\n6 - Pulsera Habana Love $49900');
    //condicional switch para evaluar el producto
    switch(producto){
        case '1':
            alert('Agregaste Candongas Valiente por $39900 a tu carro 🛒');
            incrementarTotal(6000);
            break;
        case '2':
            alert('Agregaste Aretes curiosa Gold por $39900 a tu carro 🛒');
            incrementarTotal(3900);
            break;
        case '3':
            alert('Agregaste Cadena Amorosa Silver por $49900 a tu carro 🛒');
            incrementarTotal(40000);
            break;
        case '4':
            alert('Agregaste Cadena Amorosa Gold por $54900 a tu carro 🛒');
            incrementarTotal(40000);
            break;
        case '5':
            alert('Agregaste Pulsera Cubana Gold por $35000 a tu carro 🛒');
            incrementarTotal(40000);
            break;
        case '6':
            alert('Agregaste Pulsera Habana Love por $49900 a tu carro 🛒');
            incrementarTotal(40000);
            break;
        default:
            alert('Codigo inexistente');
            break;
    }

    mensaje = prompt('Deseas Adquirir otro producto 😊 ? (s-si)');
}

alert('Monto total de su compra $'+total);

//uso una funcion para calcular el total de la compra
function incrementarTotal(precio){
    total = total + precio;
    alert('Subtotal hasta el momento $'+total);
}

alert(nombreUsuario+ ' queremos saber sobre tu experiencia de compra. Por favor danos tu calificacion en el siguiete mensaje')
let Encuesta = prompt ( '1 - estoy muy  insatisfecho con mi proceso de compra\n2 - Estoy satisfecho con mi proceso de compra\n3 - Estoy muy satisfecho con mi proceso de compra')
if (Encuesta == '1'){
    alert("Lo sentimos mucho, trabajaremos mas fuerte para ofrecer un servicio de mayor calidad");
}else if (Encuesta == '2') {
    alert("Muchas gracias, estamos trabajando para mejorar tu experiencia");
}else if (Encuesta == '3'){
    alert("Muchas gracias, esperamos poder servirte nuevamente");
}else
 alert (nombreUsuario+ ' Recuerda que en Ador, siempre encontraras los mejores accesorios para hacer de lo ordinario algo extraordinario');



