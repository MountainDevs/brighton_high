-- DROP TABLE IF EXISTS addresses;
DROP TABLE IF EXISTS users;

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
 Users Table
*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    username VARCHAR(255),
    password VARCHAR(255),
    phone VARCHAR(15),
    facebook TEXT,
    about TEXT,
    past_residence TEXT,
    occupation TEXT,
    spouse_first VARCHAR(255),
    spouse_last VARCHAR(255),
    children TEXT,
    memories TEXT,
    photo TEXT
);

INSERT INTO users (first_name, last_name, username, password) VALUES
('Jon', 'Myrick', 'jon', '123'),
('Sara', 'Johnson', 'sara', '123');