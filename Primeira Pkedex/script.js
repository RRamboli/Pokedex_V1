var formulario = document.querySelector('form')

formulario.addEventListener('submit', function(e){
    // impede o refresh da pagina
    e.preventDefault()

    // url da pesquisa
    let urlForm = "https://pokeapi.co/api/v2/pokemon/"
    // valor do input
    let nome = document.getElementById("name")
    // alimenta a url com o valor do input 
    urlForm = urlForm + this.name.value
    // transforma em minusculo
    urlForm = urlForm.toLowerCase()

    // id content
    let resposta = document.getElementById('content')

    // id da imagem do pokem on
    let imagem = document.getElementById('imgPokemon')

    // resposta em HTML
    let html = ''

    fetch(urlForm)
        .then(resposta => resposta.json())
        .then(function(data){
            console.log(data)
            html = 'Nome: ' +maiusculo(data.name) + '<br>'
            html = html+ 'Tipo: '+maiusculo(data.types[0].type.name)
            resposta.innerHTML = html

            imagem.innerHTML = "<img src='"+data.sprites.front_default+"'><img src='"+data.sprites.back_default+"'>"
        })
        .catch(function(err){
            if(err == 'SyntaxError: Unexpected token N in JSON at position 0'){
                html = 'Pokemon não encontrado!😢'
            }else{
                html = 'Erro: ' +err
            }
            resposta.innerHTML = html
            
        })


});

function maiusculo(val){
    return val[0].toUpperCase()+val.substr(1)
}