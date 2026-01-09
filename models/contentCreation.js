const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
 email: {
  type: String,
  required: true,
  unique: true,
  lowercase: true,
  trim: true,
  validate: {
    validator: function (v) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
    },
    message: "Invalid email format"
  }
},
  phoneNumber: {
    type: String,
    required: true
  },
  course: {
    type: String,
    required: true
  },
  enrollmentDate: {
    type: Date,
    required: true
  },
  address: {
    type: String,
    required: true
  },
gender: {
    type: String,
    enum: ["Male", "Female", "Other"],
    required: true
},
dateOfBirth: {
    type: Date,
    required: true
  },
  additionalInfo: {
    type: String
  },
  dateCreated: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("contentCreation", bookSchema);