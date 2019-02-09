const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);


    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) throw new Error('no se pudo grabar', err);
    })
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (err) {
        listadoPorHacer = [];
    }
}

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer

}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion
    });

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const eliminar = (descripcion) => {
    cargarDB();


    let nuevoListado = listadoPorHacer.filter(tarea => {
        //regreasara cada uno de los elementos que no coincidan con esta funcion
        return tarea.descripcion !== descripcion
            //la descripcion de la tarea tiene que ser diferente a la descripcion que estoy resiviendo
    });

    if (nuevoListado.length === listadoPorHacer.length) {
        return false
    } else {
        listadoPorHacer = nuevoListado
        guardarDB();
        return true
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    eliminar
}