const express = require('express');
const pool = require('../database');
const router = express.Router();

router.get("/lecture/:nombre/:semana", async function defaultname(req, res, next) {


    let {
        nombre,
        semana
    } = req.params
    console.log(req.params);
    console.log(nombre, semana);
    var horas_diurnas = 0;
    var horas_nocturnas = 0;
    var horas_dominicales = 0;
    var horas_totales = 0;
    var horas_diurnas_ex = 0;
    var horas_nocturnas_ex = 0;
    var horas_dominicales_ex = 0;
    var data = 0;


    function reshoras(fec1, fec2) {

        return (fec1 - fec2) / 1000 * 60 * 60
    };

    //where id_Empleado="+empleado+" and (WEEK(Tini_ser)=="+semana+" or WEEK(Tfin_ser)=="+semana+"
    var datatext = await pool.query("select Tini_ser,Tfin_ser, time_to_sec(timediff(Tini_ser,Tfin_ser)) / 3600 as horas , weekday(Tini_ser) as dia_ini, weekday(Tfin_ser) as dia_fin from servicio where id_empleado='" + nombre + "' and (WEEK(Tfin_ser,1)=" + semana + " or WEEK(Tini_ser,1)=" + semana + ")")
    datatext = JSON.parse(JSON.stringify(datatext))
    console.log(datatext)


    for (let index = 0; index < datatext.length; index++) {

        const element = datatext[index];
        console.log(datatext[index])


        diurna_fin = new Date(element.Tfin_ser.slice(0, 10) + "T07:00:00.000Z");
        nocturna_fin = new Date(element.Tfin_ser.slice(0, 10) + "T20:00:00.000Z");
        dominical_fin = new Date(element.Tfin_ser.slice(0, 10) + "T00:00:00.000Z");
        diurna_ini = new Date(element.Tini_ser.slice(0, 10) + "T07:00:00.000Z");
        nocturna_ini = new Date(element.Tini_ser.slice(0, 10) + "T20:00:00.000Z");
        dominical_ini = new Date(element.Tini_ser.slice(0, 10) + "T00:00:00.000Z");
        console.log(element.Tini_ser.slice(0, 10).toString() + "T20:00:00.000Z");

       
        element.Tfin_ser = new Date(element.Tfin_ser);
        element.Tini_ser = new Date(element.Tini_ser);
        if (element.dia_ini == element.dia_fin || (element.dia_ini >= 0 && element.dia_fin >= 5)) {
            console.log("same day");
            if (element.dia_ini == 6) {
                console.log("dominical");
                if (horas_totales >= 48) {
                    console.log("stop1");
                    horas_dominicales_ex = horas_dominicales_ex + element.horas
                } else {
                    horas_dominicales = horas_dominicales + element.horas
                    console.log("stop1");
                }
            } else {
                console.log("no dominical");

                switch (true) {
                    case (element.Tfin_ser.getTime() <= nocturna_fin.getTime()) && (element.Tini_ser.getTime() >= diurna_ini.getTime()):
                        if (horas_totales >= 48) {
                            horas_diurnas_ex = horas_diurnas_ex + element.horas;
                        } else {
                            horas_diurnas = horas_diurnas + element.horas;
                        }
                        break;
                    case (element.Tfin_ser.getTime() >= nocturna_fin.getTime() || element.Tini_ser.getTime() <= diurna_ini.getTime()):
                        if (horas_totales >= 48) {
                            horas_nocturnas_ex = horas_nocturnas_ex + element.horas;
                        } else {
                            horas_nocturnas = horas_nocturnas + element.horas;
                        }
                        break;
                    case (element.Tfin_ser.getTime() >= diurna_ini.getTime() >= element.Tini_ser.getTime()):
                        if (horas_totales >= 48) {

                            horas_diurnas_ex = horas_diurnas_ex + reshoras(element.Tfin_ser.getTime(), diurna_fin.getTime())
                            horas_nocturnas_ex = horas_nocturnas_ex + reshoras(diurna_ini.getTime(), element.Tini_ser.getTime());
                        } else {
                            horas_diurnas = horas_diurnas + reshoras(element.Tfin_ser.getTime(), diurna_fin.getTime())
                            horas_nocturnas = horas_nocturnas + reshoras(diurna_ini.getTime(), element.Tini_ser.getTime());
                        }
                        break;
                    case (element.Tfin_ser.getTime() >= nocturna_ini.getTime() >= element.Tini_ser.getTime()):
                        if (horas_totales >= 48) {

                            horas_diurnas_ex = horas_diurnas_ex + reshoras(nocturna_ini.getTime(), element.Tini_ser.getTime());
                            horas_nocturnas_ex = horas_nocturnas_ex + reshoras(element.Tfin_ser.getTime(), nocturna_fin.getTime());
                        } else {
                            horas_diurnas = horas_diurnas + reshoras(nocturna_ini.getTime(), element.Tini_ser.getTime());
                            horas_nocturnas = horas_nocturnas + reshoras(element.Tfin_ser.getTime(), nocturna_fin.getTime());
                        }
                        break;
                    default:
                        console.log("no registrado");
                        console.log(nocturna_fin.getTime());
                        console.log(nocturna_fin.getTime());
                        break;
                }
            }
        } else {











            switch (true) {
                case element.dia_ini == 5 && element.dia_fin == 6:
                    if (nocturna_ini.getTime() >= element.Tini_ser.getTime()) {



                        if (horas_totales >= 48) {

                            horas_diurnas_ex = horas_diurnas_ex + reshoras(nocturna_ini.getTime(), element.Tini_ser.getTime());
                            horas_nocturnas_ex = horas_nocturnas_ex + 4;
                            horas_dominicales_ex = horas_dominicales_ex + reshoras(element.Tfin_ser.getTime(), dominical_fin);
                        } else {
                            horas_diurnas = horas_diurnas + reshoras(nocturna_ini.getTime(), element.Tini_ser.getTime());
                            horas_nocturnas = horas_nocturnas + 4;
                            horas_dominicales = horas_dominicales + reshoras(element.Tfin_ser.getTime(), dominical_fin.getTime());
                        }
                    } else {



                        if (horas_totales >= 48) {


                            horas_nocturnas_ex = horas_nocturnas_ex + reshoras(dominical_ini, element.Tini_ser.getTime());
                            horas_dominicales_ex = horas_dominicales_ex + reshoras(element.Tfin_ser.getTime(), dominical_fin);
                        } else {
                            horas_nocturnas_ex = horas_nocturnas_ex + reshoras(dominical_ini, element.Tini_ser.getTime());
                            horas_dominicales_ex = horas_dominicales_ex + reshoras(element.Tfin_ser.getTime(), dominical_fin);
                        }

                    }

                    break;
                case element.dia_ini == 6 && element.dia_fin == 0:




                    if (horas_totales >= 48) {


                        horas_dominicales_ex = horas_dominicales_ex + reshoras(element.Tfin_ser.getTime(), dominical_fin);
                    } else {
                        horas_diurnas = horas_nocturnas + reshoras(dominical_fin.getTime(), element.Tini_ser.getTime());


                    }

                    break;
                default:
                    break;
            }
        }






    }

    var resultado = {
        "horas_diurnas": horas_diurnas*-1,
        "horas_diurnas_ex": horas_diurnas_ex*-1,
        "horas_diurnas": horas_diurnas*-1,
        "horas_nocturnas": horas_nocturnas*-1,
        "horas_dominicales": horas_dominicales*-1,
        "horas_totales": horas_totales*-1,
        "horas_diurnas_ex": horas_diurnas_ex*-1,
        "horas_nocturnas_ex": horas_nocturnas_ex*-1,
        "horas_dominicales_ex": horas_dominicales_ex*-1

    }
    res.json(resultado);
});

module.exports = router;