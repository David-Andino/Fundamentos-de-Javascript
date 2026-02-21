// Map

//Declaracion

let myMap = new Map()
console.log(myMap)

//Inicializacion

myMap = new Map(
    [["name", "David"], 
    ["age", 24], 
    ["isDeveloper", true]
])
console.log(myMap)

//Metodos comunes
// set y get

myMap.set("name", "Andino")
console.log(myMap)

// get devuelve el valor asociado a la clave especificada
console.log(myMap.get("name"))
console.log(myMap.get("age"))

// has devuelve true si la clave existe en el map y false si no existe
console.log(myMap.has("name"))
console.log(myMap.has("isStudent"))

// size devuelve la cantidad de elementos del map
console.log(myMap.size)

//keys devuelve un iterador con las claves del map
console.log(myMap.keys())

//values devuelve un iterador con los valores del map
console.log(myMap.values())

// entries devuelve un iterador con los pares clave-valor del map
console.log(myMap.entries())

// delete elimina el elemento asociado a la clave especificada y devuelve true si el elemento existia y false si no existia
console.log(myMap.delete("age"))
console.log(myMap)

// clear elimina todos los elementos del map
myMap.clear()
console.log(myMap)


