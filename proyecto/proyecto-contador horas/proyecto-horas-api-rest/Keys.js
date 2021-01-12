const  express = require('express');
const app=express();
app.set('user','root');
app.set('password','');
app.set('puerto', 3306);
app.set('database', 'horas');

app.set('dbstr',{

  host: 'localhost',
  user: app.get('user'),
  password: app.get('password'),
  port:app.get('puerto'),
  database:app.get('database')
});

module.exports=app;
