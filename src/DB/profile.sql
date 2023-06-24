-- Table: Profile

CREATE TABLE
    Profile (
        user_id INT PRIMARY KEY,
        username VARCHAR(50),
        password VARCHAR(50),
        full_name VARCHAR(100),
        email VARCHAR(100),
        phone_number VARCHAR(20)
    );