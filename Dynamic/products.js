import { productList } from "./productList.js";



export let addBtnClicked = 0;

export default function initProducts() {
    
    const container = document.querySelector('.product-container');
    const template = document.querySelector('.product-template');

    
    

    productList.forEach((element) => {

    
        const newCard = template.content.cloneNode(true);


        
        const increaseButton = newCard.querySelector('.btn-increase');
        const decreaseButton = newCard.querySelector('.btn-decrease');
        const addCart = newCard.querySelector('.addCartBtn');
        const quantity = newCard.querySelector('.quantity');
        const loading = newCard.querySelector('.loading');

        
        let productNumber = Number(quantity.textContent);
        

        newCard.querySelector('.product-image').src = element.image;
        newCard.querySelector('.product-image').alt = element.name;


        newCard.querySelector('.product-name').textContent = element.name.charAt(0).toUpperCase() + element.name.slice(1);
        newCard.querySelector('.product-price').textContent = `Price : ${element.price}`;
        console.log(newCard.querySelector('.product-details').textContent = element.details);



        container.appendChild(newCard);



        increaseButton.addEventListener('click', () => {
            productNumber++;
            quantity.textContent = productNumber;
        });


        decreaseButton.addEventListener('click', () => {
            if (productNumber > 0) {
                productNumber--;
                quantity.textContent = productNumber;
            }
        });


        addCart.addEventListener('click', () => {
        
        
        if (productNumber > 0) {

                addBtnClicked += productNumber;
                quantity.textContent = 0;
                productNumber = 0;
                
                loading.classList.replace('hidden', 'flex');
                addCart.style.opacity = '0.5';
                
            
                
                setTimeout(() => {
                    loading.classList.replace('flex', 'hidden');
                    addCart.style.opacity = '1';
                }, 1000);
                

                document.dispatchEvent(new CustomEvent('add:cart'));
                
            }
            
        });

        document.addEventListener('setNum:value', () => {
       
            addBtnClicked = 0;
            
        });
    })


    
}
