DROP DATABASE pickfixtest;
CREATE DATABASE pickfixtest;
\connect pickfixtest

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

CREATE TABLE project_reviews(
    id SERIAL PRIMARY KEY,
    project_id INT NOT NULL REFERENCES projects ON DELETE CASCADE,
    rating INT NOT NULL,
    comment TEXT NOT NULL,
    source_id INT NOT NULL,
    destination_id INT NOT NULL
);


CREATE TABLE project_chat(
    id SERIAL PRIMARY KEY,
    chat TEXT NOT NULL,
    created_on TIMESTAMP, 
    customer_id INT NOT NULL REFERENCES customers ON DELETE CASCADE,
    contractor_id INT NOT NULL REFERENCES contractors ON DELETE CASCADE
    );
CREATE TABLE client_location(
    id SERIAL PRIMARY KEY,
    client_id INT NOT NULL,
    lat NUMERIC NOT NULL,
    lng NUMERIC NOT NULL
);
CREATE TABLE calendar(
    id SERIAL PRIMARY KEY,
    client_id INT NOT NULL,
    start_time TIMESTAMP NOT NULL,
    end_time TIMESTAMP
);
