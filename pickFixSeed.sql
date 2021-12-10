\connect pickfix

INSERT INTO customers(firstname, lastname, email, password)
VALUES ('dolin',
        'diaz',
        'diaz@email.com',
        '$2b$12$RINHQrCX1.jvOchk6C3Djurlhst0v5p1Q.pdSXwkMCwDDUWP/qPS6'
        ),
        ('oscar',
        'diaz',
        'oscar@email.com',
        '$2b$12$RINHQrCX1.jvOchk6C3Djurlhst0v5p1Q.pdSXwkMCwDDUWP/qPS6'
        ),
        ('cecy',
        'diaz',
        'cecy@email.com',
        '$2b$12$RINHQrCX1.jvOchk6C3Djurlhst0v5p1Q.pdSXwkMCwDDUWP/qPS6'
        ),
        ('carlos',
        'sanchez',
        'carlos@email.com',
        '$2b$12$RINHQrCX1.jvOchk6C3Djurlhst0v5p1Q.pdSXwkMCwDDUWP/qPS6'
        ),
        ('tammi',
        'c',
        'tammi@email.com',
        '$2b$12$RINHQrCX1.jvOchk6C3Djurlhst0v5p1Q.pdSXwkMCwDDUWP/qPS6'
        );

INSERT INTO contractors(name, firstname, lastname, email,password)
VALUES ('the plumber',
        'mario',
        'bros',
        'mario@email.com',
        '$2b$12$RINHQrCX1.jvOchk6C3Djurlhst0v5p1Q.pdSXwkMCwDDUWP/qPS6'
        ),
        ('the cook',
        'spongebob',
        'squarepants',
        'spongebob@email.com',
        '$2b$12$RINHQrCX1.jvOchk6C3Djurlhst0v5p1Q.pdSXwkMCwDDUWP/qPS6'
        ),
        ('the ghostbuster',
        'contractor',
        'lastname',
        'contractor@email.com',
        '$2b$12$RINHQrCX1.jvOchk6C3Djurlhst0v5p1Q.pdSXwkMCwDDUWP/qPS6'
        ),
        (
        'the bender',
        'bender',
        'the robot',
        'bender@email.com',
        '$2b$12$RINHQrCX1.jvOchk6C3Djurlhst0v5p1Q.pdSXwkMCwDDUWP/qPS6'
        ),
        ('The Delivery boy',
        'Philip J',
        'Fry',
        'Fry@email.com',
        '$2b$12$RINHQrCX1.jvOchk6C3Djurlhst0v5p1Q.pdSXwkMCwDDUWP/qPS6'
        ),
        ('the scientist',
        'rick',
        'sanchez',
        'rick@email.com',
        '$2b$12$RINHQrCX1.jvOchk6C3Djurlhst0v5p1Q.pdSXwkMCwDDUWP/qPS6'
        )
        ;

INSERT INTO projects(
        title, 
        description,
         status, 
         budget, 
         customer_id, 
         contractor_id,
         start_time,
         end_time)
VALUES ('trim bushes',
        'some project',
        'not started',
        500,
        1,
        4,
         '2021-12-11 11:12:01',
        '2021-12-14 11:12:01'
        ),
        ('project 2',
        'some project',
        'not started',
        500,
        1,
        4,
        '2021-12-11 11:12:01',
        '2021-12-14 11:12:01'),
        ('project 3',
        'some project',
        'not started',
        500,
        1,
        4,
        '2021-12-11 11:12:01',
        '2021-12-14 11:12:01'),
        ('project 3',
        'some project',
        'not started',
        500,
        1,
        4,
         '2021-12-11 11:12:01',
        '2021-12-14 11:12:01');


INSERT INTO project_chats(chat, created_on, project_id, customer_id, contractor_id,sent_by)
VALUES ('one',
        '2008-11-11 11:12:01',
        1,
        1,
        4,
        'customers'
        ),
        ('two',
        '2008-11-11 11:12:01',
        1,
        1,
        4,
         'contractors'
        ),
        ('three',
        '2008-11-11 11:12:01',
        1,
        1,
        4,
         'customers'
        ),
        ('four',
        '"2008-11-11 11:12:01"',
        1,
        1,
        4,
         'contractors'
        ),
        ('five',
        '2008-11-11 11:12:01',
        1,
        1,
        4,
         'customers'
        );


INSERT INTO project_reviews(
        project_id,
        rating,
        comment, 
        created_on,
        customer_id, 
        contractor_id,
        sent_by)
VALUES (
        1,
        0,
        'zero',
        '2008-11-11 11:12:01',
        4,
        1,
        'customers'
        ),
        (
        1,
        1,
        'one',
        '2008-11-11 11:12:01',
        4,
        1,
        'customers'
        ),
        (
        1,
        2,
        'two',
        '2008-11-11 11:12:01',
        4,
        1,
        'customers'
        ),
        (
        1,
        3,
        'threee',
        '2008-11-11 11:12:01',
        4,
        1,
        'customers'
        ),
        (
        1,
        4,
        'four',
        '2008-11-11 11:12:01',
        4,
        1,
        'customers'
        );



INSERT INTO user_locations(
        user_id,
        user_type,
        lat, 
        lng)
VALUES (
        1,
        'customers',
        42.342,
        -83.057
        ),
        (
        2,
        'customers',
        42.332,
        -83.057
        ),
        (
        1,
        'contractors',
        42.372,
        -83.017
        ),

         (
        2,
        'contractors',
        42.322,
        -83.017
        ),
        (
        3,
        'contractors',
        42.352,
        -83.011
        ),
        (
        4,
        'contractors',
        42.382,
        -83.017
        ),
        (
        5,
        'contractors',
        42.342,
        -83.087
        ),
              (
        6,
        'contractors',
        43.342,
        -84.037
        );
        
INSERT INTO user_events(
        user_id,
        user_type,
        start_time, 
        end_time,
        available,
        project)
VALUES (
        1,
        'customers',
        '2021-12-11 11:12:01',
        '2021-12-14 11:12:01',
        '0',
        1
        ),
        (
        1,
        'customers',
        '2021-12-17 11:12:01',
        '2021-12-18 11:12:01',
        '0',
        1
        ),
       (
        1,
        'contractors',
        '2021-12-11 11:12:01',
        '2021-12-14 11:12:01',
        '0',
        1
        ),
        (
        1,
        'contractors',
        '2021-12-17 11:12:01',
        '2021-12-18 11:12:01',
        '0',
        1
        );