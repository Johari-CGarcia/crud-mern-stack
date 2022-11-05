//Creando y configurado servidor backend con Node.js
const express = require('express')
const app = express()

//Importando conexión MongoDB
const archivoBD = require('./conexion')

//Importación del archivo de rutas y modelo usuario
const rutausuario = require('./rutas/usuario')

//Imprtación de body parser
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))

app.use('/api/usuario', rutausuario)

//Probando si el servidor backend esta corriendo en el navegador (localhost:5000)
app.get('/', (req, res) => {
    res.end('Bienvenidos al servirdor Node.js corriendo...')
})

//Configurando servidor 
app.listen(5000, function(){
    console.log('El servidor NODE esta corriendo correctamente')
})