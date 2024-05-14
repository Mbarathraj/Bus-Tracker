const mongoose=require('mongoose')

const driverSchema = mongoose.Schema({
    image:String,
    name:String,
    mobileNo:Number,
    address:String,
    age:Number,
    lisenceNo:String,
    route:String
})

const driverModal= mongoose.model('drivedetail',driverSchema)

module.exports= driverModal