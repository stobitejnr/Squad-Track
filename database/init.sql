CREATE DATABASE IF NOT EXISTS simpledb;
USE simpledb;

DROP TABLE IF EXISTS players;

CREATE TABLE players
(
    id         INT AUTO_INCREMENT PRIMARY KEY,
    name       VARCHAR(100)   NOT NULL,
    age        VARCHAR(10)    NOT NULL,
    salary     DECIMAL(10, 2) NOT NULL,
    position   VARCHAR(50)    NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO players (name, age, salary, position)
VALUES ('John Brown', '48', 140.00, 'Center Midfielder');

INSERT INTO players (name, age, salary, position)
VALUES ('Jane Smith', '25', 120.00, 'Right Winger');

INSERT INTO players (name, age, salary, position)
VALUES ('Emily Johnson', '35', 150.00, 'Goalkeeper');

INSERT INTO players (name, age, salary, position)
VALUES ('Michael Brown', '20', 130.00, 'Left Back');