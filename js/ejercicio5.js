let dni;
let letras = "TRWAGMYFPDXBNJZSQVHLCKE";
let resto;
let letra;
do {
  dni = prompt("Ingrese el número de su DNI (para salir pulse cancelar)");
  if (dni !== null) {
    if (isNaN(dni) || dni < 0 || dni > 99999999) {
      alert("Ingrese un número válido");
    } else {
      resto = dni % 23;
      letra = letras.charAt(resto);
      alert(`La letra correspondiente a su DNI es: ${letra}`);
    }
  }
} while (dni !== null);