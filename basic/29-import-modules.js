// Importar Modulos

//Manera de declarar una importacion de un modulo, se pueden importar varias cosas a la vez, o solo una, o incluso todo el modulo
import { sumar,  PI, nombre } from './28-export-modules.js';
import restar from './28-export-modules.js';

// Funciones
console.log(sumar(5, 3));

// Propiedades
console.log(PI);
console.log(nombre);

// Importacion por defecto
console.log(restar(5, 3));

// clases
import { circle } from './28-export-modules.js';
const c = new circle(10);
console.log(c.area().toFixed(2));

// Importar todo el modulo
import * as math from './28-export-modules.js';
console.log(math.sumar(5, 3));
console.log(math.PI);
console.log(math.nombre);
console.log(math.default(5, 3));
const c2 = new math.circle(10);
console.log(c2.area().toFixed(2));  
