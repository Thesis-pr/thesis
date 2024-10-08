module.exports = (sequelize, DataTypes) => {
  const Driver = sequelize.define(
    "driver",
    {
      driverId: {
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
        allowNull: true,
        
      },
      truck: {
        type: DataTypes.ENUM(
          "petit utilitaire",
          "grand fourgon",
          "petit camion",
          "grand camion"
        ),
        allowNull: false,
      },
      images_truck: {
        type: DataTypes.JSON,
        allowNull: true,
        validate: {
          isArrayOfImages(value) {
            if (Array.isArray(value)) {
              if (value.length > 3) {
                throw new Error("You can only upload up to 3 images.");
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
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tel: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      

      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },

      isConfirmed: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      photoOfcin: {
        type: DataTypes.TEXT,
          allowNull: false, 
      },
      photoOfdriverLicence: {
        type: DataTypes.TEXT,
          allowNull: false, 
      },
      carteGrise: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      experience: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "drivers",
      timestamps: true, 
    }
  );

  return Driver;
};
