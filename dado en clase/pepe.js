/*Definir una función JS que tome dos valores de entrada y realice la suma de los mismos y los retorne. 
Usar el valor devuelto en un alert para mostrar el cuadro de diálogo con la frase "El resultado es: ". 
Usar prompt para tomar valores de entrada. Consejo ver tipo de dato function.
2do punto: Al ejercicio anterior, en lugar de comunicarlo con un alert, hacerlo con un elemento h1 en el HTML.
Consejo: revisar Output (pág 9
*/

var num1, num2;
    num1 = parseFloat(prompt("Ingresa un numero1: "));
    num2 = parseFloat(prompt("Ingresa otro numero2"));
    function suma(num1, num2) {
        return num1 + num2
    }
    alert(suma(num1, num2));