// Select the 'board' element from the DOM
const board = document.querySelector('#board')

// Define the number of squares to be created
const SQUARES_NUMBER = 500

// An array of hexadecimal color codes
const colors = ['#22e5e5', '#ad0ce8', '#5243f7', '#eb0c5d', '#0ceb65', '#c1e823', '#e85123']

// Returns a random color from the 'colors' array
const getRandomColor = () => {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}

// Sets the background color and box shadow of an element to a specific color
const setColor = (el) => {
    const color = getRandomColor()
    el.style.backgroundColor = color
    el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

// Resets the background color and box shadow of an element to its default value
const removeColor = (el) => {
    el.style.backgroundColor = '#1d1d1d'
    el.style.boxShadow = '0 0 2px #000'
}

// Loop through the number of squares to be created
for (let i = 0; i < SQUARES_NUMBER; i++) {
    // Create a div element for each square
    const square = document.createElement('div')
    square.classList.add('square')

    // Add an event listener to change the color of the square on mouse over
    square.addEventListener('mouseover', () => {
        setColor(square)
    })

    // Add an event listener to change the color of the square back to default on mouse leave
    square.addEventListener('mouseleave', () => {
        removeColor(square)
    })

    // Add the square to the 'board' element
    board.append(square)
}
