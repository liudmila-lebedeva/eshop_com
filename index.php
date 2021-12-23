<?php
//this file processes all requests!
$route = $_GET['route'];
 
require 'templates/header.php';  //loading the header


switch ($route) {   //we change only inner part of pages. footer, header are the same 
    case '':
        require 'templates/main.php';
        break;
    case 'cart':
        require 'templates/cart.php';
        break;

}

require 'templates/footer.php'; //then I load the footer