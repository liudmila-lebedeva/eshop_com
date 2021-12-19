$('document').ready(function() {   //запускает только после загрузки html
    loadGoods();
});

function loadGoods() {  //выгружаю товары на страницы
    $.getJSON('goods.json', function(data){
        //console.log(data);
        
        let out = '';
        for (let key in data){    //перебираем массив
            
            out+='<div class="single-goods">'
            out+='<h3>'+data[key]['name']+'</h3>';
            out+='<p>Price: '+data[key]['price']+'</p>';
            out+='<img src="'+data[key].image+'">';
            out+='<button>Buy me</button>';
            out+='</div>';
        }
        $('#goods').html(out);
    });
}
