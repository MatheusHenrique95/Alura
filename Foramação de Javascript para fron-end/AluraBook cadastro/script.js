async function buscaEndereco(CEP) {
    var mensagemErro = document.getElementById('erro')
    mensagemErro.innerHTML = ""
    try {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${CEP}/json/`)
        var consultaCEPConvertida = await consultaCEP.json()
        if (consultaCEPConvertida.erro) {
            throw Error('CEP não existe');
        }

        var cidade = document.getElementById('cidade')
        var logradouro = document.getElementById('endereco')
        var estado = document.getElementById('estado')

        cidade.value = consultaCEPConvertida.localidade
        estado.value = consultaCEPConvertida.uf
        logradouro.value = consultaCEPConvertida.logradouro

        console.log(consultaCEPConvertida)
        return consultaCEPConvertida;
    } catch (erro) {
        mensagemErro.innerHTML = "<p>CEP inválido. tente novamente com um CEP diferente!</p>"
        console.log(erro)
    }
}

var cep = document.getElementById('cep')
cep.addEventListener('focusout', () => buscaEndereco(cep.value))