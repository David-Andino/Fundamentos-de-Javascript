// 1. crear un array que alamacene 5 animales

let animals = ["dog", "cat", "rabbit", "hamster", "parrot"]
console.log(animals)

// 2. incluye dos mas, uno al principio y otro al final

animals.unshift("turtle")
animals.push("fish")
console.log(animals)

// 3. eliminar el que se encuentra en la posicion 3

animals.splice(3, 1)
console.log(animals)

// 5. incluye dos mas. uno de ellos repetido

animals.push("cat")
animals.push("lizard")
console.log(animals)

// 6. elimina uno concreto a tu eleccion

animals.splice(animals.indexOf("hamster"), 1)
console.log(animals)

7. // 7. Crea un mapa que asocie el numero del mes a su nombre

let monthMap = new Map(
    [[1, "January"],
    [2, "February"],
    [3, "March"],
    [4, "April"],
    [5, "May"],  
    [6, "June"],
    [7, "July"],
    [8, "August"],
    [9, "September"],
    [10, "October"],
    [11, "November"],
    [12, "December"]]
)
console.log(monthMap)

//8.  Comprueba si el mes 5 esta en el mapa y muestra su valor

console.log(monthMap.has(5))
console.log(monthMap.get(5))

// 9. agrega al mapa una clave con un array como qye almacebe los meses de verano

monthMap.set("summer", ["June", "July", "August"])
console.log(monthMap)

//. 10. crea un array, transformalo a un set y almacenalo en un map
let myArray = [1, 2, 3, 4, 5]
let mySet = new Set(myArray)
let myMap = new Map()
myMap.set("mySet", mySet)
console.log(myMap)

