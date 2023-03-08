let texto = prompt("Introduzca un texto: ");
let str = "";
for(let i=0; i<texto.length; i++) {
  str += texto.charAt(i);
  if(i !== texto.length-1) {
    str += "-";
  }
}
document.write(str);