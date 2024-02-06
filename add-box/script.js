const button = document.querySelector('#button');
const boxContainer = document.querySelector('#boxContainer');
let boxCounter = 0;

function handleClick(event){
    event.target.style.backgroundColor = "red";
}

function handleDblClick(event){
    event.target.remove();
}

button.addEventListener('click', ()=> {
    let newBox = document.createElement("div");
    newBox.classList.add("box");
    newBox.textContent = boxCounter;
    newBox.setAttribute('id', `box-${boxCounter}`)
    boxCounter++;
    newBox.addEventListener('click', handleClick);
    newBox.addEventListener('dblclick', handleDblClick);
    boxContainer.appendChild(newBox);
})




