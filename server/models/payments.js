module.exports = (sequelize, DataTypes) => {
    const Payment = sequelize.define("payment", {
          amount: {
            type: DataTypes.INTEGER,
            allowNull: false
          },
          status: {
            type: DataTypes.STRING,
            allowNull: false
          },
          requestId: {
            type: DataTypes.INTEGER,
            foreignKey: true, 
            allowNull: false
        }
          
    }
)
    return Payment
} 