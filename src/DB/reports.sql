-- Table: Reports

CREATE TABLE
    Reports (
        report_id INT PRIMARY KEY,
        date DATE,
        category VARCHAR(50),
        total_expenses DECIMAL(10, 2)
    );