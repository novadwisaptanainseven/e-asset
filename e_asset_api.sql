-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 07, 2021 at 02:48 PM
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
  `kode_barang` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nama_barang` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `no_register` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `merk` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `no_seri_pabrik` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ukuran` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `bahan` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tahun_pembelian` int(11) DEFAULT NULL,
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

INSERT INTO `barang` (`id_barang`, `no_barang`, `kode_barang`, `nama_barang`, `no_register`, `merk`, `no_seri_pabrik`, `ukuran`, `bahan`, `tahun_pembelian`, `harga`, `keterangan`, `foto`, `createdAt`, `updatedAt`, `deleted`, `user`, `file`) VALUES
(1, '111', '', 'Laptop', '', 'MSI', '10-ab-10-cd', '10x10', 'Karbon', 2021, 8600900, 'MSI MODERN 14 B10MW - 466ID I3-10110U SSD 256GB CARBON GRAY', 'public\\uploads\\barang\\1621667317118-laptop1.png', '2021-05-22 07:08:37.288', '2021-05-22 07:08:37.288', 0, '', 'public\\uploads\\barang\\1621667317113-Ini file pdf.pdf'),
(2, '112', '', 'Laptop', '', 'Dell XPS', '10-ab-10-cd', '10x10', 'Alumunium', 2021, 47225000, 'DELL XPS 15 (Core i7-10750H)', 'public\\uploads\\barang\\1621667619467-laptop2.jpg', '2021-05-22 07:13:39.481', '2021-05-22 07:13:39.482', 0, '', 'public\\uploads\\barang\\1621667619463-Ini file pdf.pdf'),
(3, '113', '', 'Laptop', '', 'Lenovo', '10-ab-10-cd', '10x10', 'Alumunium', 2021, 27026998, 'LENOVO LEGION 5P 15IMH05H - 6KID I7-10870H SSD 512GB RTX2060 144HZ\n', 'public\\uploads\\barang\\1621667774152-laptop3.png', '2021-05-22 07:16:14.163', '2021-05-22 07:16:14.164', 0, '', 'public\\uploads\\barang\\1621667774149-Ini file pdf.pdf');

-- --------------------------------------------------------

--
-- Table structure for table `barang_detail`
--

CREATE TABLE `barang_detail` (
  `id_barang_detail` int(11) NOT NULL,
  `id_barang` int(11) NOT NULL,
  `id_bidang` int(11) NOT NULL,
  `jumlah_baik` int(11) NOT NULL,
  `jumlah_rusak` int(11) NOT NULL,
  `jumlah_rusak_ringan` int(11) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL,
  `deleted` tinyint(1) NOT NULL DEFAULT 0,
  `user` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `jumlah_total` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `barang_detail`
--

INSERT INTO `barang_detail` (`id_barang_detail`, `id_barang`, `id_bidang`, `jumlah_baik`, `jumlah_rusak`, `jumlah_rusak_ringan`, `createdAt`, `updatedAt`, `deleted`, `user`, `jumlah_total`) VALUES
(1, 1, 1, 20, 20, 20, '2021-05-22 07:08:37.411', '2021-05-22 07:08:37.412', 0, NULL, 60),
(2, 1, 2, 20, 20, 20, '2021-05-22 07:08:37.411', '2021-05-22 07:08:37.412', 0, NULL, 60),
(3, 1, 3, 20, 20, 20, '2021-05-22 07:08:37.411', '2021-05-22 07:08:37.412', 0, NULL, 60),
(4, 1, 8, 20, 20, 20, '2021-05-22 07:08:37.411', '2021-05-22 07:08:37.412', 0, NULL, 60),
(5, 2, 1, 20, 20, 20, '2021-05-22 07:13:39.559', '2021-05-22 08:16:36.604', 1, NULL, 60),
(6, 2, 2, 20, 20, 20, '2021-05-22 07:13:39.559', '2021-05-22 07:13:39.559', 0, NULL, 60),
(7, 2, 3, 20, 20, 20, '2021-05-22 07:13:39.559', '2021-05-22 07:13:39.559', 0, NULL, 60),
(8, 2, 8, 20, 20, 20, '2021-05-22 07:13:39.559', '2021-05-22 07:13:39.559', 0, NULL, 60),
(9, 3, 1, 20, 20, 20, '2021-05-22 07:16:14.318', '2021-05-22 07:16:14.318', 0, NULL, 60),
(10, 3, 2, 20, 20, 20, '2021-05-22 07:16:14.318', '2021-05-22 07:16:14.318', 0, NULL, 60),
(11, 3, 3, 20, 20, 20, '2021-05-22 07:16:14.318', '2021-05-22 08:13:31.902', 1, NULL, 60),
(12, 3, 8, 20, 20, 20, '2021-05-22 07:16:14.318', '2021-05-22 08:04:18.247', 1, NULL, 60),
(13, 3, 8, 10, 10, 10, '2021-05-22 08:06:48.037', '2021-05-22 08:06:48.037', 0, NULL, 30),
(14, 3, 3, 10, 10, 10, '2021-05-22 08:13:47.489', '2021-05-22 08:16:13.324', 1, NULL, 30),
(15, 3, 3, 10, 10, 10, '2021-05-22 08:16:22.855', '2021-05-22 08:16:22.856', 0, NULL, 30),
(16, 2, 1, 20, 20, 20, '2021-05-22 08:17:02.704', '2021-05-22 08:17:02.705', 0, NULL, 60);

-- --------------------------------------------------------

--
-- Table structure for table `barang_masuk`
--

CREATE TABLE `barang_masuk` (
  `id_barang_masuk` int(11) NOT NULL,
  `id_barang` int(11) NOT NULL,
  `id_barang_detail` int(11) NOT NULL,
  `jumlah_baik` int(11) NOT NULL,
  `jumlah_rusak` int(11) NOT NULL,
  `jumlah_rusak_ringan` int(11) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL,
  `deleted` tinyint(1) NOT NULL DEFAULT 0,
  `user` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `keterangan` text COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `barang_pindah`
--

CREATE TABLE `barang_pindah` (
  `id_barang_pindah` int(11) NOT NULL,
  `keterangan` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL,
  `deleted` tinyint(1) NOT NULL DEFAULT 0,
  `user` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `jumlah_baik` int(11) NOT NULL,
  `jumlah_rusak` int(11) NOT NULL,
  `jumlah_rusak_ringan` int(11) NOT NULL,
  `id_barang` int(11) NOT NULL,
  `dari_barang_detail` int(11) NOT NULL,
  `ke_barang_detail` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `kendaraan`
--

CREATE TABLE `kendaraan` (
  `id_kendaraan` int(11) NOT NULL,
  `id_pegawai` int(11) NOT NULL,
  `merk` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tipe` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cc` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `warna` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `rangka` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mesin` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pembuatan` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pembelian` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `no_polisi` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `bpkb` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `stnk` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `harga` int(11) NOT NULL,
  `biaya_stnk` int(11) NOT NULL,
  `keterangan` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `foto` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `file` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL,
  `deleted` tinyint(1) NOT NULL DEFAULT 0,
  `user` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `kendaraan_pindah`
