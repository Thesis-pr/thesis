  module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
      "user",
      {
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
          allowNull: true, 
          validate: {
            isUrl: true, 
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
  