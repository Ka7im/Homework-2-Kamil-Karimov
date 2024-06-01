const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

taskInput.addEventListener('input', () => {
    addTaskBtn.disabled = taskInput.value.trim() === '';
});

addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', (e) => {
            if (e.target.checked) {
                taskLabel.classList.add('task-completed');
            } else {
                taskLabel.classList.remove('task-completed');
            }
        });

        const taskLabel = document.createElement('label');
        taskLabel.textContent = taskText;

        taskDiv.appendChild(checkbox);
        taskDiv.appendChild(taskLabel);
        taskList.appendChild(taskDiv);

        taskInput.value = '';
        addTaskBtn.disabled = true;
    }
})