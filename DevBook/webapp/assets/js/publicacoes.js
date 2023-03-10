$('#nova-publicacao').on('submit',criarPublicacao)
$(document).on('click', '.curtir-publicacao', curtirPublicacao);
$(document).on('click', '.descurtir-publicacao', descurtirPublicacao);
$('#atualizar-publicacao').on('click',atualizarPublicacao);
$('.deletar-publicacao').on('click',deletarPublicacao);
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

function atualizarPublicacao() {
    $(this).prop('disabled', true);
    const publicacaoId = $(this).data('publicacao-id');
    console.log(publicacaoId);
    $.ajax({
        url: `/publicacoes/${publicacaoId}`,
        method: "PUT",
        data: {
            titulo: $('#titulo').val(),
            conteudo: $('#conteudo').val()
        }
    }).done(function() {
        Swal.fire('Sucesso!', 'Publicação atualizada com sucesso!', 'success').then(function(){
            window.location = "/home";
        })
    }).fail(function() {
        alert("Erro ao chamar api atualizacao publicacao");
    }).always(function(){
        $('#atualizar-publicacao').prop('disabled',false);
    })

}

function deletarPublicacao(evento){
    evento.preventDefault();
    Swal.fire({
        title: "Atenção",
        text: "Tem certeza que deseja excluir?",
        showCancelButton: true,
        cancelButtonText: "Cancelar",
        icon: "warning"
    }).then(function(confirmacao) {
        if(!confirmacao.value) return;
        const elementoClicado = $(evento.target);
        const publicacao = elementoClicado.closest('div');  
        const publicacaoId = publicacao.data('publicacao-id');    
        $.ajax({
            url: `/publicacoes/${publicacaoId}`,
            method: "DELETE",
        }).done(function() {
            publicacao.fadeOut("slow", function(){
                $(this).remove();
            })
        }).fail(function() {
            alert("Erro ao excluir publicacao");
        });
    })

}
