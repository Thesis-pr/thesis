-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema déménagego
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema déménagego
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `déménagego` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `déménagego` ;

-- -----------------------------------------------------
-- Table `déménagego`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `déménagego`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `lastname` VARCHAR(50) NOT NULL,
  `image` VARCHAR(255) NULL DEFAULT NULL,
  `email` VARCHAR(100) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `déménagego`.`drivers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `déménagego`.`drivers` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `lastname` VARCHAR(50) NOT NULL,
  `image` VARCHAR(255) NULL DEFAULT NULL,
  `truck` ENUM('petit utilitaire', 'grand fourgon', 'petit camion', 'grand camion') NOT NULL,
  `images_truck` JSON NULL DEFAULT NULL,
  `mail` VARCHAR(100) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `price` DECIMAL(10,2) NOT NULL,
  `isActive` TINYINT(1) NOT NULL DEFAULT '1',
  `isConfirmed` TINYINT(1) NOT NULL DEFAULT '0',
  `photoOfcin` VARCHAR(255) NOT NULL,
  `photoOfdriverLicence` VARCHAR(255) NOT NULL,
  `carteGrise` VARCHAR(255) NOT NULL,
  `experience` VARCHAR(255) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `déménagego`.`requests`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `déménagego`.`requests` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `date` VARCHAR(255) NOT NULL,
  `duration` INT NOT NULL,
  `longitude` FLOAT NOT NULL,
  `latitude` FLOAT NOT NULL,
  `status` VARCHAR(255) NOT NULL DEFAULT 'pending',
  `helper` INT NULL DEFAULT NULL,
  `truck_type` ENUM('fourgon', 'grand fourgon', 'petit camion', 'grand camion') NOT NULL,
  `property_type` ENUM('house', 'apartment') NOT NULL,
  `floors` INT NULL DEFAULT NULL,
  `floor_number` INT NULL DEFAULT NULL,
  `telephone` VARCHAR(255) NOT NULL,
  `userId` INT NOT NULL,
  `driverId` INT NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `userId` (`userId` ASC) VISIBLE,
  INDEX `driverId` (`driverId` ASC) VISIBLE,
  CONSTRAINT `requests_ibfk_1`
    FOREIGN KEY (`userId`)
    REFERENCES `déménagego`.`users` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `requests_ibfk_2`
    FOREIGN KEY (`driverId`)
    REFERENCES `déménagego`.`drivers` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `déménagego`.`chats`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `déménagego`.`chats` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `userId` INT NOT NULL,
  `driverId` INT NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `requestId` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `userId` (`userId` ASC) VISIBLE,
  INDEX `driverId` (`driverId` ASC) VISIBLE,
  INDEX `requestId` (`requestId` ASC) VISIBLE,
  CONSTRAINT `chats_ibfk_1`
    FOREIGN KEY (`userId`)
    REFERENCES `déménagego`.`users` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `chats_ibfk_2`
    FOREIGN KEY (`driverId`)
    REFERENCES `déménagego`.`drivers` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `chats_ibfk_3`
    FOREIGN KEY (`requestId`)
    REFERENCES `déménagego`.`requests` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `déménagego`.`comments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `déménagego`.`comments` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `content` TEXT NULL DEFAULT NULL,
  `date` DATETIME NULL DEFAULT NULL,
  `userId` INT NOT NULL,
  `driverId` INT NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `userId` (`userId` ASC) VISIBLE,
  INDEX `driverId` (`driverId` ASC) VISIBLE,
  CONSTRAINT `comments_ibfk_1`
    FOREIGN KEY (`userId`)
    REFERENCES `déménagego`.`users` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `comments_ibfk_2`
    FOREIGN KEY (`driverId`)
    REFERENCES `déménagego`.`drivers` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `déménagego`.`messages`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `déménagego`.`messages` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `sender_Id` INT NOT NULL,
  `content` TEXT NOT NULL,
  `chatId` INT NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `chatId` (`chatId` ASC) VISIBLE,
  CONSTRAINT `messages_ibfk_1`
    FOREIGN KEY (`chatId`)
    REFERENCES `déménagego`.`chats` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `déménagego`.`payments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `déménagego`.`payments` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `amount` INT NOT NULL,
  `currency` VARCHAR(3) NOT NULL,
  `payment_intent_id` VARCHAR(255) NOT NULL,
  `status` VARCHAR(255) NOT NULL,
  `userId` INT NOT NULL,
  `driverId` INT NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `userId` (`userId` ASC) VISIBLE,
  INDEX `driverId` (`driverId` ASC) VISIBLE,
  CONSTRAINT `payments_ibfk_1`
    FOREIGN KEY (`userId`)
    REFERENCES `déménagego`.`users` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `payments_ibfk_2`
    FOREIGN KEY (`driverId`)
    REFERENCES `déménagego`.`drivers` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `déménagego`.`ratings`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `déménagego`.`ratings` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `value` DECIMAL(3,2) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `userId` INT NULL DEFAULT NULL,
  `driverId` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `userId` (`userId` ASC) VISIBLE,
  INDEX `driverId` (`driverId` ASC) VISIBLE,
  CONSTRAINT `ratings_ibfk_1`
    FOREIGN KEY (`userId`)
    REFERENCES `déménagego`.`users` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `ratings_ibfk_2`
    FOREIGN KEY (`driverId`)
    REFERENCES `déménagego`.`drivers` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
