CREATE DATABASE IF NOT EXISTS simpledb;
USE simpledb;

DROP TABLE IF EXISTS players;

CREATE TABLE players
(
    name     VARCHAR(100) NOT NULL,
    age      NUMERIC(10)  NOT NULL,
    salary   NUMERIC(15)  NOT NULL,
    position VARCHAR(50)  NOT NULL
);

INSERT INTO players (name, age, salary, position)
VALUES ('John Brown', 48, 140, 'Center Midfielder');

INSERT INTO players (name, age, salary, position)
VALUES ('Jane Smith', 25, 120, 'Right Winger');

INSERT INTO players (name, age, salary, position)
VALUES ('Emily Johnson', 35, 150, 'Goalkeeper');

INSERT INTO players (name, age, salary, position)
VALUES ('Michael Brown', 23, 'Left Back');