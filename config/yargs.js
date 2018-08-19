
const description = {
    demand: true,
    alias: 'd',
    description: 'Descripción del TODO',
    type: 'string'
}
const complete = {
    alias: 'c',
    type: 'boolean',
    default: true,
    description: 'Define el estado el TODO',
}

const argv = require('yargs')
    .command('create', 'Crear un elemento en la lista de TODO', {
        description
    })
    .command('update', 'Crear un elemento en la lista de TODO', {
        description,
        complete
    })
    .command('list', 'Lista los elementos del TODO')
    .command('delete', 'Elimina un elemento en la lista de TODO', {
        description
    })
    .help()
    .argv;

module.exports = {
    argv
}