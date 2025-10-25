document.getElementById("studentForm").addEventListener("submit", function(e) {
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let terms = document.getElementById("terms").checked;

  // Simple email validation
  if (!email.includes("@")) {
    alert("Please enter a valid email.");
    e.preventDefault();
    return;
  }

  // Phone number validation
  if (phone.length !== 10 || isNaN(phone)) {
    alert("Phone number must be 10 digits.");
    e.preventDefault();
    return;
  }

  // Terms validation
  if (!terms) {
    alert("You must agree to terms and conditions.");
    e.preventDefault();
    return;
  }
});
