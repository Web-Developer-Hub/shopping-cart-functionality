//update product quantity
function updateProductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if(productNumber > 0){
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
    // calculat total
    calculatTotal();
}

function getInputValu(product) {
    const productInput = document.getElementById(product + '-number')
    const productNumber = productInput.value;
    return productNumber;
}
function calculatTotal() {
    const phoneTotal = getInputValu('phone') * 1219;
    const caseTotal = getInputValu('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tex = subTotal / 10;
    const totalPrice = subTotal + tex;
    document.getElementById('tex-amount').innerText = tex;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('total-price').innerText = totalPrice;
}

// phone number incries funtion
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, true);
})

// phone number dicries function here
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false)
})

// case number incries funtion
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', 59, true);
})

// case number dicries function here
document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', 59, false)
})


// extra code here........
//remove item
function itemRemove(itemId) {
    const cartItem1 = document.getElementById(itemId);
    cartItem1.style.display ='none'
}
document.getElementById('remove').addEventListener('click', function () {
    itemRemove('cartItem1');
})
document.getElementById('remove2').addEventListener('click', function () {
    itemRemove('cartItem2');
})


// checked alert funtionality...
function notification() {
    document.getElementById('checked').addEventListener('click', function () {
        alert("Thank You So Much For Doing Now Shopping!");
        function text() {
            const text = document.createAttribute('h3');
            const addText = text.innerText = "Success! Indicates a successful or positive action. Thank you so buch for doing now shopping!";
            const set = document.getElementById('myText');
            set.innerText = addText;
            set.style.color = 'green'
            set.style.fontSize = '20px'
        }
        text();
    })
}
notification();