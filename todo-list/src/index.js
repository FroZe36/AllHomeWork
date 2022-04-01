'use strict'

const root = document.getElementById('root');

const bigWrapper = document.createElement('div');
bigWrapper.classList.add('container');

const wrapperRow = document.createElement('div');
wrapperRow.classList.add('container-wrapper')

const deleteAllButton = document.createElement('button');
deleteAllButton.textContent = 'Delete All'
deleteAllButton.classList.add('button')

const addTodoTextField = document.createElement('input');
addTodoTextField.placeholder = 'Enter todo ... '
addTodoTextField.classList.add("container-input")

const addTodoButton = document.createElement('button');
addTodoButton.textContent = 'Add'
addTodoButton.classList.add("button")

wrapperRow.append(deleteAllButton, addTodoTextField, addTodoButton)

const todoElement = document.createElement('div');
todoElement.classList.add('todo-item');

const todoCompleteButton = document.createElement('button');
todoCompleteButton.classList.add('todo-item__button-check');
todoCompleteButton.innerText = "✓";

const todoTextElement = document.createElement('div');
todoTextElement.classList.add('todo-item__text');
todoTextElement.innerText = 'Todo text';

const todoArea = document.createElement('div');
todoArea.classList.add('todo-item__area');

const todoButtonEnd = document.createElement('button');
todoButtonEnd.classList.add('area-button');
todoButtonEnd.innerText = "✗";

const todoFieldDate = document.createElement('div');
todoFieldDate.classList.add('area-field');
todoFieldDate.innerText = 'Date';

todoArea.append(todoButtonEnd, todoFieldDate);
todoElement.append(todoCompleteButton, todoTextElement, todoArea);

bigWrapper.append(wrapperRow, todoElement)
root.append(bigWrapper)
