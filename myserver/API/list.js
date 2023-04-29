let db = require('../db/index')
var randomNumber;
exports.all = (req, res) => {        //获取info表全部数据
    var sql = 'select * from info'
    db.query(sql, (err, data) => {
        if(err) {
            return res.send('错误：' + err.message)
        }
        res.send(data)
    })
}
exports.get = (req, res) => {        //通过id查询数据
    var sql = 'select * from info where id = ?'    //？用于占位
    db.query(sql, [req.query.id], (err, data) => {
        if(err) {
            return res.send('错误：' + err.message)
        }
        res.send(data)
    })
}

exports.denglu = (req,res) => {
   var sql = 'select * from user where username =? and userpwd =?'
   db.query(sql,[req.query.username,req.query.userpwd],(err,data) => {
     if(err) throw err;
     res.send(data);
   })
}

exports.captcha = (req,res) => {
    
        randomNumber =  randomWord(false,4);
        res.send(randomNumber);
        console.log(randomNumber)
    
}
function randomWord(randomFlag, min, max){
    var str = "",
        range = min,
        arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    // 随机产生
    if(randomFlag){
        range = Math.round(Math.random() * (max-min)) + min;
    }
    for(var i=0; i<range; i++){
        var pos = Math.round(Math.random() * (arr.length-1));
        str += arr[pos];
    }
    return str;
}

exports.re_Number = (req,res) => {
 console.log("来到了",req.query.decodeText,randomNumber)
  if(randomNumber == req.query.decodeText){
      console.log("duile")
  res.send(true);
  }
  else
  res.send(false)

}

exports.zhuce = (req,res) => {
    var sql = 'insert into user value (?,?,?)';
    // console.log(req.query.username,req.query.userpwd,"666")
    db.query(sql,[0,req.query.username,req.query.userpwd],(err,data) => {
        if(err) {
            return res.send('错误：' + err.message)
        }
        if(data.affectedRows > 0) {
            res.send({
              status: 200,
              message: 'success'
            })  
        }else{
            res.send({
              status: 202,
              message: 'error'
            })
        }

    })
 }

exports.del = (req, res) => {        //通过id删除数据
    var sql = 'delete from info where id = ?'
    db.query(sql, [req.query.id], (err, data) => {
        if(err) {
            return res.send('错误：' + err.message)
        }
        if(data.affectedRows > 0) {
            res.send({
              status: 200,
              message: '删除成功'
            })
        }else{
            res.send({
              status: 202,
              message: '删除失败'
            })
        }
    })
}

exports.add = (req, res) => {        //向info表添加数据
    var sql = 'insert into info (id,name,address,tel) values (?,?,?,?)'
    db.query(sql, [req.query.id, req.query.name, req.query.address, req.query.tel], (err, data) => {
        if(err) {
            return res.send('错误：' + err.message)
        }
        if(data.affectedRows > 0) {
            res.send({
              status: 200,
              message: 'success'
            })
        }else{
            res.send({
              status: 202,
              message: 'error'
            })
        }
    })
}

exports.update = (req, res) => {        //通过id更新数据
    var sql = 'update info set name = ?, address = ?, tel = ? where id = ?'
    db.query(sql, [req.query.name, req.query.address, req.query.tel, req.query.id], (err, data) => {
        if(err) {
            return res.send('错误：' + err.message)
        }
        if(data.changedRows > 0) {
          res.send({
            status: 200,
            message: 'success'
          })
        }else{
          res.send({
            status: 202,
            message: 'error'
          })
        }
    })
}
