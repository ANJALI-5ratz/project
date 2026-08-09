function validateOrder() {
  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var phone = document.getElementById("phone").value.trim();
  var order = document.getElementById("order").value;

  if (name === "") {
    alert("Please enter your name");
    return false;
  }

  if (email === "") {
    alert("Please enter your email");
    return false;
  }

  if (!email.includes("@") || !email.includes(".")) {
    alert("Please enter a valid email address");
    return false;
  }

  if (phone === "") {
    alert("Please enter your phone number");
    return false;
  }

  if (!/^[0-9+\-\s()]{7,}$/.test(phone)) {
    alert("Please enter a valid phone number");
    return false;
  }

  if (order === "") {
    alert("Please select your order");
    return false;
  }

  alert("Your order has been placed");
  return true;
}
