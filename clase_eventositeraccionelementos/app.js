//Obteniendo y viendo el objeto del evento

const myButton = document.querySelector("button");

const buttonClicked = (event) => {
    //Navegando en el objeto
    console.log(event);
    console.log(event.target);
    console.log(event.target.id)
    console.log(event.target.textContent);
};

myButton.addEventListener("click",buttonClicked);