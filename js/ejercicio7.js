let n = parseInt(prompt("Introduce un número entre 1 y 50: "));
for (let i = n; i >= 1; i--) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += i; 
  }
  document.write("<br>")
  document.write(row);
}