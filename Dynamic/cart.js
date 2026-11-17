import { addBtnClicked } from "./products.js";



export default function initCart() {

    const cartContainer = document.querySelector('.cart-container')
    const cartTemplate = document.querySelector('.cart-template');
    


    let numberOfProducts = addBtnClicked;
    console.log(addBtnClicked);
    console.log(numberOfProducts);

    

    



    document.addEventListener('addCartDetails', (event) => {

        const newCartCard = cartTemplate.content.cloneNode(true);
        const { title, price, imageSrc, sendProductNum } = event.detail;

    
        const quantity = newCartCard.querySelector('.quantity-value');
        const img = newCartCard.querySelector('.img-src');
        const name = newCartCard.querySelector('.title');
        const setPrice = newCartCard.querySelector('.price');
        const add = newCartCard.querySelector(".add-btn");
        const sub = newCartCard.querySelector(".minus-btn");
        const cartCard = newCartCard.querySelector('.cart-card');
        const deleteBtn = newCartCard.querySelector('.delete');
    

        
        img.src = imageSrc;
        name.textContent = title;
        setPrice.textContent = price;
        let numOfProduct = Number(quantity.textContent) + sendProductNum;
        quantity.textContent = numOfProduct;

        
        add.addEventListener('click', () => {
    
            numOfProduct++;
            quantity.textContent = numOfProduct;
            
            
        });


        sub.addEventListener('click', () => {
            
            if (numOfProduct> 0) {
                numOfProduct--;
                quantity.textContent = numOfProduct;
                console.log(numOfProduct);
            }

        });

        deleteBtn.addEventListener('click', () => {
            cartCard.remove();
        });

        cartContainer.appendChild(newCartCard);
        

    });


}

