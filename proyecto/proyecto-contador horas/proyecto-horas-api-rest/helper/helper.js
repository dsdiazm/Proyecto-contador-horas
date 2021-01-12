const { disable } = require("../keys");

function sumdate(first,second) {
    año=first.slice(0, 11);
    mes=first.slice(5, -17);
    dia=first.slice(8, -14);
    hora=first.slice(0, -11);
    minuto=first.slice(14, -8);
    segundo=first.slice(17, -5);
    mil=first.slice(20, -1);
}