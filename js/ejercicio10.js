let rows = parseInt(prompt("Introduce el número de filas: "));
let cols = parseInt(prompt("Introduce el número de columnas: "));
let num = rows * cols;
let str = "";
for(let i=1; i<=rows; i++) {
  for(let j=1; j<=cols; j++) {
    str += num + "\t";
    num--;
  }
  str += "\n" + "<br>";
}
document.write(str);