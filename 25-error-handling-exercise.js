// 1. Captura una excepcion utilizando try-catch
try {
    let result = 10 / 0;
    console.log(result);
} catch (error) {
    console.log('Se ha producido un error: ' + error.message);
}

//2. captura una excepcion utilizando try-catch-finally
try {
    let result = 10 / 0;
    console.log(result);
} catch (error) {
    console.log('Se ha producido un error: ' + error.message);
} finally {
    console.log('Esto se ejecuta siempre');
}

// 3. Lanza una excepcion generica
function validateNumber(num) {
    if (typeof num !== 'number') {
        throw new Error('El argumento debe ser un número');
    }
    return num;
}

// 4. Crea una excepcion personalizada
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = 'CustomError';
    }
}

// 5. Lanza una excepcion personalizada
function validateString(str) {
    if (typeof str !== 'string') {
        throw new CustomError('El argumento debe ser una cadena de texto');
    }
    return str;
}

//6. lanza varias excepciones segun una logica definida
function validateInput(input) {
    if (typeof input === 'number') {
        throw new Error('El argumento no debe ser un número');
    } else if (typeof input === 'string') {
        throw new CustomError('El argumento no debe ser una cadena de texto');
    } else {
        return input;
    }
}

// 7. captura varias excepciones en un mismo try-catch
try {
    validateInput(10);
} catch (error) {
    if (error instanceof CustomError) {
        console.log('Se ha producido un error personalizado: ' + error.message);
    } else {
        console.log('Se ha producido un error genérico: ' + error.message);
    }
}

try {
    validateInput('Hello');
} catch (error) {
    if (error instanceof CustomError) {
        console.log('Se ha producido un error personalizado: ' + error.message);
    } else {
        console.log('Se ha producido un error genérico: ' + error.message);
    }
}

//8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores
let values = ['10.5', 'abc', '20.3', 'xyz'];

for (let value of values) {
    try {
        let num = parseFloat(value);
        if (isNaN(num)) {
            throw new Error('No se pudo convertir a número: ' + value);
        }
        console.log('Número convertido: ' + num);
    } catch (error) {
        console.log('Error: ' + error.message);
    }
}

// 9. Crea una funcion que verifique si un objeto tiene una propiedad especifica y lance una excepcion personal
function checkProperty(obj, prop) {
    if (!obj.hasOwnProperty(prop)) {
        throw new CustomError('El objeto no tiene la propiedad: ' + prop);
    }
}

// 10. Crea una funcion que realice reintentos en caso de error hasta un maximo de 10
function retryOperation(operation, maxRetries) {
    let attempts = 0;
    while (attempts < maxRetries) {
        try {
            return operation();
        } catch (error) {
            attempts++;
            console.log('Error: ' + error.message + '. Intento ' + attempts);
        }
    }
    throw new Error('Operación fallida después de ' + maxRetries + ' intentos');
}