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
          address: {
            type: DataTypes.STRING,
            allowNull: false,
          },
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
                "petit utilitaire",
                "fourgonnette",
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
        }
    },
    {
        tableName: "requests",
        timestamps: true,
      }
)
    return Request
} 