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

const email = 'christianaomolara675@gmail.com'
const modal = document.querySelector('.modal')
const card = document.querySelector('.card')


const itemsContainer = document.getElementById('items')
const items = itemsContainer.querySelectorAll('[aria-label="item"]')

items.forEach(item => {
    item.addEventListener('click', () => {
        var handler = PaystackPop.setup({
            key: 'pk_live_e06f6a70b2599500232cea549edbc6435ce4e58c',
            email: `${email}`,
            label: item.getAttribute('name'),
            amount: `${parseFloat(item.getAttribute('value')) * 100}`,

            callback: function (response) {
                console.log(response)
                modal.classList.add('modal-active');
                setTimeout(() => {
                    card.classList.add('move-card');

                }, 2000);

                setTimeout(() => {
                    window.location.reload()
                }, 4000);

            },
            onClose: function (e) {
                console.log(e, 'CLOSED')

            }

        })
        handler.openIframe()

    })
})
// const amountButtons = document.getElementById('amountButtons');
// const buttons = amountButtons.querySelectorAll('button');
// let selectedAmount = 45000;

// buttons.forEach(button => {

//     button.addEventListener('click', () => {
//         buttons.forEach(btn => btn.classList.remove('selected'));

//         button.classList.add('selected');

//         selectedAmount = button.value;
//     });
// });



// const submitBtn = document.getElementById('submit')

// submitBtn.addEventListener('click', (e) => {
//     e.preventDefault()

//     var handler = PaystackPop.setup({
//         key: 'pk_test_3220830a672fb0111314c909df6a8192e1cc7c3b',
//         email: `${email}`,
//         amount: `${parseFloat(selectedAmount) * 100}`,

//         callback: function (response) {
//             console.log(response)
//             modal.classList.add('modal-active');
//             setTimeout(() => {
//                 card.classList.add('move-card');

//             }, 2000);

//             setTimeout(() => {
//                 window.location.reload()
//             }, 4000);

//         },
//         onClose: function (e) {
//             console.log(e, 'CLOSED')

//         }

//     })
//     handler.openIframe()

// })

