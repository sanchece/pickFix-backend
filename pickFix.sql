DROP DATABASE pickfix;
CREATE DATABASE pickfix;
\connect pickfix

CREATE TABLE contractors(
    id SERIAL PRIMARY KEY,
    firstname TEXT NOT NULL,
    lastname TEXT NOT NULL,
    email TEXT NOT NULL,
    password TEXT NOT NULL
);

CREATE TABLE customers(
    id SERIAL PRIMARY KEY,
    firstname TEXT NOT NULL,
    lastname TEXT NOT NULL,
    email TEXT NOT NULL,
    password TEXT NOT NULL
);
CREATE TABLE projects(
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    status TEXT NOT NULL,
    budget INT,
    customer_id INT NOT NULL REFERENCES customers ON DELETE NO ACTION,
    contractor_id INT NOT NULL REFERENCES contractors ON DELETE NO ACTION
);

CREATE TABLE project_chats(
    id SERIAL PRIMARY KEY,
    project_id INT NOT NULL REFERENCES projects ON DELETE CASCADE,
    chat TEXT NOT NULL,
    created_on TIMESTAMP, 
    customer_id INT REFERENCES customers ON DELETE CASCADE,
    contractor_id INT REFERENCES contractors ON DELETE CASCADE,
    sent_by TEXT NOT NULL
    );

CREATE TABLE project_reviews(
    id SERIAL PRIMARY KEY,
    project_id INT NOT NULL REFERENCES projects ON DELETE CASCADE,
    rating DECIMAL(6,1) NOT NULL CHECK (rating BETWEEN 0 AND 5.0),
    comment TEXT NOT NULL,
    created_on TIMESTAMP, 
    customer_id INT REFERENCES customers ON DELETE CASCADE,
    contractor_id INT REFERENCES contractors ON DELETE CASCADE,
    sent_by TEXT NOT NULL
);

CREATE TABLE user_locations(
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    user_type TEXT NOT NULL,
    lat NUMERIC NOT NULL,
    lng NUMERIC NOT NULL
);
CREATE TABLE user_events(
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    user_type TEXT NOT NULL,
    start_time TIMESTAMP NOT NULL,
    end_time TIMESTAMP,
    available BOOLEAN
);



