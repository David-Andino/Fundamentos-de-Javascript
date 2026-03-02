// 1. Usa destructuracion para extreaer los dos primeros elementos de un array
const myArray = [1, 2, 3, 4, 5];
let [a, b] = myArray;
console.log(`Ejercicio 1: ${a} , ${b}`);

// 2. Usa destructuracion en un array y asigna un valor predeterminado a una variable
let [c, d, e, f = 6] = myArray;
console.log(`Ejercicio 2: ${c} , ${d} , ${e} , ${f}`);

// 3. Usa destructuracion para extraer dos propiedad de un objeto
const persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid"
};
let { nombre, edad } = persona;
console.log(`Ejercicio 3: ${nombre} , ${edad}`);

// 4. Usa destructuracion para extraer dos propiedad de un objeto y asignarla a nuevas variable con nombres diferentes
let { nombre: nombre2, edad: edad2 } = persona;
console.log(`Ejercicio 4: ${nombre2} , ${edad2}`);

// 5. Usa propagacion para extraer dos propiedades de un objeto anidado
const empresa = {
    nombre: "Tech Solutions",
    direccion: {
        calle: "Calle Mayor",
        numero: 123,
        ciudad: "Madrid"
    },
    empleados: 50
};
let { direccion: { calle, numero } } = empresa;
console.log(`Ejercicio 5: ${calle} , ${numero}`);

// 6. Usa propagacion para combinar dos arrays en uno nuevo
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];
console.log(`Ejercicio 6: ${combinedArray}`);

// 7. Usa propagacion para crear una copia de un array
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
console.log(`Ejercicio 7: ${copiedArray}`);

// 8. usa propagacion para combinar dos objetos en uno nuevo
const object1 = { a: 1, b: 2 };
const object2 = { c: 3, d: 4 };
const combinedObject = { ...object1, ...object2 };
console.log(`Ejercicio 8: ${JSON.stringify(combinedObject)}`);

// 9. Usa propagacion para crear una copia de un objeto
const originalObject = { a: 1, b: 2 };
const copiedObject = { ...originalObject };
console.log(`Ejercicio 9: ${JSON.stringify(copiedObject)}`);

// 10. Combina destructuracion y propagacion
const person = {
    name: "Alice",
    age: 25,
    city: "New York"
};
const { name, ...rest } = person;
console.log(`Ejercicio 10: ${name} , ${JSON.stringify(rest)}`);