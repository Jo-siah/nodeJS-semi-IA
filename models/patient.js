
const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  patientID: { type: String, required: true, unique: true },
  surname: String,
  othernames: String,
  gender: String,
  phoneNumber: String,
  residentialAddress: String,
  emergencyName: String,
  emergencyContact: String,
  relationship: String,
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
