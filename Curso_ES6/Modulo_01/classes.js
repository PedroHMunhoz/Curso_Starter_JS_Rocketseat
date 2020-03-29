class TESTE {
  metodo() {}

  outro() {}
}

class List {
  constructor() {
    this.data = [];
  }

  add(data) {
    this.data.push(data);
    console.log(this.data);
  }
}

class ToDoList extends List {
  constructor() {
    super();

    this.ususario = "Pedro";
  }

  mostraUsuario() {
    console.log(this.ususario);
  }
  // constructor() {
  //   this.todos = [];
  // }
  // addTodo() {
  //   this.todos.push("Novo ToDo");
  //   console.log(this.todos);
  // }
}

const MinhaLista = new ToDoList();

document.getElementById("novoToDo").onclick = function() {
  MinhaLista.add("Novo Todo");
};

MinhaLista.mostraUsuario();

class ToDoList {
  constructor() {
    this.todos = [];
  }

  //Métodos estáticos eles não enxergam os this de outros locais da classe
  static addTodo() {
    this.todos.push("Novo Todo");
    console.log(this.todos);
  }
}

ToDoList;
