//Creando nuestro elemento html en una variable
const myNewParrafoElement = document.createElement("p");
console.log(myNewParrafoElement);

//Agregando contenido a nuestro elemento
myNewParrafoElement.textContent = "Fui creado con createElement";
console.log(myNewParrafoElement);

//Insertando el elemento html al DOM
const myContentArea = document.getElementById("contentArea");
console.log(myContentArea);

//Insertando el elemento en mi lugar seleccionado
myContentArea.append(myNewParrafoElement);

// Metods : append,prepend,before,after

const myListArea = document.getElementById("listArea");
console.log(myListArea);

const myNewItem = document.createElement("li");
console.log(myNewItem);

myNewItem.textContent = "Hola Mundisimo";
console.log(myListArea);

myListArea.append(myNewItem);// Al final del elemento selecionado
myListArea.prepend(myNewItem);// Al comienzo del elemento seleccionado
myListArea.before(myNewItem);// Al comienzo del elemento seleccionado al nivel hermano
myListArea.after(myNewItem);// Al final del elemento selecionado a nivel hermano .


