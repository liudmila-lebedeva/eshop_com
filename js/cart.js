let cart = {}; //моя корзина

$.getJSON('goods.json', function (data) {
    let goods = data; //all products in the array
    //console.log(goods);
    checkCart();
    showCart(); //вывожу товары на стр
    //console.log(cart);

    function showCart() {
        //visualisation of the cart
        let out = '';
        for (let key in cart) {
            out += '<button class="delete">X</button>';
            out += '<img src="' + goods[key].image + '" width="48">';
            out += goods[key].name;
            out += '<button class="minus">-</button>';
            out += cart[key];
            out += '<button class="plus">+</button>';
            out += cart[key]*goods[key].price; //amount
            out += '<br>';
        }
        $('#my-cart').html(out); //на страницу корзины выводим ключи товара
    }
});

function checkCart() {
    //проверяю наличие корзины в localStorage;
    if (localStorage.getItem('cart') != null) {
        cart = JSON.parse(localStorage.getItem('cart'));
    }
}

