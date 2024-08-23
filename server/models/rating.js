module.exports = (sequelize, DataTypes) => {
    const Rating = sequelize.define("rating", {
        value: {
            type: DataTypes.DECIMAL(3,2),
            allowNull: false,
            validate: {
                min: 1.00,
                max: 5.00, 
                isDecimal: true,             
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
}, 
{
    tableName: "ratings",
    timestamps: true,
  }
    
)
    return Rating
} 