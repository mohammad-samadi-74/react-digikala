<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
require "./../DB.php";

class Login extends DB
{
    public function confirm()
    {
        $data =  json_decode(file_get_contents('php://input'), true);
        $this->checkData($data);
    }

    public function checkData($data)
    {
        $phone = preg_match("/^09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}$/", $data['phoneMail']) ? $data['phoneMail'] : false;
        $email = filter_var($data['phoneMail'], FILTER_VALIDATE_EMAIL) ? $data['phoneMail'] : false;
        $password = $data['password'];


        if ($phone) :
            $user = $this->loginWithPhone($phone, $password);
        elseif ($email) :
            $user =  $this->loginWithMail($email, $password);
        else :
            $this->response(['status' => 'error', 'error' => 'فرمت ایمیل یا شماره تلفن وارد شده صحیح نیست.']);
        endif;

        if ($user === false) {
            $this->response(['status' => 'error', 'error' => 'کاربری با این اطلاعات یافت نشد !']);
        }

        // login user
        unset($user['password']);
        $this->response(['status' => 'success', 'user' => $user]);
    }

    public function loginWithMail($email, $password)
    {

        $query = "select * from users where email = '$email'";
        $user = $this->pdoPrepare($query, true);

        return (count($user) && password_verify($password, $user[0]['password'])) ? $user : false;
    }

    public function loginWithPhone($phone, $password)
    {

        $query = "select * from users where phone = '$phone'";
        $user = $this->pdoPrepare($query, true);

        return (count($user) && password_verify($password, $user[0]['password'])) ? $user[0] : false;
    }
}

(new Login())->confirm();
