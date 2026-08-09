function validateOrder() {
  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
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

  if (order === "") {
    alert("Please select your order");
    return false;
  }

  alert("Your Order Has Been Placed");
  return true;
}