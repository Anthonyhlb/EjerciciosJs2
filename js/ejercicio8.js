let n = parseInt(prompt("Introduce un número entre 1 y 50: "));
let str = "";
for(let i=1; i<=n; i++) {
  for(let j=1; j<=i; j++) {
    str += j;
  }
  str += "\n" + "<br>";
  
}

document.write(str);