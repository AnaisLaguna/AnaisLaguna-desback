const createError = require("http-errors");
const encrypt = require('../lib/encrypt');
const users = require("../modelos/user.model");

async function createUser(userData) {
  const userFound = await users.findOne({ email: userData.email });
  if (userFound) {
    throw createError(409, "El Email proporcionado, ya esta en uso, ingresa otro");
  }
  userData.password = await encrypt.encrypt(userData.password);

  const newUser = await users.create(userData);
  return newUser;
}

async function getUserById(id) {
  const user = await users.findById(id);
  return user;
}

module.exports = {
  createUser,
  getUserById,
};