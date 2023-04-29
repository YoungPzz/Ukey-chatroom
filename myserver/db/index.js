// 用于配置数据库相关信息

let mysql = require('mysql')

let db = mysql.createPool({
    host:"111.230.202.213",
    user:"demo1",
    password:"123456",
    database:"demo1"
})

module.exports = db
