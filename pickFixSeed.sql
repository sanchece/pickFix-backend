INSERT INTO customers(firstname, lastname, email, password)
VALUES ('Martin',
        'Ramos',
        'martin@email.com',
        '$2b$12$RINHQrCX1.jvOchk6C3Djurlhst0v5p1Q.pdSXwkMCwDDUWP/qPS6'
        ),
        ('Lizbeth',
        'Sanchez',
        'lizbeth@email.com',
        '$2b$12$RINHQrCX1.jvOchk6C3Djurlhst0v5p1Q.pdSXwkMCwDDUWP/qPS6'
        ),
        ('Malik',
        'Alayd',
        'malik@email.com',
        '$2b$12$RINHQrCX1.jvOchk6C3Djurlhst0v5p1Q.pdSXwkMCwDDUWP/qPS6'
        ),
        ('Adrian',
        'Ochoa',
        'adrian@email.com',
        '$2b$12$RINHQrCX1.jvOchk6C3Djurlhst0v5p1Q.pdSXwkMCwDDUWP/qPS6'
        ),

        ('Sami',
        'Cervantes',
        'sami@email.com',
        '$2b$12$RINHQrCX1.jvOchk6C3Djurlhst0v5p1Q.pdSXwkMCwDDUWP/qPS6'
        );

INSERT INTO contractors(name, firstname, lastname, email,password)
VALUES ('Mario Plumbing',
        'Mario',
        'Verde',
        'verde@email.com',
        '$2b$12$RINHQrCX1.jvOchk6C3Djurlhst0v5p1Q.pdSXwkMCwDDUWP/qPS6'
        ),
        ('Rey Tire Tech',
        'Horacio',
        'Hernandez',
        'horacio@email.com',
        '$2b$12$RINHQrCX1.jvOchk6C3Djurlhst0v5p1Q.pdSXwkMCwDDUWP/qPS6'
        ),
        ('Interior Painter',
        'Dylan',
        'Diaz',
        'diaz@email.com',
        '$2b$12$RINHQrCX1.jvOchk6C3Djurlhst0v5p1Q.pdSXwkMCwDDUWP/qPS6'
        ),
        (
        'CS Landscaping',
        'Charles',
        'Salazer',
        'sanchez@email.com',
        '$2b$12$RINHQrCX1.jvOchk6C3Djurlhst0v5p1Q.pdSXwkMCwDDUWP/qPS6'
        ),
        ('DCE Electrical Tech',
        'John',
        'Doe',
        'john@email.com',
        '$2b$12$RINHQrCX1.jvOchk6C3Djurlhst0v5p1Q.pdSXwkMCwDDUWP/qPS6'
        ),
        ('Jose Fencing',
        'Jose',
        'Hernandez',
        'jose@email.com',
        '$2b$12$RINHQrCX1.jvOchk6C3Djurlhst0v5p1Q.pdSXwkMCwDDUWP/qPS6'
        ),
        ('Oscar Cement work ',
        'Oscar',
        'Perez',
        'oscar@email.com',
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
VALUES ('Fix Pipe Leak',
        'Sink Pipes are leaking',
        'ACCEPTED',
        125,
        1,
        1,
        '2021-12-6 9:00:00',
        '2021-12-6 12:00:00'
        ),
        ('Winter Tire Installation',
        'I need winter tires installed before the storm forecasted next week',
        'ACCEPTED',
        160,
        1,
        2,
        '2021-12-10 9:00:00',
        '2021-12-12 19:00:00'),
        ('Refinish Rental Property',
        'Refinish rental property for new tenants ',
        'ACCEPTED',
        2250,
        1,
        3,
        '2021-12-11 10:00:00',
        '2021-12-14 22:00:00'),
        ('Fall Clean Up',
        'I would like to have a fall clean up and core aeration before snow storm coming',
        'REQUESTED',
        400,
        1,
        4,
         '2021-12-20 10:00:00',
        '2021-12-20 17:00:00'),
        ('Install Power Outlets',
        'Install power outlets in rental property living room',
        'REQUESTED',
        400,
        1,
        5,
         '2021-12-24 12:00:00',
        '2021-12-26 17:00:00'),
        ('Replace Cracked Driveway',
        'I have a cracked driway tile and would like to replace it with new cement',
        'REQUESTED',
        400,
        1,
        7,
         '2021-12-26 12:00:00',
        '2021-12-30 17:00:00')
        ;


INSERT INTO project_chats(chat, created_on, project_id, customer_id, contractor_id,sent_by)
VALUES ('Hello',
        '2021-12-6 9:00:00',
        1,
        1,
        1,
        'customers'
        ),
        ('Hey!',
        '2021-12-7 9:00:00',
        1,
        1,
        1,
         'contractors'
        ),
        ('Hows it going',
        '2021-12-7 10:00:00',
        2,
        1,
        2,
         'customers'
        ),
        ('Great how are you',
        '2021-12-7 11:00:00',
        2,
        1,
        2,
         'contractors'
        ),
        ('hey!',
        '2021-12-8 9:00:00',
        3,
        1,
        3,
         'customers'
        ),
                ('What`s up',
        '2021-12-9 9:00:00',
        3,
        1,
        3,
         'contractors'
        )
        ;


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
        ),
        (
        7,
        'contractors',
        42.302,
        -83.037
        );
        
