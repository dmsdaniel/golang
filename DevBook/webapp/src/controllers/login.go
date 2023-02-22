package controllers

import (
	"fmt"
	"net/http"
)

func CarregarTelaDeLogin(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Carregar tela de login")
	w.Write([]byte("Tela de Login"))
}
