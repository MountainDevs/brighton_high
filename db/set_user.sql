
DROP TABLE IF EXISTS users;

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
 Users Table
*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    username VARCHAR(255),
    password VARCHAR(255)
);

INSERT INTO users (first_name, last_name, username, password) VALUES
('Jon', 'Myrick', 'jon', '123'),
('Sara', 'Johnson', 'sara', '123');