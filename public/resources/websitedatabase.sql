DROP TABLE IF EXISTS Users CASCADE;
DROP TABLE IF EXISTS Task CASCADE;
DROP TABLE IF EXISTS Website CASCADE;


CREATE TABLE Users(
    username VARCHAR(20) PRIMARY KEY,
    email VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(20) NOT NULL,
    avatar VARCHAR(255),
    favoritemagic VARCHAR(50),
    country VARCHAR(40)
);

CREATE TABLE Task(
    id INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category VARCHAR(255) NOT NULL,
    deadlinedate DATE NOT NULL,
    deadlinetime DATE,
    statusdone BOOLEAN NOT NULL,
    taskowner VARCHAR(255) NOT NULL
);

CREATE TABLE Website(
    id INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    url VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    timesvisited int,
    icon VARCHAR(255),
    favoritedby VARCHAR(255) NOT NULL
    );

ALTER TABLE Website
ADD CONSTRAINT fk_userwebsite
FOREIGN KEY (favoritedby) REFERENCES Users(username);

ALTER TABLE Task
ADD CONSTRAINT fk_usertask
FOREIGN KEY (taskowner) REFERENCES Users(username)