
function validateEmail(email) {
    // Regular expression for validating an email address
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
module.exports = (sequelize, DataTypes) => {
    const Driver = sequelize.define("driver", {
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
          truck: {
            type: DataTypes.ENUM(
              "petit utilitaire",
              "fourgonnette",
              "fourgon",
              "grand fourgon",
              "petit camion",
              "grand camion"
            ),
            allowNull: false,
          },
          images_trunk: {
            type: DataTypes.JSON,
            allowNull: true,
            validate: {
              isArrayOfImages(value) {
                if (Array.isArray(value)) {
                  if (value.length > 4) {
                    throw new Error("You can only upload up to 4 images.");
                  }
                  value.forEach((url) => {
                    if (typeof url !== "string") {
                      throw new Error("Each image URL must be a string.");
                    }
                  });
                } else {
                  throw new Error("Images must be an array.");
                }
              },
            },
          },
          mail: {
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
          price: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false
          },
          longitude: {
            type: DataTypes.FLOAT,
            allowNull: false,
          },
          latitude: {
            type: DataTypes.FLOAT,
            allowNull: false,
          },
        //   role: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        //     validate: {
        //       isIn: [["user", "driver"]],
        //     },
        //     defaultValue: "driver", // Default role
        //   },
        },
        {
          tableName: "drivers",
          timestamps: true, // to track the time when the driver creates or updates their account
        }
      )
    
    return Driver
} 