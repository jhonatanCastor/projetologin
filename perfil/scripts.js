const inputElement = document.querySelector('.new-task-input');
const addTaskButton = document.querySelector('.new-task-button');

const taskItemConteiner = document.querySelector('.tasks-conteiner')

const valedateInput = () => inputElement.value.trim().length > 0;

const hendleAddTask = () =>{
    const inputIsValid = validateInput();

    if (! inputIsValid){
        return inputElement.classList.add('error');

    }

    const taskItemConteiner = document.createElement('div');
    taskItemConteiner.classList.add('task-item');

    const taskContent = document.createComment('p');
    taskContent.innerText = inputElement.value;

    const deleteItem = document.createElement('i');
    deleteItem.classList.add('far');
    deleteItem.classList.add('far fa-trash-alt');

    taskItemConteiner.appendChild(taskContent);
    taskItemConteiner.appendChild(deleteItem);

    tasksConteiner.appendChild(taskItemConteiner);

};

const hendleInputChange = () => {
    const inputIsValid = validateInput();

    if (inputIsValid){
        return inputElement.classList.remove("error");
    }
};

addTaskButton.addEventListener('click', () => hendleAddTask());

inputElement.addEventListener('change', () => hendleInputChange());




console.log('teste')