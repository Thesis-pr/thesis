
function validateEmail(email) {
    // Regular expression for validating an email address
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  
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
          allowNull: true, // Allow null if image is optional
          validate: {
            isUrl: true, // Ensures the value is a valid URL
          },
        },
        email: {
          type: DataTypes.STRING(100),
          unique: true,
          allowNull: false,
          validate: {
            isEmail: {
              msg: "Invalid email format",
            },
            customEmail(value) {
              if (!validateEmail(value)) {
                throw new Error("Invalid email format");
              }
            },
          },
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
  