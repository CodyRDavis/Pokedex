DROP DATABASE IF EXISTS pokedex_db
CREATE DATABASE pokedex_db;
USE pokedex_db;

CREATE TABLE pokemon
(
	id int NOT NULL AUTO_INCREMENT,
	pokeNumber INTEGER(4),
	pokeName VARCHAR (50),
	pokeCaught BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);