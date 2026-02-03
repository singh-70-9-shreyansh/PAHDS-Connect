CREATE DATABASE IF NOT EXISTS pahds_db;
USE pahds_db;

CREATE TABLE IF NOT EXISTS volunteers (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(200),
phone VARCHAR(50),
email VARCHAR(200),
age INT,
gender VARCHAR(50),
address TEXT,
town VARCHAR(100),
state VARCHAR(100),
services TEXT,
timeline VARCHAR(100),
created_at DATETIME
);

CREATE TABLE IF NOT EXISTS events (
id INT AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(255),
date DATE,
description TEXT
);

ALTER TABLE volunteers ADD COLUMN contribution TEXT;

ALTER TABLE volunteers
MODIFY COLUMN created_at DATETIME DEFAULT CURRENT_TIMESTAMP;

SHOW DATABASES;
USE pahds_db;
SHOW TABLES;

-- Example event
INSERT INTO events (title, date, description) VALUES
('Digital Literacy Workshop - Naiganj, Jaunpur', '2025-12-10',
'A one-day hands-on session teaching digital skills to rural students.');

SELECT * FROM volunteers;