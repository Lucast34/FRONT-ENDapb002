// Promise é uma promessa!
// Resolve - Cumprimos a promessa
// Reject - 'Rejeitamos' a promessa, ou não cumpriu!
// PROMISESTATE - estado da promessa!
// FULLFILLED - 'promessa cumprida!'
// REJECTED - 'promessa quebrada!'
// PROMISERESULT - o motivo do status

const promessa = new Promise((resolve,reject) => {
    let nome = 'Alice'

    if(nome == 'Victor'){
        // resolve('Usuario é Victor!')
        resolve({'adm':'victor'})
        // function alerta(){
        //     alert('oi')
        // }
        // resolve(alerta())
    }else{
        reject('Porque o usuario não é Victor!')
    }
})

// then - espera o resolve e retorna o que 
// o resolve tiver, caso reject acusa um 
// erro
// 'THEN ESPERA QUE DÊ CERTO'
promessa.then((dadosDoResolve) =>{
    console.log(dadosDoResolve)
})

// catch - espera o reject e retorna o que
// o reject correspondente tiver, caso
// resolve ele não executa
// 'CATCH ESPERA QUE DÊ ERRADO!'
promessa.catch((infoDoErro) => {
    console.log(infoDoErro)
})


function sujeitoDemorado(){
    return new Promise((resolve) => {
        setTimeout(() =>{
            console.log('rodando')
            resolve()
        },2000)
    })
}

async function carregandoConteudo(){
    console.log('oi')
    await sujeitoDemorado()
    console.log('TERMINEI')
}

carregandoConteudo()

