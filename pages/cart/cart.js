// DOM elements
const deleteButton = document.getElementById("delete");
const cartContainer = document.getElementById("cartContainer");
const nameInput = document.getElementById("nameInput");
const ccnumInput = document.getElementById("ccnumInput");
const dateInput = document.getElementById("dateInput");
const cvvInput = document.getElementById("cvvInput");
const checkOutButton = document.getElementById("checkOutButton");
const modal = document.getElementById("modal");
const decisionModal = document.getElementById("decisionModal");
const yesModalButton = document.getElementById("yesModal");
const noModalButton = document.getElementById("noModal");
const failedModal = document.getElementById("failedModal");
const closeModalButton = document.getElementById("closeModal");

function loading() {
  loader.classList.remove("hidden");
  document.body.classList.add("load-focus");

  setTimeout(() => {
    loader.classList.add("hidden");
    document.body.classList.remove("load-focus");
  }, 1000);

}

loading();

// ==================== looping function react concept ===================
function loopElements(data, container, child) {
  let value = ``;

  data.forEach((item) => {
    value += child(item);
  });

  container.innerHTML = value;

  // adding delete to all element items/products items
  data.forEach((item) => {
    const deleteButton = document.getElementById(`delete-${item.id}`);
    if (deleteButton) {
      deleteButton.addEventListener("click", () => deleteCartData(item.id));
    }
  });
}
// ================== end looping function react concept ================= //

// function display the cart
function displayCart() {
  const cartData = getCartData();

  loopElements(cartData, cartContainer, productsItems);
}

// get data cart from localstorage
function getCartData() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

// update data cart to local storage
function updateCartData(cartItems) {
  localStorage.setItem("cart", JSON.stringify(cartItems));
}

// delete functions
function deleteCartData(itemsId) {
  const items = getCartData();
  const itemIndex = items.findIndex((item) => item.id === itemsId);

  if (itemIndex !== -1) {
    items.splice(itemIndex, 1); // delete items from array
    updateCartData(items);
    displayCart();
  }
}

// ================= quantity button function ===================

// quantity add
function increaseQuantity(itemsId) {
  const items = getCartData();
  const itemIndex = items.findIndex((item) => item.id === itemsId);

  if (itemIndex !== -1) {
    items[itemIndex].quantity++;
    updateCartData(items);
    displayCart();
    cardsDisplay();
  }
}

// quantity decrease
function decreaseQuantity(itemsId) {
  const items = getCartData();
  const itemIndex = items.findIndex((item) => item.id === itemsId);

  if (itemIndex !== -1 && items[itemIndex].quantity > 1) {
    items[itemIndex].quantity--;
    updateCartData(items);
    displayCart();
    cardsDisplay();
  }
}
// ============== quantity button end ==============

// product cart
const productsItems = ({ img, name, price, variant, quantity, id }) => `
          <li class="product-cart-items">
            <div class="left">
              <div class="img-box">
                <img src="${img}" alt="">
              </div>
              <div class="identity-product">
                <h1>${name}</h1>
                <p>${variant}</p>
              </div>
            </div>
            <div class="right">
              <div class="quantity-button">
                <button class="decrease button" onclick="decreaseQuantity(${id})">-</button>
                <span>${quantity}</span>
                <button class="increase button" onclick="increaseQuantity(${id})">+</button>
              </div>
              <span class="price">$${(price * quantity).toFixed(2)}</span>
              <button class="delete" id="delete-${id}">
                <i class='bx bxs-trash-alt'></i>
              </button>
            </div>
          </li>
`;

// calculate total
function subTotal(dataItems) {
  let subtotal = 0;

  dataItems.forEach((item) => {
    subtotal += item.price * item.quantity;
  });

  return subtotal;
}

// display total and how much products in cart
function cardsDisplay() {
  const cartData = getCartData();
  const productsInCart = cartData.length;

  const subtotal = subTotal(cartData);
  const transportValue = 20.0;
  const total = subtotal + transportValue;

  document.getElementById("subtotal").textContent = `$${subtotal.toFixed(2)}`;
  document.getElementById(
    "transportValue"
  ).textContent = `$${transportValue.toFixed(2)}`;
  document.getElementById("total").textContent = `$${total.toFixed(2)}`;
  document.getElementById("productsInCart").textContent =
    productsInCart.toString();
  document.getElementById("totalButton").textContent = `$${total.toFixed(2)}`;
}

// ============== payment doms ============
const radioButtons = document.querySelectorAll(
  '.payments-method input[type="radio"]'
);
const listItems = document.querySelectorAll(".payments-method li");

