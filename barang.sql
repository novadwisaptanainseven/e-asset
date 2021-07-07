-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 07, 2021 at 02:35 PM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `e_asset_api`
--

-- --------------------------------------------------------

--
-- Table structure for table `barang`
--

CREATE TABLE `barang` (
  `id_barang` int(11) NOT NULL,
  `no_barang` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nama_barang` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `merk` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `no_seri_pabrik` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ukuran` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `bahan` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tahun` int(11) DEFAULT NULL,
  `harga` int(11) DEFAULT NULL,
  `keterangan` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `foto` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL,
  `deleted` tinyint(1) NOT NULL DEFAULT 0,
  `user` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `file` text COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `barang`
--

INSERT INTO `barang` (`id_barang`, `no_barang`, `nama_barang`, `merk`, `no_seri_pabrik`, `ukuran`, `bahan`, `tahun`, `harga`, `keterangan`, `foto`, `createdAt`, `updatedAt`, `deleted`, `user`, `file`) VALUES
(1, '111', 'Laptop', 'MSI', '10-ab-10-cd', '10x10', 'Karbon', 2021, 8600900, 'MSI MODERN 14 B10MW - 466ID I3-10110U SSD 256GB CARBON GRAY', 'public\\uploads\\barang\\1621667317118-laptop1.png', '2021-05-22 07:08:37.288', '2021-05-22 07:08:37.288', 0, '', 'public\\uploads\\barang\\1621667317113-Ini file pdf.pdf'),
(2, '112', 'Laptop', 'Dell XPS', '10-ab-10-cd', '10x10', 'Alumunium', 2021, 47225000, 'DELL XPS 15 (Core i7-10750H)', 'public\\uploads\\barang\\1621667619467-laptop2.jpg', '2021-05-22 07:13:39.481', '2021-05-22 07:13:39.482', 0, '', 'public\\uploads\\barang\\1621667619463-Ini file pdf.pdf'),
(3, '113', 'Laptop', 'Lenovo', '10-ab-10-cd', '10x10', 'Alumunium', 2021, 27026998, 'LENOVO LEGION 5P 15IMH05H - 6KID I7-10870H SSD 512GB RTX2060 144HZ\n', 'public\\uploads\\barang\\1621667774152-laptop3.png', '2021-05-22 07:16:14.163', '2021-05-22 07:16:14.164', 0, '', 'public\\uploads\\barang\\1621667774149-Ini file pdf.pdf');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `barang`
--
ALTER TABLE `barang`
  ADD PRIMARY KEY (`id_barang`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `barang`
--
ALTER TABLE `barang`
  MODIFY `id_barang` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
