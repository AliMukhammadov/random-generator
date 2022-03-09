const changeBtn = document.getElementById('linear-btn')
const title = document.getElementById('title')

const colors = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
]


function handleChange() {
    // functions
function randomColor() {
    let color = '#' 
    for(let i = 0; i < 6; i++) {
        let randomNum = Math.floor(Math.random() * colors.length)
        color += colors[randomNum]
    }
    return color
}

const color1 = randomColor()
const color2 = randomColor()
let degOn = Math.floor(Math.random() * 360)

console.log(color1, color2);

document.body.style.background = `linear-gradient(${degOn}deg, ${color1}, ${color2})`

title.textContent = `linear-gradient(${degOn}deg, ${color1}, ${color2})`
title.style.color = `linear-gradient(${degOn}deg, ${color1}, ${color2})`
changeBtn.style.background = `linear-gradient(${degOn}deg, ${color1}, ${color2})`
}
// events
changeBtn.addEventListener('click', handleChange)
window.onload = handleChange