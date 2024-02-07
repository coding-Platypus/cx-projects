const button = document.querySelector('#button');
const boxContainer = document.querySelector('#boxContainer');
let boxCounter = 0;

function handleClick(event, clicked){
    if(clicked === 3) {
        event.target.remove();
    } else if(clicked === 2){
        event.target.style.backgroundColor = "green";
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
    let clicked = 0;
    newBox.addEventListener('click', ()=> {
        clicked++;
        handleClick(event, clicked);
    });
    boxContainer.appendChild(newBox);
})




