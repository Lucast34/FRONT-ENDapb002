function testes(){
    // enquanto condicao faca
    // para de tanto ate tanto faca
    contador = 0

    // while (contador < 3){
    //     alert(`QUE MANEIRO!!!' FIZ ${contador+1} vezes`)
    //     contador++
    // }

    for(var i = 0;i < 3;i++){
        alert(`QUE MANEIRO!!!' FIZ ${i+1} vezes`)
    }
}

// testes()

function carregarCatalogo(){
    var livros = [
        ['images/livros/percy1.jpg','PERCY JACKSON E O LADRÃO DE RAIOS'],
        ['images/livros/harryPotter.jpg','Harry Potter calice de fogo'],
        ['images/livros/manifesto.jpg','O manifesto'],
        ['images/livros/1984.jpg','1984'],
        ['images/livros/desventuras.jpg','Desventuras em série'],
        ['images/livros/0aomilhao.jpg','Do 0 ao milhão']
    ]

    livros.forEach(cadaLivro =>{
        document.getElementById('catalogo').innerHTML += `
        <div class="livro">
            <img src="${cadaLivro[0]}" alt="">
            <h4>${cadaLivro[1]}</h4>

            <button>
                Adicionar
                <img src="images/icons/mais.svg" alt="">
            </button>
        </div>
        
        `
    })
}

carregarCatalogo()