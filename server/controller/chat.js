const {Chat} = require('../indexdatabase.js')


const createChat = async(req, res)=>{
    const {userId, driverId, requestId} = req.body
   
    try {
        const chat = await Chat.create({
            userId,
            driverId,
            requestId
        })
        res.status(201).send(chat)
    }
    catch(error) {
        res.status(500).send(error)
    }
  
}

const deleteChat = async (req, res)=>{
    const {id}=req.params

    try {
        const deleted = Chat.destroy({where: {id:id}})
        res.status(200).send('deleted successfully')
    }
    catch(error) {
        res.status(500).send(error)
    }
}

module.exports = {
    createChat,
    deleteChat
}