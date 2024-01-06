var cartItems = {};

function populateDiv(divName, array, divClass) {
  var div = document.getElementById(divName);
  array.forEach((element) => {
    var divElement = document.createElement("div");
    divElement.className = divClass;
    divElement.id = element.productName + "-div";

    var h2Element = document.createElement("h2");
    h2Element.textContent = element.productName;
    divElement.appendChild(h2Element);

    var imgElement = document.createElement("img");
    imgElement.src = element.imagePath;
    imgElement.className = "seed-image";
    divElement.appendChild(imgElement);

    var descriptionHeader = document.createElement("h2");
    descriptionHeader.textContent = "Description";
    divElement.appendChild(descriptionHeader);

    var descriptionElement = document.createElement("p");
    descriptionElement.className = "description";
    descriptionElement.innerHTML = element.description;
    divElement.appendChild(descriptionElement);

    var plantingHeader = document.createElement("h2");
    plantingHeader.textContent = "Planting";
    divElement.appendChild(plantingHeader);

    var descriptionElement = document.createElement("p");
    descriptionElement.className = "planting";
    descriptionElement.innerHTML = element.planting;
    divElement.appendChild(descriptionElement);

    var priceElement = document.createElement("p");
    priceElement.textContent = "Price: " + element.price;
    divElement.appendChild(priceElement);

    var quanityDiv = document.createElement("div");
    quanityDiv.className = "quantity-div";
    var labelSelection = document.createElement("label");
    labelSelection.textContent = "Select Quantity: ";
    labelSelection.className = "planting";
    quanityDiv.appendChild(labelSelection);

    var quantitySelection = document.createElement("select");
    quantitySelection.className = "quantity";
    quantitySelection.id = `${element.productTag}-quantity`;
    for (var i = 0; i < 10; i++) {
      var opt = document.createElement("option");
      opt.value = i;
      opt.text = `${i} packages`;
      quantitySelection.add(opt, false);
    }
    // quantitySelection.addEventListener()
    quanityDiv.appendChild(quantitySelection);
    divElement.appendChild(quanityDiv);

    var inputElement = document.createElement("button");
    inputElement.type = "button";
    inputElement.className = "add-cart-button";
    inputElement.id = element.productTag + "-button";
    inputElement.textContent = "Add To Cart";
    inputElement.addEventListener(
      "click",
      function () {
        onAddItemToCart(element.productTag);
      },
      false
    );
    divElement.appendChild(inputElement);
    div.appendChild(divElement);
  });
}

function onAddItemToCart(productTag) {
  var cart = document.getElementById("shopping-cart-icon");
  var value = Number(cart.getAttribute("value"));
  console.log("product Tag: " + productTag);
  var productTagQuantity = document.getElementById(`${productTag}-quantity`);
  cart.setAttribute("value", String(value + Number(productTagQuantity.value)));
  console.log(
    `Value: ${value} Quantity.value ${Number(productTagQuantity.value)}`
  );

  if (cartItems[productTag]) {
    console.log(
      `cartItems[productTag].quantity: ${
        cartItems[productTag].quantity
      }, Quantity.value ${Number(productTagQuantity.value)}`
    );
    var quantity = Number(cartItems[productTag].quantity);
    console.log(`Quantity.value: ${productTagQuantity.value} Cart: ${cart}`);
    quantity = quantity + Number(productTagQuantity.value);
    console.log(`Quantity: ${quantity} Cart: ${cart}`);
    cartItems[productTag].quantity = quantity;
    console.log(
      `cartItems[productTag].quantity: ${cartItems[productTag].quantity}`
    );
  } else {
    let cartItem = {
      product: productTag,
      quantity: productTagQuantity.value,
    };
    cartItems[productTag] = cartItem;
  }
}
