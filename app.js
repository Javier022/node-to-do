// requires
const colors = require('colors');
const argv = require('./config/yargs').argv
const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0]

switch (comando) {

    case 'crear':
        let tarea = porHacer.crear(argv.descripcion)
        console.log(tarea);
        break;

    case 'listar':
        let listar = porHacer.getListado();

        for (let tarea of listar) {
            console.log('======Por Hacer========='.green);
            console.log(tarea.descripcion);
            console.log('Estado', tarea.completado);
            console.log('========================'.green);
        }
        break;

    case 'actualizar':
        let actualizar = porHacer.actualizar(argv.descripcion, argv.completado)
        console.log(actualizar);
        break;
    case 'eliminar':
        let eliminar = porHacer.eliminar(argv.descripcion)
        console.log(eliminar);
        break;

    default:
        console.log('Comando no reconocido');
}