<h1>VOCÊ ESTÁ NA LISTA DE CARROS</h1>

<a href="index.php?menu=adicionarCarro">
    <button type="button">ADICIONAR CARRO</button>
</a>

<table class="table">
    <tr>
        <th>Modelo</th>
        <th>Marca</th>
        <th>Valor</th>
        <th>Ano</th>
        <th>Cor</th>
    </tr>
    <?php
        $sql = "SELECT * FROM carros";
        // pedido
        $query = mysqli_query($conexao,$sql) or die("Erro na requisição!".mysqli_error($conexao));

        // fetch_asso = vai acessar um query, e contar os resultado

        while($dados = mysqli_fetch_assoc($query)){
            ?>
                <tr>
                    <td><?=$dados['modeloCarro']?></td>
                    <td><?=$dados['marcaCarro']?></td>
                    <td><?=$dados['valorCarro']?></td>
                    <td><?=$dados['anoCarro']?></td>
                    <td><?=$dados['corCarro']?></td>
                    <td><a href="index.php?menu=editarCarro&idCarro=<?=$dados['idCarro']?>" class="btn btn-primary">EDITAR</a></td>
                </tr>
            <?php
        }
    ?>

</table>