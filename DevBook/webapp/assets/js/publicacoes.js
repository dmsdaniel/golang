$('#nova-publicacao').on('submit',criarPublicacao)
$(document).on('click', '.curtir-publicacao', curtirPublicacao);
$(document).on('click', '.descurtir-publicacao', descurtirPublicacao);
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
        const contadorDeCurtidas = elementoClicado.next('span');
        const quantidadeDeCurtidas = parseInt(contadorDeCurtidas.text());
        contadorDeCurtidas.text(quantidadeDeCurtidas + 1);

        elementoClicado.addClass('descurtir-publicacao');
        elementoClicado.addClass('text-danger');
        elementoClicado.removeClass('curtir-publicacao');


    }).fail(function(erro){ //4.. 5.. ERRO
        alert("Curtida falhou!");
    }).always(function(){
        elementoClicado.prop('disabled',false);
    })
    
}

function descurtirPublicacao(evento){
    evento.preventDefault();
    const elementoClicado = $(evento.target);
    elementoClicado.prop('disabled',true);
    const publicacaoId = elementoClicado.closest('div').data('publicacao-id');
    $.ajax({
        url: `/publicacoes/${publicacaoId}/descurtir`,
        method: "POST"
    }).done(function(){ //200 OK
        const contadorDeCurtidas = elementoClicado.next('span');
        const quantidadeDeCurtidas = parseInt(contadorDeCurtidas.text());
        contadorDeCurtidas.text(quantidadeDeCurtidas - 1);

        elementoClicado.removeClass('descurtir-publicacao');
        elementoClicado.removeClass('text-danger');
        elementoClicado.addClass('curtir-publicacao');
    }).fail(function(erro){ //4.. 5.. ERRO
        alert("Descurtida falhou!");
    }).always(function(){
        elementoClicado.prop('disabled',false);
    })
    
}

