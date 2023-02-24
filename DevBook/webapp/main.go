package main

import (
	"encoding/hex"
	"fmt"
	"log"
	"net/http"
	"webapp/src/config"
	"webapp/src/cookies"
	"webapp/src/router"
	"webapp/src/utils"

	"github.com/gorilla/securecookie"
)

func init() {
	hashKey := hex.EncodeToString(securecookie.GenerateRandomKey(16))
	fmt.Println(hashKey)
	blocKey := hex.EncodeToString(securecookie.GenerateRandomKey(16))
	fmt.Println(blocKey)
}
func main() {

	utils.CarregarTemplates()
	config.Carregar()
	cookies.Configurar()
	r := router.Gerar()
	fmt.Printf("Escutando na porta %d\n", config.Porta)
	log.Fatal(http.ListenAndServe(fmt.Sprintf(":%d", config.Porta), r))
}
