-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema elotitos
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema elotitos
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `elotitos` DEFAULT CHARACTER SET utf8 ;
USE `elotitos` ;

-- -----------------------------------------------------
-- Table `elotitos`.`productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `elotitos`.`productos` (
  `idproductos` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `descripcion` VARCHAR(200) NOT NULL,
  `precio` FLOAT NOT NULL,
  `imagen` LONGBLOB NOT NULL,
  PRIMARY KEY (`idproductos`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `elotitos`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `elotitos`.`usuarios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `correo` VARCHAR(300) NOT NULL,
  `nombre` VARCHAR(100) NOT NULL,
  `password` VARCHAR(15) NOT NULL,
  `telefono` BIGINT(10) NOT NULL,
  `administrador` TINYINT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `elotitos`.`compras`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `elotitos`.`compras` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `pago_total` FLOAT NOT NULL,
  `fecha` DATE NOT NULL,
  `cantidad_productos` INT NOT NULL,
  `idusuarios` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_compras_idusuarios_idx` (`idusuarios` ASC) VISIBLE,
  CONSTRAINT `fk_compras_idusuarios`
    FOREIGN KEY (`idusuarios`)
    REFERENCES `elotitos`.`usuarios` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `elotitos`.`compras_detalle`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `elotitos`.`compras_detalle` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `idcompras` INT NOT NULL,
  `idproductos` INT NOT NULL,
  `cantidad_productos` INT NOT NULL,
  `venta_total` FLOAT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_compras_productos_idcompras_idx` (`idcompras` ASC) VISIBLE,
  INDEX `fk_compras_productos_idproductos_idx` (`idproductos` ASC) VISIBLE,
  CONSTRAINT `fk_compras_detalle_idcompras`
    FOREIGN KEY (`idcompras`)
    REFERENCES `elotitos`.`compras` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_compras_detalle_idproductos`
    FOREIGN KEY (`idproductos`)
    REFERENCES `elotitos`.`productos` (`idproductos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
