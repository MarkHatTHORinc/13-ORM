-- -----------------------------------------------------------------------------
-- Script:   schema.sql
-- Purpose:  Drop and Create ecomerce_db.
-- Input:    <none>   
-- -----------------------------------------------------------------------------
-- Author:   Mark Harrison
-- Date:     May 15, 2021
-- -----------------------------------------------------------------------------

-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce_db;

-- CREATE DATABASE
CREATE DATABASE ecommerce_db;


-- -----------------------------------------------------------------------------
-- The following code is commented out, but could also be used to build tables.
-- -----------------------------------------------------------------------------
-- USE eCOMMERCE_DB;

-- CREATE TABLE Category (
--   id INT NOT NULL AUTO_INCREMENT,
--   category_name VARCHAR(30) NOT NULL,
--   PRIMARY KEY (id)
-- );

-- CREATE TABLE Product (
--   id INT NOT NULL AUTO_INCREMENT,
--   product_name VARCHAR(50) NOT NULL,
--   price DECIMAL(9,2) UNSIGNED NOT NULL,
--   stock INT NOT NULL WITH DEFAULT 10,
--   category_id int,
--   PRIMARY KEY (id),
--   CONSTRAINT FK_categoryProduct FOREIGN KEY (category_id) REFERENCES Category(id) ON DELETE RESTRICT
-- );

-- CREATE TABLE Tag (
--   id INT NOT NULL AUTO_INCREMENT,
--   tag_name VARCHAR(30) NOT NULL,
--   PRIMARY KEY (id)
-- );

-- CREATE TABLE ProductTag (
--   id INT NOT NULL AUTO_INCREMENT,
--   product_id INT,
--   tag_id INT,
--   PRIMARY KEY (id),
--   CONSTRAINT FK_productProduct_Id FOREIGN KEY (product_id) REFERENCES Product(id) ON DELETE RESTRICT,
--   CONSTRAINT FK_tagTag_Id FOREIGN KEY (tag_id) REFERENCES Tag(id) ON DELETE RESTRICT
-- );
