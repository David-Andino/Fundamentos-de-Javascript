//Excepcion
// Produce una excepcion
let myObject 

//Captura de errores
//try...catch
try {
    console.log(myObject.name)
}catch (error) {
    console.log('Se ha producido un error')
}

// Captura de errores
try {
    console.log(myObject.name)
}catch (error) {
    console.log('Se ha producido un error')
    console.log(error.message)
}

// Finally
try {
    console.log(myObject.name)
}catch (error) {
    console.log('Se ha producido un error')
    console.log(error.message)
}finally {
    console.log('Esto se ejecuta siempre')
}

// Lanzamiento de errores
// throw
function sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Los argumentos deben ser números')
    }
    return a + b
}

sum(2, '3') // Esto lanzará un error

//throw new Error('Esto es un error personalizado')

// TypeError
try {
    null.f()
}catch (error) {
    console.log(error instanceof TypeError) // true
    console.log(error.message) // Cannot read property 'f' of null
}

// ReferenceError
try {
    console.log(x) 
}catch (error) {
    console.log(error instanceof ReferenceError) // true
    console.log(error.message) // x is not defined
}

