const username = localStorage.getItem("username");

// Display the username on the page
const usernameDisplay = document.getElementById("username-display");
usernameDisplay.innerHTML = `Logged in as ${username}`;

const logoutButton = document.getElementById("logout");
logoutButton.addEventListener("click", function() {
  localStorage.removeItem("username"); 
  window.location.href = "signin.html"; // navigate to the login page
});

