const mongoose = require('mongoose')

const connection = ()=>{
    mongoose.connect('mongodb://localhost:27017/DataSave')
    .then(()=>console.log('Database Connected!'))
    .catch((err)=>console.log(err))
}

module.exports = connection