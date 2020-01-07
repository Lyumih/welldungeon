

/**Секунд для действия */
let secondTimeout = 4
/* Порядок действий */
let buttonsWords = ['Исследовать уровень', 'Продолжить']

// let keyboard = document.querySelector('.Keyboard__container')
// let buttons = keyboard.getElementsByTagName('button')


function run() {
    console.log("Скрипт запущен")
    let timerId = setInterval(() => {
        console.log("Работает скрипт!")
        let keyboard = document.querySelector('.Keyboard__container')
        if (keyboard) {
            let buttons = keyboard.getElementsByTagName('button')
            if (buttons) clickButton(buttons[0])
        }
        else console.log("Нечего нажимать")
    }, secondTimeout * 1000)
}

function clickButton(element) {
    console.log("Происходит клик по кнопке", element.innerText)
    element.click()
}

run(secondTimeout, buttonsWords)