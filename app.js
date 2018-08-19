const { argv } = require('./config/yargs');
const todo = require('./todo/todo');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'create':
        let tarea = todo.create(argv.description);
        console.log(tarea);
        break;
    case 'list':
        let listTodo = todo.getList();
        console.log(listTodo);
        for (let task of listTodo) {
            console.log('============ TODO ============'.cyan);
            console.log(task.description);
            console.log(`State: ${task.complete ? 'Complete'.green : 'Pending'.red}`);
            console.log('=============================='.cyan);
        }
        break;
    case 'update':
        let updated = todo.update(argv.description, argv.complete);
        console.log("Task update:", updated);
        break;
    case 'delete':
        let deleted = todo.deleteTodo(argv.description);
        console.log("Task delete:", deleted);
        break;
    default:
        console.log("Comando no encontrado");
        break;
}
