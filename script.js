function toggleMenu() {
    const menuList = document.getElementById('menu-list');
    const burgerMenu = document.querySelector('.burger-menu');
    var reslog = document.getElementById('reslog');
    // Toggle the 'active' class for menuList and burgerMenu
    menuList.classList.toggle('active');
    burgerMenu.classList.toggle('active');
    reslog.style.display = "none";
}

// Close the menu when clicking outside (optional)
document.addEventListener('click', function (event) {
  var reslog2 = document.getElementById('resLogDiv');
  const menuList = document.getElementById('menu-list');
  const burgerMenu = document.querySelector('.burger-menu');

  if (!event.target.closest('#menu-list') && !event.target.closest('.burger-menu') && !event.target.closest('#resLogDiv')) {
        menuList.classList.remove('active');
        burgerMenu.classList.remove('active');
        var reslog = document.getElementById('reslog');
        reslog.style.display = "none";
        x = 0;
  }
});

var verify = false;
var x = 0;

document.addEventListener('DOMContentLoaded', function() {
    setBtnName();
});

function btnName(task) {
  localStorage.clear();
  
  // Retrieve the existing tasks from localStorage
  var storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  
  // Push the current taskName to the array
  storedTasks.push(task);
  
  // Store the updated array back in localStorage
  localStorage.setItem("tasks", JSON.stringify(storedTasks));
}

function setBtnName() {
  // Retrieve the tasks array from localStorage
  var storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  var button = document.getElementById("btnxd");
  
  // Get the last item from the tasks array
  if (storedTasks.length > 0) {
    button.textContent = storedTasks[storedTasks.length - 1];
    
    if(storedTasks[storedTasks.length - 1] === "Logout"){
      verify = true;
    } else {
      verify = false;
    }
    
  } else {
    button.textContent = "Sign in"; // Or some other default value
  }
}


function login() {
  var reslog = document.getElementById('reslog');
  if(verify){
    var button = document.getElementById("btnxd");
    const border = document.getElementById('resLogDiv');
    const message = document.getElementById('message');
    btnName('Sign in');
    button.textContent = "Sign in";
    verify = false;
    x = 0;
    message.textContent = "";
    border.style.border = "1px solid white";
  } else {
    x++;
    if(x == 1){
      reslog.style.display = "block";
    } else {
      reslog.style.display = "none";
      x = 0;
    }
  }
}

function realLogin(){
  var reslog = document.getElementById('reslog');
  var button = document.getElementById("btnxd");
  button.textContent = "Logout";
  btnName('Logout');
  reslog.style.display = "none";
  verify = true;
}

function downloadF(imageID) {
  var border = document.getElementById('resLogDiv');
  var message = document.getElementById('message');
  const link = document.createElement('a');
  var imgName = document.getElementById(imageID);
  var imageUrl = imgName.getAttribute("src");
  
  if(verify){
    link.href = imageUrl;
    link.download = imageUrl.split('/').pop();
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    setTimeout(function() {
      document.body.removeChild(link);
    }, 100);
  } else {
    alert("Login First");
    message.textContent = "Login to Download";
    message.style.color = "red";
    border.style.border = "1px solid red";
  }
}

