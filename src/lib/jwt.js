const jsonwebtoken = require("jsonwebtoken");

// Palabra secreta con la que se verifica token
const { JWT_SECRET } = process.env;

// Expedir token
function sign(payload) {
  return jsonwebtoken.sign(payload, JWT_SECRET, { expiresIn: "1d" });  // expres tiempo de vida de token w = weak d = day
}

// Token válido
function verify(token) {
  return jsonwebtoken.verify(token, JWT_SECRET);
}

module.exports = {
  sign,
  verify,
};