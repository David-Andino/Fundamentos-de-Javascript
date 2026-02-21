// strings

// concatena dos cadenas de texto
let myName = "David"
let greeting = "Hola, " + myName + "!"
console.log(greeting); // Imprime: Hola, David!

//longitud de una cadena de texto
console.log(greeting.length); // Imprime: 13

// Acceso a caracteres individuales
console.log(greeting[0]); // Imprime: H

// Convertir a mayúsculas y minúsculas
console.log(greeting.toUpperCase());
console.log(greeting.toLowerCase());

// Buscar una subcadena
console.log(greeting.indexOf('David')); 
console.log(greeting.indexOf('Hola'));
console.log(greeting.indexOf('Adios')); // Imprime: -1 (no encontrado)
console.log(greeting.includes('David'));
console.log(greeting.includes('Adios'));
console.log(greeting.slice(0, 11)); // Imprime: Hola, David
console.log(greeting.replace('David', 'Mundo')); // Imprime: Hola, Mundo!

// Plantillas literales
let age = 24;
let message = `Hola, ${myName}. Tienes ${age} años.`;
console.log(message); // Imprime: Hola, David. Tienes 24 años.
