let cart = {
    
};    // bascket

$('document').ready(function() {   //запускает только после загрузки html
    loadGoods();
});

function loadGoods() {  //выгружаю товары на страницы
    $.getJSON('goods.json', function(data){
        //console.log(data);
        
        let out = '';
        for (let key in data){    //перебираем массив
            
            out+='<div class="single-goods">';
            out+='<h3>'+data[key]['name']+'</h3>';
            out+='<p>Price: '+data[key]['price']+'</p>';
            out+='<img src="'+data[key].image+'">';
            out+='<button class="add-to-cart" data="'+key+'">Buy me</button>'; // data"'+key+' -- adding of product key - articul  
            out+='</div>';
        }
        $('#goods').html(out);
        $('button.add-to-cart').on('click', addToCart);
    });
    
    
}

function addToCart() { //add product to the cart
        let vendorCode = $(this).attr('data'); //this = the button which I click 
        if (cart[vendorCode] != undefined) {  //if product is in the bascket
            cart[vendorCode]++;
        }else {
            cart[vendorCode] = 1; // if it is not so it is one
        }
        
        console.log(cart);
    }