const fs = require('fs');
const colors = require('colors');

const ruta = './tablas'


let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        let data = '';

        if (isNaN(base)) {
            reject('La base introducida no es un número');
            return;
        }

        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${base*i}\n`);

        }

        fs.writeFile(`${ruta}/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`tabla-${base}.txt`.green);
        });
    });
}

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (isNaN(base) || isNaN(limite)) {
            reject('Argumentos introducidos no válidos');
            return;
        }
        let resultado = '';

        for (let i = 1; i <= limite; i++) {
            resultado += `${base} * ${i} = ${base*i}\n`.blue;
        }
        resolve(resultado);
    });
}



module.exports = {
    crearArchivo,
    listarTabla
}