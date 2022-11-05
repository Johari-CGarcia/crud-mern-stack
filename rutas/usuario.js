const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const eschema = mongoose.Schema

const eschemausuario = new eschema({
    nombres: String,
    apellidos: String,
    pais: String,
    municipio: String,
    localidad: String,
    codigopostal: String,
    idioma: String,
    idusuario: String
})

const ModeloUsuario = mongoose.model('usuarios', eschemausuario)
module.exports = router

/* Ruta de prueba
router.get('/ejemplo', (req, res) => {
    res.end('Saludo carga desde ruta ejemplo')
})
*/

//Creando ruta para agregar usuario
router.post('/agregarusuario', (req, res) =>{
    const nuevousuario = new ModeloUsuario({ 
        nombres: req.body.nombres,
        apellidos : req.body.apellidos,
        pais : req.body.pais,
        municipio : req.body.municipio,
        localidad : req.body.localidad,
        codigopostal : req.body.codigopostal,
        idioma: req.body.idioma,
        idusuario: req.body.idusuario
    })
    nuevousuario.save(function(err){
        if(!err){
            res.send('Usuario agregado correctamente')
        }else{
            res.send(err)
        }
    })
})

//Creando ruta para obtener todos los usuarios
router.get('/obtenerusuarios', (req, res) =>{
    ModeloUsuario.find({}, function(docs, err){
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})

//Creando ruta para obtener data de usuario
router.post('/obtenerdatausuario', (req, res) =>{
    ModeloUsuario.find({idusuario:req.body.idusuario}, function(docs, err){
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})

//Creando ruta para actualizar data usuario
router.post('/actualizausuario', (req, res) => {
    
    ModeloUsuario.findOneAndUpdate({idusuario:req.body.idusuario}, {
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        pais: req.body.pais,
        municipio: req.body.municipio,
        localidad: req.body.localidad,
        codigopostal: req.body.codigopostal,
        idioma: req.body.idioma
    }, (err) => {
        if(!err){
            res.send('Usuario actualizado correctamente')
        }else{
            res.send(err)
        }
    })
})

//Creando ruta para eliminar data usuario
router.post('/borrarusuario', (req, res) =>{
    ModeloUsuario.findOneAndDelete({idusuario:req.body.idusuario}, (err) => {
        if(!err){
            res.send('Usuario eliminado correctamente')
        }else{
            res.send(err)
        }
    })
})