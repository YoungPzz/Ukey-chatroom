// 用于配置对应路由

let express = require('express')
let router = express.Router()
let user= require('./API/user')
let info = require('./API/list')

router.get('/user', user.get)
router.get('/list/all', info.all)
router.get('/list/get', info.get)
router.get('/list/add', info.add)
router.get('/list/update', info.update)
router.get('/list/del', info.del)
router.get('/list/denglu',info.denglu)
router.get('/list/zhuce',info.zhuce)
router.get('/list/captcha',info.captcha)
router.get('/list/re_Number',info.re_Number)
module.exports = router
