let total = 0;
let input;
do {
  input = prompt("Ingrese un número (para salir pulse cancelar)");
  if (input !== null) {
    if (isNaN(input)) {
      alert("Ingrese un número válido");
    } else {
      total += Number(input);
    }
  }
} while (input !== null);
alert(`La suma total de los números es: ${total}`);