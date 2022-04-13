// ----------------- Action Panel -----------------

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

export { bigWrapper, wrapperRow, deleteAllButton, addTodoTextField, addTodoButton };
