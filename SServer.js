function getSavedTasks() {
  let data = localStorage.getItem("myTasks");
  if (data) {
    return JSON.parse(data);
  } else {
    let initialTasks = [
      {
        id: 1,
        title: "Complete assignment",
        desc: "Finish the task management project.",
        priority: "high",
        dueDate: "20 Sep 2026",
        completed: false
      },
      {
        id: 2,
        title: "Study Java",
        desc: "Review OOP concepts before the exam.",
        priority: "medium",
        dueDate: "21 Sep 2026",
        completed: false
      },
      {
        id: 3,
        title: "Team meeting",
        desc: "Discuss the project with team members.",
        priority: "low",
        dueDate: "19 Sep 2026",
        completed: true
      }
    ];
    localStorage.setItem("myTasks", JSON.stringify(initialTasks));
    return initialTasks;
  }
}

function saveNewTask(title, desc, priority, dueDate) {
  let tasks = getSavedTasks();
  let newTask = {
    id: Date.now(),
    title: title,
    desc: desc || "",
    priority: (priority || "medium").toLowerCase(),
    dueDate: dueDate || "Today",
    completed: false
  };
  tasks.push(newTask);
  localStorage.setItem("myTasks", JSON.stringify(tasks));
  return newTask;
}

function toggleTaskStatus(id) {
  let tasks = getSavedTasks();
  let task = tasks.find(t => t.id === Number(id));
  if (task) {
    task.completed = !task.completed;
    localStorage.setItem("myTasks", JSON.stringify(tasks));
  }
}

function deleteTask(id) {
  let tasks = getSavedTasks();
  let filtered = tasks.filter(t => t.id !== Number(id));
  localStorage.setItem("myTasks", JSON.stringify(filtered));
}
