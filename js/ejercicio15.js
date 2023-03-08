const texto = prompt("Introduzca un texto:");

const vocales = texto.match(/[aeiou]/gi);

if (vocales) {
  const numVocales = vocales.length;
  document.write(`El texto contiene ${numVocales} vocales.`);
} else {
  document.write("El texto no contiene vocales.");
}