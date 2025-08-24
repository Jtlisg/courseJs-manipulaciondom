
//Obteniendo el padre
const parent = document.getElementById("parent");
console.log(parent);

//Obteniendo todos los hijos del padre
const children = parent.children;

console.log(children)

//Obteniendo el primer Children nada mas
const firtChildren = parent.firstElementChild;
console.log(firtChildren);

//Obteniendo el ultimo Children 
const myLastChild = parent.lastElementChild;
console.log(myLastChild);

//Obteniendo el hermano siguiente 
const myNextSibling = parent.nextElementSibling;
console.log(myNextSibling);


//Otras Metodos
/**
 * lastChild
 * previousSibling
 * nextSibling
 * 
 * childNodes
 * firstChild
 * firstElementChild
 * lastElementChild
 * previousElementSibling
 * nextElementSibling
 */


//Un nuevo hijo para buscar desde ahi
const childrenTwo = document.querySelector("li");
console.log(childrenTwo);
console.log("arriba")

//Obteniendo el padre
const parentTwo = childrenTwo.parentNode;
console.log(parentTwo);

//Obteniendo al abuelo
const grandParent = childrenTwo.closest("menu");
console.log(grandParent);

