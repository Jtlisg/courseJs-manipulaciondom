
//Obteniendo todos los li en una lista de nodo
// const myListItems = document.querySelectorAll("li");
// console.log(myListItems);

//Iterando en esa lista y en cada item o li agregando el evento escuchador y su codigo a ejecutar
// myListItems.forEach((item) =>{
//     item.addEventListener("click",(event)=>{
//         event.target.classList.toggle("highlight");
//     })
// })


//Aplicando el Delegation Pattern

const myListParent = document.querySelector("ul");

myListParent.addEventListener("click",(event)=>{
    event.target.closest("li").classList.toggle("highlight");
});