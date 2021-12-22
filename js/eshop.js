let cart = {}; //моя корзина

$('document').ready(function () {
    loadGoods();
    checkCart();
    showMiniCart();
});

function loadGoods() {
    //загружаю товары на страницу
    $.getJSON('goods.json', function (data) {
        //console.log(data);
        let out = '';
        for (let key in data) {
            out += '<div class="single-goods">';
            out += '<h3>' + data[key]['name'] + '</h3>';
            out += '<p>Price: ' + data[key]['price'] + '</p>';
            out += '<img src="' + data[key].image + '">';
            out += '<button class="add-to-cart" data-pr="' + key + '">Buy</button>';
            out += '</div>';
        }
        $('#goods').html(out);
        $('button.add-to-cart').on('click', addToCart);
    });
}

function addToCart() {
    //добавляем товар в корзину
    let vendorCode = $(this).attr('data-pr');
    if (cart[vendorCode] != undefined) {
        cart[vendorCode]++;
    } else {
        cart[vendorCode] = 1;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log(cart);
    showMiniCart();
}

function checkCart() {
    //проверяю наличие корзины в localStorage;
    if (localStorage.getItem('cart') != null) {
        cart = JSON.parse(localStorage.getItem('cart'));
    }
}



function showMiniCart() {
    //показываю содержимое корзины
    let out = '';
    for (let w in cart) {
        out += w + ' --- ' + cart[w] + '<br>';
    }
    out += '<br><a href="cart.html">Shopping Basket</a>';
    $('#mini-cart').html(out);
}
