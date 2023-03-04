const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
    path: path.resolve(__dirname, process.env.NODE_ENV + '.env')
});

module.exports = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    HOST: process.env.HOST || '127.0.0.1',
    PORT: process.env.PORT || 3000,
    VERSION: 'v3',
    SECRET: process.env.SECRET || 'this-is-other-secret',
    TIME_EXEC_TOKEN: process.env.TIME_EXEC_TOKEN || 60,

    db_host: process.env.DB_HOST || "",
    db_database: process.env.DB_DATABASE || "",
    db_user: process.env.DB_USERNAME || "",
    db_password: process.env.DB_PASSWORD || ""
}