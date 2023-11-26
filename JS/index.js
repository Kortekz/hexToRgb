
// I am Selecting the HTML elements needed for the HEX to RGB conversion
let hexInput = document.querySelector('[data-hex]')
let button = document.querySelector('[data-btn]')
let rgbOutput = document.querySelector('[data-rgb]')

function hexToRgb() {
    let hexValue = hexInput.value

    // Function to convert HEX to RGB
    function hexToDec(hex) {
        return parseInt(hex, 16)
    }
    // Extracting R, G, B components without using substring
    let red = hexToDec(hexValue.slice(1, 3))
    let green = hexToDec(hexValue.slice(3, 5))
    let blue = hexToDec(hexValue.slice(5, 7))

    // Displaying the calculated RGB values
    rgbOutput.value = `${red}, ${green}, ${blue}`
}

button.addEventListener('click', hexToRgb)
