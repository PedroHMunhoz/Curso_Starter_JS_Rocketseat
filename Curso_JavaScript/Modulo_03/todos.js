var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");

//Se não tiver valor no localStorage, retorna um array vazio
var todos = JSON.parse(localStorage.getItem("list_todos")) || [];

function renderTodos() {
  listElement.innerHTML = "";
  for (todo of todos) {
    var todoElement = document.createElement("li");
    var todoText = document.createTextNode(todo);
    var linkElement = document.createElement("a");
    linkElement.setAttribute("href", "#");

    //pega a posição do item no array
    var pos = todos.indexOf(todo);

    //atribui no onclick do link a chamada do metodo de deletar, passando a posição no vetor do item clicado
    linkElement.setAttribute("onclick", "deleteTodo(" + pos + ")");

    //Adiciona o link excluir no item
    var linkText = document.createTextNode(" -> Excluir");
    linkElement.appendChild(linkText);

    //Renderiza os itens em tela
    todoElement.appendChild(todoText);
    todoElement.appendChild(linkElement);
    listElement.appendChild(todoElement);
  }
}

renderTodos();

function addTodo() {
  var todoText = inputElement.value;
  todos.push(todoText);
  inputElement.value = "";
  renderTodos();
  saveToStorage();
}

buttonElement.onclick = addTodo;

function deleteTodo(pos) {
  todos.splice(pos, 1);
  renderTodos();
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem("list_todos", JSON.stringify(todos));
}
