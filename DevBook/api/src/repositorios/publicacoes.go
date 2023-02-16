package repositorios

import (
	"api/src/modelos"
	"database/sql"
)

type Publicacoes struct {
	db *sql.DB
}

func NovoRepositorioDePublicacoes(db *sql.DB) *Publicacoes {
	return &Publicacoes{db}
}

func (repositorio Publicacoes) Criar(publicacao modelos.Publicacao) (uint64, error) {
	statement, erro := repositorio.db.Prepare("insert into publicacoes (titulo, conteudo, autor_id) values (?, ?, ?)")
	if erro != nil {
		return 0, erro
	}
	defer statement.Close()
	resultado, erro := statement.Exec(publicacao.Titulo, publicacao.Conteudo, publicacao.AutorID)
	if erro != nil {
		return 0, erro
	}
	ultimoIdInserido, erro := resultado.LastInsertId()
	if erro != nil {
		return 0, erro
	}

	return uint64(ultimoIdInserido), nil

}

func (repositorio Publicacoes) BuscarPublicacao(ID uint64) (modelos.Publicacao, error) {
	linha, erro := repositorio.db.Query("select * from publicacoes where id = ?", ID)
	if erro != nil {
		return modelos.Publicacao{}, erro
	}
	defer linha.Close()
	var publicacao modelos.Publicacao
	if linha.Next() {
		if erro := linha.Scan(
			&publicacao.ID,
			&publicacao.Titulo,
			&publicacao.Conteudo,
			&publicacao.AutorID,
			&publicacao.Curtidas,
			&publicacao.CriadaEm,
		); erro != nil {
			return modelos.Publicacao{}, erro
		}

	}
	return publicacao, nil
}
