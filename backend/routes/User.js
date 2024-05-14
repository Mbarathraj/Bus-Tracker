const express=require('express')
const Router=express.Router()
const {showBusDetails,showDriverDetails}=require('../controllers/userController')


Router.route('/bus')
    .get(showBusDetails)

Router.route('/driver')
    .get(showDriverDetails)


module.exports= Router