// Loops o Bucles

// for 

for (let i = 0; i <5; i++) {
    console.log("Hello")
}

const numbers = [1, 2, 3, 4, 5]

for (let i =0; i < numbers.length; i++) {
    console.log(`Elemento ${numbers[i]}`)
}

// while
let i = 0
while (i < 5) {
    console.log(`Hello ${i}`)
    i++
}

// do while
i = 6
do {
    console.log(`Hello ${i}`)
    i++
} while (i < 5)

// for of
myArray = [1, 2 ,3 ,4]

mySet = new Set(["David", "Andino", 24, true])

myMap = new Map(
    [["name", "David"], 
    ["age", 24], 
    ["isDeveloper", true]
])

myString = "Hello David"

for (let valor of myArray) {
    console.log(valor)
}

for (let valor of mySet) {
    console.log(valor)
}

for (let valor of myMap) {
    console.log(valor)
}

for (let valor of myString) {
    console.log(valor)
}

// Buenas Practicas

// break y continue

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue // Salta la ejecucion del bucle para esa iteracion
    } else if (i === 8) {
        break // Termina la ejecucion del bucle
    }
    console.log(i)
}