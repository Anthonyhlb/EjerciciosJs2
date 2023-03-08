let texto = prompt("Ingrese un texto:");
let vocales = "aeiouAEIOU";

for (let i = 0; i < texto.length; i++) {
  if (vocales.indexOf(texto[i]) !== -1) {
    alert(`La primera vocal se encuentra en la posición ${i+1}`);
    break;
  }
}