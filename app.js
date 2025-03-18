// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
let listaAmigosSorteados = [];

function agregarAmigo() {
    let entradaAmigo = document.getElementById("amigo");
    let nombreAmigo = entradaAmigo.value;

    if (!nombreAmigo) {
        alert("Debes ingresar un nombre");
        return;
    } 
    amigos.push(nombreAmigo);
    entradaAmigo.value = "";
    entradaAmigo.focus();
    publicarAmigos()
}
function publicarAmigos(){
    let listaAmigos = document.getElementById("listaAmigos");
    // si no se borra la lista, sobr ella se imprimira la nueva lista completa acumulándose los anteriores en redundancia 
    listaAmigos.innerHTML = "";
    // for formara la lista de nuevo desde cero y los imprimirá en listaAmigos
    for(let n = 0; n < amigos.length; n++ ) {
        let item = document.createElement("li");
        item.textContent = amigos [n];
        listaAmigos.appendChild(item);
    }
}

function sortearAmigo(){
    if(amigos.length == 0){
        alert(`no tienes amigos para sortear`);
        return;
    }
    let amigoSorteado = amigos[Math.floor(Math.random()*amigos.length)];
     if (listaAmigosSorteados.length == amigos.length) {
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = `Ya no quedan más amigos secretos para sortear`;
//        document.getElementById("butonSortear").setAttribute("disabled","true");
     } else {
            if (listaAmigosSorteados.includes(amigoSorteado)) {
                return sortearAmigo();
            } else {
                     listaAmigosSorteados.push(amigoSorteado);
                 }   
            let resultado = document.getElementById("resultado");
            resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;

            let limpiarLista = document.getElementById("listaAmigos");
            limpiarLista.innerHTML = "";
        }
}









