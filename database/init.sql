CREATE DATABASE IF NOT EXISTS simpledb;
USE simpledb;

DROP TABLE IF EXISTS first_players;
DROP TABLE IF EXISTS second_players;
DROP TABLE IF EXISTS reserves;


CREATE TABLE first_players
(
    name     VARCHAR(100) NOT NULL,
    age      VARCHAR(15)  NOT NULL,
    salary   VARCHAR(15)  NOT NULL,
    position VARCHAR(50)  NOT NULL
);

CREATE TABLE second_players
(
    name     VARCHAR(100) NOT NULL,
    age      VARCHAR(15)  NOT NULL,
    salary   VARCHAR(15)  NOT NULL,
    position VARCHAR(50)  NOT NULL
);


CREATE TABLE reserves
(
    name     VARCHAR(100) NOT NULL,
    age      VARCHAR(15)  NOT NULL,
    salary   VARCHAR(15)  NOT NULL,
    position VARCHAR(50)  NOT NULL
);

INSERT INTO first_players (name, age, salary, position)
VALUES ('John Brown', '48', '140', 'Center Midfielder');

INSERT INTO first_players (name, age, salary, position)
VALUES ('Jane Smith', '25', '120', 'Right Winger');

INSERT INTO first_players (name, age, salary, position)
VALUES ('Emily Johnson', '35', '150', 'Goalkeeper');

INSERT INTO first_players (name, age, salary, position)
VALUES ('Michael Brown', '23', '120', 'Left Back');


INSERT INTO second_players (name, age, salary, position)
VALUES ('Alice Green', '29', '130', 'Center Midfielder');

INSERT INTO second_players (name, age, salary, position)
VALUES ('Bob White', '27', '110', 'Right Winger');

INSERT INTO second_players (name, age, salary, position)
VALUES ('Clara Brown', '31', '140', 'Goalkeeper');

INSERT INTO second_players (name, age, salary, position)
VALUES ('Daniel Black', '21', '115', 'Left Back');


INSERT INTO reserves (name, age, salary, position)
VALUES ('Ethan Walker', '26', '100', 'Center Midfielder');

INSERT INTO reserves (name, age, salary, position)
VALUES ('Sophia Hall', '22', '90', 'Right Winger');

INSERT INTO reserves (name, age, salary, position)
VALUES ('Liam Scott', '30', '110', 'Goalkeeper');

INSERT INTO reserves (name, age, salary, position)
VALUES ('Olivia Young', '24', '95', 'Left Back');