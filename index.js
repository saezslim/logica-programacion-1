/** 
Crear un programa en Javascript que realice lo siguiente:
Debe solicitar al usuario 3 números por prompt y guardarlos en sus respectivas variables.
Debe analizar los números, identificar cual es el número mayor, el número del centro y el número menor.
Debe imprimir los números por consola o por el DOM ordenados de mayor a menor, y de menor a mayor.
Debe ser capaz de identificar si los números son iguales e imprimir un mensaje por consola o por el DOM diciendo que los números son iguales.
Prueba tu programa con las siguientes entradas para asegurarte que funcione correctamente:
Entradas: 
4, 4, 2.
Salida:
4, 4, 2.
2, 4, 4.
Entradas: 
4, 2, 4.
Salida:
4, 4, 2.
2, 4, 4.
Entradas: 
2, 4, 4.
Salida:
4, 4, 2.
2, 4, 4.
Pruébalo con las combinaciones de números que se te ocurran.
Al final de tu práctica, tienes que subir el ejercicio a tu repositorio de GitHub.
Colócalo en un repositorio llamado “logica-programacion-1”
 
*/
//No cambiar el nombre de la función ordenarNumeros


// function ordenarNumeros(num1, num2, num3) {

//   let mayor
//   let centro
//   let menor




  
// // No modificar el código debajo de esta línea
//   return {
//     mayor,
//     centro,
//     menor,
//     ordenMayorAMenor: [mayor, centro, menor],
//     ordenMenorAMayor: [menor, centro, mayor],
//   };
// }

// module.exports = ordenarNumeros;

const prompt = require("prompt-sync")()
function ordenarNumeros(num1, num2, num3) {

  let mayor
  let centro
  let menor



numeros = [num1, num2, num3];

const numerosMenorAMayor =[...numeros].sort((a, b) => a - b);
  console.log(numerosMenorAMayor);

const numerosMayorAMenor =[...numeros].sort((a, b) => b - a);
  console.log(numerosMayorAMenor);
  mayor = numerosMayorAMenor[0]
  centro = numerosMayorAMenor[1]
  menor = numerosMayorAMenor[2]

  if (mayor === centro && centro === menor) {
  return ("Los números son iguales")
  }
 

  
// No modificar el código debajo de esta línea
  return {
    mayor,
    centro,
    menor,
    ordenMayorAMenor: [mayor, centro, menor],
    ordenMenorAMayor: [menor, centro, mayor],
  };

}
let num1 = parseInt(prompt("Ingrese el primer número: "));
let num2 = parseInt(prompt("Ingrese el segundo número: "));
let num3 = parseInt(prompt("Ingresa el tercer número: "));
ordenarNumeros(num1, num2, num3);
module.exports = ordenarNumeros;