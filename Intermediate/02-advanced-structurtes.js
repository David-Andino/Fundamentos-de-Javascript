// Estructuras avanzadas

// Arrays Avanzados

// - Metodos

// ForEach

let numbers = [1, 2, 3, 4, 5, 6]
numbers.forEach(element => console.log(element))

// map 

let double = numbers.map(element => element * 2)
console.log(double)

// filter

let evens = numbers.filter(element => element % 2 === 0)
console.log(evens)

// reduce

let sum =numbers.reduce((previous, current) => previous + current)
console.log(sum)

// - Manipulacion
// flat

let nestedArray = [1, [2, [3, [4]]]]
console.log(nestedArray)
let flatArray = nestedArray.flat(2)
console.log(flatArray)

// FlatMap

let phrases = ["Hola Mundo", "Adios Mundo"]
let wordPhrases = phrases.flatMap(phrases => phrases.split(" "))
console.log(wordPhrases)

// Ordenacion
let unsortedNumbers = [3, 4, 1, 6, 10, 9]
let unsorted = ["b", "a", "d", "c"]
let sorted = unsorted.sort()
let sorted2 = unsortedNumbers.sort((a, b) => a - b)
console.log(sorted2)
console.log(sorted)

//reverse
sorted.reverse()
sorted2.reverse()
console.log(sorted)
console.log(sorted2)