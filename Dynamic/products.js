
export let addBtnClicked = 0;

export default function initProducts() {

    const increaseButton = document.querySelector('.btn-increase');
    const decreaseButton = document.querySelector('.btn-decrease');
    const addCart = document.querySelector('.addCartBtn');
    const quantity = document.querySelector('.quantity');

    let productNumber = Number(quantity.textContent);
    

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
            quantity.textContent = 0;
            productNumber = 0;
            addBtnClicked++;

            document.dispatchEvent(new CustomEvent('add:cart'));
            
        }
        
    });

    document.addEventListener('setNum:value', () => {
       
        addBtnClicked = 0;
        
    });


    
}
