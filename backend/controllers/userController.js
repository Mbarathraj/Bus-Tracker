const showBusDetails = (req,res)=>{
    res.json({
        succes:true,
        message: "user show bus details"
    })
}
const showDriverDetails= (req,res)=>{
    res.json({
        success:true,
        message:"user show driver details"
    })
}


module.exports ={showBusDetails,showDriverDetails}