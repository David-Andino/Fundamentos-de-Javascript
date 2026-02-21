// Tipos de datos primitivos en JavaScript

// String (Cadena de texto)
let name = "David Andino"
let alias = "Developer"
let email = "davidricandino@gmail.com"

//Numeros
let age = 24 //Entero
let height = 1.70 //Decimal

//Booleanos (Verdadero o Falso)
let isDeveloper = true
let isMarried = false

// Undefined (Indefinido)
let undefinedValue
console.log(undefinedValue) // Imprime: undefined

// Null (Nulo)
let nullValue = null
console.log(nullValue) // Imprime: null

// Symbol (Símbolo)
let symbol1 = Symbol("symbol")
let symbol2 = Symbol("symbol")
console.log(symbol1 === symbol2) // Imprime: false, cada símbolo es único

// BigInt (Entero grande)
let bigIntValue = BigInt(9007199254740991325245235235245424)
let anotherBigIntValue = 9007199254740991325245235235245424n

// Comprobando los tipos de datos
console.log(typeof name) // Imprime: string
console.log(typeof age) // Imprime: number
console.log(typeof isDeveloper) // Imprime: boolean 
console.log(typeof undefinedValue) // Imprime: undefined
console.log(typeof nullValue) // Imprime: object (esto es un error histórico en JavaScript) 
console.log(typeof symbol1) // Imprime: symbol
console.log(typeof bigIntValue) // Imprime: bigint