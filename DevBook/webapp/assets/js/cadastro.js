$('#formulario-cadastro').on('submit', criarUsuario);
function criarUsuario(evento){
    evento.preventDefault()
    if( $('#senha').val() != $('#confirmar-senha').val()){
        alert("As senhas não conferem!");
        return;
    }
    $.ajax({
        url: "/usuarios",
        method: "POST",
        data: {
            nome: $('#nome').val(),
            email: $('#email').val(),
            nick: $('#nick').val(),
            senha: $('#senha').val(),
        }
    }).done(function(){ //200 OK
        alert("Usuário cadastrado com sucesso!");
    }).fail(function(erro){ //4.. 5.. ERRO
        console.log(erro);
    });

}