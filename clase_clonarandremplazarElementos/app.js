//clase_clonarandremplazarElementos

//Obteniendo mi Area
const myContentArea = document.querySelector("#contentArea");
console.log(myContentArea);

//Obteniendo el elemento original para clonar
const myOriginalParrafo = myContentArea.querySelector("p");
console.log(myOriginalParrafo);

//Guardando mi elemento ya clonado
const myCloneParrafo = myOriginalParrafo.cloneNode(true);
console.log(myCloneParrafo);

//Modificando el texto antes de insertarlo en el DOM
myCloneParrafo.textContent = "Clon Modificado";

//Insertando el elemento clonado
myContentArea.append(myCloneParrafo);


//REEMPLAZANDO ELEMENTOS

const myList = document.querySelector("#listArea");
console.log(myList);

const itemToReplace = listArea.children[2];
console.log(itemToReplace);

itemToReplace.replaceWith(myCloneParrafo);