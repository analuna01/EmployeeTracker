CREATE TABLE `employeeTracker_db`.`employee` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `firts_name` VARCHAR(30) NULL,
  `last_name` VARCHAR(30) NULL,
  `role_id` INT NULL,
  `manager_id` INT NULL,
  PRIMARY KEY (`id`));

  CREATE TABLE `employeeTracker_db`.`role` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(30) NULL,
  `salary` DECIMAL(6,2) NULL,
  `department_id` INT NULL,
  PRIMARY KEY (`id`));

  CREATE TABLE `employeeTracker_db`.`department` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(30) NULL,
  PRIMARY KEY (`id`));

  INSERT into department (name) VALUES ("");
  INSERT into department (name) VALUES ("");
  INSERT into department (name) VALUES ("");
  INSERT into department (name) VALUES ("");