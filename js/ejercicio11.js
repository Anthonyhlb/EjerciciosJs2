let nombres = [];
let edades = [];
for(let i=1; i<=3; i++) {
  nombres.push(prompt(`Introduce el nombre de la persona ${i}: `));
  edades.push(parseInt(prompt(`Introduce la edad de ${nombres[i-1]}: `)));
}
let maxEdad = Math.max(...edades);
let index = edades.indexOf(maxEdad);
document.write(`${nombres[index]} es el mayor con ${maxEdad} años.`);