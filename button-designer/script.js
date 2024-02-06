let text  = document.getElementById("text");
let button = document.getElementById("customButton");
let color = document.getElementById("color");
let backgroundColor = document.getElementById("background");
let borderRadius = document.getElementById('borderRadius');

function updateButtonStyle(){
   button.innerHTML = text.value;
   button.style.color = color.value;
   button.style.backgroundColor = backgroundColor.value;
   button.style.borderRadius = borderRadius.value + "px";
}