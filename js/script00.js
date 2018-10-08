const todoList = {
  todos: [],
  displayTodos: function(){
    if(this.todos.length === 0){
      console.log('The todo list is empty!');
    } else { 
      console.log('My Todos:');
      for(var i = 0; i < this.todos.length; i++){
        console.log('My todos: ', this.todos[i].todoText); 
      }
    }
  },
  // It should have a function to add todos.
  addTodo: function (todoText){
    this.todos.push({
      todoText: todoText,
      completed: false  // Boolean true or false
    });
    this.displayTodos();
  },
  // It should have a function to change todos.
  changeTodo: function (position, todoText){ // needs parameters, position and new value
    // todos[0] = 'some new value';
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  // It should have a function to delete todos.
  deleteTodo: function (position){
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  toggleCompleted: function (position){
    const todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  },
  toggleAll: function() {
    // get total number of todos
    const totalTodos = this.todos.length;
    // set empty variable for completed todos
    const completedTodos = 0;

    // Get the number of completed todos
    // for(var i = 0; i < todos.length; i++){
    //   if(this.todos[i].completed === true){
    //     completeTodos++;
    //   }
    // }
    // Case 1: if everything is true, make everything false

    // Case 2: Otherwise, make everything true.

    this.displayTodos();
  }
};

// 1.  get access to the displayTodos button
var displayTodosButton = document.getElementById('displayTodosButton');
var toggleAllButton = document.getElementById('toggleAllButton');
// console.log(displayTodosButton);

// 2.  run displayTodos methods, when someone clicks the display
displayTodosButton.addEventListener('click', function() {
  todoList.displayTodos();
});
// 3.  run toggleAll method
// var toggleAllButton = document.getElementById('toggleAllButton')
toggleAllButton.addEventListener('click', function() {
  todoList.toggleAll();
});

