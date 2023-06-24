-- Table: Budget

CREATE TABLE
    Budget (
        budget_id INT PRIMARY KEY,
        category VARCHAR(50),
        amount DECIMAL(10, 2)
    );