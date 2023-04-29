const taskInput = document.querySelector('.new-task-input');
const taskButton = document.querySelector('.new-task-button');
const tasksList = document.querySelector('.tasks-container');
const btnCheck = document.querySelector('.check');
const buttonDelete = document.querySelector('.delete');
const containerButton = document.querySelector('.container-button')
const divButton = document.querySelector('.div-buttons')


taskButton.addEventListener('click', (e) => {
    e.preventDefault();
    const inputValue = document.querySelector('.new-task-input');
    
    const value = inputValue.value;
    createElements(value);
    
})




taskInput.addEventListener('keypress', e => {
    if(e.key === 'Enter' && taskInput.value != '') {
        setItemDb()
    }
})

function setItemDb() {

    const taskInput = document.querySelector('.new-task-input');
    
    createElements(taskInput.value)
      
}


const createElements = (texto) => {
   
    const createDiv = document.createElement('div');
    createDiv.classList.add('container-button');
    tasksList.appendChild(createDiv);

    const createH3 = document.createElement('h3');
    createH3.classList.add('colorH3');
    createH3.innerText = texto;
    createDiv.appendChild(createH3);

    const createDivButtons = document.createElement('div');
    createDivButtons.classList.add('div-buttons')
    createDiv.appendChild(createDivButtons);

    const createButtonCheck = document.createElement('button');
    createButtonCheck.classList.add('check');
    createDivButtons.appendChild(createButtonCheck);
    

    const createIconCheck = document.createElement('i');
    createIconCheck.classList.add("fa-solid");
    createIconCheck.classList.add("fa-square-check");
    createButtonCheck.appendChild(createIconCheck);


    const createButtonDelete = document.createElement('button');
    createButtonDelete.classList.add('delete');
    createDivButtons.appendChild(createButtonDelete);

    createButtonDelete.addEventListener('click', deleteContainer = () => {
        const tasksList = document.querySelector('.tasks-container')
        tasksList.firstChild.remove();
    });

    const createIconDelete = document.createElement('i');
    createIconDelete.classList.add("fa-solid");
    createIconDelete.classList.add("fa-trash-arrow-up");
    createButtonDelete.appendChild(createIconDelete);
    
    taskInput.value = '';

}

document.addEventListener('click', (e)=>{
    const targetEl = e.target
    const parentEl = targetEl.closest('.container-button');
    if(targetEl.classList.contains('check')) {
        parentEl.classList.toggle('done')
    }
    console.log(targetEl);
})
    