--

CREATE TABLE `kendaraan_pindah` (
  `id_kendaraan_pindah` int(11) NOT NULL,
  `id_kendaraan` int(11) NOT NULL,
  `tanggal` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `dari` int(11) NOT NULL,
  `ke` int(11) NOT NULL,
  `keterangan` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL,
  `deleted` tinyint(1) NOT NULL DEFAULT 0,
  `user` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id_user` int(11) NOT NULL,
  `username` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL,
  `deleted` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id_user`, `username`, `password`, `createdAt`, `updatedAt`, `deleted`) VALUES
(1, 'admin', '$2b$10$Tna36.vxoIxz3XB91TLOV.SYP8i9IHlr9anAMMUc2DwHwaZPzF1di', '2021-05-22 06:58:37.553', '2021-05-22 06:58:37.553', 0);

-- --------------------------------------------------------

--
-- Table structure for table `_prisma_migrations`
--

CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `applied_steps_count` int(10) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('14c7f6f2-861b-4a8c-8cc0-789c7d946ea0', '23cb841914cd8bb144b72cf28729c791a86699b9a3dcac94f674bc7834d8bda7', '2021-05-22 06:24:10.732', '20210408080809_edit_relation_barang_pindah_mark2', NULL, NULL, '2021-05-22 06:24:10.499', 1),
('1e994787-7aa1-434c-b644-6ae1f381dbbe', 'd567ac87015d6a4609943e5351c15dfbbc14ef35df52f28d54eb8dacf7b9cf', '2021-05-22 06:24:10.418', '20210408075228_edit_relation_barang_pindah', NULL, NULL, '2021-05-22 06:24:08.235', 1),
('2b8512cb-be92-4e99-b797-333423dc4de6', 'b4ba22cf462e3968ff8821e3f5bc2744847ca117ac7c02dd83df55564181d24', '2021-05-22 06:24:12.235', '20210408083442_edit_relation_barang_pindah_mk_iii', NULL, NULL, '2021-05-22 06:24:10.787', 1),
('2dd898ed-fb67-4259-9324-c8f6045bac65', '5e6e50bf2081d6c992ddbd3c2a2fc91a2469cd1a7165b8189819e8b3efbe', '2021-05-22 06:24:07.821', '20210407063536_rename_barang_pindah_dari_ke', NULL, NULL, '2021-05-22 06:24:07.509', 1),
('340f5df3-d7c3-4b55-b804-f8dae5b804eb', 'c5e89cd8b83857db185c917534937f64d8591d3a5a8af96377c2c6e2be9699f', '2021-05-22 06:24:13.350', '20210421034243_add_jumlah_barang_detail', NULL, NULL, '2021-05-22 06:24:13.157', 1),
('387d11d6-b363-4d44-847d-17dfc1849005', '682455807439a4cf5ac1daebacdb695a8ac219d16294551416288f7779cdb5f', '2021-05-22 06:24:04.889', '20210323025529_add_user', NULL, NULL, '2021-05-22 06:23:59.915', 1),
('43a8d139-67e3-4d18-a1cb-618f6e8c7864', '75367e737f59ba2095de75cefb56a9d64b1a1ca185b2a6ddd4afe5e5940946f', '2021-05-22 06:24:07.463', '20210407041118_add_keadaan_barang_on_barang_pindah', NULL, NULL, '2021-05-22 06:24:06.866', 1),
('5525f4c4-f89a-4bfd-8119-7747ab64f7c4', 'e2b69beb442f87885cf3940f15c4f1a437a5ac357617b7c41c3cc1f45a2914', '2021-05-22 06:23:59.856', '20210322043416_init', NULL, NULL, '2021-05-22 06:23:55.200', 1),
('5f6282d1-7a5f-4722-b78f-5d8bf295133f', 'bc648da48e5736775be718fe340bf601a1b9a1c9a69b8aa5b46be4b97ea7168', '2021-05-22 06:24:17.150', '20210423085833_change_keterangan_barang_masuk', NULL, NULL, '2021-05-22 06:24:16.952', 1),
('65148185-68d0-4ec9-af1b-d7dddd9dffed', 'bb27d75963b653a137e6c4e8d2639d8013e40f44a397ea885a33d7de01c', '2021-05-22 06:24:08.155', '20210407071006_redesign_pindah_barang_schema', NULL, NULL, '2021-05-22 06:24:07.885', 1),
('7124b10f-097b-4383-a6ff-30391b0753e3', 'adf04bc2de93f99ed8042faaeaaec727c52d0ae71d0ee98f04488cf8b9bec9', '2021-05-22 06:24:05.994', '20210323032554_username_uniqued', NULL, NULL, '2021-05-22 06:24:04.909', 1),
('bd8a2b52-db33-4653-b96d-6df50c658bdd', '6b2c876c9b3bad08914dc84fcd5ee5f2881af2bc16913027e96f065a0cf', '2021-05-22 06:24:15.197', '20210423080844_add_barang_masuk_and_change_barang', NULL, NULL, '2021-05-22 06:24:13.406', 1),
('bdb1a30e-f8e9-40da-9349-63b59759a54f', '7f6dc013933b5af8a21182776abff8a4b8821667b6f679853903ef079eb61f1', '2021-05-22 06:24:06.813', '20210325060122_non_required_field_added', NULL, NULL, '2021-05-22 06:24:06.006', 1),
('e05617c4-106f-4ceb-8bd5-fc211a738d6d', '3e2add2ce2394232fdc5c0a0616a59a171a7ccf9853bbe677c1984845ed394', '2021-05-22 06:24:16.931', '20210423081235_add_relation_barang_masuk', NULL, NULL, '2021-05-22 06:24:15.240', 1),
('ea086d63-18b4-405d-b394-009d8ed3920f', '8b7675b9fdf85325f913969aa792b010bc9a6e66886356bcb06cd8918a3cd6', '2021-05-22 06:24:13.093', '20210413063620_kendaraan_pindah_re_schema', NULL, NULL, '2021-05-22 06:24:12.265', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `barang`
--
ALTER TABLE `barang`
  ADD PRIMARY KEY (`id_barang`);

--
-- Indexes for table `barang_detail`
--
ALTER TABLE `barang_detail`
  ADD PRIMARY KEY (`id_barang_detail`),
  ADD KEY `id_barang` (`id_barang`);

--
-- Indexes for table `barang_masuk`
--
ALTER TABLE `barang_masuk`
  ADD PRIMARY KEY (`id_barang_masuk`),
  ADD KEY `id_barang` (`id_barang`),
  ADD KEY `id_barang_detail` (`id_barang_detail`);

--
-- Indexes for table `barang_pindah`
--
ALTER TABLE `barang_pindah`
  ADD PRIMARY KEY (`id_barang_pindah`),
  ADD KEY `id_barang` (`id_barang`),
  ADD KEY `dari_barang_detail` (`dari_barang_detail`),
  ADD KEY `ke_barang_detail` (`ke_barang_detail`);

--
-- Indexes for table `kendaraan`
--
ALTER TABLE `kendaraan`
  ADD PRIMARY KEY (`id_kendaraan`);

--
-- Indexes for table `kendaraan_pindah`
--
ALTER TABLE `kendaraan_pindah`
  ADD PRIMARY KEY (`id_kendaraan_pindah`),
  ADD KEY `id_kendaraan` (`id_kendaraan`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id_user`),
  ADD UNIQUE KEY `user.username_unique` (`username`);

--
-- Indexes for table `_prisma_migrations`
--
ALTER TABLE `_prisma_migrations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `barang`
--
ALTER TABLE `barang`
  MODIFY `id_barang` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `barang_detail`
--
ALTER TABLE `barang_detail`
  MODIFY `id_barang_detail` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `barang_masuk`
--
ALTER TABLE `barang_masuk`
  MODIFY `id_barang_masuk` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `barang_pindah`
--
ALTER TABLE `barang_pindah`
  MODIFY `id_barang_pindah` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `kendaraan`
--
ALTER TABLE `kendaraan`
  MODIFY `id_kendaraan` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `kendaraan_pindah`
--
ALTER TABLE `kendaraan_pindah`
  MODIFY `id_kendaraan_pindah` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `barang_detail`
--
ALTER TABLE `barang_detail`
  ADD CONSTRAINT `barang_detail_ibfk_1` FOREIGN KEY (`id_barang`) REFERENCES `barang` (`id_barang`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `barang_masuk`
--
ALTER TABLE `barang_masuk`
  ADD CONSTRAINT `barang_masuk_ibfk_1` FOREIGN KEY (`id_barang`) REFERENCES `barang` (`id_barang`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `barang_masuk_ibfk_2` FOREIGN KEY (`id_barang_detail`) REFERENCES `barang_detail` (`id_barang_detail`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `barang_pindah`
--
ALTER TABLE `barang_pindah`
  ADD CONSTRAINT `barang_pindah_ibfk_1` FOREIGN KEY (`id_barang`) REFERENCES `barang` (`id_barang`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `barang_pindah_ibfk_2` FOREIGN KEY (`dari_barang_detail`) REFERENCES `barang_detail` (`id_barang_detail`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `barang_pindah_ibfk_3` FOREIGN KEY (`ke_barang_detail`) REFERENCES `barang_detail` (`id_barang_detail`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `kendaraan_pindah`
--
ALTER TABLE `kendaraan_pindah`
  ADD CONSTRAINT `kendaraan_pindah_ibfk_1` FOREIGN KEY (`id_kendaraan`) REFERENCES `kendaraan` (`id_kendaraan`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
