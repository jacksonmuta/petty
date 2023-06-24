-- Table: Expenses

CREATE TABLE
    Expenses (
        expense_id INT PRIMARY KEY,
        date DATE,
        category VARCHAR(50),
        amount DECIMAL(10, 2),
        description VARCHAR(255)
    );