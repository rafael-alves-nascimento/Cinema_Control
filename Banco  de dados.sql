-------------------- Criando o banco ---------------------------

create database Cinema;
use Cinema;

create table Salas (
IDSALAS int(4) auto_increment primary key,
NUMERO_SALA varchar(10),
CAPACIDADE int(3),
HORARIO varchar(10),
FATURAMENTO int(4)
);

create table Filmes(
IDFILME int(4) auto_increment primary key,
SINOPSE text,
DURACAO varchar(10),
FILME varchar(30),
Cor varchar(30),

/* CHAVE ESTRANGEIRA*/
ID_SALAS_FILMES INT(4),
FOREIGN KEY (ID_SALAS_FILMES)
references Salas (IDSALAS)
);

create table Ingresso(
IDINGRESSO int(4) auto_increment primary key,
INGRESSOSDISP int(5),
INGRESSOSVEND int(5),
VALOR varchar(6),

/* CHAVE ESTRANGEIRA*/
ID_SALAS_INGRESSOS INT(4),
FOREIGN KEY (ID_SALAS_INGRESSOS)
references Salas (IDSALAS)
);

-------------------------- Populando o banco-------------------

use cinema;
select * from Salas;
select * from Filmes;
select * from Ingresso;

/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-Inserts Salas =-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */

/* Insert Sala 1*/
insert into Salas values (default,"Sala 1",100,"15:00",0);
insert into Salas values (default,"Sala 1",100,"18:00",0);

/* Insert Sala 2*/
insert into Salas values (default,"Sala 2",120,"17:00",0);

/* Insert Sala 3*/
insert into Salas values (default,"Sala 3",110,"22:00",0);

/* Insert Sala 4*/
insert into Salas values (default,"Sala 4",90,"16:00",0);
insert into Salas values (default,"Sala 4",90,"20:00",0);

/* Insert Sala 5*/
insert into Salas values (default,"Sala 5",100,"18:00",0);

/* Insert Sala 6*/
insert into Salas values (default,"Sala 6",90,"21:00",0);

/* Insert Sala 7*/
insert into Salas values (default,"Sala 7",150,"15:00",0);
insert into Salas values (default,"Sala 7",150,"20:30",0);


/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-Inserts Filmes =-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */

/* Insert Filmes sala 1 */
insert into Filmes values (default,"A aterradora saga de Esther continua nesta emocionante prequela, Órfã.Depois de planear uma brilhante fuga de um hospital psiquiátrico na Estónia, Esther viaja até a América passando-se pela filha desaparecida de uma família milionária.No entanto, após uma inesperada reviravolta, a mãe começa a desconfiar da criança assassina, e tudo faz para proteger a sua família.","98 MIN","Orfã : A Origem","white",1);
insert into Filmes values (default,"LOREM","98 min","Orfã : A Origem","white",2);

/* Insert Filmes sala 2 */
insert into Filmes values (default,"LOREM","123 MIN","Não Se Preocupe Querida ","white",3);

/* Insert Filmes sala 3*/
insert into Filmes values (default,"LOREM","103 MIN","O Telefone Preto ","white",4);

/* Insert Filmes sala 4*/
insert into Filmes values (default,"LOREM","120 MIN","A Mulher Rei ","white",5);
insert into Filmes values (default,"LOREM","120 MIN","A Mulher Rei ","white",6);

/* Insert Filmes sala 5*/
insert into Filmes values (default,"LOREM","150 MIN","Avatar ","white",7);

/* Insert Filmes sala 6*/
insert into Filmes values (default,"LOREM","115 MIN","Sorria ","white",8);

/*#6495ED*/

/* Insert Filmes sala 7*/
insert into Filmes values (default,"LOREM","107 MIN","A Queda ","white",9);
insert into Filmes values (default,"LOREM","107 MIN","A Queda ","white",10);

/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-Inserts Ingressos =-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */

/* Insert Ingresso sala 1*/
insert into Ingresso values (default,"100","0","20",1);
insert into Ingresso values (default,"100","0","20",2);

/* Insert Ingresso sala 2*/
insert into Ingresso values (default,"120","0","20",3);

/* Insert Ingresso sala 3*/
insert into Ingresso values (default,"110","0","20",4);

/* Insert Ingresso sala 4*/
insert into Ingresso values (default,"90","0","20",5);
insert into Ingresso values (default,"90","0","20",6);

/* Insert Ingresso sala 5*/
insert into Ingresso values (default,"100","0","20",7);

/* Insert Ingresso sala 6*/
insert into Ingresso values (default,"90","0","20",8);

/* Insert Ingresso sala 7*/
insert into Ingresso values (default,"150","0","20",9);
insert into Ingresso values (default,"150","0","20",10);