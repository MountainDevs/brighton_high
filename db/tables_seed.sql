
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
    attending BOOLEAN,
    permissions VARCHAR(15),
    show_profile BOOLEAN DEFAULT false,
    stripe_token VARCHAR(255),
    facebook_page VARCHAR(255),
    family TEXT,
    past_residence TEXT,
    millitary_service TEXT,
    occupation TEXT,
    college TEXT,
    hobbies TEXT,
    honors TEXT,
    travel TEXT,
    best_memory TEXT,
    worst_memory TEXT,
    dumb TEXT,
    crushes TEXT,
    changes TEXT,
    retirement TEXT,
    ten_years TEXT,
    photo_one TEXT,
    photo_two TEXT,
    photo_three TEXT
);

INSERT INTO users (first_name, last_name, email, password, permissions) VALUES
('Jon', 'Myrick', 'jon@gmail.com', '123', 'member'),
('Sara', 'Johnson', 'sara@gmail.com', '123', null);

INSERT INTO users (first_name, middle_name, last_name, email, password, phone, address, city, state, zipcode, attending, permissions, show_profile, stripe_token, photo_one) VALUES
('Gustav', 'Big Boy Pants', 'Nordstrom', 'gus@gmail.com', '123', '2345678876', '123 Fake Street, apartment 27', 'Provo', 'Utah', '98765', true, 'member', true, 'token', '1_Myrick_Mon+Jul+17+2017+22%3A29%3A07+GMT-0600+(Mountain+Daylight+Time).jpeg');
