// 1. Crea un objeto con 3 propiedades
const persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid"
};
//2. Accede y muestre su valor
console.log(persona.nombre); // Juan
console.log(persona.edad); // 30
console.log(persona.ciudad); // Madrid

// 3. Agrega una nueva propiedad al objeto
persona.profesion = "Ingeniero";
console.log(persona.profesion); // Ingeniero

// 4. Elimina una propiedad
delete persona.edad;
console.log(persona.edad); // undefined'

// 5. Agrega una funcion e invocala
persona.saludar = function() {
    console.log(`Hola, mi nombre es ${this.nombre} y soy ${this.profesion}.`);
};
persona.saludar(); // Hola, mi nombre es Juan y soy Ingeniero.

// 6 Itera las propiedades del objeto
for (let clave in persona) {
    console.log(`${clave}: ${persona[clave]}`);
}

// 7. Crea un objeto anidado
const empresa = {
    nombre: "Tech Solutions",
    direccion: {
        calle: "Calle Mayor",
        numero: 123,
        ciudad: "Madrid"
    },
    empleados: 50
};

// 8. Accede a las propiedades del objeto anidado
console.log(empresa.direccion.calle);
console.log(empresa.direccion.numero);
console.log(empresa.direccion.ciudad);

// 9. Comprueba si los dos objetos creados son iguales
const persona2 = {
    nombre: "Juan",
    profesion: "Ingeniero"
};
console.log(persona === persona2); // false, porque son objetos diferentes en memoria

// 10. Comprueba si dos propiedades diferentres son iguales
console.log(persona.nombre === persona2.nombre); // true, ambos tienen el mismo valor "Juan"
console.log(persona.profesion === persona2.profesion); // true, ambos tienen el mismo valor "Ingeniero"
