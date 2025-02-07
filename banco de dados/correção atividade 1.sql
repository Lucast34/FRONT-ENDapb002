CREATE DATABASE correcao_cadastro;
USE correcao_cadastro;
CREATE TABLE pessoas(nome VARCHAR(100),rg INT(20), cpf INT(20),idade INT(3));
ALTER TABLE pessoas ADD saldo decimal(6,2);
insert into pessoas (nome,rg,cpf,idade,saldo) values ("Victor",999999,888888,21,0);
insert into pessoas (nome,rg,cpf,idade,saldo) values ("Bruna",77777,66666,34,1000);
insert into pessoas (nome,rg,cpf,idade,saldo) values ("Alessandro",55555,44444,28,16.2);
insert into pessoas (nome,rg,cpf,idade,saldo) values ("Willian",999999,888888,21,13);
insert into pessoas (nome,rg,cpf,idade,saldo) values ("Ulisses",999999,888888,21,26);