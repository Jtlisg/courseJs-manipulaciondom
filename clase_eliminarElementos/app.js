//clase_eliminarElementos

//Obteniendo el primer elemento de la lista
const myFirstItem = document.querySelector("li");
console.log(myFirstItem);

//Eliminando el primer elemento de la lista
myFirstItem.remove();


//Obteniendo el padre de la lista
const myList = document.querySelector("ul");
console.log(myList);

//Eliminando el primer elemento hijo desde el padre seleccionado
myList.removeChild(myList.firstElementChild);

