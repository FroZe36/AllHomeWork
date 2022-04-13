'use strict';
const root = document.getElementById('root');
const bigWrapper = document.createElement('div');
bigWrapper.classList.add('container');
const wrapperRow = document.createElement('div');
wrapperRow.classList.add('container-wrapper');
const deleteAllButton = document.createElement('button');
deleteAllButton.textContent = 'Delete All';
deleteAllButton.classList.add('button');
const addTodoTextField = document.createElement('input');
addTodoTextField.placeholder = 'Enter todo ... ';
addTodoTextField.classList.add("container-input");
const addTodoButton = document.createElement('button');
addTodoButton.textContent = 'Add';
addTodoButton.classList.add("button");
wrapperRow.append(deleteAllButton, addTodoTextField, addTodoButton);
function getTodo(todoObject, index, todos) {
    const todoElement = document.createElement('div');
    todoElement.classList.add('todo-item', todoObject.isChecked ? 'ready' : true);
    todoElement.setAttribute('id', `todo-${todoObject.id}`);
    const todoCompleteButton = document.createElement('button');
    todoCompleteButton.classList.add('todo-item__button-check');
    todoCompleteButton.innerText = todoObject.isChecked ? "✓" : '';
    todoCompleteButton.addEventListener('click', ()=>{
        todoObject.isChecked = !todoObject.isChecked;
        todoCompleteButton.innerText = todoObject.isChecked ? "✓" : '';
        todoTextElement.classList.toggle('complete');
        todoElement.classList.toggle('ready');
        saveTodos(todosDB);
    });
    const todoTextElement = document.createElement('div');
    todoTextElement.classList.add('todo-item__text', todoObject.isChecked ? 'complete' : true);
    todoTextElement.innerHTML = `<span>${todoObject.text}`;
    const todoArea = document.createElement('div');
    todoArea.classList.add('todo-item__area');
    const todoButtonEnd = document.createElement('button');
    todoButtonEnd.classList.add('area-button');
    todoButtonEnd.innerText = "✗";
    todoButtonEnd.addEventListener('click', ()=>{
        todos.splice(index, 1);
        todoElement.remove();
        saveTodos(todosDB);
    });
    const todoFieldDate = document.createElement('div');
    todoFieldDate.classList.add('area-field');
    todoFieldDate.innerText = todoObject.date;
    todoArea.append(todoButtonEnd, todoFieldDate);
    todoElement.append(todoCompleteButton, todoTextElement, todoArea);
    return todoElement;
}
let todosFromStorage = localStorage.getItem('todos');
const todosDB = todosFromStorage ? JSON.parse(todosFromStorage) : [];
const transformedTodos = todosDB.map(getTodo);
bigWrapper.append(wrapperRow, ...transformedTodos);
root.append(bigWrapper);
function saveTodos(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
}
const createTodo = (todos)=>{
    const text = addTodoTextField.value;
    const todoObject = {
        id: Math.floor(Math.random() * 1000) + 1,
        text: text,
        date: new Date().toLocaleString(),
        isChecked: false
    };
    let length = todos.push(todoObject);
    const todo = getTodo(todoObject, length - 1, todos);
    bigWrapper.append(todo);
    addTodoTextField.value = '';
    saveTodos(todosDB);
};
addTodoButton.addEventListener('click', ()=>createTodo(todosDB)
);
const deleteAll = ()=>{
    const todoItems = document.querySelectorAll('.todo-item');
    todosDB.splice(0, todosDB.length);
    todoItems.forEach((item)=>item.remove()
    );
    saveTodos(todosDB);
};
deleteAllButton.addEventListener('click', deleteAll);

