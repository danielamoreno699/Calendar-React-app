const express = require('express')
const { dbConnection } = require('./database/config')
 require('dotenv').config()
 const cors = require('cors')



// crear el servidor express
const app = express()

//base de datos
dbConnection()


//CORS
app.use(cors())


//directorio publico
app.use(express.static('public'))

//lectura y parseo de body
app.use(express.json())


//rutas
app.use('/api/auth', require('./routes/auth'))
app.use('/api/events', require('./routes/events'))


//ruta
// app.get('/', (req, res) =>{

//     console.log('se requiere el / ')
//     res.json({
//         ok: true
//     })


//})


//escuchar peticiones
app.listen(process.env.PORT, () =>{
    console.log(`servidor corriendo en puerto ${process.env.PORT}`)
})