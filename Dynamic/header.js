import { addBtnClicked }  from "./products.js";


export default function initHeader() {
    let notificationBar = document.querySelector('.notification');
    const notiBtn = document.querySelector('.notiBtn');


    notiBtn.addEventListener('click', () => {
        notificationBar.textContent = 0;
        notificationBar.classList.remove('flex');
        notificationBar.classList.add('hidden');
        

        document.dispatchEvent(new CustomEvent('setNum:value'));
        
    });


    

    document.addEventListener('add:cart', () => {
        notificationBar.textContent = addBtnClicked;
        notificationBar.classList.remove('hidden');
        notificationBar.classList.add('flex');
    
    
    });


   
    
}