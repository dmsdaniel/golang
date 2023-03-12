$('#parar-de-seguir').on('click',pararDeSeguir)
$('#seguir').on('click',seguir)
$('#editar-usuario').on('submit', editar)
$('#atualizar-senha').on('submit', atualizarSenha)
function pararDeSeguir(){
    const usuarioId = $(this).data('usuario-id');
    $(this).prop('disabled',true);

    $.ajax({
        url: `/usuarios/${usuarioId}/parar-de-seguir`,
        method: "POST"
    }).done(function(){
        window.location = `/usuarios/${usuarioId}`;
    }).fail(function(){
        Swal.fire("Ops....","Erro ao parar de seguir o usuario!", "error");
        $('#parar-de-seguir').prop('disabled',false)
    });
}

function seguir(){
    const usuarioId = $(this).data('usuario-id');
    $(this).prop('disabled',true);

    $.ajax({
        url: `/usuarios/${usuarioId}/seguir`,
        method: "POST"
    }).done(function(){
        window.location = `/usuarios/${usuarioId}`;
    }).fail(function(){
        Swal.fire("Ops....","Erro seguir o usuario!", "error");
        $('#seguir').prop('disabled',false)
    });        

}

function editar(evento){
    evento.preventDefault();
    $.ajax({
        url: "editar-usuario",
        method: "PUT",
        data: {
            nome: $('#nome').val(),
            email: $('#email').val(),
            nick: $('#nick').val(),

        }
    }).done(function() {
        Swal.fire("Sucesso!", "Usuario atualizado com sucesso!","success")
            .then(function(){
                window.location = "/perfil";
            })
    }).fail(function() {
        Swal.fire("Ops..", "Erro ao atualizar o usuário","error");
    })
}

function atualizarSenha(evento){
    evento.preventDefault();

    if ($('#nova-senha').val() != $('#confirmar-senha').val()) {
        Swal.fire("Ops..", "Nova senha não confere", "warning");
        return;
    }

    $.ajax({
        url: "/atualizar-senha",
        method: "POST",
        data: {
            atual: $('#senha-atual').val(),
            nova: $('#nova-senha').val()
        }
    }).done(function(){
        Swal.fire("Sucesso!", "Senha atualizada com sucesso", "success")
        .then(function() {
            window.location = "/perfil";
        }).fail(function(){
            Swal.fire("Ops..", "Erro ao atualizar a senha", "error");            
        })
    })

}