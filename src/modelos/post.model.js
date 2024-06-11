const mongoose = require('mongoose');

const modelName = "post";

const schema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true, 
    minLength: 1,
    maxLength: 100
  },
  image: { 
    type: String, 
    required: false
  },
  body: { 
    type: String, 
    required: true 
  },
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
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