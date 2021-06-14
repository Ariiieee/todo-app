const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todos');

//add Event listener
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', delCheckTodo);
filterOption.addEventListener('click', filterTodos);


function addTodo (event) {
  event.preventDefault();
  if (todoInput.value === '') {
    return false
  }


  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo'); //this adds a class with the name of the class called 'todo'

  //create li
  const newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('newTodo-item');
  todoDiv.appendChild(newTodo);

  //checked todo button
  const completedTodoBtn = document.createElement('button');
  completedTodoBtn.innerHTML = '<i class="fas fa-check-circle"></i>';
  completedTodoBtn.classList.add('complete-todo-btn');
  todoDiv.appendChild(completedTodoBtn);

  //Delete todo button
  const deleteTodoBtn = document.createElement('button');
  deleteTodoBtn.innerHTML = '<i class="fas fa-trash"></i>';
  deleteTodoBtn.classList.add('del-todo-btn');
  todoDiv.appendChild(deleteTodoBtn);

  //append todo to todo-list i.e the ul
  todoList.appendChild(todoDiv);

  //clear todo input value
  todoInput.value = "";
}

function delCheckTodo (e) {
  const item = e.target;

  //remove to do
  if(item.classList[0] === 'del-todo-btn'){
    const todo = item.parentElement;

    //Animation
    todo.classList.add('fall');
    todo.addEventListener('transitionend', function (){
      todo.remove()
    });
  }

  //check todo 
  if (item.classList[0] === 'complete-todo-btn') {
    const todo = item.parentElement;
    todo.classList.toggle('completed');
  }
}

function filterTodos (e) {
  const todos = todoList.childNodes;
  todos.forEach(function(todo) {
    switch(e.target.value) {  //kindly note switch statements are used to check one variable at time
      case "all":
        todo.style.display = 'flex';
        break;
        case "completed":
          if(todo.classList.contains('completed')) {
            todo.style.display = 'flex';
          } else {
            todo.style.display = 'none';
          }
          break;
          case 'uncompleted': 
          if (!todo.classList.contains('completed')) {
            todo.style.display = 'flex';
          }else {
            todo.style.display = 'none';
          }
          break;
    }
  });
}