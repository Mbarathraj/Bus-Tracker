const mongoose=require('mongoose')

const adminSchema= mongoose.Schema({
    email:String,
    password:String,
    name:String
})

const adminModal= mongoose.model('admin',adminSchema)

module.exports = adminModal
