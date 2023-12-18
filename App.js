const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const app = express();
const PORT = process.env.PORT || 3000;

const Patient = require('./model/Patient');
const Encounter = require('./model/Encounter');
const Vitals = require('./model/Vitals');


app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/your_database_name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});



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
  

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
