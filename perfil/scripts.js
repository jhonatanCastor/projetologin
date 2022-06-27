function load(){
    
}

var isPassed = false;


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
    taskContent.classList.add("pTaskContent")

    

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

   

    const localStorageTasks = [...tasks].map(task =>{
        const content = task.firstChild;
        const isCompleted = content.classList.contains('completed')
        const isYellow = content.classList.contains("taskYellow");
        const isBlack = content.classList.contains("taskBlack")



        return {description: content.innerText, isCompleted: isCompleted, color: ["taskBlack", "taskYellow"]};


    });


    console.log(localStorageTasks)
    localStorage.setItem('tasks', JSON.stringify(localStorageTasks));


};

const refreshTasksUsingLocalStorage = () =>{
    const tasksFromLocalStorage = JSON.parse(localStorage.getItem("tasks"));

    console.log(tasksFromLocalStorage)

    for(const task of tasksFromLocalStorage){

        const taskItemConteiner = document.createElement('div');
        taskItemConteiner.classList.add('task-item');
    
        const taskContent = document.createElement('p');
        taskContent.innerText = task.description;
        
        if(task.isYellow){

        }

        if (task.isCompleted){
            taskContent.classList.add("completed")

        }



        setTimeout(() => {
            taskContent.style.color = task.color[1]
        }, 2000);
        
        if(task.color[1])


        // console.log(isPassed)


        taskContent.classList.add("pTaskContent")
       
    
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

}


refreshTasksUsingLocalStorage();


addTaskButton.addEventListener('click', () => hendleAddTask());

inputElement.addEventListener('change', () => hendleInputChange());


