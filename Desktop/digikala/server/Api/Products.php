<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
require "./../DB.php";

class Products extends DB
{
    public function confirm()
    {
        $prorducts = $this->pdoPrepare("select * from products", true);
        $this->response($prorducts ?? []);
    }
}

(new Products())->confirm();
