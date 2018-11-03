var mongoose = require('mongoose');
var RegistroMedico = mongoose.model('registroMedico');

exports.listaRegistrosMedicos = (req, res) => {
    RegistroMedico.find({},(err, registrosMedicos) => {
        if(err){
            res.send(err);
        }
        res.json(registrosMedicos);
    });
};

exports.buscarRegistrosMedicos = (req, res) => {
    //TODO: Validar
    console.log(req);
    RegistroMedico.find({pacienteId : req.params.pacienteId}, (err, registrosMedicos) => {
        if(err) {
            console.log(err);
            res.send(err);
        }
        res.json(registrosMedicos);
    });
};

exports.crearRegistroMedico = (req, res) => {
    var nuevoRegistroMedico = new RegistroMedico(req.body);
    nuevoRegistroMedico.save((err, registroMedico) => {
        if(err){
            //console.log(err);
            if(err.errors.pacienteId) {
                let pacienteIdError = err.errors.pacienteId;
                if(pacienteIdError.name == "CastError"){
                    res.send("Error, el id del paciente debe ser numérico.");
                }
                else if(pacienteIdError.value == null){
                    res.send("Error, debe ingresar pacienteId.");
                } else {
                    res.send(pacienteIdError.message);
                }
            }
        }
        res.json(registroMedico);
    });
};

exports.eliminarRegistroMedico = (req, res) => {
    //TODO: Validar
    RegistroMedico.remove({
        _id : req.params.registroMedicoId
    }, (err) => {
        if(err){
            res.send(err);
        };
        res.json({message : 'Registro eliminado correctamente.'});
    });
};