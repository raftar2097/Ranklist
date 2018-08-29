const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name:{
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true
  },
  password:{
    type: String,
    required: true
  },
  github:{
    type: String,
    required: true
  },
  spoj:{
    type: String,
    required: true
  },
  hackerearth:{
    type: String,
    required: true
  },

  date: {
    type: Date,
    default: Date.now
  }
});

mongoose.model('users', UserSchema);