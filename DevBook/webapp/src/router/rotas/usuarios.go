package rotas

import (
	"net/http"
	"webapp/src/controllers"
)

var rotasUsuarios = []Rota{
	{
		URI:                "/criar-usuario",
		Metodo:             http.MethodGet,
		Funcao:             controllers.CarregarPaginaDeCadastroDeUsuario,
		RequerAutenticacao: false,
	},
	{
		URI:                "/usuarios",
		Metodo:             http.MethodPost,
		Funcao:             controllers.CriarUsuario,
		RequerAutenticacao: false,
	},
	{
		URI:                "/buscar-usuarios",
		Metodo:             http.MethodGet,
		Funcao:             controllers.CarregarPaginaDeBuscaDeUsuarios,
		RequerAutenticacao: true,
	},
	{
		URI:                "/usuarios/{usuarioId}",
		Metodo:             http.MethodGet,
		Funcao:             controllers.CarregarPerfilDoUsuario,
		RequerAutenticacao: true,
	},
	{
		URI:                "/usuarios/{usuarioId}/parar-de-seguir",
		Metodo:             http.MethodPost,
		Funcao:             controllers.PararDeSeguirUsuario,
		RequerAutenticacao: true,
	},
	{
		URI:                "/usuarios/{usuarioId}/seguir",
		Metodo:             http.MethodPost,
		Funcao:             controllers.SeguirUsuario,
		RequerAutenticacao: true,
	},
	{
		URI:                "/perfil",
		Metodo:             http.MethodGet,
		Funcao:             controllers.CarregarPerfilDoUsuarioLogado,
		RequerAutenticacao: true,
	},
	{
		URI:                "/editar-usuario",
		Metodo:             http.MethodGet,
		Funcao:             controllers.CarregarPerfilDeEdicaoDeUsuario,
		RequerAutenticacao: true,
	},
	{
		URI:                "/editar-usuario",
		Metodo:             http.MethodPut,
		Funcao:             controllers.EditarUsuario,
		RequerAutenticacao: true,
	},
}
