const mainContainer = document.querySelector('.main-container');
const iconContainer = document.querySelector('.icon-container');

function toast(obj) {
     return new Promise((resolve, reject) => {
          const { type, content, duration } = obj;

          const toastElement = createToast(type, content);
          mainContainer.insertBefore(toastElement, iconContainer);
          removeToast(toastElement, duration, resolve);
     })
     
}

function createToast(type, content) {
     const toast = document.createElement('div');
     const crossIcon = document.createElement('i');
     crossIcon.classList.add("fa-solid");
     crossIcon.classList.add("fa-xmark");
     crossIcon.classList.add("adjust-icon");
     toast.classList.add('toast-container');
     toast.innerText = content;
     toast.appendChild(crossIcon);
     setColor(toast, type);
     crossIcon.addEventListener('click', () => removeToast(toast));
     return toast;
}


function setColor(element, type) {
     switch (type) {
          case 'success':
               element.style.backgroundColor = 'green';
               break;


          case 'error':
               element.style.backgroundColor = 'red';
               break;


          case 'info':
               element.style.backgroundColor = 'blue';
               break;


          case 'warning':
               element.style.backgroundColor = 'yellow';
               break;
     }
}



function setTimer(element, time, resolve) {
     const timerId = setTimeout(() => {
          element.remove();
          resolve();
     }, time);
     
}

function removeToast(element, time=0, resolve) {
     if(time === 0) {
          element.remove();   
     } else {
          setTimer(element, time, resolve);
     }
}








