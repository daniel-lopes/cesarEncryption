function tratarDeslocamento(deslocamento) {
    if (Math.abs(deslocamento) > 126) {
        return tratarDeslocamento(deslocamento - 126);
    }
    return deslocamento;
}

function substituirLetra(caractere, deslocamento) {
    let c;
    c = caractere.charCodeAt() + deslocamento;
    return String.fromCharCode(c);
}

function voltarLetra(caractere, deslocamento) {
    let c;
    c = caractere.charCodeAt() - deslocamento;
    return String.fromCharCode(c);
}

function criptografarCesar() {
    let frase = document.getElementById('TextoParaCriptografar').value;
    let deslocamento = Number(document.getElementById('deslocamento').value);
    let fraseCriptografada = '';

    for (let i = 0; i < frase.length; i++) {
        fraseCriptografada += substituirLetra(frase[i], tratarDeslocamento(deslocamento));
    }
    document.getElementById('TextoParaCriptografar').value = null;
    document.getElementById('TextoParaDescriptografar').value = fraseCriptografada;
    console.log(fraseCriptografada);
}

function descriptografarCesar() {
    let frase = document.getElementById('TextoParaDescriptografar').value;
    let deslocamento = Number(document.getElementById('deslocamento').value);
    let fraseDescriptografada = '';

    for (let i = 0; i < frase.length; i++) {
        fraseDescriptografada += voltarLetra(frase[i], tratarDeslocamento(deslocamento));
    }
    document.getElementById('TextoParaCriptografar').value = fraseDescriptografada;
    document.getElementById('TextoParaDescriptografar').value = null;
    console.log(fraseDescriptografada);
}