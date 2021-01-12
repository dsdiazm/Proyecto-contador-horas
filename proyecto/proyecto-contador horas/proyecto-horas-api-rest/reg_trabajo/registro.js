
const  express=require('express');
const pool = require('../database');
const { response } = require('../keys');
const router=express.Router();

router.post("/regwork" ,async function  defaultname(req,res,next) {
    try {
        console.log("iniciando guardado<");
  
var {id_reg,nom_empleado,Tini,Tfin}=req.body;
   console.log("verificnado body")
console.log(await pool.query("insert into servicio(`id_servicio`, `id_Empleado`, `Tini_ser`, `Tfin_ser`) values('"+id_reg+"','"+nom_empleado+"','"+Tini+"','"+Tfin+"')"

))
console.log("exitoso")
console.log(response)
res.send("victory").status(200)
console.log("end");
} catch (error) {
    res.send(error).status(400)  
}

});



module.exports=router;
