CREATE DATABASE IF NOT EXISTS simpledb;
USE simpledb;

drop table if exists players;

CREATE TABLE players
(
    id         INT AUTO_INCREMENT PRIMARY KEY,
    name       VARCHAR(100) NOT NULL,
    email      VARCHAR(100) NOT NULL UNIQUE,
    number     VARCHAR(15),
    position   VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO players (name, email, number, position)
VALUES ('John Doe', 'john.doe@example.com', '1234567890', 'Manager');

INSERT INTO players (name, email, number, position)
VALUES ('Jane Smith', 'jane.smith@example.com', '0987654321', 'Developer');

INSERT INTO players (name, email, number, position)
VALUES ('Emily Johnson', 'emily.johnson@example.com', '5551234567', 'Designer');

INSERT INTO players (name, email, number, position)
VALUES ('Michael Brown', 'michael.brown@example.com', '4449876543', 'Sales Representative');