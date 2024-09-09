CREATE DATABASE IF NOT EXISTS simpledb;
USE simpledb;

DROP TABLE IF EXISTS first_players;
DROP TABLE IF EXISTS second_players;
DROP TABLE IF EXISTS reserves;


CREATE TABLE first_players
(
    name     VARCHAR(100) NOT NULL,
    age      NUMERIC  NOT NULL,
    salary   NUMERIC  NOT NULL,
    position VARCHAR(50)  NOT NULL
);

CREATE TABLE second_players
(
    name     VARCHAR(100) NOT NULL,
    age      NUMERIC  NOT NULL,
    salary   NUMERIC  NOT NULL,
    position VARCHAR(50)  NOT NULL
);


CREATE TABLE reserves
(
    name     VARCHAR(100) NOT NULL,
    age      NUMERIC  NOT NULL,
    salary   NUMERIC  NOT NULL,
    position VARCHAR(50)  NOT NULL
);

INSERT INTO first_players (name, age, salary, position)
VALUES ('John Brown', 48, 14088, 'Center Midfielder');

INSERT INTO first_players (name, age, salary, position)
VALUES ('Jane Smith', 25, 13320, 'Right Winger');

INSERT INTO first_players (name, age, salary, position)
VALUES ('Emily Johnson', 35, 15064, 'Goalkeeper');

INSERT INTO first_players (name, age, salary, position)
VALUES ('Michael Brown', 23, 13520, 'Left Back');


INSERT INTO second_players (name, age, salary, position)
VALUES ('Alice Green', 29, 13340, 'Center Midfielder');

INSERT INTO second_players (name, age, salary, position)
VALUES ('Bob White', 27, 11130, 'Right Winger');

INSERT INTO second_players (name, age, salary, position)
VALUES ('Clara Brown', 31, 14220, 'Goalkeeper');

INSERT INTO second_players (name, age, salary, position)
VALUES ('Daniel Black', 21, 11345, 'Left Back');


INSERT INTO reserves (name, age, salary, position)
VALUES ('Ethan Walker', 26, 14200, 'Center Midfielder');

INSERT INTO reserves (name, age, salary, position)
VALUES ('Sophia Hall', 22, 11190, 'Right Winger');

INSERT INTO reserves (name, age, salary, position)
VALUES ('Liam Scott', 30, 11310, 'Goalkeeper');

INSERT INTO reserves (name, age, salary, position)
VALUES ('Olivia Young', 24, 92325, 'Left Back');