function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var loginError = document.getElementById('loginError');

    if (username === '' || password === '') {
        loginError.textContent = 'Please enter both username and password.';
        return;
    }

    
    if (username === 'example' && password === 'password') {
        
        window.location.href = './html/profil.html';
    } else {
        
        loginError.textContent = 'Invalid username or password.';
    }
}

function redirectToBeranda() {
    window.location.href = './html/beranda.html';
}

document.getElementById('loginButton').addEventListener('click', function(event) {
    event.preventDefault(); 

    
    login();
});
