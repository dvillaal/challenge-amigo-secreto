let amigos = []

function agregarAmigo() {
    let amigo = document.getElementById('amigo').value

    if (amigo === '') {
        alert('Por favor, inserte un nombre.')
    } else {
        const resultado = document.getElementById('resultado')
        resultado.textContent = ''

        amigos.push(amigo)
        actualizarLista(amigos)
        limpiarCaja()
    }
}

function actualizarLista(array) {
    let lista = document.getElementById('listaAmigos')
    lista.innerHTML = ""
    
    for (let i = 0; i <= array.length; i++) {
        let amigo = document.createElement('li')
        amigo.textContent = array[i]
        lista.appendChild(amigo)
    }

}

function sortearAmigo() {

    if (amigos.length === 0) {
        alert('No hay amigos en la lista')
    } else {
        const amigoAleatorio = Math.floor(Math.random() * amigos.length)
        const resultado = document.getElementById('resultado')

        let lista = document.getElementById('listaAmigos')
        lista.innerHTML = ""

        resultado.textContent = amigos[amigoAleatorio]
    }

    return 
}

function limpiarCaja() {
    document.getElementById('amigo').value = ''
}