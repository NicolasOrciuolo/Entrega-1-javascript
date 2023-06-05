const suma = (num1, num2) => { return num1 + num2 };

const resta = (num1, num2) => { return num1 - num2 };

const dividir = (num1, num2) => { return num1 / num2 };

const multiplicar = (num1, num2) => { return num1 * num2 };


let salir;
let numero1;
let numero2;
let operador;


do {

   do {
      numero1 = parseInt(prompt("Ingrese un número"));
      if (isNaN(numero1)) {
         alert("El número ingresado es incorrecto");
      };
   } while (isNaN(numero1));

   salir = false;
   do {
      operador = prompt("Ingrese un operador matemático [ + ; - ; * ; / ]");
      if (operador == "+" || operador == "-" || operador == "*" || operador == "/") {
         salir = true;
      } else {
         alert("El operador ingresado es incorrecto")
      };
   } while (!salir)

   do {
      numero2 = parseInt(prompt("Ingrese otro número"));
      if (isNaN(numero2)) {
         alert("El número ingresado es incorrecto");
      };
   } while (isNaN(numero2));

   switch (operador) {
      case "+":
         alert("El resultado es: " + suma(numero1, numero2));
         break;

      case "-":
         alert("El resultado es: " + resta(numero1, numero2));
         break;

      case "*":
         alert("El resultado es: " + multiplicar(numero1, numero2));
         break;

      case "/":
         alert("El resultado es: " + dividir(numero1, numero2));
         break;
   }

   salir = false;
   exit = prompt("¿Desea realizar otra operación? [S / N]");
   if (exit.toUpperCase() == "N") {
      salir = true;
   }

} while (!salir);

alert("Muchas gracias!");