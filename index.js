if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} 
else {
    ready()
}

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
    var total = 0, bucati = 0
    for (var i = 0; i < marcel.length; i++) {
        var cartRow = marcel[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var resultElement = cartRow.getElementsByClassName('cart-quantity-input-result')[0]
        var messageElement = cartRow.getElementsByClassName('cart-message')[0]
        var price = parseFloat(priceElement.innerText.replace(' Lei', ''))
        var quantity = parseInt(quantityElement.value) || 0;
        total = total + (price * quantity)
        bucati += quantity;
        if (resultElement) {
            resultElement.value = price * quantity + ' Lei';
        }
    }
    for (var i = 0; i < marcel.length; i++) {
        var cartRow = marcel[i]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var messageElement = cartRow.getElementsByClassName('cart-message')[0]
        var quantity = parseInt(quantityElement.value) || 0;
        if (messageElement) {
            messageElement.innerText = '';
            if (quantity > 0) {
                if (bucati > 2) {
                    messageElement.innerText = 'Livrarea gratuita!!!';
                }
                else {
                    messageElement.innerText = '+7 lei livrarea';
                }
            }
        }
    }

    total = (Math.round(total * 100) / 100).toFixed(2)
    document.getElementsByClassName('cart-total-price')[0].innerText = total + ' Lei';
}


function onClick(img) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
}

function onClose(modal) {
    modal.style.display = "none";
  }