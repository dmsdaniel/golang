$('#nova-publicacao').on('submit',criarPublicacao)
$('.curtir-publicacao').on('click',curtirPublicacao)
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
        window.location = '/home';
    }).fail(function(erro){ //4.. 5.. ERRO
        console.log(erro);
    });
}

function curtirPublicacao(evento){
    evento.preventDefault();
    const elementoClicado = $(evento.target);
    elementoClicado.prop('disabled',true);
    const publicacaoId = elementoClicado.closest('div').data('publicacao-id');
    $.ajax({
        url: `/publicacoes/${publicacaoId}/curtir`,
        method: "POST"
    }).done(function(){ //200 OK
        window.location = '/home';
    }).fail(function(erro){ //4.. 5.. ERRO
        alert("Curtida falhou!");
    }).always(function(){
        elementoClicado.prop('disabled',false);
    })
    
}

