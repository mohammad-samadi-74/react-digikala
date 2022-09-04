<?php
session_start();


class DB
{
    protected $db;
    protected $stm;
    protected $config  = [
        'host' => 'localhost',
        'dbname' => 'digikala2',
        'username' => 'root',
        'password' => ''
    ];

    public function __construct()
    {

        extract($this->config);

        try {
            $this->db = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
        } catch (Exception $e) {
            die('cant connect to database !');
        }
    }

    public function pdoPrepare($query, $fetch = false)
    {
        $this->stm = $this->db->prepare($query);
        $res = $this->stm->execute();
        return $fetch ? $this->stm->fetchAll(PDO::FETCH_ASSOC) : $res;
    }

    public function response($output)
    {
        echo json_encode($output);
        die;
    }
}
