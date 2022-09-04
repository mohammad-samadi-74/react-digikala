<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
require "./../DB.php";

class AuthCheck extends DB
{
    public function confirm()
    {
        $this->response($_SESSION['auth'] ?? 'empty');
    }
}

(new AuthCheck())->confirm();
