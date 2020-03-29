//É possível definir valores padrões para os valores de uma function, dessa forma se eles não forem supridos
//será usado pela function o valor padrão setado nas suas variáveis. Parecido com C#
function soma(a = 3, b = 6) {
  return a + b;
}

//É possível usar com Arrow Functions também
const soma2 = (a = 3, b = 6) => a + b;

console.log(soma(1));
console.log(soma());
console.log(soma2(1));
console.log(soma2());
