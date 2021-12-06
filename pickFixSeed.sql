\connect pickfix

INSERT INTO customers(firstname, lastname, email, password)
VALUES ('dolin',
        'diaz',
        'diaz@email.com',
        'some_password'
        ),
        ('oscar',
        'diaz',
        'oscar@email.com',
        'some_password'
        ),
        ('cecy',
        'diaz',
        'cecy@email.com',
        'some_password'
        ),
        ('carlos',
        'sanchez',
        'carlos@email.com',
        'some_password'
        ),
        ('tammi',
        'c',
        'tammi@email.com',
        'some_password'
        );

INSERT INTO contractors(firstname, lastname, email, password)
VALUES ('mr1',
        'contractor',
        'mr1@email.com',
        'some_password'
        ),
        ('mr2',
        'contractor',
        'mr2@email.com',
        'some_password'
        ),
        ('mr3',
        'contractor',
        'mr3@email.com',
        'some_password'
        ),
        ('mr4',
        'contractor',
        'mr4@email.com',
        'some_password'
        );
INSERT INTO projects(title, description, status, budget, customer_id, contractor_id)
VALUES ('project 1',
        'some project',
        'not started',
        500,
        1,
        4
        ),
        ('project 2',
        'some project',
        'not started',
        500,
        1,
        4),
        ('project 3',
        'some project',
        'not started',
        500,
        1,
        4),
        ('project 3',
        'some project',
        'not started',
        500,
        1,
        4);


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
        100,
        200
        ),
        (
        2,
        'customers',
        100,
        200
        ),
        (
        3,
        'customers',
        100,
        200
        ),
        (
        4,
        'customers',
        100,
        200
        ),
        (
        5,
        'customers',
        100,
        200
        ),

         (
        2,
        'contractors',
        100,
        200
        ),
        (
        3,
        'contractors',
        100,
        200
        ),
        (
        4,
        'contractors',
        100,
        200
        ),
        (
        5,
        'contractors',
        100,
        200
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