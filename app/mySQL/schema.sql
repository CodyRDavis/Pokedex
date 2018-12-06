DROP DATABASE IF EXISTS pokedex_db;
CREATE DATABASE  pokedex_db;
USE  pokedex_db;

CREATE TABLE pokemon(
	id INTEGER(11) AUTO_INCREMENT,
    pkmnNumber INTEGER(5) NOT NULL,
    pkmnName VARCHAR(100) NOT NULL,
    pkmnCaught BOOL NOT NULL,
    PRIMARY KEY (id)
);
