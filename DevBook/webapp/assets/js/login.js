$('#login').on('submit', fazerLogin);
function fazerLogin(evento){
    evento.preventDefault()
    $.ajax({
        url: "/login",
        method: "POST",
        data: {
            email: $('#email').val(),
            senha: $('#senha').val(),
        }
    }).done(function(){ //200 OK
        window.location = "/home";
    }).fail(function(erro){ //4.. 5.. ERRO
        alert("Usuário ou senha inválidos!");
    });

}