function getSavedTasks() {
  let data = localStorage.getItem("myTasks");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
}

function saveNewTask(taskText) {
  let tasks = getSavedTasks();
  let newTask = {
    id: Date.now(),
    text: taskText
  };
  tasks.push(newTask);
  localStorage.setItem("myTasks", JSON.stringify(tasks));
}

function deleteTask(id) {
  let tasks = getSavedTasks();
  let filteredTasks = tasks.filter(task => task.id !== id);
  localStorage.setItem("myTasks", JSON.stringify(filteredTasks));
}
