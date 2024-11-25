class Usuario {
    // id , @ , nome , email , bio , genero
    constructor(id, apelido , nome , email, bio , genero, icon){
        this.id = id;
        this.apelido = apelido;
        this.nome = nome;
        this.email = email;
        this.bio = bio;
        this.genero = genero;
        this.icon = icon
        this.postar = function(pensamento){
            document.querySelector("#resposta").innerHTML += `
            
            <div class="post">
                <h3>${this.apelido}</h3>
                <p> ${pensamento} </p>
            </div>

            `
        }
    }
}

var user1 = new Usuario(1,'VSRohod','Victor','victor.rohod@docente.senai.br','Instrutor de TI','Masculino','https://avatars.githubusercontent.com/u/89645335?v=4')
var user2 = new Usuario(2,'Dark','Victor','dark@gmail.com','PERFIL PESSOAL','Masculino',"#")

function postarFeed(){
    alert("POSTADO COM SUCESSO!")
    pensamento = document.querySelector('#pensamento').value

    user1.postar(pensamento)
}

function carregarPerfil(){
    document.querySelector("#user").innerHTML = `
        <img src="${user1.icon}"
        <h2> @${user1.apelido} </h2>
        <p> ${user1.nome} </p>
        <p> ✨ ${user1.bio} ✨</p>

    `
}

carregarPerfil()