  module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
      "user",
      {
        userId: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING(50),
          allowNull: false,
        },
        lastname: {
          type: DataTypes.STRING(50),
          allowNull: false,
        },
        image: {
          type: DataTypes.STRING,
          allowNull: true, // Allow null if image is optional
          validate: {
            isUrl: true, // Ensures the value is a valid URL
          },
        },
        email: {
          type: DataTypes.STRING(100),
          allowNull: false
         
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        
      },
      {
        tableName: "users",
        timestamps: true, 
      }
    );
  
    return User;
  };
  