// Configuración de la cuenta regresiva
let countdownElement = document.getElementById('countdown');
let countdownValue = 10;

let countdownInterval = setInterval(() => {
    countdownValue--;
    countdownElement.textContent = countdownValue;

    if (countdownValue <= 0) {
        clearInterval(countdownInterval);
        // Redirigir a un nuevo dominio
        window.location.href = 'https://www.myaffiliates.com/';
    }
}, 1000);