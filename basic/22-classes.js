// Clases 
class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

// sintaxis
let persona1 = new Persona("Juan", "Perez");
console.log(`${persona1.nombre} , ${persona1.apellido}`);

// valores por defecto
class Persona2 {
    constructor(nombre = "Desconocido", apellido = "Desconocido") {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

let persona2 = new Persona2();
console.log(`${persona2.nombre} , ${persona2.apellido}`);

// Acceso a propiedades y métodos
class Persona3 {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
    getNombreCompleto() {
        return `${this.nombre} ${this.apellido}`;
    }   
}

let persona3 = new Persona3("Maria", "Gomez");
console.log(persona3.getNombreCompleto());

// funciones en clases
class Persona4 {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
    getNombreCompleto() {
        return `${this.nombre} ${this.apellido}`;
    }
    saludar() {
        console.log(`Hola, mi nombre es ${this.getNombreCompleto()}`);
    }
}

let persona4 = new Persona4("Carlos", "Lopez");
persona4.saludar();

// propiedades privadas
class Persona5 {
    #nombre;
    #apellido;
    constructor(nombre, apellido) {
        this.#nombre = nombre;
        this.#apellido = apellido;
    }
    getNombreCompleto() {
        return `${this.#nombre} ${this.#apellido}`;
    }
    saludar() {
        console.log(`Hola, mi nombre es ${this.getNombreCompleto()}`);
    }
}

let persona5 = new Persona5("Ana", "Martinez");
// console.log(`privada ${this.#nombre}`); // Error: no se puede acceder a la propiedad privada
persona5.saludar();

// getters y setters
class Persona6 {
    #nombre;
    #apellido;
    constructor(nombre, apellido) {
        this.#nombre = nombre;
        this.#apellido = apellido;
    }   
    get nombre() {
        return this.#nombre;
    }
    set nombre(nuevoNombre) {
        this.#nombre = nuevoNombre;
    }
    get apellido() {
        return this.#apellido;
    }
    set apellido(nuevoApellido) {
        this.#apellido = nuevoApellido;
    }

    getNombreCompleto() {
        return `${this.#nombre} ${this.#apellido}`;
    }
    saludar() {
        console.log(`Hola, mi nombre es ${this.getNombreCompleto()}`);
    }
}

let persona6 = new Persona6("Luis", "Garcia");
console.log(`Nombre completo: ${persona6.getNombreCompleto()}`);
persona6.nombre = "Luis Miguel";
persona6.apellido = "Garcia Lopez";
console.log(`Nombre completo actualizado: ${persona6.getNombreCompleto()}`);


// Herencia

class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }
    sound()  {
        console.log(`${this.nombre} hace un sonido.`);
    }
}

class Perro extends Animal {
    constructor(nombre, raza) {
        super(nombre);
        this.raza = raza;
    }
    sound() {
        console.log(`${this.nombre} ladra.`);
    }
}

let perro1 = new Perro("Rex", "Labrador");
perro1.sound(); // Rex ladra.


class fish extends Animal {
    constructor(nombre, size) {
        super(nombre);
        this.size = size;
    }
    sound() {
        console.log(`${this.nombre} hace un sonido.`);
    }
}
let myFish = new fish("Nemo", " pequeño");
myFish.sound(); // Nemo hace un sonido.

// Metodo estático
class MathUtil {
    static sum(a, b) {
        return a + b;
    }
    static multiply(a, b) {
        return a * b;
    }
}
console.log(`Suma: ${MathUtil.sum(5, 3)}`); // Suma: 8
console.log(`Multiplicación: ${MathUtil.multiply(5, 3)}`); // Multiplicación: 15