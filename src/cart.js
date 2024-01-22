function expandCart() {
  var counter = 0;
  $("#cart").on("click", function () {
    $(".shopping-cart").fadeToggle("fast");
  });

  document.getElementById("shopping-cart-items").innerHTML = "";
  document.getElementById("shopping-cart").style.visibility = "visible";
  cartItemList = document.createElement("ul");
  Object.keys(cartItems).forEach((productId) => {
    console.log(
      `Cart Item: ${cartItems[productId].product}, ${cartItems[productId].quantity}`
    );
    cartItemList.appendChild(createCartItem(cartItems[productId], counter++));
  });
  cartDiv.appendChild(cartItemList);
  document
    .getElementById("close-shopping-cart-btn")
    .addEventListener("click", function () {
      cartDiv = document.getElementById("shopping-cart");
      cartDiv.style.visibility = "hidden";
      cartDiv.style.height = "0px";
    });

  document
    .getElementById("checkout-btn")
    .addEventListener("click", function () {
      cartDiv = document.getElementById("shopping-cart-button");
      console.log("Go to the Order Page");
    });
}

function incrementQuantityValue(spanId) {
  quantitySpan = document.getElementById(spanId);
  var value = Number(quantitySpan.innerHTML);
  quantitySpan.innerHTML = (isNaN(value) ? 0 : value + 1).toString();
}

function decrementQuantityValue(spanId) {
  quantitySpan = document.getElementById(spanId);
  var value = Number(quantitySpan.innerHTML);
  quantitySpan.innerHTML = (
    isNaN(value) || value < 1 ? 0 : value - 1
  ).toString();
}

/*

params:
  cartItem -- is an element in the object cartItems, referenced by the productId. 
              it's used in a loop that sets all the items displayed in the cart.
*/
function createCartItem(cartItem, counter) {
  productItem = seeds.products.find(
    (obj) => obj.productTag === cartItem.product
  );
  console.log(productItem);
  var itemQuantitySpanId = `itemQuantity-${counter}`;
  var cartItemListItemId = `${productItem.productName}-listId`;

  cartDiv = document.getElementById("shopping-cart-items");
  cartItemListItem = document.createElement("li");
  cartItemListItem.id = cartItemListItemId;
  cartItemSpan = document.createElement("span");
  buttonsSpan = document.createElement("span");
  buttonsSpan.className = "cart-buttons-span";
   
  buttonDeleteSpan = document.createElement("icon");
  buttonDeleteSpan.innerHTML = '<i class="fa fa-trash fa-lg"><i>';
  buttonDeleteSpan.addEventListener("click", (event) => {
    var shoppingCartIcon = document.getElementById("shopping-cart-icon");
    delete cartItems[cartItem.product];
    var value = Number(shoppingCartIcon.getAttribute("value"));
    console.log(`Cart Items: ${cartItems}`);
    shoppingCartIcon.setAttribute(
      "value",
      value > cartItem.quantity ? value - cartItem.quantity : 0
    );
    document.getElementById(cartItemListItemId).remove();
  });

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
  console.log(
    `Product Name: ${productItem.productName}  Quantity: ${cartItem.quantity}`
  );
  description.innerHTML = productItem.productName;
  cartItemSpan.appendChild(description);

  quantitySpan = document.createElement("span");
  buttonPlus = document.createElement("button");
  buttonPlus.id = `${productItem}-plus-button`;
  buttonPlus.className = "item-quantity-button";
  buttonPlus.innerHTML = "+";
  buttonPlus.addEventListener("click", function (event) {
    incrementQuantityValue(itemQuantitySpanId);
  });
  quantitySpan.appendChild(buttonPlus);
  quantityValueSpan = document.createElement("span");
  quantityValueSpan.className = "item-quantity";
  quantityValueSpan.innerHTML = cartItem.quantity;
  quantityValueSpan.id = itemQuantitySpanId;
  quantitySpan.appendChild(quantityValueSpan);
  buttonMinus = document.createElement("button");
  buttonMinus.id = `${productItem}-minus-button`;
  buttonMinus.className = "item-quantity-button";
  buttonMinus.innerHTML = "-";
  buttonMinus.addEventListener("click", function (event) {
    decrementQuantityValue(itemQuantitySpanId);
  });
  quantityValueSpan.className = "item-quantity";
  quantitySpan.appendChild(buttonMinus);

  cartItemSpan.appendChild(quantitySpan);

  cartItemListItem.appendChild(cartItemSpan);
  return cartItemListItem;
}
