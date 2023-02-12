insert into usuarios (nome, nick, email, senha)
values
("Usuário 1", "usuario_1", "usuario1@gmail.com","$2a$10$gkQC5.ZomRI49TbAIipg4OuouvdqXxf7SZY3l.YDrnkGRyPgvyZ8a")
("Usuário 2", "usuario_2", "usuario2@gmail.com","$2a$10$gkQC5.ZomRI49TbAIipg4OuouvdqXxf7SZY3l.YDrnkGRyPgvyZ8a")
("Usuário 3", "usuario_3", "usuario3@gmail.com","$2a$10$gkQC5.ZomRI49TbAIipg4OuouvdqXxf7SZY3l.YDrnkGRyPgvyZ8a")

insert into seguidores (usuario_id, seguidor_id)
values
(1,2)
(3,1)
(1,3)