$('#nova-publicacao').on('submit',criarPublicacao)
function criarPublicacao(evento){
    evento.preventDefault()
    $.ajax({
        url: "/publicacoes",
        method: "POST",
        data: {
            titulo: $('#titulo').val(),
            conteudo: $('#conteudo').val(),
        }
    }).done(function(){ //200 OK
        window.location = "/home"
    }).fail(function(erro){ //4.. 5.. ERRO
        console.log(erro);
    });

}