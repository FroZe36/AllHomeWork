import { bigWrapper, wrapperRow, deleteAllButton, addTodoTextField, addTodoButton } from './action'
import { getTodo, todosFromStorage, todosDB, transformedTodos, saveTodos } from './todo'

// ----------------- Functions -----------------

const createTodo = (todos) => {
    const text = addTodoTextField.value;
    const todoObject = {
        id: Math.floor(Math.random() * 1000) + 1,
        text: text,
        date: new Date().toLocaleString(),
        isChecked: false,
    }
    let length = todos.push(todoObject);
    const todo = getTodo(todoObject, length - 1, todos);
    bigWrapper.append(todo);
    addTodoTextField.value = '';
    saveTodos(todosDB)
};

addTodoButton.addEventListener('click', () => createTodo(todosDB));

const deleteAll = () => {
    const todoItems = document.querySelectorAll('.todo-item');
    todosDB.splice(0, todosDB.length)
    todoItems.forEach((item) => item.remove());
    saveTodos(todosDB)
};

deleteAllButton.addEventListener('click', deleteAll);


wrapperRow.append(deleteAllButton, addTodoTextField, addTodoButton);
bigWrapper.append(wrapperRow, ...transformedTodos);

export { bigWrapper };
