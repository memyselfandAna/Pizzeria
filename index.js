if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} 
else {
    ready()
}

// const pizze = [
   
//     { nume: 'MARGHERITA', price: 20, img: 'Pizza la pachet.jpeg' },
//     { nume: 'PROSCIUTTO E MAIS', price: 23, img: 'Pizza la pachet.jpeg' },
//     { nume: 'PROSCIUTTO E FUNGHI', price: 23, img: 'Pizza la pachet.jpeg' },
//     { nume: 'CAPRICIOSA', price: 24, img: 'Pizza la pachet.jpeg' },
//     { nume: 'QUATRO STAGIONI', price: 25, img: 'Pizza la pachet.jpeg' },
//     { nume: 'QUATRO FORMAGGI', price: 25, img: 'Pizza la pachet.jpeg' },
//     { nume: 'NAPOLI', price: 25, img: 'Pizza la pachet.jpeg' },
//     { nume: 'TONNO CIPOLA', price: 25, img: 'Pizza la pachet.jpeg' },
//     { nume: 'TONNO OLIVE', price: 25, img: 'Pizza la pachet.jpeg' },
//     { nume: 'DIAVOLA', price: 25, img: 'Pizza la pachet.jpeg' },
//     { nume: 'FANTASIA', price: 26, img: 'Pizza la pachet.jpeg' },
//     { nume: 'PRIMAVERA', price: 25, img: 'Pizza la pachet.jpeg' },
//     { nume: 'VEGETARIANA', price: 25, img: 'Pizza la pachet.jpeg' }, 
//     { nume: 'MARIA', price: 25, img: 'Pizza la pachet.jpeg'},
//     { nume: 'DELIZIA', price: 26, img: 'Pizza la pachet.jpeg'},
//     { nume: 'RUSTICA', price: 25, img: 'Pizza la pachet.jpeg' }
// ]

function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('input', quantityChanged)
    }
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.previousElementSibling.value = 0;
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value < 0) {
        input.value = 1
    }
    updateCartTotal()
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var marcel = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < marcel.length; i++) {
        var cartRow = marcel[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace(' Lei', ''))
        var quantity = parseInt(quantityElement.value)
        total = total + (price * quantity)
    }
    total = (Math.round(total * 100) / 100).toFixed(2)
    document.getElementsByClassName('cart-total-price')[0].innerText = total + ' Lei';
}