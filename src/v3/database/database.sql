CREATE TABLE students(
	id INT(4) AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(50) NOT NULL,
	age INT NOT NULL,
	enroll VARCHAR(5) NOT NULL
)

INSERT INTO students (name, age, enroll) VALUES('Antonio', 20, 'true');
INSERT INTO students (name, age, enroll) VALUES('Mariana', 38, 'false');
INSERT INTO students (name, age, enroll) VALUES('Jorge', 25, 'false');


SELECT * FROM students;