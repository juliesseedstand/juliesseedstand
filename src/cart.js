        
function expandCart() {
  
    var counter = 0;
  $("#cart").on("click", function () {
    $(".shopping-cart").fadeToggle("fast");
  });

  document.getElementById("shopping-cart").innerHTML = '';


  cartItemList = document.createElement("ul");
  Object.keys(cartItems).forEach((productId) => {
    console.log(
      `Cart Item: ${cartItems[productId].product}, ${cartItems[productId].quantity}`
    );
    cartItemList.appendChild(createCartItem(cartItems[productId], counter++));
  });
  cartDiv.appendChild(cartItemList);
  closeButton = document.createElement("button");
  closeButton.id= "shopping-cart-button";
  closeButton.innerHTML = "Close Cart";
  closeButton.addEventListener("click", function () {
    cartDiv = document.getElementById("shopping-cart");
    cartDiv.style.visibility = "hidden";
    cartDiv.style.height = "0px";
  });

  orderButton = document.createElement("button");
  orderButton.id= "shopping-cart-button";
  orderButton.innerHTML = "Checkout";
  orderButton.addEventListener("click", function () {
    cartDiv = document.getElementById("shopping-cart-button");
    console.log("Go to the Order Page");
  });
  cartButtonsSpan = document.createElement('span');
  cartButtonsSpan.appendChild(closeButton);
  cartButtonsSpan.appendChild(orderButton);
  cartDiv.appendChild(cartButtonsSpan);
}

function createCartItem(cartItem, counter) {
  productItem = seeds.products.find(
    (obj) => obj.productTag === cartItem.product
  );
  console.log(productItem);

  cartDiv = document.getElementById("shopping-cart");
  cartDiv.style.visibility = "visible";
  cartDiv.style.height = "400px";
  cartItemListItem = document.createElement("li");
  cartItemSpan = document.createElement("span");
  buttonsSpan = document.createElement("span");
  buttonsSpan.className = "cart-buttons-span";
  buttonDeleteSpan = document.createElement("icon");
  buttonDeleteSpan.innerHTML = '<i class="fa fa-trash fa-lg"><i>';
  buttonsSpan.appendChild(buttonDeleteSpan);
  buttonLike = document.createElement("icon");
  buttonLike.innerHTML = '<i class="fa fa-heart fa-lg"><i>';
  buttonsSpan.appendChild(buttonLike);
  cartItemSpan.appendChild(buttonsSpan);
  imageElement = document.createElement("img");
  imageElement.className = "item-image";
  imageElement.src = productItem.imagePath;
  cartItemSpan.appendChild(imageElement);
  description = document.createElement("span");
  description.className = "item-description";
  console.log(`Product Name ${productItem.productName}  ${cartItem.quantity}`);
  description.innerHTML = productItem.productName;
  cartItemSpan.appendChild(description);

  quantitySpan = document.createElement("span");
  buttonPlus = document.createElement("button");
  buttonPlus.className = "item-quantity-button";
  buttonPlus.innerHTML = "+";
  buttonPlus.addEventListener('click', function (event) {

  })
  quantitySpan.appendChild(buttonPlus);
  quantityValueSpan = document.createElement("span");
  quantityValueSpan.className = "item-quantity";
  quantityValueSpan.innerHTML = cartItem.quantity;
  quantityValueSpan.id = `itemQuantity-${counter}`;
  quantitySpan.appendChild(quantityValueSpan);
  buttonMinus = document.createElement("button");
  buttonMinus.className = "item-quantity-button";
  buttonMinus.innerHTML = "-";
  quantityValueSpan.className = "item-quantity";
  quantitySpan.appendChild(buttonMinus);

  cartItemSpan.appendChild(quantitySpan);

  cartItemListItem.appendChild(cartItemSpan);
  return cartItemListItem;
  //cartDiv.appendChild(cartItemListItem);
}
