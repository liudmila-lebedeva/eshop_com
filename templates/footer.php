<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>    

<?php   //depending on the request, select the script
switch ($route) {  
    case '':
        echo '<script src="js/eshop.js"></script>';
        break;
    case 'cart':
        echo '<script src="js/cart.js"></script>';
        break;

}
?>
</body>
</html>