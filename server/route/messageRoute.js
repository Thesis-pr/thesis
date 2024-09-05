const express = require('express')

const messageRouter=express.Router()

const {createMessage, deleteMessage, getMessagesByChatId}= require('../controller/message.js')


messageRouter.post('/add', createMessage)
messageRouter.delete('/delete/:id', deleteMessage)
messageRouter.get('/getAll/:chatId', getMessagesByChatId)

module.exports= messageRouter