import random

secretNumber = None
attempts = None

def setName():
    name = input('Ingrese su nombre: ')

    if name == "":
        print('No se admiten campos vacíos. Ingrese un nombre de usuario.')
        return

    print('Bienvenido ' + name + '.')
    resetGame()

def resetGame():
    global secretNumber, attempts
    secretNumber = random.randint(1, 100)
    attempts = 6
    print('Tienes', attempts, 'intentos restantes.')
    print('')
    checkNumber()

def checkNumber():
    global secretNumber, attempts
    userNumber = int(input('Ingrese un número del 1 al 100: '))

    if userNumber < 1 or userNumber > 100:
        print('Solo puedes introducir números del 1 al 100.')
        print('')
        return

    attempts -= 1

    if userNumber < secretNumber:
        print('El número ingresado es menor. Inténtalo de nuevo.')
        print('Tienes', attempts, 'intentos restantes.')
    elif userNumber > secretNumber:
        print('El número ingresado es mayor. Inténtalo de nuevo.')
        print('Tienes', attempts, 'intentos restantes.')
    else:
        print('¡Felicidades, has adivinado!')
        print('')
        retry()

    if attempts == 0 and userNumber != secretNumber:
        print('Lo siento, has perdido. El número era', secretNumber)
        print('')
        retry()

def retry():
    playAgain = input('¿Deseas jugar de nuevo? (S/N): ')

    if playAgain.lower() == 's':
        resetGame()
    else:
        print('Gracias por jugar. ¡Hasta luego!')


setName()
