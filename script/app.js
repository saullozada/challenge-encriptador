var btn = document.querySelector('#btn-encriptar');
btn.onclick = encriptar;


function encriptar() {
    let frase = document.getElementById("textoEncriptar").value;

    console.log(frase);

    var textoEncriptado = frase.replace(/e/igm, "enter");
    var textoEncriptado = textoEncriptado.replace(/o/igm, "ober");

    console.log(textoEncriptado);
}