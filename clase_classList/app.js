//Obteniendo el buton toggle de mi html
const myButton = document.querySelector("button");
console.log(myButton);

//Obteniendo el menu de mi html
const myMenu = document.querySelector(".menu");
console.log(myMenu);

//Agregando un evento escuchador a mi boton y que hara
myButton.addEventListener("click", () => {
    //Al hacer click se agrega una clase a mi menu que lo hace invisible
    myMenu.classList.toggle("invisible");
})