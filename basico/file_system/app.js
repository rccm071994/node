import { error, log } from 'util';

const fs = require('fs');

console.log('Inicio');
//Asincrono
/*fs.readFile('data.txt', 'utf-8', (error, data)=> {
    if(error){
        console.log(`Error ${error}`);
    }else{
        console.log(data)
    }
    
});*/
 //Sincrono
let data = fs.readFileSync('data.txt', 'utf-8');
console.log(data);

console.log('Finaliso')

/*fs.appendFile('data.txt', '\n Gracias por entrar', (error)=>{
    if(error)
    console.log(`Error ${error}`);
});*/

/*fs.unlink('data2.txt', (error)=>{
    if(error) throw error;
    console.log('Eliminado');
});*/

//fs.createReadStream('data.txt').pipe(fs.createWriteStream('data3.txt'));

/*fs.readdir('./../../basico/file_system', (error, files)=>{
    files.forEach(File =>{
        console.log(file);
    });
});*/