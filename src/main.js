
const maxWidth = 1880;
const percentage = 100;

let dimensions = {
    width: window.innerWidth,
    height: window.innerHeight,
};

let zoom =
    dimensions.width > 600 ? (dimensions.width * percentage) / maxWidth : 100;

const bgs = document.getElementById('bg')
function handleResize() {
    dimensions.width = window.innerWidth;
    zoom =
        dimensions.width > 600 ? (dimensions.width * percentage) / maxWidth : 100;
    bgs.style.zoom = zoom + "%";
}

bgs.style.zoom = zoom + "%";

//change dimension on page resize
window.addEventListener("resize", handleResize);



const amountButtons = document.getElementById('amountButtons');
const buttons = amountButtons.querySelectorAll('button');
let selectedAmount = 10000;

buttons.forEach(button => {

    button.addEventListener('click', () => {
        // // Clear selected state from all buttons
        buttons.forEach(btn => btn.classList.remove('selected'));

        // Add selected state to the clicked button
        button.classList.add('selected');

        // Get the selected amount value
        selectedAmount = button.value;
        // You can perform further actions here with the selected amount value
    });
});


