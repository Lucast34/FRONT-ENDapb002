// OBJECT ENTRIES
const filmes = {
    'Nome' : 'Sociedade da Neve',
    'Desc' : 'Lorem',
    'Genêro' : 'Drama'
}

console.log(filmes)
console.log(filmes.Nome)
// keys - retorna os atributos (chave)
const filmesKey = Object.keys(filmes)
console.log(filmesKey)

// entries - retorna em listas os valores (valor)
const filmesEntries = Object.entries(filmes)
console.log(filmesEntries)

// map
const nomesFilmes = ['Ilha do medo','Bruxa de Blair','Interestelar','Velozes e furiosos']

const lista = {
    'filmes' : [
        {
            'nome' : 'Ilha do medo',
            'Desc' : 'Lorem'
        },
        {
            'nome' : 'Bruxa de blair',
            'Desc' : 'Lorem'
        },
    ],
    'jogos' : [
        {
            'nome' : 'Roblox',
            'Desc' : 'Lorem'
        },
        {
            'nome' : 'The Last of Us',
            'Desc' : 'Lorem'
        },
    ]
}

const resultado = lista.jogos.map((elemento) => {
    document.querySelector('body').innerHTML += `
        <h3> ${elemento.nome} </h3>
    `
})