
let cart = JSON.parse(localStorage.getItem("cart")) || [];
function addToCart(itemName, price) {
  const existingItem = cart.find(item => item.name === itemName);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      name: itemName,
      price: price,
      quantity: 1
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  alert(`${itemName} added to cart 🛒`);
  updateCartCount();
}
function updateCartCount() {
  const cartCount = document.getElementById("cart-count");
  if (!cartCount) return;

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.innerText = totalItems;
}
function goToPage(page) {
  window.location.href = page;
}

function goToCart() {
  window.location.href = "cart.html";
}
function displayCartItems() {
  const cartContainer = document.getElementById("cart-items");
  const totalElement = document.getElementById("total-price");

  if (!cartContainer) return;

  cartContainer.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price * item.quantity;

    cartContainer.innerHTML += `
      <div class="cart-item">
        <h4>${item.name}</h4>
        <p>₹${item.price} × ${item.quantity}</p>
        <button onclick="removeItem(${index})">Remove</button>
      </div>
    `;
  });

  totalElement.innerText = `Total: ₹${total}`;
}
function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCartItems();
  updateCartCount();
}
function placeOrder() {
  if (cart.length === 0) {
    alert("Your cart is empty 🛑");
    return;
  }

  alert("Order placed successfully 🍽️\nThank you for choosing GreenBite!");

  cart = [];
  localStorage.removeItem("cart");

  updateCartCount();

  setTimeout(() => {
    window.location.href = "index.html";
  }, 1500);
}
function submitContactForm(event) {
  event.preventDefault();

  alert("Thank you for contacting GreenBite 🌱\nWe’ll get back to you soon!");

  setTimeout(() => {
    window.location.href = "index.html";
  }, 1500);
}
window.onload = () => {
  updateCartCount();
  displayCartItems();
};
