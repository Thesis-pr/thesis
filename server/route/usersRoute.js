const express = require('express');
const{getAllUsers,getOneUser,signUp,loginUser,updateUser, deleteuser} = require ('../controller/users')
const route=express.Router()


route.get('/getAllUsers',getAllUsers);
route.get('/getOneUser/:id',getOneUser);
route.post('/register',signUp);
route.post('/login',loginUser);
route.put('/update/:id',updateUser)
route.delete('/delete/:id',deleteuser)



module.exports=route