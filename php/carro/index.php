<?php
    include('db/conexao.php');
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Concessionária</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>
<body>
    <header>
        <nav>
            <a href="index.php?menu=home">Home</a>
            <a href="index.php?menu=lista">Lista</a>
        </nav>
    </header>

    <main>
        <?php
        if(isset($_GET['menu'])){
            $pagina = $_GET['menu'];
        }else{
            $pagina = "home";
        }
        
        switch($pagina){
            case 'home':
                include("pages/home/home.php");
                break;
            case 'lista':
                include('pages/listaCarros/listaCarros.php');
                break;
            case 'adicionarCarro':
                include('pages/listaCarros/adicionarCarro.php');
                break;
            case 'dbAdicionarCarro':
                include('pages/listaCarros/dbAdicionarCarro.php');
                break;
            case 'editarCarro':
                include('pages/listaCarros/editarCarro.php');
                break;
            case 'dbEditarCarro':
                include('pages/listaCarros/dbEditarCarro.php');
                break;
            case 'deletarCarro':
                    include('pages/listaCarros/deletarCarro.php');
                    break;
            default:
                include("pages/home/home.php");
                break;
        }
        ?>
    </main>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

</body>
</html>