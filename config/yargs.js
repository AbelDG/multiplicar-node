const options = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}


const argv = require('yargs')
    .command('listar', 'Muestra las tablas de multiplicar', options)
    .command('crear', 'Crea una tabla de multiplicar', options)
    .help()
    .argv;

module.exports = {
    argv
}