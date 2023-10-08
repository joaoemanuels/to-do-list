document.addEventListener('DOMContentLoaded', () => {
  const addTaskButton = document.getElementById('add-task');
  const newTaskInput = document.getElementById('new-task');
  const todoList = document.getElementById('todo-list');

  addTaskButton.addEventListener('click', () => {
    const taskText = newTaskInput.value.trim();

    if (taskText !== '') {
      const listItem = document.createElement('li');
      listItem.textContent = taskText;
      todoList.appendChild(listItem);
      newTaskInput.value = '';
    }
  });
});