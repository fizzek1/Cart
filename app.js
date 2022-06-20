const addItemButtonFirstOffer = document.getElementById("add-item-button-first-offer");
const addItemButtonSecondOffer = document.getElementById("add-item-button-second-offer");
const continueButton = document.getElementById("continue-button");
const cart = document.getElementById("cart");
const quantity = 0;


function showCart() {
    cart.style.visibility = "visible";
}

function hideCart() {
    cart.style.visibility = "hidden";
}


function addFirstItem() {
    const firstLi = document.createElement("li");
    const firstItem = document.createTextNode("Oferta 1");
    firstLi.appendChild(firstItem);
    const list = document.getElementById("list");
    list.appendChild(firstLi);
    firstLi.style.fontSize = "22px";
    firstLi.style.marginTop = "-60px";
    firstLi.style.marginLeft = "-132%";
    cart.style.height = "230px";
}

function addSecondItem() {
    const firstLi = document.createElement("li");
    const firstItem = document.createTextNode("Oferta 2");
    firstLi.appendChild(firstItem);
    const list = document.getElementById("list");
    list.appendChild(firstLi);

    firstLi.style.fontSize = "22px";
    firstLi.style.marginTop = "-60px";
    firstLi.style.marginLeft = "-132%";
    cart.style.height = "230px";
}

function changeQuantity() {
    elementQuantity = document.createElement("p");
    textQuantity = document.createTextNode("Ilość:" + quantity);
    
}

addItemButtonFirstOffer.addEventListener("click", addFirstItem);
addItemButtonFirstOffer.addEventListener("click", showCart);
addItemButtonSecondOffer.addEventListener("click", addSecondItem)
addItemButtonSecondOffer.addEventListener("click", showCart)
continueButton.addEventListener("click", hideCart);