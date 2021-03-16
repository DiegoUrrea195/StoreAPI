CREATE TABLE client(
    id char(36) NOT NULL,
    name varchar(20) NOT NULL,
    debt float NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE employee(
    id char(36) NOT NULL,
    name varchar(20) NOT NULL,
    email varchar(30) NOT NULL,
    password varchar(30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE sale(
    id char(36) NOT NULL,
    value float NOT NULL,
    employee char(36) NOT NULL,
    date date NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (employee) REFERENCES employee(id)
);


CREATE TABLE counts(
    id char(36) NOT NULL,
    value float NOT NULL,
    description text,
    client char(36) NOT NULL,
    employee char(36) NOT NULL,
    date date NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (client) REFERENCES client(id)
);

CREATE TABLE image(
    id char(36) NOT NULL,
    url_image varchar(255),
    PRIMARY KEY (id)
);

CREATE TABLE bill(
    id char(36) NOT NULL,
    company_name varchar(255) NOT NULL,
    value double NOT NULL,
    date date NOT NULL,
    bill_image char(36),
    employee char(36),
    PRIMARY KEY (id),
    FOREIGN KEY (bill_image) REFERENCES image(id),
    FOREIGN KEY (employee) REFERENCES employee(id)
);

INSERT INTO employee (id, name, email, password) VALUES (12345, "DIEGO", "urreadiego767@gmail.com", "diego123");