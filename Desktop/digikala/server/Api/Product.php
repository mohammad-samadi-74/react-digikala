<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
require "./../DB.php";

class Product extends DB
{
    public function confirm()
    {

        $name = $_GET['name'];

        if (!isset($name))
            $this->response(['status' => 'error']);



        $this->pdoPrepare("select * from products where title = '$name'");
        $product = $this->stm->fetch(PDO::FETCH_ASSOC);
        $this->response(['status' => $product ? 'success' : 'error', 'product' => $product]);
    }
}

(new Product())->confirm();
