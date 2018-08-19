const fs = require('fs');

let listTodo = [];

const saveData = () => {
    let data = JSON.stringify(listTodo);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('Ha ocurrido un error al guardar la información', err);
    });
}

const loadData = () => {
    try {
        listTodo = require('../db/data.json');
    } catch (err) {
        listTodo = [];
    }
}

const create = (description) => {
    loadData();

    let todo = {
        description,
        complete: false
    }

    listTodo.push(todo);
    saveData();

    return todo;
}

const getList = () => {
    loadData();
    return listTodo;
}

const update = (description, complete) => {
    loadData();
    let index = listTodo.findIndex((task) => task.description === description);
    if (index >= 0) {
        listTodo[index].complete = complete;
        saveData();
        return true;
    }

    return false;
}

const deleteTodo = (description) => {
    loadData();
    let index = listTodo.findIndex((task) => task.description === description);
    if (index >= 0) {
        listTodo.splice(index, 1);
        saveData();
        return true;
    }

    return false;
} 

module.exports = {
    create,
    getList,
    update,
    deleteTodo
}