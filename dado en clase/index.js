/*Definir una función JS que tome dos valores de entrada y realice la suma de los mismos y los retorne. 
Usar el valor devuelto en un alert para mostrar el cuadro de diálogo con la frase "El resultado es: ". 
Usar prompt para tomar valores de entrada. Consejo ver tipo de dato function.
2do punto: Al ejercicio anterior, en lugar de comunicarlo con un alert, hacerlo con un elemento h1 en el HTML.
Consejo: revisar Output (pág 9
*/

function sumar(num1, num2){
    total = num1 + num2; 
    return total;
}

let valorA = prompt('ingrese el primer numero: ');
let valorB = prompt('ingrese el segundo valor: ');

let resultado = sumar(Number(valorA), Number(valorB));

document.getElementById("resultado").innerHTML = "el resultado es: " + resultado