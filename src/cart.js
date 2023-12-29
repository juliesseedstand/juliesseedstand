function expandCart() {
    var cartDiv = document.createElement('div');
    cartDiv.className = "shopping-cart";
    cartDiv.id = 'shopping-cart';
    cartList = document.createElement('li');
    cartDiv.app

    console.log("Cart onClick");
    cartItems.forEach((cartItem) => {
        console.log(`Cart Item: ${cartItem.product}, ${cartItem.quantity}`);
        createCartItem(cartItem);
    });
}

function createCartItem  (cartItem) {
    productItem = seeds.products.find(obj => obj.productTag === cartItem.product);
    console.log(productItem);

    cartDiv = document.getElementById("shopping-cart");
    cartItemList = document.createElement('li');
    cartItemSpan = document.createElement('span');
    buttonsSpan = document.createElement('span');
    buttonsSpan.className = "cart-buttons"
    buttonDeleteSpan = document.createElement('icon')
    buttonDeleteSpan.className = 'fa-solid fa-trash fa-xs item-button';
    buttonsSpan.appendChild(buttonDeleteSpan);
    buttonLike = document.createElement('icon')
    buttonLike.className = "fa-solid fa-heart fa-xs item-button";
    buttonsSpan.appendChild(buttonLike);
    cartItemSpan.appendChild(buttonsSpan);
    imageElement = document.createElement('img');
    imageElement.className = 'item-image';
    imageElement.src = productItem.imagePath;
    cartItemSpan.appendChild(imageElement);
    description = document.createElement('span');
    description.className = 'item-description'
    console.log(`Product Name ${productItem.productName}  ${cartItem.quantity}`);
    description.innerHTML = productItem.productName;
    cartItemSpan.appendChild(description);

    quantitySpan = document.createElement('span');
    buttonPlus =  document.createElement('icon');
    buttonPlus.className = "fa-solid fa-plus fa-xs item-quantity-button";
    quantityValueSpan =  document.createElement('span');
    quantityValueSpan.className = 'item-quantity';
    quantityValueSpan.innerHTML = cartItem.quantity;
    buttonMinus =  document.createElement('icon');
    buttonMinus.className = "fa-solid fa-minus fa-xs item-quantity-button";
    quantityValueSpan.className = "item-quantity";

    quantitySpan.appendChild(buttonPlus);
    quantitySpan.appendChild(quantityValueSpan);
    quantitySpan.appendChild(buttonMinus);
    cartItemSpan.appendChild(quantitySpan);

    cartItemList.appendChild(cartItemSpan);
    cartDiv.appendChild(cartItemList);

    

}