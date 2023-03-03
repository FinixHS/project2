let user = [
  { username: "kamal", password: "123456" },
];


function loginClickMe() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

 
  const userlogin = user.some(user => user.username === username && user.password === password);

  if (userlogin) {
    console.log("Logged");
    window.location.href = "create_user.html";
    localStorage.setItem("username", username);
  } else {
    console.log("Invalid username or password");
  }
}

const form = document.querySelector("form");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  loginClickMe();
});

