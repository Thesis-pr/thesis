const express = require('express');
const{getAllDriver,getOneDriver,register, deleteDriver, updateDriver, loginDriver} = require ('../controller/driver')
const routeDriver=express.Router()


routeDriver.get('/getAll',getAllDriver);
routeDriver.get('/getOne/:id',getOneDriver);
routeDriver.post('/register',register);
routeDriver.post('/login',loginDriver)
routeDriver.delete('/delete/:id',deleteDriver)
routeDriver.put('/update/:id',updateDriver)






module.exports=routeDriver