let challenge = '30 Days Of JavaScript'; //crea la variable challenge y se le asigna el valor
console.log(challenge); //imprime el valor en consola
console.log(challenge.length); //esto sirve para ver cuantos caracteres tiene el valor asignado
console.log(challenge.toUpperCase());// esto cambia a mayusculas
console.log(challenge.toLowerCase()); //esto cambia a minusculas
console.log(challenge.substring(0, 2)); //devolvera solo los caracteres del 0 al 1, el 2 es el limite
console.log(challenge.substring(3));  // devolvera a partir del caracter 3
console.log(challenge.includes('Script')); //comprobara si la cadena tiene la palabra 'Script'
console.log(challenge.split()); //dividira la cadena en un array
console.log(challenge.split(' ')); //dividira la cadena usando el espacio como separador

let empresas = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'; //se crea la variable con los nombres de empresas
console.log(empresas.split(', ')); //divide la cadena en un array, separandolas con coma

console.log(challenge.replace('JavaScript', 'Node'));  //remplazamos JavaScript por Node
console.log(challenge.charAt(15));  //obtenemos el caracter 15 de la cadena, el cual es S
console.log(challenge.charCodeAt(11)); //obtenemos el codigo del caracter J de la cadena, que es el caracter 11
console.log(challenge.indexOf('a'));  //obtenemos el numero del primer caracter identico a la letra 'a'
console.log(challenge.lastIndexOf('a'));  //obtenemos el numero del ultimo caracter indentico al valor 'a'

let frase = 'You cannot end a sentence with because because because is a conjunction'; //crea la variable con una cadena como valor
console.log(frase.indexOf('because'));  // nos arroja en donde ocurre la primera  aparicion de 'because'
console.log(frase.lastIndexOf('because'));  // nos arroja en donde ocurre la ultima  aparicion de 'because'
console.log(frase.search('because'));  // arroja la primera aparicion de 'because'

let challenge2= ' 30 Days Of JavaScript '; //creamos variable con espacios en blanco
console.log(challenge2.trim()); //elimina los espacios en blanco

console.log(challenge.startsWith('30 Days Of JavaScript')); //verifica si la variable comienza con lo que aparece entre parentesis
console.log(challenge.endsWith('JavaScript'));  //verifica si termina con 'JavaScript'


console.log(challenge.match(/a/g)); //buscamos todas las 'a' dentro de la cadena


let parte1 = '30 Days of';
let parte2 = 'JavaScript';
console.log(parte1.concat(' ', parte2));  // combinaremos las dos partes

console.log(challenge.repeat(2));  //imprimira dos veces la cadena


//Enrique Castillo Rodriguez TI31












