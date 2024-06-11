// models/User.js
const mongoose = require('mongoose');


const modelName = 'User';

const schema = new mongoose.Schema({
  //Reglas
  name: { 
    type: String,
    required: true,
    minLength: 2,
    maxLength: 100
  },
  profilePic: { 
    type: String,
    require: false, 
  },
  email: { 
    type: String, 
    required: true,
    unique: true,
    match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/ 
  },
  password: { 
    type: String, 
    required: true 
  },
  created_at: { 
    type: Date, 
    default: Date.now 
  },
  updated_at: { 
    type: Date, 
    default: Date.now 
  }
});

module.exports = mongoose.model(modelName, schema);