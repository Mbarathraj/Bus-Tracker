const mongoose=require('mongoose')

const busSchema=mongoose.Schema({
    image:String,
    busNo:Number,
    route:String,
    busRegNo:String
})

const busModal=mongoose.model('busdetail',busSchema)

module.exports= busModal
