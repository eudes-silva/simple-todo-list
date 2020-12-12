const newItemInput = document.querySelector('#newItemInput');
const addNewItem = document.querySelector('.addNewItem');
const todoList = document.querySelector('.todo-list');

addNewItem.addEventListener('click',(e)=>{
  e.preventDefault();
  const insert = getTodoInput();
  if(insert!=''&&insert!='undefined'&&insert!='null'){
    createTodoItem(insert);
    newItemInput.value='';
 }else{
    setTimeout(function(){ newItemInput.placeholder='Add a new task' }, 2000);
    newItemInput.placeholder='Error. The field cannot be empty.';
  }
})

function getTodoInput(){
  const inputContent = newItemInput.value;
  return inputContent;
}

function createTodoItem(content){
  const todoItem = document.createElement('li');
  todoItem.classList.add('todo-item');
  todoList.appendChild(todoItem);
  todoItem.innerHTML += content;
  todoItem.innerHTML+=`<button class="item-btn" type="button"><hr></button>`
}

todoList.addEventListener("click", function(event) {
  if (event.target.className === 'todo-item') {
    event.target.classList.add('done')
  }else{
    event.target.classList.remove('done')
  }
  event.target.addEventListener('click',(event)=>{
    let parent = event.target.parentElement;
    if (event.target.className === 'item-btn') {
      parent.style.display='none'
    }
   })
});