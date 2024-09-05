const {Comment} = require('../indexdatabase.js')


const createComment = async (req, res)=>{
    const {content, userId, driverId} = req.body
    try {
        const comment = await Comment.create({
            content,
            userId,
            driverId
        })
        res.status(201).send(comment)
    }
    catch(error) {
        res.status(500).send(error)
    }
}

const getAllComment = async (req, res)=>{
    const {driverId}=req.params
    try {
        const comments= await Comment.findAll({where: {driverId: driverId}})
        res.status(200).send(comments)
    }
    catch(error) {
        res.status(500).send(error)
    }
}


const updateComment = async (req, res) => {
    const { userId, commentId} = req.params
    const {  newContent } = req.body

    try {
        const comment = await Comment.findOne({ where: { id : commentId, userId} })
       const updated= await comment.update({ content: newContent });
        res.status(200).send("Updated successfully");
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const deleteComment = async (req, res) => {
    const { userId, commentId } = req.params;

    try {
        const comment = await Comment.findOne({ where: { id: commentId, userId } });
        await Comment.destroy({ where: { id: commentId } });

        res.status(200).send("Comment deleted successfully");
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = {
    updateComment,
    createComment,
    getAllComment, 
    deleteComment

};
