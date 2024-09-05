const {Message} =require('../indexdatabase.js')


const createMessage = async(req, res)=>{
    const {sender_Id, content, chatId} = req.body
   
    try {
        const message = await Message.create({
            sender_Id,
            content,
            chatId
        })
        res.status(201).send(message)
    }
    catch(error) {
        res.status(500).send(error)
    }
  
}

const deleteMessage = async (req, res)=>{
    const {id}=req.params

    try {
        const deleted = Message.destroy({where: {id:id}})
        res.status(200).send('deleted successfully')
    }
    catch(error) {
        res.status(500).send(error)
    }
}

const getMessagesByChatId = async(req, res) => {
    const {chatId} = req.params
    try {
        const messages =  await Message.findAll({where: {chatId: chatId}})
res.status(200).send(messages);
    }
    catch(error) {
        res.status(500).send(error)
    }
}

module.exports = {
    createMessage,
    deleteMessage,
    getMessagesByChatId
}