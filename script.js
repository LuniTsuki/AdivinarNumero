let secretNumber, attempts;
let buttonCheck = document.getElementById('checkButton');
let buttonRetry = document.getElementById('retry');

function setName(){
    let name = document.getElementById('name').value;

    if(name === ""){
        document.getElementById('message').innerText = 'No se admiten campos vacios, ingrese un nombre de usuario'
        return;
    }

    document.getElementById('welcome').innerText = 'Bienvenido ' + name + '';
    resetGame();
}

function resetGame(){
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 6;
    let buttonCheck = document.getElementById('checkButton');
    let buttonRetry = document.getElementById('retry');
    document.getElementById('remaining').innerText = 'Tienes ' + attempts + ' intentos restantes.'
    buttonRetry.disabled = true
    buttonCheck.disabled = false
    document.getElementById('message').innerText = ''
    document.getElementById('number').value = '';
}

function checkNumber(){
    let buttonCheck = document.getElementById('checkButton');
    let buttonRetry = document.getElementById('retry');
    let userNumber = Number(document.getElementById('number').value);

    if (userNumber < 1 || userNumber > 100){
        document.getElementById('message').innerText = 'Solo puedes introducir numeros del 1 al 100.';
        return;
    }

    attempts --;

    if (userNumber < secretNumber){
        document.getElementById('message').innerText = 'El numero ingresado es menor. Intentalo de nuevo';
        document.getElementById('remaining').innerText = 'Tienes ' + attempts + ' Intentos restantes';
        document.getElementById('number').value = ''
    } else if (userNumber > secretNumber){
        document.getElementById('message').innerText = 'El numero ingresado es mayor. Intentalo de nuevo';
        document.getElementById('remaining').innerText = 'Tienes ' + attempts + ' Intentos restantes';
        document.getElementById('number').value = ''
    } else {
        document.getElementById('message').innerText = 'Felicidades, has adivinado';
        document.getElementById('remaining').innerText = '';
        buttonCheck.disabled = true;
        buttonRetry.disabled = false;
    }

    if(attempts == 0 && userNumber != secretNumber){
        document.getElementById('message').innerText = 'Lo siento, has perdido. El numero era ' + secretNumber;
        buttonCheck.disabled = true;
        buttonRetry.disabled = false;
    }
}

function retry(){
    resetGame();
}