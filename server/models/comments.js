module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define("comment", {
          content: {
            type: DataTypes.TEXT,
            allowNull: true,
          },
          date: {
            type: DataTypes.DATE,
          },
    },
    {
        tableName: "comments",
        timestamps: true,
      }
)
    return Comment
} 