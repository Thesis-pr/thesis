const { Sequelize, DataTypes } = require("sequelize");
const config = require("../server/config/config.json");

const sequelize = new Sequelize(config.database, config.user, config.password, {
  host: "localhost",
  dialect: "mysql",
});





const User = require("./models/users.js")(sequelize, DataTypes);
const Driver = require("./models/drivers.js")(sequelize, DataTypes);
const Request = require("./models/requests.js")(sequelize, DataTypes);
const Message = require("./models/messages.js")(sequelize, DataTypes);
const Comment = require("./models/comments.js")(sequelize, DataTypes);
const Chat = require("./models/chat.js")(sequelize, DataTypes);
const Rating = require("./models/rating.js")(sequelize, DataTypes);
const Payment = require("./models/payments.js")(sequelize, DataTypes);

User.hasMany(Request, { foreignKey: "userId", onDelete: "CASCADE" });
Request.belongsTo(User, { foreignKey: "userId", onDelete: "CASCADE" });

User.hasMany(Chat, { foreignKey: "userId", onDelete: "CASCADE" });
Chat.belongsTo(User, { foreignKey: "userId", onDelete: "CASCADE" });

User.hasMany(Rating, { foreignKey: "userId", onDelete: "CASCADE" });
Rating.belongsTo(User, { foreignKey: "userId", onDelete: "CASCADE" });

User.hasMany(Comment, { foreignKey: "userId", onDelete: "CASCADE" });
Comment.belongsTo(User, { foreignKey: "userId", onDelete: "CASCADE" });

Driver.hasMany(Request, { foreignKey: "driverId", onDelete: "CASCADE" });
Request.belongsTo(Driver, { foreignKey: "driverId", onDelete: "CASCADE" });

Driver.hasMany(Chat, { foreignKey: "driverId", onDelete: "CASCADE" });
Chat.belongsTo(Driver, { foreignKey: "driverId", onDelete: "CASCADE" });

Driver.hasMany(Comment, { foreignKey: "driverId", onDelete: "CASCADE" });
Comment.belongsTo(Driver, { foreignKey: "driverId", onDelete: "CASCADE" });

Driver.hasMany(Rating, { foreignKey: "driverId", onDelete: "CASCADE" });
Rating.belongsTo(Driver, { foreignKey: "driverId", onDelete: "CASCADE" });

Chat.hasMany(Message, { foreignKey: "chatId", onDelete: "CASCADE" });
Message.belongsTo(Chat, { foreignKey: "chatId", onDelete: "CASCADE" });

Request.hasMany(Chat, { foreignKey: "requestId", onDelete: "CASCADE" });
Chat.belongsTo(Request, { foreignKey: "requestId", onDelete: "CASCADE" });

Payment.belongsTo(User, { foreignKey: "userId", onDelete: "CASCADE" });
User.hasMany(Payment, { foreignKey: "userId", onDelete: "CASCADE" });

Payment.belongsTo(Driver, { foreignKey: "driverId", onDelete: "CASCADE" });
Driver.hasMany(Payment, { foreignKey: "driverId", onDelete: "CASCADE" });

sequelize
  .authenticate()
  .then(() => console.log(" Connection has been established successfully"))
  .catch((error) => console.log("unable to connect to the database", error));

sequelize
  .sync({ alter: true }) // shady
  .then(() => {
    console.log("database and tables created successfully");
  })
  .catch((error) => {
    console.log(error, "error sync");
  });

module.exports = {
  Sequelize,
  sequelize,
  User,
  Driver,
  Request,
};
