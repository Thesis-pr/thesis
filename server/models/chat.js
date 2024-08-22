module.exports = (sequelize, DataTypes) => {
    const Chat = sequelize.define("chat", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
          },

        userId: {
            type: DataTypes.INTEGER,
            foreignKey: true, 
            allowNull: false
        },
        driverId: {
            type: DataTypes.INTEGER,
            foreignKey:true,
            allowNull:false
        }
    },
    {
        tableName: "chats",
        timestamps: true,
      }
)
    return Chat
} 