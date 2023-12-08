const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = event.target.username.value;
    const password = event.target.password.value;

    // Validate username and password
    if (username !== 'admin' || password !== 'password123') {
        alert('Invalid username or password');
        return;
    }

    // Login successful
    alert('Login successful');

    // Redirect to homepage or dashboard
    window.location.href = '/html/selector.html';
});