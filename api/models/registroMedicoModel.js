'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RegistroMedicoSchema = new Schema({
  pacienteId: {
    type : String,
    required: [true, 'El id del paciente es requerido.'],
  },
  clienteId: {
    type: String,
    required: [true, 'el id del cliente es requerido.']
  },
  fecha: {
    type: Date,
    default: Date.now
  },
  anamnesia : String,
  peso: Number,
  temperatura: Number,
  hidratacion: Number,
  pulso: Number,
  frecuenciaCardiaca: Number,
  frecuenciaRespiratoria: Number,
  mucosas: Number,
  tiempoDeLlenadoCapilar: Number,
  ganglios: String,
  reflejoTusigeno: String,
  reflejoDeglutorio: String,
  palpitaciónAbdominal: String,
  palmopercusion: String, condicionCorporal: String,
  tonsillas: String,
  conciencia: String,
  vacunas: [{
    nombre : String,
    comentario : String
  }],
  desparacitaciones : [{
    nombre : String,
    comentario : String
  }]
});

module.exports = mongoose.model('registroMedico', RegistroMedicoSchema);