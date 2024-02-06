const button = document.querySelector('#button');
const boxContainer = document.querySelector('#boxContainer');
let boxCounter = 0;

function handleClick(event){
    if(event.target.style.backgroundColor == 'red') {
        event.target.remove();
    } else {
        event.target.style.backgroundColor = "red"; 
    }
    
}

button.addEventListener('click', ()=> {
    let newBox = document.createElement("div");
    newBox.classList.add("box");
    newBox.textContent = boxCounter;
    newBox.setAttribute('id', `box-${boxCounter}`)
    boxCounter++;
    newBox.addEventListener('click', handleClick);
    boxContainer.appendChild(newBox);
})




