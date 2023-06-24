-- Table: User

CREATE TABLE
    User (
        user_id INT PRIMARY KEY,
        username VARCHAR(50),
        password VARCHAR(50),
        profile_id INT,
        FOREIGN KEY (profile_id) REFERENCES Profile(user_id)
    );