DROP DATABASE IF EXISTS chat;
CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  m_id INT NOT NULL AUTO_INCREMENT,
  message VARCHAR(100) NOT NULL,
  room_name VARCHAR(20) NOT NULL,
  user VARCHAR(20) NOT NULL,
  PRIMARY KEY (m_id)
);

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  user_name VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
);


CREATE TABLE user_message (
  SELECT users.user_name, messages.message
  FROM users INNER JOIN messages
  ON users.user_name = messages.user
);

INSERT into users (user_name) values ('shruti');
INSERT into users (user_name) values ('soo');
INSERT into users (user_name) values ('sam');

INSERT into messages (message, room_name, user) values ('hello','Living room', 'shruti');
INSERT into messages (message, room_name, user) values ('okay','Living room', 'shruti');
INSERT into messages (message, room_name, user) values ('eating','Rest room', 'soo');

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root -p < server/schema.sql
 *  to create the database and the tables.*/

