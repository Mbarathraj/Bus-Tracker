
//DriverModal
const DriverDetails=require('../modals/DriverDetails')

//BusModal
const BusDeatils=require('../modals/Busdetails')

//Show Bus Details
const showBusDetails = (req, res) => {
  try{
      BusDeatils.find({}).then(data => res.send(data))
  }
  catch(err){

  }
};


//Show Driver Details
const showDriverDetails = (req, res) => {
  try{
    DriverDetails.find({}).then(data => res.send(data))
  }
  catch(err){

  }
};


//Add Bus Details
const addBusDetails = (req, res) => {
  try{
    const {busRegNo,busNo,route} = req.body;
    const imageName=req.file.filename
    BusDeatils.create({
      image:imageName,
      busRegNo,
      busNo,
      route
    }).then(res.send("success"))
    
  }
  catch(err){
    res.send("error")
  }
};


//Add Driver Details
const addDriverDetails = (req, res) => {
  try {
    const imageName = req.file.filename;
    const {name,age,address,mobileNo,lisenceNo,route}=req.body
    DriverDetails.create({
        image:imageName,
        name,
        age,
        mobileNo,
        lisenceNo,
        address,
        route
    }).then(res.send("success"))
  } catch (err) {
    res.send("failed");
  }
};


//Delete Bus Details
const deleteBusDetails =async (req,res)=>{
  const id=req.body.id
 
  try{
    await BusDeatils.deleteOne({_id:id});
     let  busDetails= await BusDeatils.find({});
     res.send(busDetails)
  }
  catch(err){
    res.send("error")
  }
  
}
//Delete Driver Details
const deleteDriverDetails= async(req,res)=>{
    const id=req.body.id
    console.log(req.body)
    try{
      await DriverDetails.deleteOne({_id:id})
     const driverDetails= await DriverDetails.find({})
      res.send(driverDetails)
    }
    catch(err){
      res.send("error")
    }

}

//Module exports
module.exports = {
  showBusDetails,
  addBusDetails,
  addDriverDetails,
  showDriverDetails,
  deleteBusDetails,
  deleteDriverDetails
};
