const argv = require('./config/yargs').argv;
const colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(resultado => console.log(`--------TABLA---------\n ${resultado}`.yellow))
            .catch(err => console.log(err.red))
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`.yellow))
            .catch(err => console.log(err.red))
        break;

    default:
        console.log('Comando no reconocido');
}


// console.log('base ' + argv.base);
// console.log('limite ' + argv.limite);
// console.log(argv);

// let argv2 = process.argv;
// let parametro = argv[2];
// console.log(parametro);
// let base = parametro.split('=')[1];