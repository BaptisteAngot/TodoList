CREATE DATABASE IF NOT EXISTS todolist;

USE todolist;

CREATE TABLE IF NOT EXISTS todos (
                                     id INT AUTO_INCREMENT PRIMARY KEY,
                                     title VARCHAR(255) NOT NULL
    );

ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'root';
FLUSH PRIVILEGES;

INSERT INTO todos (title) VALUES ('Acheter du lait');