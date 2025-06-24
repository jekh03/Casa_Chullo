<?php
// Configura tus credenciales de prueba
$username = "74883555";
$password = "testpassword_bnKXI3aXbmBGZmaVe2EbHBXxTOWtTT0ntaSZRsJ4LLMD9";

$url = "https://api.micuentaweb.pe/api-payment/V4/Charge/CreatePayment";

// Configura los datos de la orden
$data = [
    "amount" => 1000, // 1000 = 10.00 soles
    "currency" => "PEN",
    "orderId" => uniqid("order_"),
    "customer" => [
        "email" => "cliente@correo.com",
    ],
    "formAction" => "PAYMENT",
];
echo"data".$data["amount"];

// Inicializa CURL
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_USERPWD, $username . ":" . $password);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json'
]);

// Ejecuta la solicitud
$response = curl_exec($ch);
curl_close($ch);

// Retorna respuesta al frontend
header('Content-Type: application/json');
echo $response;
?>
