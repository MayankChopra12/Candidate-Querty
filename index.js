const mysql = require ('mysql');
const express = require('express');
var app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());

var mysqlConnection = mysql.createConnection({
   host: 'localhost',
   user: 'Mayank',
   password: '1234',
   database: 'CandidateDB'
});
mysqlConnection.connect((err) =>{
   if(!err)
   console.log('DB connection established')
   elseconsole.log('DB connection failed \n')
});

app.listen(3000, ()=> console.log('Express server is running art port 3000'));

app.post('/candidate', async (req, res) => {
   const body = req.body;

   await database.execute(`
   INSERT INTO User (
       name,
       email,
       address,
       first_round,
       second_round'
       third_round
   ) VALUES (
      @name,
      @email,
      @address,
      @first_round,
      @second_round'
       NOW()
   )
`, {
       firstName: body.first,
       lastName: body.last,
       age: body.age,
   });

   res.end('Added user');
});

