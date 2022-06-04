const config = {
    user : process.env.APP_DB_USER,
    host : process.env.APP_DB_HOST,
    password : process.env.APP_DB_PASSWORD,
    database : process.env.APP_DB_DB,
    port : process.env.APP_DB_PORT
};


module.exports = { config }