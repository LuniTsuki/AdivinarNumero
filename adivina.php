<?php

$secretNumber = null;
$attempts = null;

function setName()
{
    echo 'Ingrese su nombre: ';
    $name = trim(readline());

    if ($name === "") {
        echo 'No se admiten campos vacíos. Ingrese un nombre de usuario.' . "\n";
        return;
    }

    echo 'Bienvenido ' . $name . '.' . "\n";
    resetGame();
}

function resetGame()
{
    global $secretNumber, $attempts;
    $secretNumber = rand(1, 100);
    $attempts = 6;
    echo 'Tienes ' . $attempts . ' intentos restantes.' . "\n";
    echo "\n";
    checkNumber();
}

function checkNumber()
{
    global $secretNumber, $attempts;
    echo 'Ingrese un número del 1 al 100: ';
    $userNumber = trim(readline());

    if ($userNumber < 1 || $userNumber > 100) {
        echo 'Solo puedes introducir números del 1 al 100.' . "\n";
        echo "\n";
        return;
    }

    $attempts--;

    if ($userNumber < $secretNumber) {
        echo 'El número ingresado es menor. Inténtalo de nuevo.' . "\n";
        echo 'Tienes ' . $attempts . ' intentos restantes.' . "\n";
    } elseif ($userNumber > $secretNumber) {
        echo 'El número ingresado es mayor. Inténtalo de nuevo.' . "\n";
        echo 'Tienes ' . $attempts . ' intentos restantes.' . "\n";
    } else {
        echo '¡Felicidades, has adivinado!' . "\n";
        echo "\n";
        retry();
    }

    if ($attempts == 0 && $userNumber != $secretNumber) {
        echo 'Lo siento, has perdido. El número era ' . $secretNumber . "\n";
        echo "\n";
        retry();
    }
}

function retry()
{
    echo '¿Deseas jugar de nuevo? (S/N): ';
    $playAgain = trim(readline());

    if (strtolower($playAgain) == 's') {
        resetGame();
    } else {
        echo 'Gracias por jugar. ¡Hasta luego!' . "\n";
    }
}

setName();
