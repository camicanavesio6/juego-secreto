let numeroSecreto = 0;
let intentos = 0;
let listanumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento (elemento, texto){
let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML = texto;
return;
}
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
   
    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acerto
        if (numeroDeUsuario > numeroSecreto) {
        asignarTextoElemento('p','El número secreto es menor');    
    } else {
        asignarTextoElemento('p','El número secreto es mayor'); 
    }
    intentos++;
    limpiarCaja();
}
    return;
}

function limpiarCaja (){
   document.querySelector('#valorUsuario').value = '';
}


function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

  console.log(numeroGenerado);
  console.log(listanumerosSorteados);
    //Si ya sorteamos todos los numeros
    if (listanumerosSorteados.length == numeroMaximo) {
    asignarTextoElemento('p', 'Ya se han sorteado todos los números posibles. ¡Reinicia el juego!');
    return;

    } 
  //Si el numero generado esta incluido en la lista
    if (listanumerosSorteados.includes(numeroGenerado)) {
    return generarNumeroSecreto();
  } else {
    listanumerosSorteados.push(numeroGenerado);
    return numeroGenerado;
  }

    }

function condicionesIniciales() {
    asignarTextoElemento("h1", "Juego del número secreto!");
    asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function reiniciarJuego (){
    //Limpiar caja
    limpiarCaja(); 
    //Indicar mensaje de intervalos de numeros
    condicionesIniciales(); 
    //Desahabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();



