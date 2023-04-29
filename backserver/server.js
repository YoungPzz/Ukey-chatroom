const http = require("http");
const querystring = require("querystring"); //数据解析位json
const mysql = require("mysql");
const server = http.createServer((req,res)=>{

    // 不能req.url 因为不是get请求的
    // post是事件接受
    // req.on('data'):每次发送的数据：
    // req.on('end'):数据发送完成
    let postVal = "";
    req.on('data',(chunk)=>{
        postVal += chunk;
    })

    // 数据发送完成要做什么事
    req.on('end',()=>{
        let formVal = querystring.parse(postVal);
        let userName = formVal.username;
        let userPwd = formVal.userpwd;
        // 填写mysql信息
        const connection = mysql.createConnection({
            host:"localhost",
            user:"root",
            password:"123456",
            database:"demo1"
        })
        //连接数据库
        connection.connect();
        connection.query("select * from user where username =? and userpwd =?",[userName,userPwd],(err,results,fields)=>{
          if(err) throw err;
          console.log(results);
          if(results.length > 0){
            res.writeHead(200,{'Content-Type':"text/html;charset=utf-8"})
            res.write('登录成功');
            res.end();
          }
          
        })
        
        connection.end();
        
    }) 
    // chunk:参数
    
})

server.listen(666);