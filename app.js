

let tasks = JSON.parse(localStorage.getItem('todos')) || []; 

const body = document.getElementById('body');
const input = document.getElementById('input'); 
const createBtn = document.getElementById('create-btn'); 

displayTasks(); 

createBtn.addEventListener('click', () => { 
    if(input.value) { 
        tasks.push(input.value); 
        localStorage.setItem('todos', JSON.stringify(tasks));
        input.value = '';
        displayTasks();
    } 
})


function displayTasks() { 
    body.innerHTML = ''; 
    tasks.forEach((item, index) => {
        const taskElement = document.createElement('div');
        taskElement.className = 'task-item';
        
        // Text
        const p = document.createElement('p');
        p.className = 'task';
        p.textContent = item;
        taskElement.appendChild(p);

        // Icons
        const actions = document.createElement('div'); 
        actions.className = 'actions'; 

        // Edit icon
        const editIcon = document.createElement('i');
        editIcon.className = 'fas fa-pencil-alt'; 
        editIcon.onclick = () => editTask(index);
        actions.appendChild(editIcon);

        // Delete icon
        const deleteIcon = document.createElement('i');
        deleteIcon.className = 'fas fa-trash'; 
        deleteIcon.onclick = () => deleteTask(index);
        actions.appendChild(deleteIcon);
        
        taskElement.appendChild(actions);
        body.appendChild(taskElement);
    }) 
} 


function deleteTask(index) { 
    const taskElement = document.querySelectorAll('.task-item')[index];
    taskElement.classList.add('deleting');

    setTimeout(() => {
        tasks = tasks.filter((task, i) => i !== index); 
        localStorage.setItem('todos', JSON.stringify(tasks));
        displayTasks(); 
    }, 500);
} 


function editTask(index) { 
    const element = document.querySelectorAll('.task-item')[index]; 
    const textElement = element.childNodes[0]; 

    // Create input element
    const input = document.createElement('input');
    input.type = 'text';
    input.value = tasks[index];
    input.className = 'edit-input';

    element.replaceChild(input, textElement); 

    input.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
            const newValue = input.value.trim();
            if (newValue !== '') {
                tasks[index] = newValue;
                localStorage.setItem('todos', JSON.stringify(tasks));
                displayTasks();
            }
        }
    });
} 

