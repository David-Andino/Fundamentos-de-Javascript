// Modulos externos
// os es un modulo de nodejs que nos permite interactuar con el sistema operativo, por ejemplo, obtener informacion del sistema, leer archivos, etc.
import os from 'os';
// Obtener informacion del sistema 
console.log('Informacion del sistema:');
console.log('Sistema operativo:', os.platform());
console.log('Arquitectura:', os.arch());
console.log('Memoria total:', (os.totalmem() / (1024 * 1024 * 1024)).toFixed(2), 'GB');
console.log('Memoria libre:', (os.freemem() / (1024 * 1024 * 1024)).toFixed(2), 'GB');