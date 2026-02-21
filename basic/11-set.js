//set 
// Declaration

let mySet = new Set();

console.log(mySet)

//Inicializacion
mySet = new Set(["David", "Andino", 24, true])
console.log(mySet)

//Metodos Comunes 
// add y delete

mySet.add("Developer")
console.log(mySet)

mySet.delete("Developer")
console.log(mySet)

//has devuelve true si el elemento existe en el set y false si no existe
console.log(mySet.has("David"))
console.log(mySet.has("Developer"))

// size devuelve la cantidad de elementos del set
console.log(mySet.size)

// Convertir un set a un array
let myArray = Array.from(mySet)
console.log(myArray)

// Convertir un array a un set
mySet = new Set(myArray)
console.log(mySet)

// Ser un set no permite elementos duplicados
mySet.add("David")
console.log(mySet)



