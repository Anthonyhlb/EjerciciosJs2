let edad=parseInt(prompt("Ingrese su edad"))

if(edad<18){
    alert("No puede conducir");
}else if(edad>=18 && edad<=99){
    alert("Ya puedes conducir");
}else{
    alert("Numero invalido");
}