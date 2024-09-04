<?php
// Conectar a la base de datos
$servername = "127.0.0.1";
$username = "root";
$password = "1234";
$dbname = "clientes";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Leer el cuerpo de la solicitud
$data = json_decode(file_get_contents("php://input"), true);

$nombre = $data['nombre'];
$apellido = $data['apellido'];
$celular = $data['celular'];
$num_pasajeros = $data['num_pasajeros'];
$fecha_reserva = $data['fecha_reserva'];
$hora_reserva = $data['hora_reserva'];
$servicio = json_encode($data['servicio']); // Convertir el array a JSON

// Preparar la consulta
$stmt = $conn->prepare("INSERT INTO reserva_clientes (nombre, apellido, celular, num_pasajeros, fecha_reserva, hora_reserva, servicio) VALUES (?, ?, ?, ?, ?, ?, ?)");
$stmt->bind_param("sssisss", $nombre, $apellido, $celular, $num_pasajeros, $fecha_reserva, $hora_reserva, $servicio);

// Ejecutar la consulta
if ($stmt->execute()) {
    echo "Nuevo registro creado con éxito";
} else {
    echo "Error: " . $stmt->error;
}

// Cerrar la conexión
$stmt->close();
$conn->close();
?>
