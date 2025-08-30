//Obteniendo el formulario

const myTaskForm = document.getElementById("task-form");
console.log(myTaskForm);

//Obteniendo la seccion de las lista de tareas 

const myTaskList = document.getElementById("task-list");
console.log(myTaskList);

//Esuchando el fomrulario
myTaskForm.addEventListener("submit",(event)=>{

    event.preventDefault();//Quitando el comportamiento por defecto del boton submit

    //obteniendoel input del formulario
    const taskInput = document.getElementById("task-input");
    console.log(taskInput);

    const task = taskInput.value;
    console.log(task);

    if(task){
        myTaskList.append(createTask(task));
        storeTaskLocalStorage(task);
        taskInput.value = '';
    }


});

//Funciont crear Button
function createButton(text, className) {
  const btn = document.createElement('span')
  btn.textContent = text
  btn.className = className
  return btn
}

//Funcion crear Task
function createTask(task){
    const li = document.createElement('li');
    li.textContent = task

    li.append(createButton('❌','delete-btn'),
    createButton('✏️','edit-btn'));

    return li;

};

//Escuchando botones borrar y editar
myTaskList.addEventListener("click",(event)=>{
    console.log(event);//Comprobando el click dentro de la lista

    //Condicional para eliminar una task
    if(event.target.classList.contains("delete-btn")){
        console.log("si lo contiene");//Comprobando el if
        deleteTask(event.target.parentElement);
    }else if(event.target.classList.contains("edit-btn")){
        console.log(event.target.classList);//Comprobando la clase que contiene
        editTask(event.target.parentElement);
    };  

});

//Funcion eliminar Task
function deleteTask(taskItem){
    if(confirm("Estas segura / seguro de borrar este elemento")){
        taskItem.remove();
    };
};

//Function editar Task
function editTask(taskItem){
    const newTask = prompt("Edita la Tarea:",taskItem.firstChild.textContent);
    if(newTask !== null){
        taskItem.firstChild.textContent = newTask;
    };
};

//Funcion para guardar las tareas en el localStorageS
function storeTaskLocalStorage (task){
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");

    tasks.push(task);//Agregando la tarea nueva al rray
    localStorage.setItem("tasks",JSON.stringify(tasks));//Guardando  esa tarea en el localStorage
}