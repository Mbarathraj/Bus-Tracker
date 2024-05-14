const express=require('express')
const Router=express.Router()
const app=express()
const {showBusDetails,addBusDetails,addDriverDetails,showDriverDetails,deleteBusDetails,deleteDriverDetails}=require('../controllers/AdminController')
const multer = require('multer');


// Set up multer storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../frontend/src/images/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() 
      cb(null,uniqueSuffix+file.originalname)
    }
  })
  const upload = multer({ storage: storage }) 

app.use('/uploads', express.static('uploads'));

Router.route('/bus')
    .get(showBusDetails)

Router.route('/addbus')
    .post(upload.single('image'),addBusDetails)

Router.route('/driver')
    .get(showDriverDetails)

Router.route('/adddriver')
    .post(upload.single('image'),addDriverDetails)

Router.route('/deleteBus')
    .post(deleteBusDetails)

Router.route('/deletedriver')
    .post(deleteDriverDetails)

module.exports= Router

