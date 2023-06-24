-- Table: Requisition

CREATE TABLE
    Requisition (
        requisition_id INT PRIMARY KEY,
        user_id INT,
        date DATE,
        amount DECIMAL(10, 2),
        purpose VARCHAR(255),
        status VARCHAR(20),
        FOREIGN KEY (user_id) REFERENCES Profile(user_id)
    );