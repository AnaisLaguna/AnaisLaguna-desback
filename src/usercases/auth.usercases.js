const createError = ('http-errors');

const Users = require("../modelos/user.model");
const encrypt = require("../lib/encrypt")
const jwt = require("../lib/jwt");


async function login(email, password) {
    const user = await Users.findOne({ email: email }); // verificacion de existencia de email
    
    if (!user) {
        throw createError(401,'Invalid email');
    }

    const isPasswordValid = await encrypt.compare(password, user.password); //se verifica password
    if (!isPasswordValid) {
        throw createError(401, 'Invalid password');
    }
    const token = jwt.sign({ _id: user._id });
    return token;
}

module.exports = {
    login
};
