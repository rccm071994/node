const os = require('os');
const fs = require('fs');

const mi = require('./mito');

let cpu = os.cpus();
let sistema = os.platform();
let usuario = os.hostname();

setTimeout(() => {
    console.log("Termine")
}, 2000);
console.log(mi.ian);
mi.saludar();

/*let cpu_string = JSON.stringify(cpu);
fs.appendFile('ian.txt',` Inf del cpu: ${cpu_string} ` , function(error){
    if(error){
        console.log('Error al crear');
    }
});*/
//console.log(cpu);
//console.log(sistema);
//console.log(usuario);
fun