let str = "";
for(let i=1; i<=500; i++) {
  str += i ;
  if(i%4 === 0) {
    str += " (Múltiplo de 4)" ;
  }
  if(i%9 === 0) {
    str += " (Múltiplo de 9)" ;
  }
  str += "\n" + "<br>";
  if(i%5 === 0) {
    str += "----------------------------------------\n"+ "<br>";
  }
}
document.write(str);