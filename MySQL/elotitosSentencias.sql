use elotitos;

INSERT INTO usuarios (correo, nombre, password, telefono, administrador) 
VALUES ('itzelgps99@gmail.com', 'Itzel Guadalupe', 'Itzelgps99_', 7551308222, 1),
('elotestoluca@gmail.com', 'Gina Molina', 'GinaM99_', 7221953594,1),
('mc.michellcazares@gmail.com', 'Michell Cázares', 'Michell123_', 3121346641, 0),
('susoto0916@gmail.com', 'Susana Soto', 'Susana09_', 5543029213,0),
('pamela.geofisica@gmail.com', 'Brenda Juarez', 'Juroju_12', 5522974619,0);

INSERT INTO productos (nombre, descripcion, precio, imagen) 
VALUES ('Elotes preparado', 'Elote preparado con mayonesa, queso, chile, limón y sal. Elote de grano pequeño (Tehuacán), por temporada.',25, 'https://michell-cazares.github.io/CH29_FrontEnd_E-commerce/src/img/fotosProductos/elotePreparadoTehuacan.png'),
('Elote preparado', 'Elote preparado con mayonesa, queso, chile, limón y sal. Elote de grano grande (Cacahuazintle), por temporada.', 35,'https://michell-cazares.github.io/CH29_FrontEnd_E-commerce/src/img/fotosProductos/elotePreparadoCahuazintle.png'),
('Elote enchilado', 'Elote con chile de la casa (jugo de limón con chilito). Elote de grano pequeño (Tehuacán), por temporada.', 25,'https://michell-cazares.github.io/CH29_FrontEnd_E-commerce/src/img/fotosProductos/eloteEnchiladoTehuacan.png'), 
('Elote enchilado', 'Elote con chile de la casa (jugo de limón con chilito).Elote de grano grande (Cacahuazintle), por temporada.', 35,'https://michell-cazares.github.io/CH29_FrontEnd_E-commerce/src/img/fotosProductos/eloteEnchiladoCacahuazintle.png'),
('Esquite natural preparado chico', 'Esquite hervido preparado con mayonesa, queso, chile, limón y sal. Vaso chico.', 25,'https://michell-cazares.github.io/CH29_FrontEnd_E-commerce/src/img/fotosProductos/esquiteHervidoChico.png'),
('Esquite natural preparado grande', 'Esquite hervido preparado con mayonesa, queso, chile, limón y sal. Vaso grande.', 30,'https://michell-cazares.github.io/CH29_FrontEnd_E-commerce/src/img/fotosProductos/esquiteHervidoGrande.png'),
('Esquite asado preparado chico', 'Elote con chile de la casa (jugo de limón con chilito). Elote de grano grande (cacahuazintle), por temporada.', 25,'https://michell-cazares.github.io/CH29_FrontEnd_E-commerce/src/img/fotosProductos/esquiteAsadoChico.JPG'),
('Esquite asado preparado grande', 'Esquite asado con chile de arbol, epazote y jalapeño, preparado con mayonesa, queso, chile, limón y sal.', 30,'https://michell-cazares.github.io/CH29_FrontEnd_E-commerce/src/img/fotosProductos/esquiteAsadoGrande.png'),
('DoriEsquites', 'Las papitas de su gusto, con esquite mayonesa, queso de nachos, queso blanco, sal, limón, y la salsa que guste.', 50, 'https://michell-cazares.github.io/CH29_FrontEnd_E-commerce/src/img/fotosProductos/doriEsquite.png' ), 
('Maruchan Esquites',' Las papitas de su gusto con Maruchan y con esquite, mayonesa, queso de nachos, queso blanco, sal, limón, y la salsa que guste', 70, 'https://michell-cazares.github.io/CH29_FrontEnd_E-commerce/src/img/fotosProductos/maruchanEsquites.png' );

INSERT INTO compras (pago_total,fecha,cantidad_productos,idusuarios) 
VALUES (75,curdate(),3,1),
(100,curdate(),2,3),
(80,curdate(),2,5),
(150,curdate(),3,4),
(75,curdate(),3,1);

INSERT INTO compras_detalle (idcompras, idproductos, cantidad_productos, venta_total)
VALUES(1,1,1,25),
(1,3,2,50),
(2,10,1,70),
(2,6,1,30),
(3,8,1,30),
(3,9,1,50),
(4,10,1,70),
(4,9,1,50),
(4,8,1,30),
(5,1,1,25),
(5,3,2,50);