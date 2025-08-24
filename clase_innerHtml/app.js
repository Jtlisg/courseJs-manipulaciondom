const myContentArea = document.getElementById("contentArea");
console.log(myContentArea);

myContentArea.innerHTML = "<p>Hola Mundo Jt</p>";

myContentArea.insertAdjacentHTML("beforeend","<p>Este es otro nuevo parrafo jejeje</p>");


//Jugando con inserAdjacentHtml

const myListArea = document.getElementById("listArea");
console.log(myListArea);

myListArea.insertAdjacentHTML("afterend","<h1>Yo soy Gru</h1>");
