const inputElement = document.querySelector('.new-task-input');
const addTaskButton = document.querySelector('.new-task-button');

const tasksContainer = document.querySelector('.tasks-container')



const validateInput = () => inputElement.value.trim().length > 0;

const hendleAddTask = () =>{
    const inputIsValid = validateInput();

    if (! inputIsValid){
        return inputElement.classList.add('error');

    }

    const taskItemConteiner = document.createElement('div');
    taskItemConteiner.classList.add('task-item');

    const taskContent = document.createElement('p');
    taskContent.innerText = inputElement.value;

    taskContent.addEventListener('click', () => handleClick(taskContent))


    const deleteItem = document.createElement('i');
    deleteItem.classList.add('far');
    deleteItem.classList.add('fa-trash-alt');


    deleteItem.addEventListener('click', () =>
     handleDeleteClick(taskItemConteiner,taskContent)
    );
    

    taskItemConteiner.appendChild(taskContent);
    taskItemConteiner.appendChild(deleteItem);

    tasksContainer.appendChild(taskItemConteiner);

    inputElement.value = "";


    updateLocalStorage();



};


const handleClick = (taskContent) =>{
    const tasks = tasksContainer.childNodes;
    

    for (const task of tasks){
        const currentTaskIsBeingClicked = task.firstChild.isSameNode(taskContent)

        if (currentTaskIsBeingClicked){
            task.firstChild.classList.toggle("completed");
        }
    }
    updateLocalStorage();
};



const handleDeleteClick = (taskItemConteiner,taskContent) =>{
    const tasks = tasksContainer.childNodes;

    for (const task of tasks){
        const currentTaskIsBeingClicked = task.firstChild.isSameNode(taskContent)

        if (currentTaskIsBeingClicked){
            taskItemConteiner.remove();
        }
    }
    updateLocalStorage();
};



const hendleInputChange = () => {
    const inputIsValid = validateInput();

    if (inputIsValid){
        return inputElement.classList.remove("error");
    }
};


const updateLocalStorage = () =>{
    const tasks = tasksContainer.childNodes;

   

    const localStorageTasks = [... tasks].map(task =>{
        const content = task.firstChild;
        const isCompleted = content.classList.contains('completed')

        return {description: content.innerText, isCompleted: isCompleted};
    });


    localStorage.setItem('tasks', JSON.stringify(localStorageTasks));

};


const refreshTasksUsingLocalStorege = () =>{
    const tasksFromLocalStorege = JSON.parse(localStorage.getItem('tasks'));

    for (const task of tasksFromLocalStorege){
        const taskItemConteiner = document.createElement('div');
        taskItemConteiner.classList.add('task-item');
    
        const taskContent = document.createElement('p');
        taskContent.innerText = tesk.description;

        if (task.isCompleted){
            taskContent.classList.add("completed");

        }



    
        taskContent.addEventListener('click', () => handleClick(taskContent))
    
    
        const deleteItem = document.createElement('i');
        deleteItem.classList.add('far');
        deleteItem.classList.add('fa-trash-alt');
    
    
        deleteItem.addEventListener('click', () =>
         handleDeleteClick(taskItemConteiner,taskContent)
        );
        
    
        taskItemConteiner.appendChild(taskContent);
        taskItemConteiner.appendChild(deleteItem);
    
        tasksContainer.appendChild(taskItemConteiner);

    }

};







refreshTasksUsingLocalStorege();

addTaskButton.addEventListener('click', () => hendleAddTask());

inputElement.addEventListener('change', () => hendleInputChange());




console.log('teste')



