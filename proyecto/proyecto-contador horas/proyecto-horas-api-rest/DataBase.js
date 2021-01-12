const mysql = require('mysql');
const { promisify }= require('util');
const dt = require('./keys');
const pool=mysql.createPool(dt.get("dbstr"));
var error=false;
const query={



};

pool.getConnection((err,connection)=>{
if(err)
{
if(err.code=='PORTOCOL_CONNE')
{
console.error('DATABASE CONNECTION WAS CLOSED');
error=true
}

if (err.code=='ERR_CON_CONUNT_ERROR')
{
console.error('DATABASE HAS TO MANY CONNECTIOSN');
error=true
}
if(err.code=='ECONNREFUSED')
{
console.error('DATABASE CONNECTION WAS REFUSED');
error=true

}

}
if (connection) connection.release();
if (error) {
   console.log('DB Connection is Unsuccessful'); 
} else {
   console.log('DB is Connected');
}

return;
});
// prosiflt promesas
pool.query=promisify(pool.query);


query.get_elements=(err,code)=>{
try {
   return pool.query('select * from val where id_val=?',[code]);

} catch (e) {
 return err
} finally {

}


   return
}

query.get_solicitud=(err,code)=>{
try {
   return pool.query('select * from solicitud ');

} catch (e) {
 return err
} finally {

}


   return
}

query.get_solicitud=(err,code)=>{
try {
   return pool.query('select * from solicitud ');

} catch (e) {
 return err
} finally {

}


   return
}



module.exports=pool;
/*
query.get_solicitud(err)=>{

   pool.query();


   return query
}
*/

query
