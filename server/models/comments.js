module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define("comment", {
          content: {
            type: DataTypes.TEXT,
            allowNull: true,
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
        tableName: "comments",
        timestamps: true,
      }
)
    return Comment
} 