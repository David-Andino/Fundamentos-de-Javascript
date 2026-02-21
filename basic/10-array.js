// array
//declaracion de array

let myArray = []
let myArray2 = new Array()

myArray = [1, 2 ,3 ,4]
myArray2 = new Array(1, 2 ,3 , 4)

console.log(myArray)
console.log(myArray2) 

myArray = [1, 2 , "David" , "Andino", true, false, null, undefined, [1, 2, 3], {name: "David", age: 30}]
myArray2 = new Array(1, 2 ,"David" ,"Andino", true, false, null, undefined, [1, 2, 3], {name: "David", age: 30})

//console.log(myArray)
//console.log(myArray2)

//Metodos comunes de los arrays

myArray = []

myArray.push("David")
myArray.push("Andino")
myArray.push(24)

console.log(myArray)

console.log(myArray.pop()) //Elimina el ultimo elemento del array y lo devuelve
console.log(myArray)

//shift Elimina el primer elemento del array y lo devuelve y unshift Agrega un elemento al inicio del array
myArray.shift()
console.log(myArray)

myArray.unshift("David", 24)
console.log(myArray)


// length devuelve la cantidad de elementos del array
console.log(myArray.length)

//clear el array

myArray = []
//myArray.length = 0
console.log(myArray)

// slice devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido)

myArray.push("David", "Andino", 37, true)

let newArray = myArray.slice(0, 2)

console.log(myArray)
console.log(newArray)

// splice cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos

myArray.splice(2, 1, "Developer") //Elimina el elemento en la posicion 2 y agrega "Developer" en esa posicion
console.log(myArray)