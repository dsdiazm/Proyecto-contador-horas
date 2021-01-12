-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 12-01-2021 a las 01:00:50
-- Versión del servidor: 10.4.8-MariaDB
-- Versión de PHP: 7.1.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `horas`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleadoop2`
--

CREATE TABLE `empleadoop2` (
  `nombre_empleado` varchar(42) NOT NULL,
  `hdiu_emp` int(11) NOT NULL,
  `hnoc_emp` int(11) NOT NULL,
  `hdom_emp` int(11) NOT NULL,
  `año_emp` int(11) NOT NULL,
  `sema_emp` int(11) NOT NULL,
  `hdiuex_emp` int(11) NOT NULL,
  `hnocex_emp` int(11) NOT NULL,
  `hdomex_emp` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `servicio`
--

CREATE TABLE `servicio` (
  `id_servicio` varchar(42) NOT NULL COMMENT 'id del servicio',
  `id_Empleado` varchar(42) NOT NULL COMMENT 'nombre del  operador',
  `Tini_ser` datetime NOT NULL COMMENT 'hora de inicio',
  `Tfin_ser` datetime NOT NULL DEFAULT current_timestamp() COMMENT 'hora de finalizacion'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `servicio`
--

INSERT INTO `servicio` (`id_servicio`, `id_Empleado`, `Tini_ser`, `Tfin_ser`) VALUES
('', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('DQWUNQW', 'vieja informacioncwqcqw', '2021-01-12 03:28:00', '2021-01-11 03:28:00'),
('DQWUNQW', 'vieja informacioncwqcqw', '2021-01-12 05:28:00', '2021-01-12 03:28:00'),
('DQWUNQW', 'vieja informacioncwqcqw', '2021-01-12 07:33:00', '2021-01-12 05:32:00'),
('usuario1', 'dqwdqw', '2021-01-12 18:57:00', '2021-01-12 17:57:00'),
('EK202010149633', 'usuario1', '2021-01-11 18:00:00', '2021-01-11 21:03:00'),
('EK202010149631', 'usuario1', '2021-01-11 20:00:00', '2021-01-12 13:03:00'),
('EK202010149631', 'usuario1', '2021-01-11 09:00:00', '2021-01-12 13:03:00'),
('EK202010149631', 'usuario1', '2021-01-11 09:00:00', '2021-01-11 13:03:00'),
('EK202010149631', 'usuario1', '2021-01-13 09:00:00', '2021-01-13 14:03:00'),
('EK202010149631', 'usuario1', '2021-01-13 14:03:00', '2021-01-13 16:03:00'),
('EK202010149631', 'usuario1', '2021-01-13 14:03:00', '2021-01-13 16:03:00');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
