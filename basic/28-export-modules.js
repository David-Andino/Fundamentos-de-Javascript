// Exportacion de modulos

//Funciones

export function sumar(a, b) {
    return a + b;
}

// Propiedades

export const PI = 3.1416
export let nombre = 'David';

// Exportacion por defecto

export default function restar(a, b) {
    return a - b;
}

// Clases
export class circle {
    constructor(radio) {
        this.radio = radio;
    }
    area() {
        return PI * this.radio * this.radio;
    }
}