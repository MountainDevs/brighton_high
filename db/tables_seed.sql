
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
    bio TEXT,
    attending BOOLEAN,
    photo TEXT,
    permissions VARCHAR(15),
    show_profile BOOLEAN DEFAULT false
);

DROP TABLE IF EXISTS stripe_records;

CREATE TABLE stripe_records (
    id SERIAL PRIMARY KEY,
    record VARCHAR(255)
);

INSERT INTO users (first_name, last_name, email, password, permissions) VALUES
('Jon', 'Myrick', 'jon@gmail.com', '123', 'member'),
('Sara', 'Johnson', 'sara@gmail.com', '123', null);

INSERT INTO users (first_name, middle_name, last_name, email, password, phone, address, city, state, zipcode, bio, attending, photo, permissions, show_profile) VALUES
('Gustav', 'Big Boy Pants', 'Nordstrom', 'gus@gmail.com', '123', '2345678876', '123 Fake Street, apartment 27', 'Provo', 'Utah', '98765', 'This is the bio of a great man', true, '1_Myrick_Mon+Jul+17+2017+22%3A29%3A07+GMT-0600+(Mountain+Daylight+Time).jpeg', 'member', true);

INSERT INTO stripe_records (record) VALUES
('this is a stripe record');