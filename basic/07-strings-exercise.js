// 1. Concatena dos cadenas de texto
let firstName = "David";
let lastName = "García";
let fullName = firstName + " " + lastName;
console.log(fullName);

// 2. Imprime la longitud de una cadena de texto
console.log(fullName.length);

// 3. Accede a caracteres individuales de una cadena de texto
console.log(fullName[0]); // Imprime: D
console.log(fullName[6]); // Imprime: G

// 4. Convierte una cadena de texto a mayúsculas y minúsculas
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());

// 5. Crea una cadena de texto en varias líneas utilizando plantillas literales
let multiLineString = `Esta es una cadena
en varias líneas.`;
console.log(multiLineString);

// 6. interpola el valor de una variable en un string utilizando plantillas literales
let age = 24;
let message = `Hola, ${fullName}. Tienes ${age} años.`;
console.log(message);

// 7. Reemplaza todos los espacios en una cadena de texto por guiones
let stringWithSpaces = "Hola, ¿cómo estás?";
let stringWithHyphens = stringWithSpaces.replace(/ /g, '-');
console.log(stringWithHyphens); // Imprime: Hola,-¿cómo-estás?

// 8. Verifica si una cadena de texto contiene una subcadena específica
console.log(fullName.includes("David"));

// 10. Comprueba si dos strings son iguales sin importar mayúsculas o minúsculas
let string1 = "Hola";
let string2 = "hola";
console.log(string1.toLowerCase() === string2.toLowerCase()); // Imprime: true

// 11. comprueba si dos strings tienen la misma longitud
let string3 = "Hola";
let string4 = "Adiós";
console.log(string3.length === string4.length);