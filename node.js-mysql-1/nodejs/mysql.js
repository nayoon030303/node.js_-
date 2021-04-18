var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'mirim2',
  database : 'opentutorials'
});
 
connection.connect();
 
connection.query('SELECT* FROM topic', function (error, results, fields) {
  if (error){
      console.log(error);
  }
  console.log(results);
  //console.log('The solution is: ', results[0].solution);
});
 
connection.end();