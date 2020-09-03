<!-- <?php ini_set('display_error',0); ?>  -->

<?php 
	session_start();
	$db = mysqli_connect('localhost', 'root', '', 'pa_pxl');

	// initialize variables
	$titre = "";
	$url = "";
	$description = "";
	$id = 0;
	$update = false;

	// Create
	if (isset($_GET['save'])) {
		$titre = $_GET['titre'];
		$url = $_GET['url'];
		$description = $_GET['description'];
	

		mysqli_query($db, "INSERT INTO dessins (titre, url, description) VALUES ('$titre', '$url', '$description')"); 
		$_SESSION['message'] = "url saved"; 
		header('location: index.php');
	}
	
	// Update
	if (isset($_GET['update'])) {
		$id = $_GET['id'];
		$titre = $_GET['titre'];
		$url = $_GET['url'];
		$description = $_GET['description'];

		mysqli_query($db, "UPDATE dessins SET titre='$titre', url='$url', description='$description' WHERE id=$id");
		$_SESSION['message'] = "url updated!"; 
		header('location: index.php');
	}

	// delete

	if (isset($_GET['del'])) {
	$id = $_GET['del'];
	mysqli_query($db, "DELETE FROM dessins WHERE id=$id");
	$_SESSION['message'] = "url deleted!"; 
	header('location: index.php');
}
// ...
?>