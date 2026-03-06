// 1. Crea una clase que reciba dos propiedades
class Persona1 {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }}

let persona1 = new Persona1("Juan", "Perez");
console.log(`${persona1.nombre} , ${persona1.apellido}`);

// 2. Agrega un metodo a la clase que utilice las propiedades
class Persona2 {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
    getNombreCompleto() {
        return `${this.nombre} ${this.apellido}`;
    }}
let persona2 = new Persona2("Maria", "Gomez");
console.log(persona2.getNombreCompleto());

// 3. Muestra los valores de las propiedades e invoca a la funcion
class Persona3 {
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
let persona3 = new Persona3("Carlos", "Lopez");
persona3.saludar();

// 4. Agrega un metodo estatico a la primera clase creada
class Persona4 {
    constructor(nombre, apellido) { 
        this.nombre = nombre;
        this.apellido = apellido;
    }
    getNombreCompleto() {   
        return `${this.nombre} ${this.apellido}`;
    }
    static crearPersona(nombre, apellido) {
        return new Persona4(nombre, apellido);
    }
}

let persona4 = Persona4.crearPersona("Ana", "Martinez");
console.log(persona4.getNombreCompleto());

// 5. haz uso del metodo estatico
let persona5 = Persona4.crearPersona("Luis", "Garcia");
console.log(persona5.getNombreCompleto());

// 6. Crea una clase que haga uso de herencia
class Empleado extends Persona4 {
    constructor(nombre, apellido, puesto) {
        super(nombre, apellido);
        this.puesto = puesto;
    }
    getInfoEmpleado() {
        return `${this.getNombreCompleto()} - ${this.puesto}`;
    }
}

let empleado1 = new Empleado("Laura", "Sanchez", "Desarrolladora");
console.log(empleado1.getInfoEmpleado());

// 7. Crea una clase que haga uso de getters y setters
class Persona6 {
    constructor(nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nuevoNombre) {
        this._nombre = nuevoNombre;
    }
    get apellido() {
        return this._apellido;
    }
    set apellido(nuevoApellido) {
        this._apellido = nuevoApellido;
    }
        getNombreCompleto() {
            return `${this._nombre} ${this._apellido}`;
        }
    }

let persona6 = new Persona6("Pedro", "Gomez");
console.log(persona6.nombre);

// 8. Modifica la clase con getters y setters para que las propiedades sean privadas
class Persona7 {
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

persona7 = new Persona7("Pedro", "Gomez");
console.log(persona7.nombre);
persona7.saludar();

// 9. Utiliza los get y set y muestra sus valores
persona7.nombre = "Juan";
persona7.apellido = "Perez";
console.log(persona7.nombre);
console.log(persona7.apellido);
persona7.saludar();

// 10. Sobrescribe el metodo de una clase que utilice herencia
class Empleado2 extends Persona7 {
    constructor(nombre, apellido, puesto) {
        super(nombre, apellido);
        this.puesto = puesto;
    }
    getInfoEmpleado() {
        return `${this.getNombreCompleto()} - ${this.puesto}`;
    }
    saludar() {
        console.log(`Hola, soy ${this.getNombreCompleto()} y trabajo como ${this.puesto}`);
    }
}

let empleado2 = new Empleado2("Laura", "Sanchez", "Desarrolladora");
empleado2.saludar();