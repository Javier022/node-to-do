const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
}

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', 'Este comando creara un nuevo archivo', {
        descripcion
    })
    .command('actualizar', 'Estes comando modificara el estado de una Tarea...', {
        descripcion,
        completado
    })
    .command('eliminar', 'Este comando elimina una Tarea', {
        descripcion
    })
    .help()
    .argv

module.exports = {
    argv
}