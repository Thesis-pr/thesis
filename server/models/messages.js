module.exports = (sequelize, DataTypes) => {
    const Message = sequelize.define("message", {
        sender_Id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        }
       
    },
    {
        tableName: "messages",
        timestamps: true,
      }
)
    return Message
} 