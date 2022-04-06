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
function getTodo(text) {
    const todoElement = document.createElement('div');
    todoElement.classList.add('todo-item');
    todoElement.setAttribute('id', `todo-${Math.floor(Math.random() * 1000 + 1)}`);
    const todoCompleteButton = document.createElement('button');
    todoCompleteButton.classList.add('todo-item__button-check');
    todoCompleteButton.innerText = " ";
    todoCompleteButton.addEventListener('click', ()=>{
        todoCompleteButton.innerText = todoCompleteButton.innerText === '' ? '✓' : '';
        todoTextElement.classList.toggle('complete');
        todoElement.classList.toggle('ready');
    });
    const todoTextElement = document.createElement('div');
    todoTextElement.classList.add('todo-item__text');
    todoTextElement.innerHTML = `<span>${text}`;
    const todoArea = document.createElement('div');
    todoArea.classList.add('todo-item__area');
    const todoButtonEnd = document.createElement('button');
    todoButtonEnd.classList.add('area-button');
    todoButtonEnd.innerText = "✗";
    todoButtonEnd.addEventListener('click', ()=>todoElement.remove()
    );
    const todoFieldDate = document.createElement('div');
    todoFieldDate.classList.add('area-field');
    todoFieldDate.innerText = new Date().toLocaleString();
    todoArea.append(todoButtonEnd, todoFieldDate);
    todoElement.append(todoCompleteButton, todoTextElement, todoArea);
    return todoElement;
}
bigWrapper.append(wrapperRow);
root.append(bigWrapper);
const createTodo = ()=>{
    const text = addTodoTextField.value;
    bigWrapper.append(getTodo(text));
    addTodoTextField.value = '';
};
addTodoButton.addEventListener('click', createTodo);
const deleteAll = ()=>{
    const todoItems = document.querySelectorAll('.todo-item');
    todoItems.forEach((item)=>item.remove()
    );
};
deleteAllButton.addEventListener('click', deleteAll);

