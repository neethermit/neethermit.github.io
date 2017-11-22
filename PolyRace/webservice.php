<?php
	$action = $_POST['action'];

	if ($action == "addScore") 
		addScore();
	else if ($action == "getScores")
		getScores();

	function connect() {
		$databasehost = "localhost";
		$databasename = "polyracer";
		$databaseuser = "root";
		$databasepass = "uwur";

		$mysqli = new mysqli($databasehost, $databaseuser, $databasepass, $databasename);
		if ($mysqli->connect_errno) {
			echo "Problema con la conexion a la base de datos";
		}
		return $mysqli;
	}

	function disconnect() {
		mysqli_close();
	}

	function addScore() {
		$alias = $_POST["alias"];
		$tiempo = $_POST["tiempo"];
		$cadena = $_POST["cadena"];
		$mysqli = connect();

		$result = $mysqli->query("insert into puntuacion(alias,milisegundos,tiempo)values('".$alias."','".$tiempo."','".$cadena."')");	
		
		if (!$result) {
			echo "Problema al hacer un query: " . $mysqli->error;								
		} else {
			echo "Todo salio bien";		
		}
		$result->free();
		mysqli_close($mysqli);
	}

	function getScores() {
		$mysqli = connect();

		$result = $mysqli->query("select * from puntuacion order by milisegundos limit 10");	
		
		if (!$result) {
			echo "Problema al hacer un query: " . $mysqli->error;								
		} else {
			$rows = array();
			while( $r = $result->fetch_assoc()) {
				$rows[] = $r;
			}			
			echo json_encode($rows);
		}
		$result->free();
        mysqli_close($mysqli);	
	}
?>