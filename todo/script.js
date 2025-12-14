let array = [];
let todohtml = "";
let i = 0;
function addtarea() {
  const inputElement = document.querySelector(".input"); //selecciona el input
  const inputDate = document.querySelector(".date");
  let valor = inputElement.value;
  let dia = inputDate.value;

  array.push({
    date: dia,
    nombre: valor,
  }); //lo pone en el array
  console.log(array);
  for (i; i < array.length; i++) {
    const elcoso = array[i];

    const htmlagregar = `
      <div class="todolist">
        <p>${elcoso.nombre}</p>
        <p>${elcoso.date}</p>
        <button onclick="
        array.splice(${i},1);
        addtarea(); 
        ">cancelar</button>
      </div>
      `;
    todohtml += htmlagregar;
  }
  document.querySelector(".ko").innerHTML = todohtml;
  console.log(array);
  inputElement.value = "";
}
const inputElement = document.querySelector(".input");

inputElement.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addtarea(); // Ejecuta tu función
  }
});
