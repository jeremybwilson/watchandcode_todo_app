const todoList = {
  todos: [],
  // Don't need this entire block of code anymore outside of the console.
  // displayTodos: function() {
  //   // if todos.length is equal to zero
  //     if(this.todos.length === 0){
  //       console.log('Your todo list is empty!');
  //     } else {
  //       // print todos as normal
  //       console.log('My Todos:');
  //       for(var i = 0; i < this.todos.length; i++){
  //         if(this.todos[i].completed === true){
  //           console.log('(x)', this.todos[i].todoText);
  //         } else {
  //           console.log('( )', this.todos[i].todoText);
  //         }
  //     }
  //   }
  // },
  addTodo: function(todoText) { // adds Todo text
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  changeTodo: function(position, todoText) { // updates Todo text property, not the entire object
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  deleteTodo: function(position) { // deletes Todo text
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  toggleCompleted: function(position) { // toggles completed text
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  },
  toggleAll: function(){
    var totalTodos = this.todos.length;
    var completedTodos = 0;

    // Get number of completed todos
    for (var i = 0; i < totalTodos; i++){
      if(this.todos[i].completed === true){
        completedTodos++;
      }
    }
    // Case 1: if everything is true, make everything false
    if(completedTodos === totalTodos){
      for(var i = 0; i < totalTodos; i++){
        this.todos[i].completed = false;
      }
    // Case 2: Otherwise, make everything true.
    } else {
      for(var i = 0; i < totalTodos; i++){
        this.todos[i].completed = true;
      }
    }
    this.displayTodos();
  }
};

  // 1. We want to get access to the display todos button
  // var displayTodosButton = document.getElementById('displayTodosButton');
  // console.log(displayTodosButton);
  // var toggleAllButton = document.getElementById('toggleAllButton');
  // console.log(toggleAllButton);

  // 2. We want to run the displayTodos method, when someone clicks the displayTodos button
  // displayTodosButton.addEventListener('click', function(){
  //   todoList.displayTodos();
  // });
  // toggleAllButton.addEventListener('click', function(){
  //   todoList.toggleAll();
  // });

  const handlers = {
  addTodo: function(){
    var addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = '';
    view.displayTodos();
  },
  changeTodo: function(){
    var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    var changeTodoTextInput = document.getElementById('chageTodoTextInput');
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoPositionInput.value = '';
    changeTodoTextInput.value = '';
    view.displayTodos();
  },
  deleteTodo: function(){
    var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
    todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput.value = '';
    view.displayTodos();
  },
  toggleCompleted: function(){
    var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = '';
    view.displayTodos();
  },
  toggleAll: function(){
    todoList.toggleAll();
    view.displayTodos();
  }
};

const view = {
  displayTodos: function () {
    // set todosUl variable to ul element in the DOM
    const todosUl = document.querySelector('ul');
    // set todosUl innerHTML to empty value
    todosUl.innerHTML = '';
    // loop through each of the available todoList items
    for(var i = 0; i < todoList.todos.length; i++){
      const todoLi = document.createElement('li');
      var todo = todoList.todos[i];
      let todoTextWithCompletion = '';

      if(todo.completed === true) {
        todoTextWithCompletion = '(x) ' + todo.todoText;
      } else {
        todoTextWithCompletion = '( ) ' + todo.todoText;
      }

      todoLi.id = i;
      todoLi.textContent = todoTextWithCompletion;
      todoLi.appendChild(this.createDeleteButton());
      todosUl.appendChild(todoLi);
    }
  },
  createDeleteButton: function () {
    var deleteButton = document.createElement('button');;
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'deleteButton';
    return deleteButton;
  },
  setUpEventListeners: function () {

  }
};
