// Objects 

// sintaxis

let person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

// acceder a las propiedades
// usando la notación de punto
console.log(person.name);
console.log(person['age']);

// notacion de corchetes
let property = 'city';
console.log(person[property]);

// agregar o modificar propiedades
person.email = 'john@example.com';
person.age = 31;

console.log(person);

// eliminar propiedades
delete person.city;
console.log(person);

// Metodos en objetos
let person2 = {
    name: 'Alice',
    age: 25,
    walk : function() {
        console.log(this.name + ' is walking');
    }
};

person2.walk(); // Alice is walking

// Objetos anidados
let person3 = {
    name: 'Bob',
    age: 40,
    walk : function() {
        console.log(this.name + ' is walking');
    },
    job: {
        ocupation: "Programador",
        company: "Tech Inc."

    }
};
console.log(person3.job); 

// igualdad de objetos
let obj1 = { name: 'Alice' };
let obj2 = { name: 'Alice' };

console.log(obj1 === obj2); // false, porque son objetos diferentes en memoria
console.log(JSON.stringify(obj1) === JSON.stringify(obj2)); // true, porque tienen el mismo contenido

// iterar sobre las propiedades de un objeto
for (let key in person) {
    console.log(key + ': ' + person[key]);
}

// funciones como objetos
function Person(name, age) { // Esto es una mala practica, se recomienda usar clases en su lugar
    this.name = name;
    this.age = age;
}

let person4 = new Person('Charlie', 35);
console.log(person4.name, person4.age); // Charlie 35