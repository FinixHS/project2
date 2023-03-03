// Get the form elements
const usernameField = document.querySelector('#username');
const passwordField = document.querySelector('#password');
const submitButton = document.querySelector('#create');

// Logout function
const logoutButton = document.getElementById("logout");
logoutButton.addEventListener("click", function() {
  localStorage.removeItem("user"); 
  window.location.href = "signin.html";
});

// Add new user to "users" array
const addUser = (event) => {
  event.preventDefault(); // prevent the form from submitting

  // Create the user object
  const newUser = {
    username: usernameField.value,
    password: passwordField.value
  };
  
  // Check if the user already exists
  const user = JSON.parse(localStorage.getItem('user')) || [];
  const existingUser = user.find(user => user.username === newUser.username);
  
  
  // Add the new user to the array
  user.push(newUser);
  
  // Store the updated array in localStorage
  localStorage.setItem('users', JSON.stringify(user));
  
  // Clear the form fields
  usernameField.value = '';
  passwordField.value = '';
  
  alert('User added successfully!');
};

// Add event listener to the submit button
submitButton.addEventListener('click', addUser);
