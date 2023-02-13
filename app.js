const board = document.querySelector('#board')
const SQUARES_NUMBER = 500
const colors = ['#22e5e5', '#ad0ce8', '#5243f7', '#eb0c5d', '#0ceb65', '#c1e823', '#e85123']
const getRandomColor = () => {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}
const setColor = (el) => {
    const color = getRandomColor()
    el.style.backgroundColor = color
    el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}
const removeColor = (el) => {
    el.style.backgroundColor = '#1d1d1d'
    el.style.boxShadow = '0 0 2px #000'
}

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => {
        setColor(square)
    })

    square.addEventListener('mouseleave', () => {
        removeColor(square)
    })

    board.append(square)
}