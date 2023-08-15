let tasks = [];

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const task = taskInput.value.trim();

  if (task !== '') {
    tasks.push(task);
    renderTasks();
    taskInput.value = ``;
  }
}
function renderTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';

  tasks.forEach((task, index) => {
    const listItem = document.createElement('li');
    listItem.className = 'list-group-item d-flex align-items-center';

    listItem.innerHTML = `
    <div>
      <input onclick="markasdone(this)" class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
      <span class="mr-auto">${task}</span>
      </div>
      <div>
      <button type="button" class = "btn btn-outline-danger btn-sm mr-2 mx-2" onclick="deleteTask(${index})">Delete</button>
      <button id="${index} "type="button" class = "btn btn-outline-danger btn-sm mr-2 mx-2" onclick="markAsImportant(this)">Mark as important</button>
      <label> Date complete:</label>
      <input type="date" id="date">
    </div>
    `;
    taskList.appendChild(listItem)
  });
}
function deleteTask(index) {
  console.log(tasks);
  tasks.splice(index, 1);
  console.log(tasks)
  renderTasks();
}
function markAsImportant(e) {
  console.log(e.closest("li"));

  e.closest("li").classList.toggle("bg-warning");
}

function markasdone(a) {
  console.log(a.parentNode);
  a.parentNode.classList.toggle("text-decoration-line-through");
}


//<!Todo lists>
//1.Notīrīt input lauku pēc taska pievienošanas masīvam.
//2.Pielikt klāt funkcionalitāti, lai atzīmētu, ka task ir izpildīts.
//3.Poga, lai atzīmētu, ka uzdevums ir svarīgs.
//4.Sakārtot pogu izskatu (lai nav saspiestas visas kreisajā pusē).
//5.Pielikt klāt beigu termiņu (deadline).

//  style="display: flex; justify-content: space-between;"