<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
require "./../DB.php";

class Signup extends DB
{
    public function confirm()
    {
        $data =  json_decode(file_get_contents('php://input'), true);
        return $this->checkData($data);
    }

    public function checkData($data)
    {
        $phone = preg_match("/^09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}$/", $data['phone']) ? $data['phone'] : false;
        $email = filter_var($data['email'], FILTER_VALIDATE_EMAIL) ? $data['email'] : false;
        $password = strlen($data['password']) > 6 && strlen(trim($data['password'])) < 20 ? trim($data['password']) : false;

        // validate information
        $this->validate($phone, $email, $password);
        // check unique phone and  then register
        $this->register($phone, $email, $password);

        $this->response(['status' => 'success', 'user' => ['email' => $email, 'phone' => $phone]]);
    }

    public function validate($phone, $email, $password)
    {
        $errors = [];
        if (!$phone)
            $errors[] = "شماره تلفن وارد شده صحیح نمیباشد.";
        if (!$email)
            $errors[] = "ایمیل وارد شده صحیح نمیباشد.";
        if (!$password)
            $errors[] = "پسوورد وارد شده باید بین 6 تا 20 کاراکتر باشد..";

        if (count($errors))
            $this->response(['status' => 'error', 'errors' => $errors]);
    }

    public function register($phone, $email, $password)
    {
        $errors = [];

        if (!$this->checkUniquePhone($phone))
            $errors[] = 'این شماره تلفن قبلا استفاده شده است.';
        if (!$this->checkUniqueEmail($email))
            $errors[] = 'این ایمیل قبلا استفاده شده است.';


        if (count($errors))
            $this->response($errors);


        $password = password_hash($password, PASSWORD_BCRYPT);
        $query = "insert into users (phone,email,password) values ('$phone','$email','$password')";
        $status = $this->pdoPrepare($query, false);

        if (!$status) {
            $this->response(['status' => 'error', 'errors' => ['مشکلی در ثبت نام رخ داده است لطفا بعدا مجددا امتحان کنید.']]);
        }
    }

    public function checkUniquePhone($phone)
    {
        return !(!!count($this->pdoPrepare("select * from users where phone = '$phone'", true)));
    }

    public function checkUniqueEmail($email)
    {
        return !(!!count($this->pdoPrepare("select * from users where email = '$email'", true)));
    }
}

(new Signup())->confirm();
