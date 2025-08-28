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

});