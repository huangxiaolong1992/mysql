
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'test'
});
 
connection.connect((err)=>{
  if(err) throw err;
  let createTodos = `create table if not exists node_user(
      id int primary key auto_increment,
      name varchar(255)not null,
      age int(10) not null default 0
  )`;
  connection.query(createTodos, function(err, results, fields) {
    if (err) {
      console.log(err.message);
    }
  });

  console.log('连接成功')
});

var  userAddSql = 'INSERT INTO node_user11(name,age) VALUES(?,?)';


//增
var  userAddSql_Params = ['Wilson', 55122];
connection.query(userAddSql, userAddSql_Params, function (error, results, fields) {
　　if (error)  throw error;
　　return results;
});
// connection.end();


//查
var querySql = 'select * from node_user11 where name = ? and age = ?'
var where_value = ['Wilson', '55'];
connection.query(querySql, where_value, function(error, results, fields){
  console.log(222,results)
})

//模糊查询
var likeQuerySql = 'select * from node_user11 where name like "%张%" '

connection.query(likeQuerySql ,function(error, results, fields){
  console.log('模糊查询',results)
})

//改
var updateSql = 'update node_user11 set name = ? where id = ?'
var where_value = ['张三', '2'];
connection.query(updateSql, where_value, function(error, results, fields){
  console.log(222,results)
})

//删除
var deleteSql = 'delete from node_user11 where name = ?'
var where_value = ['张三'];

connection.query(deleteSql, where_value, function(error, results, fields){
  console.log('删除',results)
})


//分页查询
//
let index = 0, //前端传入的当前页数   
	rows =  10  //每页显示10条



var pageSql = 'select id from node_user11 limit 0 , 4'

connection.query(pageSql, function(error, results, fields){
  // connection.query(count, function(error, results, fields){
  //   console.log(results)
  // })
  console.log('分页查询',results)
})

//

//COUNT

// var querySql2 = 'select count(*) from node_user11'
// connection.query(querySql2,function(error, results, fields){
//   console.log(222,results[0]['count(*)'],results[0])
// })

// connection.query(sql, (err,result) =>{

// })
//多表联查

var pageSql = 'select * from node_user11 inner join node_user on node_user11.id = node_user.id'

connection.query(pageSql, function(error, results, fields){
  // connection.query(count, function(error, results, fields){
  //   console.log(results)
  // })
  console.log('多表联查',results)
})


