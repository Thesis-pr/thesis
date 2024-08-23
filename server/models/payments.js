module.exports = (sequelize, DataTypes) => {
    const Payment = sequelize.define("payment", {
          amount: {
            type: DataTypes.INTEGER,
            allowNull: false
          },
          currency: {
            type: DataTypes.STRING(3),
            allowNull: false
          },
          payment_intent_id: {
            type: DataTypes.STRING,
            allowNull: false
          },
          status: {
            type: DataTypes.STRING,
            allowNull: false
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
          
    }
)
    return Payment
} 