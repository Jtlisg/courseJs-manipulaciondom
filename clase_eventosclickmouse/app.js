//clase_eventosclickmouse

const myContainer = document.querySelector(".container");
console.log(myContainer);

const myButton = document.querySelector("button");
console.log(myButton);


myContainer.addEventListener("mouseover",() => {
    myContainer.style.backgroundColor = "blue";   
});

myContainer.addEventListener("mouseout", ()=> {
    myContainer.style.backgroundColor = "red";
});

/*
myButton.addEventListener("click",()=>{
    alert("Boton clicked");
});
**/

const eventButtonClicked = () => {
    alert("Boton clicked");
};

myButton.addEventListener ("click",eventButtonClicked);

setTimeout(()=>{
    myButton.removeEventListener("click",eventButtonClicked);
},2000);