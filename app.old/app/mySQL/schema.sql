DROP DATABASE IF EXISTS pokedex_db;
CREATE DATABASE  pokedex_db;
USE  pokedex_db;

CREATE TABLE needPokemon(
	id INTEGER(11) AUTO_INCREMENT,
    pkmnNumber INTEGER(5),
    pkmnName VARCHAR(100),
    PRIMARY KEY (id)
);

CREATE TABLE caughtPokemon(
	id INTEGER(11) AUTO_INCREMENT,
    pkmnNumber INTEGER(5),
    pkmnName VARCHAR(100),
    PRIMARY KEY (id)
);
