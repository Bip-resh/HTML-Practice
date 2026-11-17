import './style.css'

import initProducts from '/products.js';
import initHeader from '/header.js';
import initCart from '../cart.js';



initProducts();
initHeader();
initCart();






const navButtons = document.querySelectorAll('[data-page]');
const productPage = document.querySelector(".product-section");
const cartPage = document.querySelector(".cart-section");



navButtons.forEach((button) => {
    
    

    button.addEventListener("click", async () => {
        
        const page = button.dataset.page;
        

        if (page == 'product') {
            productPage.classList.remove('hidden');
            cartPage.classList.add('hidden');

        } else if (page == 'cart') {
            productPage.classList.add('hidden');
            cartPage.classList.remove('hidden');
        }
        
        
    });
    
});



