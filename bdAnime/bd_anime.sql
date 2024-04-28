drop database cinema;

create database cinema; #Este comando é utilizado para construir o banco de dados

use cinema;

create table tbl_usuario(
   id_usuario integer auto_increment primary key,
   email varchar(60) not null,
   senha varchar(20) not null,
   nome_usuario varchar(30) not null
);

create table tbl_genero(
   id_genero int primary key auto_increment,
   genero varchar(45) not null
);

insert into tbl_genero(genero)
values ('Terror'),
       ('Ação'),
       ('Comedia'),
       ('Drama'),
       ('Suspense'),
       ('Ficção'),
       ('Romance'),
       ('Animação');

select * from tbl_usuario;
select * from tbl_genero;

insert into tbl_usuario (email, senha, nome_usuario) 
  values ("Henrrylimadasilva@hotmail.com", "@12345678", "Ryoto_Sakamoto");