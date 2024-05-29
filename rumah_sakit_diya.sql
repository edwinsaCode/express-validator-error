-- MySQL dump 10.13  Distrib 8.0.36, for Linux (x86_64)
--
-- Host: localhost    Database: rumah_sakit_diya
-- ------------------------------------------------------
-- Server version	8.0.36-0ubuntu0.22.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `antrian`
--

DROP TABLE IF EXISTS `antrian`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `antrian` (
  `id` int NOT NULL AUTO_INCREMENT,
  `no_antrian` int DEFAULT NULL,
  `registrasi_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `registrasi_id` (`registrasi_id`),
  CONSTRAINT `antrian_ibfk_1` FOREIGN KEY (`registrasi_id`) REFERENCES `registration` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `antrian`
--

LOCK TABLES `antrian` WRITE;
/*!40000 ALTER TABLE `antrian` DISABLE KEYS */;
INSERT INTO `antrian` VALUES (2,1,12),(3,2,13),(4,1,14),(5,2,15),(6,1,16),(7,1,17),(8,1,18),(9,1,19),(10,1,20),(11,1,21),(12,1,22),(13,1,23),(14,1,24),(15,1,25),(16,1,26),(17,1,27),(18,1,28),(19,1,29),(20,1,30),(21,1,31),(22,1,32),(23,2,33),(24,1,38),(25,1,39),(26,1,40),(27,1,41),(28,2,42),(29,NULL,43),(30,1,44),(31,1,45),(32,1,46),(33,1,47),(34,1,48);
/*!40000 ALTER TABLE `antrian` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `asuransi_pasien`
--

DROP TABLE IF EXISTS `asuransi_pasien`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `asuransi_pasien` (
  `id` int NOT NULL AUTO_INCREMENT,
  `no_asuransi` int DEFAULT NULL,
  `kelas` char(200) DEFAULT NULL,
  `pasien_id` int DEFAULT NULL,
  `asuransi_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `pasien_id` (`pasien_id`),
  KEY `asuransi_id` (`asuransi_id`),
  CONSTRAINT `asuransi_pasien_ibfk_1` FOREIGN KEY (`pasien_id`) REFERENCES `data_pasien` (`id`),
  CONSTRAINT `asuransi_pasien_ibfk_2` FOREIGN KEY (`asuransi_id`) REFERENCES `list_asuransi` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `asuransi_pasien`
--

LOCK TABLES `asuransi_pasien` WRITE;
/*!40000 ALTER TABLE `asuransi_pasien` DISABLE KEYS */;
INSERT INTO `asuransi_pasien` VALUES (1,1,'A',32,1),(2,222,'B',33,2),(3,222,'C',44,2);
/*!40000 ALTER TABLE `asuransi_pasien` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `daftar_petugas`
--

DROP TABLE IF EXISTS `daftar_petugas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `daftar_petugas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nama_petugas` char(200) DEFAULT NULL,
  `tupoksi` char(200) DEFAULT NULL,
  `poli_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `poli_id` (`poli_id`),
  CONSTRAINT `daftar_petugas_ibfk_1` FOREIGN KEY (`poli_id`) REFERENCES `jenis_poli` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `daftar_petugas`
--

LOCK TABLES `daftar_petugas` WRITE;
/*!40000 ALTER TABLE `daftar_petugas` DISABLE KEYS */;
INSERT INTO `daftar_petugas` VALUES (3,'Dr.Boyke','Penyakit Jiwa',12);
/*!40000 ALTER TABLE `daftar_petugas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `data_pasien`
--

DROP TABLE IF EXISTS `data_pasien`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `data_pasien` (
  `id` int NOT NULL AUTO_INCREMENT,
  `no_rm` int DEFAULT NULL,
  `nama` char(200) DEFAULT NULL,
  `nik` char(20) DEFAULT NULL,
  `alamat` varchar(500) DEFAULT NULL,
  `kontak` char(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `data_pasien`
--

LOCK TABLES `data_pasien` WRITE;
/*!40000 ALTER TABLE `data_pasien` DISABLE KEYS */;
INSERT INTO `data_pasien` VALUES (32,2400001,'jarjit','5203111502010008','rungkang','911'),(33,2400002,'yudi','5203111502010009','rungkang','911'),(37,2400006,NULL,NULL,NULL,NULL),(38,2400007,NULL,NULL,NULL,NULL),(39,2400008,NULL,NULL,NULL,NULL),(40,2400009,NULL,NULL,NULL,NULL),(41,2400010,'Budi','5203111502010007','teros','333'),(42,2400011,'','','',''),(43,2400012,'Budi','5203111502010001','Pringgajurang','111'),(44,2400013,'Budi','5203111502010001','Pringgajurang','111'),(45,2400014,'Budi','5203111502010007','teros','111'),(46,2400015,'Junet','5203111502010010','selong','999'),(47,2400016,'Junet','5203111502010010','selong','999'),(48,2400017,'Zainul','5203111502010011','selong','888'),(49,2400018,'Zainul','5203111502010011','Batu Alang','000'),(50,2400019,'Junet','5203111502010012','teros','123');
/*!40000 ALTER TABLE `data_pasien` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `generete_antrian`
--

DROP TABLE IF EXISTS `generete_antrian`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `generete_antrian` (
  `id` int NOT NULL AUTO_INCREMENT,
  `no` int DEFAULT NULL,
  `tanggal` date DEFAULT NULL,
  `poli_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `poli_id` (`poli_id`),
  CONSTRAINT `generete_antrian_ibfk_1` FOREIGN KEY (`poli_id`) REFERENCES `jenis_poli` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `generete_antrian`
--

LOCK TABLES `generete_antrian` WRITE;
/*!40000 ALTER TABLE `generete_antrian` DISABLE KEYS */;
INSERT INTO `generete_antrian` VALUES (4,1,'2024-06-01',2),(5,1,'2024-02-01',2),(6,1,NULL,NULL),(7,1,NULL,NULL),(8,1,NULL,NULL),(9,1,NULL,NULL),(10,1,NULL,NULL),(11,1,NULL,NULL),(12,1,NULL,NULL),(13,1,NULL,NULL),(14,1,NULL,NULL),(15,1,'2024-05-08',NULL),(16,1,'2024-05-08',NULL),(17,1,'2024-05-08',NULL),(18,1,'2024-05-07',NULL),(19,1,'2024-05-08',NULL),(20,1,'2024-05-08',2),(21,1,'2024-05-07',1),(22,3,'2024-05-09',1),(23,1,'2024-05-01',5),(24,1,'2024-05-10',12),(25,1,'2024-05-14',1),(26,1,'2024-05-01',1),(27,1,'2024-05-01',4),(28,1,'2024-02-01',NULL),(29,1,'2024-05-05',8),(30,1,NULL,NULL),(31,1,NULL,NULL),(32,1,NULL,NULL),(33,1,NULL,NULL),(34,1,'2024-05-16',9);
/*!40000 ALTER TABLE `generete_antrian` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `generete_rm`
--

DROP TABLE IF EXISTS `generete_rm`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `generete_rm` (
  `id` int NOT NULL AUTO_INCREMENT,
  `no` int DEFAULT NULL,
  `tahun` int DEFAULT NULL,
  `aktif` tinyint DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `generete_rm`
--

LOCK TABLES `generete_rm` WRITE;
/*!40000 ALTER TABLE `generete_rm` DISABLE KEYS */;
INSERT INTO `generete_rm` VALUES (16,19,2024,1);
/*!40000 ALTER TABLE `generete_rm` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jenis_poli`
--

DROP TABLE IF EXISTS `jenis_poli`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `jenis_poli` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nama_poli` char(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jenis_poli`
--

LOCK TABLES `jenis_poli` WRITE;
/*!40000 ALTER TABLE `jenis_poli` DISABLE KEYS */;
INSERT INTO `jenis_poli` VALUES (1,'THT'),(2,'POLIKLINIK OBGYN'),(3,'POLIKLINIK ANAK DAN TUMBUH KEMBANG'),(4,'POLIKLINIK PENYAKIT DALAM'),(5,'POLIKLINIK BEDAH UMUM'),(6,'POLIKLINIK BEDAH ONKOLOGI'),(7,'POLIKLINIK MATA'),(8,'POLIKLINIK SARAF'),(9,'POLIKLINIK JANTUNG'),(10,'POLIKLINIK BEDAH DIGISTIF'),(11,'POLI PARU'),(12,'POLIKLINIK JIWA'),(14,'Poli Umum');
/*!40000 ALTER TABLE `jenis_poli` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `kamar`
--

DROP TABLE IF EXISTS `kamar`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `kamar` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nama_kamar` char(200) DEFAULT NULL,
  `jumlah_bed` int DEFAULT NULL,
  `tarif_per_malam` int DEFAULT NULL,
  `list_asuransi_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `list_asuransi_id` (`list_asuransi_id`),
  CONSTRAINT `kamar_ibfk_1` FOREIGN KEY (`list_asuransi_id`) REFERENCES `list_asuransi` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kamar`
--

LOCK TABLES `kamar` WRITE;
/*!40000 ALTER TABLE `kamar` DISABLE KEYS */;
INSERT INTO `kamar` VALUES (1,'Otak Kokoq',7,250,1);
/*!40000 ALTER TABLE `kamar` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `list_asuransi`
--

DROP TABLE IF EXISTS `list_asuransi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `list_asuransi` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nama_asuransi` char(200) DEFAULT NULL,
  `aktif` tinyint DEFAULT NULL,
  `persen_ditanggung` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `list_asuransi`
--

LOCK TABLES `list_asuransi` WRITE;
/*!40000 ALTER TABLE `list_asuransi` DISABLE KEYS */;
INSERT INTO `list_asuransi` VALUES (1,'BPJS',1,100),(2,'Jasa Raharja',1,100);
/*!40000 ALTER TABLE `list_asuransi` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pembayaran`
--

DROP TABLE IF EXISTS `pembayaran`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pembayaran` (
  `id` int NOT NULL AUTO_INCREMENT,
  `total` int DEFAULT NULL,
  `status_paid` tinyint DEFAULT NULL,
  `registration_id` int DEFAULT NULL,
  `asuransi_pasien_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `registration_id` (`registration_id`),
  KEY `asuransi_pasien_id` (`asuransi_pasien_id`),
  CONSTRAINT `pembayaran_ibfk_1` FOREIGN KEY (`registration_id`) REFERENCES `registration` (`id`),
  CONSTRAINT `pembayaran_ibfk_2` FOREIGN KEY (`asuransi_pasien_id`) REFERENCES `registration` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pembayaran`
--

LOCK TABLES `pembayaran` WRITE;
/*!40000 ALTER TABLE `pembayaran` DISABLE KEYS */;
/*!40000 ALTER TABLE `pembayaran` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `piket_dokter`
--

DROP TABLE IF EXISTS `piket_dokter`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `piket_dokter` (
  `id` int NOT NULL AUTO_INCREMENT,
  `poli_id` int DEFAULT NULL,
  `dokter_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `poli_id` (`poli_id`),
  KEY `dokter_id` (`dokter_id`),
  CONSTRAINT `piket_dokter_ibfk_1` FOREIGN KEY (`poli_id`) REFERENCES `jenis_poli` (`id`),
  CONSTRAINT `piket_dokter_ibfk_2` FOREIGN KEY (`dokter_id`) REFERENCES `daftar_petugas` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `piket_dokter`
--

LOCK TABLES `piket_dokter` WRITE;
/*!40000 ALTER TABLE `piket_dokter` DISABLE KEYS */;
/*!40000 ALTER TABLE `piket_dokter` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `registration`
--

DROP TABLE IF EXISTS `registration`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `registration` (
  `id` int NOT NULL AUTO_INCREMENT,
  `asuransi` tinyint DEFAULT NULL,
  `pasien_id` int DEFAULT NULL,
  `poli_id` int DEFAULT NULL,
  `asuransi_pasien_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `pasien_id` (`pasien_id`),
  KEY `poli_id` (`poli_id`),
  KEY `asuransi_pasien_id` (`asuransi_pasien_id`),
  CONSTRAINT `registration_ibfk_1` FOREIGN KEY (`pasien_id`) REFERENCES `data_pasien` (`id`),
  CONSTRAINT `registration_ibfk_2` FOREIGN KEY (`poli_id`) REFERENCES `jenis_poli` (`id`),
  CONSTRAINT `registration_ibfk_3` FOREIGN KEY (`asuransi_pasien_id`) REFERENCES `asuransi_pasien` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `registration`
--

LOCK TABLES `registration` WRITE;
/*!40000 ALTER TABLE `registration` DISABLE KEYS */;
INSERT INTO `registration` VALUES (12,0,32,2,NULL),(13,0,32,2,NULL),(14,0,32,2,NULL),(15,0,32,2,NULL),(16,NULL,NULL,NULL,NULL),(17,NULL,NULL,NULL,NULL),(18,NULL,NULL,NULL,NULL),(19,NULL,NULL,NULL,NULL),(20,NULL,NULL,NULL,NULL),(21,NULL,NULL,NULL,NULL),(22,NULL,NULL,NULL,NULL),(23,NULL,NULL,NULL,NULL),(24,NULL,NULL,NULL,NULL),(25,NULL,NULL,NULL,NULL),(26,NULL,NULL,NULL,NULL),(27,NULL,NULL,NULL,NULL),(28,NULL,NULL,NULL,NULL),(29,NULL,NULL,NULL,NULL),(30,1,32,2,NULL),(31,1,32,1,NULL),(32,1,33,1,NULL),(33,1,33,1,NULL),(38,1,32,1,1),(39,1,33,4,2),(40,NULL,NULL,NULL,NULL),(41,1,32,8,1),(42,1,32,8,1),(43,NULL,32,NULL,NULL),(44,NULL,NULL,NULL,NULL),(45,NULL,NULL,NULL,NULL),(46,NULL,NULL,NULL,NULL),(47,NULL,NULL,NULL,NULL),(48,1,32,9,2);
/*!40000 ALTER TABLE `registration` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rekam_medis`
--

DROP TABLE IF EXISTS `rekam_medis`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rekam_medis` (
  `id` int NOT NULL AUTO_INCREMENT,
  `deskripsi` varchar(500) DEFAULT NULL,
  `tindakan` char(1) DEFAULT NULL,
  `registrasi_id` int DEFAULT NULL,
  `kamar_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `registrasi_id` (`registrasi_id`),
  KEY `kamar_id` (`kamar_id`),
  CONSTRAINT `rekam_medis_ibfk_1` FOREIGN KEY (`registrasi_id`) REFERENCES `registration` (`id`),
  CONSTRAINT `rekam_medis_ibfk_2` FOREIGN KEY (`kamar_id`) REFERENCES `kamar` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rekam_medis`
--

LOCK TABLES `rekam_medis` WRITE;
/*!40000 ALTER TABLE `rekam_medis` DISABLE KEYS */;
/*!40000 ALTER TABLE `rekam_medis` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tarif_umum`
--

DROP TABLE IF EXISTS `tarif_umum`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tarif_umum` (
  `id` int NOT NULL AUTO_INCREMENT,
  `jumlah_hari` int DEFAULT NULL,
  `kamar_id` int DEFAULT NULL,
  `poli_id` int DEFAULT NULL,
  `total_bayar` int DEFAULT NULL,
  `rekam_medis_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `kamar_id` (`kamar_id`),
  KEY `poli_id` (`poli_id`),
  KEY `hasil_pemeriksaan_id` (`rekam_medis_id`),
  CONSTRAINT `tarif_umum_ibfk_1` FOREIGN KEY (`kamar_id`) REFERENCES `kamar` (`id`),
  CONSTRAINT `tarif_umum_ibfk_2` FOREIGN KEY (`poli_id`) REFERENCES `jenis_poli` (`id`),
  CONSTRAINT `tarif_umum_ibfk_3` FOREIGN KEY (`rekam_medis_id`) REFERENCES `rekam_medis` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tarif_umum`
--

LOCK TABLES `tarif_umum` WRITE;
/*!40000 ALTER TABLE `tarif_umum` DISABLE KEYS */;
/*!40000 ALTER TABLE `tarif_umum` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-22  9:54:20
