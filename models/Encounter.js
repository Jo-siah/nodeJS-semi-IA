// models/Encounter.js
const mongoose = require('mongoose');

const encounterSchema = new mongoose.Schema({
  patientID: { type: String, required: true },
  date: { type: Date, default: Date.now },
  time: String,
  encounterType: { type: String, enum: ['Emergency', 'OPD', 'Specialist Care'], required: true },
});

const Encounter = mongoose.model('Encounter', encounterSchema);

module.exports = Encounter;
