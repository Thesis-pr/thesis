const { Sequelize, DataTypes} = require("sequelize")
const config = require("../server/config/config.json")

const sequelize = new Sequelize(config.database, config.user, config.password, {
    host: "localhost",
    dialect: "mysql",
})


const User = require ("./models/users.js")(sequelize, DataTypes)
const Driver = require ("./models/drivers.js")(sequelize, DataTypes)
const Request = require ("./models/requests.js")(sequelize, DataTypes)
const Message = require ("./models/messages.js")(sequelize, DataTypes)
const Comment = require ("./models/comments.js")(sequelize, DataTypes)
const Chat = require ("./models/chat.js")(sequelize, DataTypes)
const Rating = require ("./models/rating.js")(sequelize, DataTypes)
const Payment = require ("./models/payments.js")(sequelize, DataTypes)


User.hasMany(Request, { foreignKey: "userId"})
Request.belongsTo(User, { foreignKey: "userId"})

User.hasMany(Chat, { foreignKey: "userId"})
Chat.belongsTo(User, { foreignKey: "userId"})

User.hasMany(Rating, {foreignKey: "userId"})
Rating.belongsTo(User, { foreignKey: "userId"})

User.hasMany(Comment, { foreignKey: "userId"})
Comment.belongsTo(User, { foreignKey: "userId"})

Driver.hasMany(Request, { foreignKey: "driverId"})
Request.belongsTo(Driver, { foreignKey: "driverId"})

Driver.hasMany(Chat, { foreignKey: "driverId"})
Chat.belongsTo(Driver, { foreignKey: "driverId"})

Driver.hasMany(Comment, { foreignKey: "driverId"})
Comment.belongsTo(Driver, { foreignKey: "driverId"})

Driver.hasMany(Rating, { foreignKey: "driverId"})
Rating.belongsTo(Driver, { foreignKey: "driverId"})

Chat.hasMany(Message, { foreignKey: "chatId"})
Message.belongsTo(Chat, { foreignKey: "chatId"})

Request.hasMany(Chat, { foreignKey: "requestId"})
Chat.belongsTo(Request, { foreignKey: "requestId"})

Payment.belongsTo(User, { foreignKey: "userId" });
User.hasMany(Payment, { foreignKey: "userId" });

Payment.belongsTo(Driver, { foreignKey: "driverId" })
Driver.hasMany(Payment, { foreignKey: "driverId" })


sequelize
.authenticate()
.then(()=> console.log(" Connection has been established successfully"))
.catch((error)=>console.log("unable to connect to the database", error))

sequelize
.sync()
.then(()=>{console.log("database and tables created successfully")})
.catch((error)=>{console.log(error, "error sync")})


module.exports = {
    Sequelize,
    sequelize,
   
}