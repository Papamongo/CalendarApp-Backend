const mongoose = require('mongoose')

const dbConnection = async( urlConnection ) => {
    try{ 
        await mongoose.connect(urlConnection, {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        console.log('DB online')
    }catch (error) {
        console.log(error)
        throw new Error(' Error al inicializar la base de datos')
    }
}

module.exports = {
    dbConnection 
}