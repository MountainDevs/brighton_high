
DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    middle_name VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255),
    phone VARCHAR(15),
    address TEXT,
    city TEXT,
    state TEXT,
    zipcode TEXT,
    bio VARCHAR(255),
    attending BOOLEAN,
    photo TEXT,
    permissions VARCHAR(15)
);

DROP TABLE IF EXISTS stripe_records;

CREATE TABLE stripe_records (
    id SERIAL PRIMARY KEY,
    record VARCHAR(255)
);

INSERT INTO users (first_name, last_name, email, password, permissions) VALUES
('Jon', 'Myrick', 'jon@gmail.com', '123', 'member'),
('Sara', 'Johnson', 'sara@gmail.com', '123');

INSERT INTO stripe_records (record) VALUES
('this is a stripe record');