require("dotenv").config();

const config = {
    db: {
        db: process.env.MONGODB_DATABASE,
        user: process.env.MONGODB_USER,
        password:process.env.MONGODB_PASSWORD,
        port: process.env.MONGODB_LOCAL_PORT
    },
    app: {
        port: process.env.NODE_LOCAL_PORT
    }
}

module.exports = config;