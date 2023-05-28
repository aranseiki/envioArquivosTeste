function exibirMensagem() {
    if(validarArquivo() == true) {
        document.getElementById('mensagem').className = 'mensagem_sucesso'
        document.getElementById("mensagem").innerHTML = '\
        \n                <a class="" href="#" onclick="limparMensagem()">\
        \n                    <p>Arquivo enviado com sucesso.</p>\
        \n                </a>\
        \n            '
    }
}

function limparMensagem() {
    document.getElementById('mensagem').className = 'disabled'
    document.getElementById("mensagem").innerHTML = ''
    form.reset();
}

function validarArquivo() {
    inputArquivos = document.getElementById('botao_anexar')
    if (inputArquivos.files.length > 0) {
        return true
    }

    return false
}