// doms radio buttons
radioButtons.forEach((radio, index) => {
  // add border to checked radio buttons (first value)
  if (radio.checked) {
    listItems[index].classList.add("border-checked");
  }
  radio.addEventListener("change", () => {
    listItems.forEach((item, itemIndex) => {
      if (index === itemIndex) {
        item.classList.remove("border-not-checked");
        item.classList.add("border-checked");
      } else {
        item.classList.remove("border-checked");
        item.classList.add("border-not-checked");
      }
    });
  });
});
// ============== payments end ================

// format CC Number
function formatCreditCardNumber() {
  var input = document.getElementById("ccnumInput");
  var value = input.value.replace(/\D/g, "");

  if (value.length > 0) {
    value = value.match(/.{1,4}/g).join(" ");
  }

  input.value = value;
}

// format cvv
function formatCVV(input) {
  input.value = input.value.replace(/\D/g, "");

  if (input.value.length > 4) {
    input.value = input.value.slice(0, 4);
  }
}

// validate form functions
function validateForm() {
  const nameError = document.getElementById("nameError");
  const ccError = document.getElementById("ccError");
  const dateError = document.getElementById("dateError");
  const ccvError = document.getElementById("ccvError");

  const isNameValid = nameInput.value.trim() !== "";
  const isCCValid = ccnumInput.value.trim() !== "";
  const isDateValid = dateInput.value.trim() !== "";
  const isCCVValid = cvvInput.value.trim() !== "";

  // Display error messages if fields are empty
  nameError.style.display = isNameValid ? "none" : "flex";
  ccError.style.display = isCCValid ? "none" : "flex";
  dateError.style.display = isDateValid ? "none" : "flex";
  ccvError.style.display = isCCVValid ? "none" : "flex";

  return isNameValid && isCCValid && isDateValid && isCCVValid;
}

// Add event listeners for form input fields
nameInput.addEventListener("input", validateForm);
ccnumInput.addEventListener("input", validateForm);
dateInput.addEventListener("input", validateForm);
cvvInput.addEventListener("input", validateForm);

// modals if checkOut clicked
checkOutButton.addEventListener("click", () => {
  if (checkOutButton.classList.contains("doms-checkout")) {
    checkOutButton.classList.remove("doms-checkout");
    checkOutButton.classList.add("normal");
  } else {
    checkOutButton.classList.remove("normal");
    checkOutButton.classList.add("doms-checkout");
  }
  setTimeout(function () {
    if (checkOutButton.classList.contains("doms-checkout")) {
      checkOutButton.classList.remove("doms-checkout");
      checkOutButton.classList.add("normal");
    }
  }, 500);

  modal.classList.remove("hidden");
  decisionModal.classList.remove("hidden");
  failedModal.classList.add("hidden");
  document.body.classList.add("modal-open");
});

yesModalButton.addEventListener("click", () => {
  decisionModal.classList.add("hidden");
  failedModal.classList.remove("hidden");
  document.body.classList.add("modal-open");
});

noModalButton.addEventListener("click", () => {
  modal.classList.add("hidden");
  document.body.classList.remove("modal-open");
});

closeModalButton.addEventListener("click", () => {
  modal.classList.add("hidden");
  modal.classList.remove("modal-open");
  document.body.classList.remove("modal-open");
});

// check form and items in chart (validation)
function checkFormAndCart() {
  const nameInput = document.getElementById("nameInput");
  const ccnumInput = document.getElementById("ccnumInput");
  const dateInput = document.getElementById("dateInput");
  const cvvInput = document.getElementById("cvvInput");
  const checkOutButton = document.getElementById("checkOutButton");

  const isFormFilled =
    nameInput.value.trim() !== "" &&
    ccnumInput.value.trim() !== "" &&
    dateInput.value.trim() !== "" &&
    cvvInput.value.trim() !== "";

  const cartData = getCartData();
  const isCartEmpty = cartData.length === 0;

  if (!isFormFilled || isCartEmpty) {
    checkOutButton.disabled = true;
    checkOutButton.style.opacity = 0.5;
  } else {
    checkOutButton.disabled = false;
    checkOutButton.style.opacity = 1;
  }
}

// add event listeners to all forms fields
nameInput.addEventListener("input", checkFormAndCart);
ccnumInput.addEventListener("input", checkFormAndCart);
dateInput.addEventListener("input", checkFormAndCart);
cvvInput.addEventListener("input", checkFormAndCart);

window.addEventListener("DOMContentLoaded", () => {
  checkFormAndCart();
  displayCart();
  cardsDisplay();
});
