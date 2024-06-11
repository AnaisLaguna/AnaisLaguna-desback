// funciones para encryptar y otra que desencriptar
// npm install bcryptjs instalacion en proyecto
const bcrypt = require('bcryptjs');
const SALT_ROUNDS = 10;  

//funciona con una sola llave(contraseña), se requiere la palabra para encriptrase en si misma 
// regresa texto que se usa como contraseña, agrega 10 caracteres aleatorios para encriptar (salt rounds)



function encrypt(text){ // funcion regresa una promesa
    return bcrypt.hash(text, SALT_ROUNDS);

}

function compare(plainText, hash){ // regresa una promesa
    return bcrypt.compare(plainText, hash);
}

module.exports = {
    encrypt,
    compare,
};