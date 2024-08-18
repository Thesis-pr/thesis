module.exports = (sequelize, DataTypes) => {
    const Chat = sequelize.define("chat", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
          },
    },
    {
        tableName: "chats",
        timestamps: true,
      }
)
    return Chat
} 