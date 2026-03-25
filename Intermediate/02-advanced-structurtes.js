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