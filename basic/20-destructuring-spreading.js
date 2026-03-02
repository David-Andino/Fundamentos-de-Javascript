// Destructuracion and spreading
// Destructuring

myArray = [1, 2, 3, 4, 5];
// Destructuring de un array
let [a, b, c, d, e] = myArray;
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
console.log(d);     // 4
console.log(e);     // 5    

// sintaxsis arrays con valores predeterminados
let [f, g, h, i, j, k = 6] = myArray;
console.log(f);
console.log(g);
console.log(h);
console.log(i);
console.log(j);
console.log(k); // 6, valor predeterminado


// Ignorar elementos de un array
let [l, , m, , n] = myArray;
console.log(l); // 1
console.log(m); // 3
console.log(n); // 5

// Destructuring de un objeto
const persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid"
};
let { nombre, edad, ciudad } = persona;
console.log(nombre);

//sitaxis objetos con valores predeterminados
let { nombre: nombre2, edad: edad2, ciudad: ciudad2, profesion = "Desconocida" } = persona;
console.log(nombre2);
console.log(edad2);
console.log(ciudad2);
console.log(profesion); // Desconocida, valor predeterminado

// Ignorar propiedades de un objeto
let { nombre: nombre3, ciudad: ciudad3 } = persona;
console.log(nombre3); // Juan
console.log(ciudad3); // Madrid

// sintaxis objects con nuevos nombres de variables.
let { nombre: nombre4, edad: edad4, ciudad: ciudad4 } = persona;
console.log(nombre4); 
console.log(edad4);
console.log(ciudad4);

// Destructuracion de objetos anidados
const empresa = {
    nombre: "Tech Solutions",
    direccion: {
        calle: "Calle Mayor",
        numero: 123,
        ciudad: "Madrid" 
    },
    empleados: 50
};
let { nombre: nombreEmpresa, direccion: { calle, numero, ciudad: ciudadEmpresa }, empleados } = empresa;
console.log(nombreEmpresa);

// Propagacion (...)
// Spreading de un array
const array1 = [1, 2, 3];
const array2 = [...array1, 4, 5];
console.log(array2); // [1, 2, 3, 4, 5]

// copia de un array
const array3 = [...array1, ...array2];
console.log(array3); 

// Spreading de un objeto
const persona2 = { ...persona, profesion: "Ingeniero" };
console.log(persona2);

