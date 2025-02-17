CREATE DATABASE relacionamentos;

USE relacionamentos;

-- one to one (um para um)
CREATE TABLE alunos (
	id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    turma VARCHAR(5)
);

CREATE TABLE contatos (
	id INT PRIMARY KEY AUTO_INCREMENT,
    telefone VARCHAR(20),
    aluno_id INT NOT NULL,
    FOREIGN KEY (aluno_id) REFERENCES alunos(id)
);

INSERT INTO alunos(nome,turma) VALUES ("Juan","002M");
INSERT INTO alunos(nome,turma) VALUES ("Raryson","003V");
INSERT INTO alunos(nome,turma) VALUES ("Giovana","003V");

INSERT INTO contatos(telefone,aluno_id) VALUES ("(61)999999999",1);
INSERT INTO contatos(telefone,aluno_id) VALUES ("(61)888888888",1);
INSERT INTO contatos(telefone,aluno_id) VALUES ("(61)777777777",2);
INSERT INTO contatos(telefone,aluno_id) VALUES ("(61)666666666",3);
INSERT INTO contatos(telefone,aluno_id) VALUES ("(61)444444444",3);
INSERT INTO contatos(telefone,aluno_id) VALUES ("(61)222222222",3);

SELECT * FROM alunos;
SELECT * FROM contatos;
SELECT * FROM contatos WHERE aluno_id = 3;
SELECT * , alunos.nome , alunos.turma , contatos.telefone 
FROM alunos JOIN contatos ON contatos.aluno_id;

-- ONE TO MANY
CREATE TABLE clientes ( 
	id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100)
);
-- MACETE, QUEM É O ESTRANGEIRO E DE ONDE VEM
CREATE TABLE pedidos (
	id INT PRIMARY KEY AUTO_INCREMENT,
    valorTotal FLOAT,
    cliente_id INT NOT NULL,
    FOREIGN KEY (cliente_id) REFERENCES clientes(id)
);

INSERT INTO clientes(nome) VALUES ("George");
INSERT INTO pedidos(valorTotal,cliente_id) VALUES (90,1);
INSERT INTO pedidos(valorTotal,cliente_id) VALUES (80,1);
INSERT INTO pedidos(valorTotal,cliente_id) VALUES (100,1);
-- SISTEMA DE BAIXA , CUPOM ,TV