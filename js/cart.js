let cart = {}; //моя корзина

$.getJSON('goods.json', function (data) {
    let goods = data; //all products in the array
    //console.log(goods);
    checkCart();
    showCart(); //вывожу товары на стр
    //console.log(cart);

    function showCart() {
        //visualisation of the cart
        if ($.isEmptyObject(cart)) {
            //the basket is empty
            let out = 'Your basket is empty. Do you want to buy something? Click <a href="/eshop_com/">here</a>';
            $('#my-cart').html(out);
        } else {
            let out = '';
            for (let key in cart) {
                out += '<button class="delete" data-pr="' + key + '">X</button>';
                out += '<img src="' + goods[key].image + '" width="48">';
                out += goods[key].name;
                out += '<button class="minus" data-pr="' + key + '">-</button>';
                out += cart[key];
                out += '<button class="plus" data-pr="' + key + '">+</button>';
                out += cart[key] * goods[key].price; //amount
                out += '<br>';
            }
            $('#my-cart').html(out); //на страницу корзины выводим ключи товара
            $('.plus').on('click', plusGoods);
            $('.minus').on('click', minusGoods);
            $('.delete').on('click', deleteGoods);
        }
    }

    function plusGoods() { //button PLUS
        let vendorCode = $(this).attr('data-pr');
        cart[vendorCode]++;
        showCart();//visualisation of Cart
        saveCartToLS(); //save the vascket to local storage
    }

    function minusGoods() { //button PLUS
        let vendorCode = $(this).attr('data-pr');

        if (cart[vendorCode] > 1) {
            cart[vendorCode]--;
        } else {
            delete cart[vendorCode];
        }
        showCart(); //visualisation of Cart
        saveCartToLS();
    }

    function deleteGoods() { //button PLUS
        let vendorCode = $(this).attr('data-pr');
        delete cart[vendorCode];
        showCart(); //visualisation of Cart
        saveCartToLS();
    }
});

function checkCart() {
    //проверяю наличие корзины в localStorage;
    if (localStorage.getItem('cart') != null) {
        cart = JSON.parse(localStorage.getItem('cart'));
    }
}

function saveCartToLS() {
    localStorage.setItem('cart', JSON.stringify(cart));
}


