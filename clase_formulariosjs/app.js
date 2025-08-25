const myForm = document.getElementById("myForm");

console.log(myForm);

myForm.addEventListener("submit",(event)=>{
    event.preventDefault();
    const myInputName = myForm.elements["name"];//Obteniendo el elemnto html.

    console.log(myInputName);
    console.log(myInputName.value);//Mostrando el valor del elemento html navegando por las propiedades del objeto.
});