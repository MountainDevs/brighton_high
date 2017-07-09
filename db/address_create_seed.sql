DROP TABLE IF EXISTS addresses;

CREATE TABLE addresses (
  id SERIAL PRIMARY KEY,
  street1 TEXT,
  street2 TEXT,
  city VARCHAR(45),
  state VARCHAR(20),
  country VARCHAR(45),
  userId INTEGER
    REFERENCES users(id)
);