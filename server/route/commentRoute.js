const express = require('express')

const commentRouter = express.Router()
const {updateComment, createComment, getAllComment, deleteComment} = require('../controller/comment.js')
commentRouter.post('/add', createComment )
commentRouter.get('/getAll/:driverId', getAllComment)
commentRouter.put('/update/:userId/:commentId', updateComment)
commentRouter.delete('/delete/:userId/:commentId', deleteComment)

module.exports = commentRouter