document.getElementById("login-button").addEventListener("click", function () {
    // Obtener los valores del usuario y la contraseña
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Aquí deberías verificar las credenciales en el servidor, por ejemplo, en Node.js o PHP.
    // Simularemos una comprobación simple en el cliente.

    console.log("Username: " + username);
    console.log("Password: " + password);
    


    if (username === "anahy" && password === "123456789") {
        // Las credenciales son correctas, redirige al usuario a la página de destino.
        window.open ('/html/cotizador1.html');
        alert("Credenciales Correctas.");
    } else {
        alert("Credenciales incorrectas. Inténtalo de nuevo.");
    }
});
