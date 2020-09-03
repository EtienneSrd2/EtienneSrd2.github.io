<?php  include('fonctionsSQL.php');
ini_set('display_errors', 'off'); ?>

<?php 
	if (isset($_GET['edit'])) {
		$id = $_GET['edit'];
		$update = true;
		$record = mysqli_query($db, "SELECT * FROM dessins WHERE id=$id");

		if (count($record) == 1 ) {
			$n = mysqli_fetch_array($record);
			$titre = $n['titre'];
			$url = $n['url'];
			$description = $n['description'];
		}
	}
?>

<!DOCTYPE html>
<html>
<head>
	<title>CRUD</title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>

<h1>CRUD</h1>

<?php if (isset($_SESSION['message'])): ?>
	<div class="msg">
		<?php 
			echo $_SESSION['message']; 
			unset($_SESSION['message']);
		?>
	</div>
<?php endif ?>

	<!-- Read -->
<?php $results = mysqli_query($db, "SELECT * FROM dessins"); ?>

<table>
	<thead>
		<tr>
			<th>Titre</th>
			<th>URL</th>
			<th>Description</th>
			<th colspan="2">Action</th>
		</tr>
	</thead>
	

     <?php while ($row = mysqli_fetch_array($results)) { ?>
		<tr>
			<td><?php echo $row['titre']; ?></td>
			<td><img src="<?php echo $row['url']; ?>"> </td>
			<td><?php echo $row['description']; ?></td>
			<td>
				<a href="index.php?edit=<?php echo $row['id']; ?>"  class="edit_btn" >Edit</a>
			</td>
			<td>
				<a href="fonctionsSQL.php?del=<?php echo $row['id']; ?>" class="del_btn">Delete</a>
			</td>
		</tr>
	<?php } ?> 
</table>

<form>

	<form method="get" action="fonctionsSQL.php" >
		<div class="input-group">
			<label>Titre</label>
			<input type="text" name="titre"  placeholder="john Doe" value="">
		</div>
		<div class="input-group">
			<label>URL</label>
			<input type="text" placeholder="Marseille" name="url" value="">
		</div>
		<div class="input-group">
			<label>Description</label>
			<input type="text" placeholder="blablabla" name="description" value="">
		</div>
		<div class="input-group">
			<?php if ($update == true): ?>
				<input type="hidden" name="id" value="<?php echo $id; ?>">

				<!--  modified form fields -->
			<label>Nouveau titre</label>
				<input type="text" class="input-group" name="titre" value="<?php echo $titre; ?>">
			<label>Nouvelle url</label>
				<input type="text" class="input-group" name="url" value="<?php echo $url; ?>">
			<label>Nouvelle description</label>
				<input type="text" class="input-group" name="description" value="<?php echo $description; ?>">

				<button class="btn" type="submit" name="update" style="background: #556B2F;" >update</button>
			<?php else: ?>
				<button class="btn" type="submit" name="save" >Save</button>
			<?php endif ?>
		</div>

	

	</form>
</body>
</html>