DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Ch5lv25@07';


CREATE TABLE burgers
(
	id INTEGER NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR(100) NOT NULL,
	devoured BOOLEAN NOT NULL default false,
	PRIMARY KEY (id)
);