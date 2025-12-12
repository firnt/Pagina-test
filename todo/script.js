let array = [];
let todohtml = "";
let i = 0;
function addtarea() {
  const inputElement = document.querySelector(".input"); //selecciona el input
  array.push(inputElement.value); //lo pone en el array

  for (i; i < array.length; i++) {
    const elcoso = array[i];
    const htmlagregar = `
      <div class="kil">
        <p>${elcoso}</p>
        <button onclick="
        array.splice(${i},1); 
        addtarea();">cancelar</button>
      </div>
      
      `;
    todohtml += htmlagregar;
  }
  document.querySelector(".log").innerHTML = todohtml;
  console.log(array);
  inputElement.value = "";
}
const inputElement = document.querySelector(".input");

inputElement.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addtarea(); // Ejecuta tu función
  }
});
