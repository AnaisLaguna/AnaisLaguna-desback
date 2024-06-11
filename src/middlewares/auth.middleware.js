const createError = require('http-errors');
const usersUsercase = require('../usercases/user.usercase');

const jwt = require('../lib/jwt');

async function auth(request, response, next) {
    try {
    const token = request.header.authorization;
        
    if (!token) {
        throw createError(401, "JWT is required")
        }
        
    const payload = jwt.verify(token);
       
    const user = await usersUsercase.getUserById(payload.id);
    request.user = user;
      
    next();
    } catch (error) {
        response.status(401);
        response.json({
            message: "Invalid JWT",
            success:false,
            error:error.message,
        });
       
    }
};

module.exports = auth;
