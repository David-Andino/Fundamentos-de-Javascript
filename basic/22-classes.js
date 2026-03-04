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
