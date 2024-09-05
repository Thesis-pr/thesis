const express = require('express')

const chatRouter=express.Router()

const {createChat, deleteChat}= require('../controller/chat')
const chat = require('../models/chat')

chatRouter.post('/add', createChat)
chatRouter.delete('/delete/:id', deleteChat)

module.exports= chatRouter