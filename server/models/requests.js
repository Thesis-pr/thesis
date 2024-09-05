module.exports = (sequelize, DataTypes) => {
    const Request = sequelize.define("request", {
        date: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          duration: {
            type: DataTypes.INTEGER,
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
          // The longitude and latitude are gps coordinates
          status: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              isIn: [["pending", "accepted", "refused", "completed"]],
            },
            defaultValue: "pending",
          },
          helper: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
              min: 0,
              max: 6,
            },
          },
          truck_type: {
            type: DataTypes.ENUM(
                "fourgon",
                "grand fourgon",
                "petit camion",
                "grand camion"
              ),
              allowNull: false,
          },
          property_type: {
            type: DataTypes.ENUM("house", "apartment"),
            allowNull: false,
          },
         floors: {
            type: DataTypes.INTEGER,
            allowNull: true,
         },
         floor_number: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        telephone: {
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
       
    },
    {
        tableName: "requests",
        timestamps: true,
      }
)
    return Request
} 