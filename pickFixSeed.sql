\connect pickfix

INSERT INTO customers(firstname, lastname, email, password)
VALUES ('Grizzly',
        'Bear',
        'grizzly@email.com',
        '$2b$12$RINHQrCX1.jvOchk6C3Djurlhst0v5p1Q.pdSXwkMCwDDUWP/qPS6'
        ),
        ('Yogi',
        'Bear',
        'Yogi@email.com',
        '$2b$12$RINHQrCX1.jvOchk6C3Djurlhst0v5p1Q.pdSXwkMCwDDUWP/qPS6'
        ),
        ('Black',
        'Bear',
        'Black@email.com',
        '$2b$12$RINHQrCX1.jvOchk6C3Djurlhst0v5p1Q.pdSXwkMCwDDUWP/qPS6'
        ),
        ('Smokey',
        'Bear',
        'Smokey@email.com',
        '$2b$12$RINHQrCX1.jvOchk6C3Djurlhst0v5p1Q.pdSXwkMCwDDUWP/qPS6'
        ),
        ('Share',
        'Bear',
        'Share@email.com',
        '$2b$12$RINHQrCX1.jvOchk6C3Djurlhst0v5p1Q.pdSXwkMCwDDUWP/qPS6'
        );

INSERT INTO contractors(name, firstname, lastname, email,password)
VALUES ('Mario The Plumber',
        'Mario',
        'Bros',
        'mario@email.com',
        '$2b$12$RINHQrCX1.jvOchk6C3Djurlhst0v5p1Q.pdSXwkMCwDDUWP/qPS6'
        ),
        ('Spongebob the Cook',
        'Spongebob',
        'Squarepants',
        'spongebob@email.com',
        '$2b$12$RINHQrCX1.jvOchk6C3Djurlhst0v5p1Q.pdSXwkMCwDDUWP/qPS6'
        ),
        ('Peter The Ghostbuster',
        'Peter',
        'Venkman',
        'contractor@email.com',
        '$2b$12$RINHQrCX1.jvOchk6C3Djurlhst0v5p1Q.pdSXwkMCwDDUWP/qPS6'
        ),
        (
        'Metal bender',
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
        ('Rick The Scientist',
        'rick',
        'sanchez',
        'rick@email.com',
        '$2b$12$RINHQrCX1.jvOchk6C3Djurlhst0v5p1Q.pdSXwkMCwDDUWP/qPS6'
        ),
        ('El Professor ',
        'Alvoro',
        'Morte',
        'Alvoro@email.com',
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
        100,
        1,
        1,
        '2021-12-6 9:00:00',
        '2021-12-6 12:00:00'
        ),
        ('Cook Crabby Patties',
        'I need crabby patties cooked for the weekend',
        'ACCEPTED',
        500,
        1,
        2,
        '2021-12-10 9:00:00',
        '2021-12-12 19:00:00'),
        ('Hunted Basement',
        'Take down ghosts in the basement',
        'ACCEPTED',
        800,
        1,
        3,
        '2021-12-11 10:00:00',
        '2021-12-14 22:00:00'),
        ('Bend Fender',
        'Fender needs to be bended back to normal',
        'REQUESTED',
        200,
        1,
        4,
         '2021-12-20 10:00:00',
        '2021-12-20 17:00:00'),
        ('Deliver Pizza',
        'Need a dozen pizzas for the weekend',
        'REQUESTED',
        200,
        1,
        5,
         '2021-12-24 12:00:00',
        '2021-12-26 17:00:00'),
        ('Royal Mint of Spain Heist',
        'Execute the master plan',
        'REQUESTED',
        50000,
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
        
