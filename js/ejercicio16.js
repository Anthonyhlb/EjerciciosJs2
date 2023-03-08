const texto = prompt("Introduzca un texto:");

const textoInvertido = texto.split("").reverse().join("");

document.write(`texto invertido: ${textoInvertido}`);